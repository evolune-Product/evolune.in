# Deployment Guide — Evolune Portfolio (Contabo VPS)

This is a **React + Vite** static site. The build output is served via **Nginx**.
Server: **Ubuntu 24.04 LTS** | IP: **194.163.143.160** | Domain: **evolune.in**

---

## 1. SSH Into Your Server

```bash
ssh root@194.163.143.160
```

---

## 2. Update the Server

```bash
apt update && apt upgrade -y
```

---

## 3. Install Required Software

### Node.js (via NodeSource — LTS)
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
apt install -y nodejs
```

Verify:
```bash
node -v
npm -v
```

### Nginx
```bash
apt install -y nginx
```

### Git
```bash
apt install -y git
```

---

## 4. Create Dedicated User

```bash
adduser evoluneportfolio
# Follow prompts, set a password

# Give sudo access (optional but useful)
usermod -aG sudo evoluneportfolio

# Switch to the new user
su - evoluneportfolio
```

---

## 5. Clone the Repository

```bash
cd /home/evoluneportfolio

git clone https://github.com/evolune-Product/evolune.in.git

cd evolune.in
```

---

## 6. Install Dependencies & Build

```bash
npm install
npm run build
```

This generates a `dist/` folder — that is what Nginx will serve.

---

## 7. Configure Nginx

Switch back to root (or use sudo):
```bash
exit   # back to root, or prefix commands below with sudo
```

Create an Nginx config file:
```bash
nano /etc/nginx/sites-available/evoluneportfolio
```

Paste the following:

```nginx
server {
    listen 80;
    server_name evolune.in www.evolune.in;

    root /home/evoluneportfolio/evolune.in/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

Enable the site:
```bash
ln -s /etc/nginx/sites-available/evoluneportfolio /etc/nginx/sites-enabled/

# Remove default site if needed
rm /etc/nginx/sites-enabled/default

# Test the config
nginx -t

# Reload Nginx
systemctl reload nginx
```

---

## 8. Allow Nginx Through Firewall

```bash
ufw allow 'Nginx Full'
ufw allow OpenSSH
ufw enable
```

---

## 9. Fix Folder Permissions (if Nginx throws 403)

Nginx (www-data) needs read access to the dist folder:

```bash
chmod 755 /home/evoluneportfolio
chmod -R 755 /home/evoluneportfolio/evolune.in/dist
```

---

## 10. Visit Your Site

Open `http://evolune.in` in a browser. The portfolio should be live.

---

## 11. SSL with Let's Encrypt (HTTPS for evolune.in)

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d evolune.in -d www.evolune.in
```

Certbot will prompt you for:
- Your email address (for renewal notices)
- Agreement to terms of service (type `Y`)

Certbot will automatically:
- Update the Nginx config with HTTPS
- Redirect HTTP → HTTPS
- Set up auto-renewal (no manual action needed)

**No Nginx restart required** — certbot reloads Nginx automatically.

After this, your site will be live at `https://evolune.in`.

To verify auto-renewal works:
```bash
certbot renew --dry-run
```

> **Note:** First visit after going live may still show an error in browsers that cached the old "connection refused" response. Clear browser cache (`Ctrl + Shift + Delete` → All time → Cached images & Cookies) or use incognito to verify.

---

## 12. Updating the Site (Future Deployments)

SSH in, switch to the user, pull latest code, and rebuild:

```bash
ssh root@194.163.143.160
su - evoluneportfolio
cd evolune.in

git pull origin main
npm install
npm run build
```

No Nginx restart needed — it serves the `dist/` folder directly.

---

## Quick Reference

| Step | Command |
|------|---------|
| Switch user | `su - evoluneportfolio` |
| Go to project | `cd /home/evoluneportfolio/evolune.in` |
| Build | `npm run build` |
| Nginx status | `systemctl status nginx` |
| Nginx reload | `systemctl reload nginx` |
| Nginx error logs | `tail -f /var/log/nginx/error.log` |
| Nginx access logs | `tail -f /var/log/nginx/access.log` |
| SSL renew test | `certbot renew --dry-run` |
