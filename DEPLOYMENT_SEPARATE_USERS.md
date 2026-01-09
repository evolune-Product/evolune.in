# Deployment with Separate Users (Best Security Practice)

## Why Separate Users?

**Current Setup:**
- `appuser` → FluxTest (fluxtest.evolune.in)

**New Setup:**
- `appuser` → FluxTest (fluxtest.evolune.in)
- `portfoliouser` → Portfolio (evolune.in)

## Benefits of Separate Users

✅ **Better Security**: If one app is compromised, the other is protected
✅ **Isolation**: Each app has its own environment, files, and permissions
✅ **No Conflicts**: Separate Node versions, packages, and configurations
✅ **Easier Management**: Clear separation of responsibilities
✅ **Industry Standard**: How production servers handle multiple apps

---

## Step 1: Create New User for Portfolio

```bash
# As root
ssh root@YOUR_SERVER_IP

# Create new user
adduser portfoliouser

# Set password when prompted
# You can skip other details (press Enter)

# Give sudo access (optional, for debugging)
usermod -aG sudo portfoliouser
```

---

## Step 2: Setup Directory Structure

```bash
# Switch to portfoliouser
su - portfoliouser

# Check you're in the right place
pwd
# Should show: /home/portfoliouser

# This user's home is automatically created
ls -la
```

---

## Step 3: Install Node.js for portfoliouser (Optional)

If you want separate Node versions per user:

```bash
# As portfoliouser
su - portfoliouser

# Install nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Load nvm
source ~/.bashrc

# Install Node.js
nvm install 20
nvm use 20

# Verify
node --version
npm --version
```

**Or use system-wide Node** (simpler):
```bash
# Node is already installed globally, just use it
node --version
```

---

## Step 4: Clone/Upload Portfolio

### Option A: Clone from Git

```bash
# As portfoliouser
su - portfoliouser
cd ~  # This is /home/portfoliouser

# Clone your repository
git clone https://github.com/YOUR_USERNAME/portfolio.git evolune.in

cd evolune.in
```

### Option B: Upload via SCP

From your **local machine**:

```bash
# Create directory first
ssh root@YOUR_SERVER_IP "mkdir -p /home/portfoliouser/evolune.in && chown portfoliouser:portfoliouser /home/portfoliouser/evolune.in"

# Upload files
scp -r D:\Evolune-portfolio\portfolio/* portfoliouser@YOUR_SERVER_IP:/home/portfoliouser/evolune.in/
```

---

## Step 5: Build the Project

```bash
# As portfoliouser
su - portfoliouser
cd /home/portfoliouser/evolune.in

# Install dependencies
npm install

# Build production version
npm run build
```

This creates `/home/portfoliouser/evolune.in/dist/`

---

## Step 6: Set Proper Permissions

```bash
# As root
exit  # Exit from portfoliouser

# Set ownership
chown -R portfoliouser:portfoliouser /home/portfoliouser/evolune.in

# Set permissions so Nginx can read files
chmod 755 /home/portfoliouser
chmod 755 /home/portfoliouser/evolune.in
chmod -R 755 /home/portfoliouser/evolune.in/dist

# Allow www-data (nginx) to access
chmod o+x /home/portfoliouser
```

---

## Step 7: Configure Nginx

```bash
# As root
nano /etc/nginx/sites-available/evolune.in
```

Add this configuration:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name evolune.in www.evolune.in;

    root /home/portfoliouser/evolune.in/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/json;
}
```

Enable the site:

```bash
ln -s /etc/nginx/sites-available/evolune.in /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

---

## Step 8: Install SSL Certificate

```bash
# As root
certbot --nginx -d evolune.in -d www.evolune.in
```

---

## Final Directory Structure

```
Server Setup:
/home/
├── appuser/
│   └── fluxtest.evolune.in/     # FluxTest (existing)
│       ├── dist/
│       ├── node_modules/
│       ├── src/
│       └── package.json
│
└── portfoliouser/
    └── evolune.in/               # Portfolio (new)
        ├── dist/
        ├── node_modules/
        ├── src/
        └── package.json
```

**Perfect Isolation!** Each user has their own:
- Home directory
- Files and permissions
- npm packages
- Environment variables
- Process ownership

---

## Managing Both Users

### Deploy Portfolio:

```bash
# Connect as root
ssh root@YOUR_SERVER_IP

# Switch to portfoliouser
su - portfoliouser

# Update and build
cd ~/evolune.in
git pull origin main
npm install
npm run build

# Exit to root and reload Nginx
exit
systemctl reload nginx
```

### Deploy FluxTest:

```bash
# Connect as root
ssh root@YOUR_SERVER_IP

# Switch to appuser
su - appuser

# Update and build
cd ~/fluxtest.evolune.in
git pull origin main
npm install
npm run build

# If using PM2
pm2 restart fluxtest

# Or exit and reload Nginx
exit
systemctl reload nginx
```

---

## Quick Switch Commands

```bash
# Switch to portfoliouser
su - portfoliouser

# Switch to appuser
su - appuser

# Return to root
exit

# Check current user
whoami
```

---

## SSH Access for portfoliouser

If you want to SSH directly as portfoliouser:

```bash
# As root
passwd portfoliouser  # Set a password

# Setup SSH key (optional but recommended)
su - portfoliouser
mkdir -p ~/.ssh
chmod 700 ~/.ssh
nano ~/.ssh/authorized_keys
# Paste your public key
chmod 600 ~/.ssh/authorized_keys
```

Now you can SSH directly:

```bash
ssh portfoliouser@YOUR_SERVER_IP
```

---

## Deployment Scripts for Each User

### Portfolio Deployment Script

```bash
# As portfoliouser
nano ~/deploy-portfolio.sh
```

Add:

```bash
#!/bin/bash
set -e

echo "🚀 Deploying Portfolio (evolune.in)..."
cd ~/evolune.in

echo "📦 Pulling latest changes..."
git pull origin main

echo "📦 Installing dependencies..."
npm install

echo "🔨 Building production version..."
npm run build

echo "✅ Build complete!"
echo "⚠️  Run as root: systemctl reload nginx"
```

Make executable:

```bash
chmod +x ~/deploy-portfolio.sh
```

### FluxTest Deployment Script

```bash
# As appuser
nano ~/deploy-fluxtest.sh
```

Add:

```bash
#!/bin/bash
set -e

echo "🚀 Deploying FluxTest (fluxtest.evolune.in)..."
cd ~/fluxtest.evolune.in

echo "📦 Pulling latest changes..."
git pull origin main

echo "📦 Installing dependencies..."
npm install

echo "🔨 Building production version..."
npm run build

echo "✅ Build complete!"

# If using PM2, uncomment:
# pm2 restart fluxtest

echo "⚠️  Run as root: systemctl reload nginx"
```

Make executable:

```bash
chmod +x ~/deploy-fluxtest.sh
```

---

## Quick Deployment Commands

### Deploy Portfolio:

```bash
su - portfoliouser && ~/deploy-portfolio.sh && exit && systemctl reload nginx
```

### Deploy FluxTest:

```bash
su - appuser && ~/deploy-fluxtest.sh && exit && systemctl reload nginx
```

---

## Permission Troubleshooting

If Nginx can't read files:

### For Portfolio:

```bash
# As root
chown -R portfoliouser:portfoliouser /home/portfoliouser/evolune.in
chmod 755 /home/portfoliouser
chmod 755 /home/portfoliouser/evolune.in
chmod -R 755 /home/portfoliouser/evolune.in/dist
chmod o+x /home/portfoliouser

# Test
curl -I http://evolune.in
```

### For FluxTest:

```bash
# As root
chown -R appuser:appuser /home/appuser/fluxtest.evolune.in
chmod 755 /home/appuser
chmod 755 /home/appuser/fluxtest.evolune.in
chmod -R 755 /home/appuser/fluxtest.evolune.in/dist
chmod o+x /home/appuser
```

---

## Nginx Configuration Files

### Portfolio: `/etc/nginx/sites-available/evolune.in`

```nginx
server {
    listen 80;
    server_name evolune.in www.evolune.in;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name evolune.in www.evolune.in;

    ssl_certificate /etc/letsencrypt/live/evolune.in/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/evolune.in/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    root /home/portfoliouser/evolune.in/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### FluxTest: `/etc/nginx/sites-available/fluxtest.evolune.in`

```nginx
server {
    listen 80;
    server_name fluxtest.evolune.in;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name fluxtest.evolune.in;

    ssl_certificate /etc/letsencrypt/live/fluxtest.evolune.in/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/fluxtest.evolune.in/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    root /home/appuser/fluxtest.evolune.in/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## Security Comparison

### Single User (appuser for both):
```
appuser/
├── evolune.in/          ⚠️ If FluxTest is hacked,
└── fluxtest.evolune.in/ ⚠️ portfolio is also at risk
```

### Separate Users (Recommended):
```
portfoliouser/
└── evolune.in/          ✅ Isolated from FluxTest

appuser/
└── fluxtest.evolune.in/ ✅ Isolated from Portfolio
```

**If one is compromised, the other remains secure!**

---

## Monitoring Both Apps

Create a monitoring script:

```bash
# As root
nano /root/check-all-apps.sh
```

Add:

```bash
#!/bin/bash

echo "===== Portfolio Status ====="
echo "User: portfoliouser"
echo "Path: /home/portfoliouser/evolune.in"
ls -la /home/portfoliouser/evolune.in/dist/ | head -5
curl -Is https://evolune.in | head -1
echo ""

echo "===== FluxTest Status ====="
echo "User: appuser"
echo "Path: /home/appuser/fluxtest.evolune.in"
ls -la /home/appuser/fluxtest.evolune.in/dist/ | head -5
curl -Is https://fluxtest.evolune.in | head -1
```

Make executable:

```bash
chmod +x /root/check-all-apps.sh
./check-all-apps.sh
```

---

## Adding More Apps Later

For future apps (like NextPost, DarkPearl, etc.):

```bash
# Create new user for each app
adduser nextpostuser
adduser darkpearluser
adduser styleaiuser

# Each gets their own:
# /home/nextpostuser/nextpost.evolune.in/
# /home/darkpearluser/darkpearl.evolune.in/
# /home/styleaiuser/styleai.evolune.in/
```

**Maximum security and isolation!**

---

## Quick Reference Table

| Task | User | Command |
|------|------|---------|
| Deploy Portfolio | portfoliouser | `su - portfoliouser && cd ~/evolune.in && ./deploy-portfolio.sh` |
| Deploy FluxTest | appuser | `su - appuser && cd ~/fluxtest.evolune.in && ./deploy-fluxtest.sh` |
| Nginx Config | root | `nano /etc/nginx/sites-available/evolune.in` |
| View Logs | root | `tail -f /var/log/nginx/error.log` |
| Reload Nginx | root | `systemctl reload nginx` |
| Check Permissions | root | `ls -la /home/portfoliouser/` |

---

## Summary

✅ **Best Practice**: Separate user per application
✅ **Maximum Security**: Apps are isolated from each other
✅ **Easy Management**: Clear separation of responsibilities
✅ **Scalable**: Easy to add more apps later

**Your Setup:**
- `portfoliouser` → evolune.in
- `appuser` → fluxtest.evolune.in
- Each has their own environment, completely isolated!

This is how professional production servers are configured! 🚀

---

*For general deployment steps, also see `DEPLOYMENT_GUIDE.md`*
