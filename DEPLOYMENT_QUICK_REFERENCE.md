# Quick Reference - Separate Users Setup

## 🚀 Initial Setup (One-time)

### Create Portfolio User
```bash
# Connect to server
ssh root@YOUR_SERVER_IP

# Create new user
adduser portfoliouser

# Switch to portfolio user
su - portfoliouser

# Setup project
cd ~
git clone YOUR_REPO evolune.in
cd evolune.in
npm install
npm run build
```

---

## 📦 Deploy Portfolio Update

```bash
# Switch to portfoliouser
su - portfoliouser

# Update and build
cd ~/evolune.in
git pull origin main
npm install
npm run build

# Exit and reload Nginx
exit
systemctl reload nginx
```

---

## 📦 Deploy FluxTest Update

```bash
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

## 🌐 Nginx Configuration

### Create Portfolio Config:
```bash
nano /etc/nginx/sites-available/evolune.in
```

### Basic Config Template:
```nginx
server {
    listen 80;
    server_name evolune.in www.evolune.in;
    root /home/portfoliouser/evolune.in/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Enable Site:
```bash
ln -s /etc/nginx/sites-available/evolune.in /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

---

## 🔒 SSL Setup

```bash
# Portfolio
certbot --nginx -d evolune.in -d www.evolune.in

# FluxTest (if not already done)
certbot --nginx -d fluxtest.evolune.in
```

---

## 🔑 Set Permissions

```bash
# For Portfolio
chmod 755 /home/portfoliouser
chmod 755 /home/portfoliouser/evolune.in
chmod -R 755 /home/portfoliouser/evolune.in/dist
chmod o+x /home/portfoliouser

# For FluxTest
chmod 755 /home/appuser
chmod 755 /home/appuser/fluxtest.evolune.in
chmod -R 755 /home/appuser/fluxtest.evolune.in/dist
chmod o+x /home/appuser
```

---

## 👥 User Switching

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

## 🛠️ Common Tasks

### Restart Nginx:
```bash
systemctl restart nginx
```

### Reload Nginx (no downtime):
```bash
systemctl reload nginx
```

### Check Nginx status:
```bash
systemctl status nginx
```

### View logs:
```bash
tail -f /var/log/nginx/error.log
tail -f /var/log/nginx/access.log
```

### Test Nginx config:
```bash
nginx -t
```

### Renew SSL:
```bash
certbot renew
```

---

## 📁 File Locations

```
Portfolio:
  Files:      /home/portfoliouser/evolune.in/dist/
  Nginx:      /etc/nginx/sites-available/evolune.in
  SSL:        /etc/letsencrypt/live/evolune.in/

FluxTest:
  Files:      /home/appuser/fluxtest.evolune.in/dist/
  Nginx:      /etc/nginx/sites-available/fluxtest.evolune.in
  SSL:        /etc/letsencrypt/live/fluxtest.evolune.in/

Logs:         /var/log/nginx/
```

---

## 🔍 Troubleshooting

### Site not loading:
```bash
systemctl status nginx
nginx -t
tail -f /var/log/nginx/error.log
```

### Permission issues (Portfolio):
```bash
chown -R portfoliouser:portfoliouser /home/portfoliouser/evolune.in
chmod 755 /home/portfoliouser
chmod -R 755 /home/portfoliouser/evolune.in/dist
chmod o+x /home/portfoliouser
```

### Permission issues (FluxTest):
```bash
chown -R appuser:appuser /home/appuser/fluxtest.evolune.in
chmod 755 /home/appuser
chmod -R 755 /home/appuser/fluxtest.evolune.in/dist
chmod o+x /home/appuser
```

### Check site status:
```bash
curl -I https://evolune.in
curl -I https://fluxtest.evolune.in
```

---

## 📊 Directory Structure

```
/home/
├── portfoliouser/
│   └── evolune.in/
│       └── dist/
│
└── appuser/
    └── fluxtest.evolune.in/
        └── dist/
```

---

## 🚀 One-Line Deployment

### Portfolio:
```bash
su - portfoliouser -c "cd ~/evolune.in && git pull && npm install && npm run build" && systemctl reload nginx
```

### FluxTest:
```bash
su - appuser -c "cd ~/fluxtest.evolune.in && git pull && npm install && npm run build" && systemctl reload nginx
```

---

## 📞 Full Guide

For complete step-by-step instructions, see: **`DEPLOYMENT_SEPARATE_USERS.md`**
