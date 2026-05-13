# 🚀 Deployment Guide - Siraj-ul-Uloom CMS

A step-by-step guide to deploy your CMS website to production.

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All environment variables are set correctly
- [ ] Database schema is created in Supabase
- [ ] Admin user is created in Supabase Auth
- [ ] Website content is added via admin dashboard
- [ ] Images are uploaded and URLs are correct
- [ ] Navigation menu is configured
- [ ] Site settings are updated
- [ ] Domain is purchased and ready
- [ ] SSL certificate is ready (for custom domain)

---

## 🌍 Deployment Options

### Option 1: Vercel (Recommended - Zero Config)

**Why Vercel?**
- ✅ Auto-deploys from GitHub
- ✅ Built-in SSL/HTTPS
- ✅ CDN for fast global delivery
- ✅ Free tier available
- ✅ Preview deployments
- ✅ One-click rollback

#### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Siraj-ul-Uloom CMS"

# Rename branch to main
git branch -M main

# Add remote
git remote add origin https://github.com/YOUR_USERNAME/sirajululoom.git

# Push
git push -u origin main
```

#### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub (recommended)
3. Click "New Project"
4. Find and select your `sirajululoom` repository
5. Click "Import"

#### Step 3: Configure Environment Variables

In Vercel dashboard:

1. Click "Environment Variables"
2. Add these variables:

```
```

#### Step 4: Deploy

1. Click "Deploy"
2. Wait for build to complete
3. Your site is live at `sirajululoom.vercel.app`

#### Step 5: Custom Domain (Optional)

1. Go to **Settings** → **Domains**
2. Click "Add Domain"
3. Enter your domain (e.g., `sirajululoom.org`)
4. Add DNS records as shown
5. Wait for DNS to propagate (5-48 hours)

#### Step 6: Setup GitHub Secrets (for CI/CD)

For automatic deployments:

1. Go to GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Add new secrets:

```
VERCEL_TOKEN = (get from Vercel Settings)
VERCEL_ORG_ID = (from Vercel dashboard)
VERCEL_PROJECT_ID = (from Vercel dashboard)
```

---

### Option 2: Self-Hosted (VPS/Server)

#### Step 1: Choose a Server

Options:
- **DigitalOcean** ($6/month)
- **Linode** ($5/month)
- **AWS** (free tier)
- **Google Cloud** (free tier)
- **Azure** (free tier)

#### Step 2: Setup Server

```bash
# Connect to your server via SSH
ssh root@your_server_ip

# Update system
apt update && apt upgrade -y

# Install Node.js
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install Git
apt install -y git

# Clone repository
git clone https://github.com/YOUR_USERNAME/sirajululoom.git
cd sirajululoom

# Install dependencies
npm install

# Create .env.local file
nano .env.local
# Add your environment variables
```

#### Step 3: Build the App

```bash
# Build for production
npm run build
```

#### Step 4: Setup PM2 (Process Manager)

```bash
# Install PM2 globally
npm install -g pm2

# Start application
pm2 start npm --name "sirajululoom" -- start

# Setup to start on reboot
pm2 startup
pm2 save
```

#### Step 5: Setup Nginx (Reverse Proxy)

```bash
# Install Nginx
apt install -y nginx

# Create config
sudo nano /etc/nginx/sites-available/default
```

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Test Nginx config
sudo nginx -t

# Start Nginx
sudo systemctl restart nginx
```

#### Step 6: Setup SSL (Let's Encrypt)

```bash
# Install Certbot
apt install -y certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d yourdomain.com

# Auto-renewal
sudo systemctl enable certbot.timer
```

#### Step 7: Setup GitHub Webhooks (Auto-Deploy)

Create a webhook that redeploys when you push:

```bash
# Create a deployment script
cat > /home/deploy.sh << 'EOF'
#!/bin/bash
cd /root/sirajululoom
git pull origin main
npm install
npm run build
pm2 restart sirajululoom
EOF

chmod +x /home/deploy.sh
```

---

### Option 3: Docker Deployment

#### Step 1: Create Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

#### Step 2: Create docker-compose.yml

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_SUPABASE_URL=${NEXT_PUBLIC_SUPABASE_URL}
      - NEXT_PUBLIC_SUPABASE_ANON_KEY=${NEXT_PUBLIC_SUPABASE_ANON_KEY}
      - SUPABASE_SERVICE_ROLE_KEY=${SUPABASE_SERVICE_ROLE_KEY}
      - NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}
    restart: unless-stopped
```

#### Step 3: Deploy

```bash
# Build and run
docker-compose up -d

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

---

## 🔄 Automated Deployments with GitHub Actions

The project includes a pre-configured GitHub Actions workflow.

### Setup:

1. **Add GitHub Secrets:**
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `NEXT_PUBLIC_SITE_URL`
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`

2. **Push to GitHub:**
   ```bash
   git push origin main
   ```

3. **Watch Deployment:**
   - Go to **Actions** tab in GitHub
   - Monitor build progress
   - Website auto-deploys when build succeeds

---

## 📊 Post-Deployment Checklist

After deployment:

- [ ] Test website on desktop and mobile
- [ ] Verify admin dashboard access
- [ ] Test database connectivity
- [ ] Test image uploads from admin
- [ ] Test contact form (if enabled)
- [ ] Verify email notifications (if configured)
- [ ] Test navigation links
- [ ] Check page load speeds (Google PageSpeed)
- [ ] Verify SEO meta tags
- [ ] Test social media links
- [ ] Monitor error logs
- [ ] Setup uptime monitoring
- [ ] Configure email alerts

---

## 🔒 Security Configuration

### Supabase Security

1. **Enable Row Level Security (RLS)**
   - Go to Supabase → SQL Editor
   - Run RLS enable commands in schema.sql
   - Define RLS policies

2. **Setup CORS**
   - Go to Supabase → Settings → API
   - Configure CORS URLs

3. **Regular Backups**
   - Enable automatic backups
   - Export database weekly

### Server Security

```bash
# Firewall
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable

# SSH hardening
sudo sed -i 's/#PermitRootLogin yes/PermitRootLogin no/' /etc/ssh/sshd_config
sudo sed -i 's/#PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config
sudo systemctl restart ssh

# Fail2ban
sudo apt install -y fail2ban
sudo systemctl enable fail2ban
```

---

## 📈 Monitoring & Maintenance

### Setup Monitoring

1. **Uptime Monitoring**
   - UptimeRobot (free)
   - Pingdom
   - StatusPage.io

2. **Error Tracking**
   - Sentry (free tier)
   - LogRocket
   - Rollbar

3. **Performance Monitoring**
   - Google Analytics
   - Vercel Analytics
   - New Relic

### Regular Maintenance

- [ ] Weekly: Review error logs
- [ ] Weekly: Check database size
- [ ] Monthly: Update dependencies
- [ ] Monthly: Review access logs
- [ ] Quarterly: Security audit
- [ ] Quarterly: Backup database

---

## 🆘 Troubleshooting Deployments

### Issue: Build Fails

**Check:**
- Environment variables are set correctly
- All npm packages are installed
- TypeScript errors
- Database connectivity

### Issue: Admin Dashboard Not Working

**Check:**
- Supabase credentials are correct
- Admin user exists
- Session cookies are working
- Middleware is enabled

### Issue: Images Not Displaying

**Check:**
- Image URLs are correct in database
- Supabase Storage permissions
- CORS configuration

### Issue: Slow Website

**Solutions:**
- Enable Vercel caching
- Optimize images
- Implement ISR (Incremental Static Regeneration)
- Use CDN for static assets

---

## 📞 Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Supabase Docs:** https://supabase.com/docs
- **GitHub Actions:** https://github.com/features/actions
- **Nginx Docs:** https://nginx.org/en/docs/

---

## 🎯 Deployment Summary

| Platform | Setup Time | Cost | Performance | Recommended |
|----------|-----------|------|-------------|------------|
| **Vercel** | 5 min | Free/paid | Excellent | ✅ YES |
| **DigitalOcean** | 30 min | $6/mo | Good | ✅ Good |
| **AWS** | 30 min | Free tier | Excellent | ✅ For scale |
| **Docker** | 15 min | Variable | Good | ✅ Flexible |

---

**Recommended:** Deploy to Vercel for simplicity and performance.

---

**Happy Deploying! 🚀**
