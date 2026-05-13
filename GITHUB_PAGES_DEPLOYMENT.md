# GitHub Pages Deployment Guide

This guide will walk you through deploying your Siraj-ul-Uloom website to GitHub Pages with automatic CI/CD.

## Prerequisites

- GitHub account
- Git installed on your machine
- Node.js 18+ installed
- npm or yarn package manager

## Step 1: Push Your Code to GitHub

1. If you haven't already, initialize a git repository:
```bash
cd /Users/mohammedhaseeb/projects/sirajululoom
git init
git add .
git commit -m "Initial commit: Modern UI/UX redesign with animations"
```

2. Add your GitHub repository as remote:
```bash
git remote add origin https://github.com/Haseeb-creator/sirajululoom.git
```

3. Push your code to the main branch:
```bash
git branch -M main
git push -u origin main
```

## Step 2: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select `GitHub Actions` (or `Deploy from a branch` → `gh-pages` branch)
4. Your site will be published at: `https://Haseeb-creator.github.io/sirajululoom/`

## Step 3: Update Repository Settings (Optional)

1. Go to **Settings** → **General**
2. Under "Features", ensure "GitHub Pages" is enabled
3. Go to **Actions** → **General**
4. Set "Workflow permissions" to:
   - ✅ Read and write permissions
   - ✅ Allow GitHub Actions to create and approve pull requests

## Step 4: Automatic Deployment

The CI/CD workflow (`.github/workflows/deploy.yml`) will automatically:

1. Trigger on every push to `main` or `develop` branch
2. Install dependencies
3. Run linter and type checks
4. Build your Next.js project
5. Export static files to `/out` directory
6. Deploy to GitHub Pages

## Step 5: Verify Deployment

1. After pushing, go to your repository's **Actions** tab
2. You should see a workflow running: "Deploy to GitHub Pages"
3. Once it completes (green checkmark), your site is live!
4. Visit: `https://Haseeb-creator.github.io/sirajululoom/`

## Making Updates

To update your website:

```bash
# Make changes to your files
git add .
git commit -m "Update: Add new features or fix issues"
git push origin main
```

The deployment will happen automatically!

## Local Testing Before Deployment

To test your build locally:

```bash
# Build the static export
npm run build

# Serve the output locally (requires http-server or similar)
npm install -g http-server
http-server out/ -p 3000
```

Visit `http://localhost:3000` to see your site.

## Troubleshooting

### Issue: Build fails
**Solution:**
- Check your code for TypeScript errors: `npm run type-check`
- Clear Next.js cache: `rm -rf .next out`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### Issue: Pages not rendering
**Solution:**
- Ensure basePath is not set incorrectly in `next.config.js`
- Check that all images have `alt` text and proper paths
- Verify localStorage is being used (not Supabase)

### Issue: Admin panel not accessible
**Note:** Admin functionality uses localStorage and only works on the same domain. It's not meant for shared access. For each user, they can login independently.

### Issue: Styles not loading
**Solution:**
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Hard refresh: Ctrl+F5 or Cmd+Shift+R
- Check that Tailwind CSS builds correctly: `npm run build`

## Environment Variables

The workflow uses minimal environment variables. If needed in the future:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add your secrets (e.g., `NEXT_PUBLIC_SITE_URL`)
4. Reference in workflow: `${{ secrets.YOUR_SECRET }}`

## Performance Optimization

Your site is now:
- ✅ Static HTML (no server needed)
- ✅ Fast with optimized images
- ✅ SEO-friendly with proper meta tags
- ✅ Mobile-responsive with Tailwind CSS
- ✅ Animated with smooth transitions

## Custom Domain (Optional)

To use your own domain:

1. In your GitHub Pages settings, add your custom domain (e.g., `example.com`)
2. Update your domain registrar's DNS:
   - Point to GitHub Pages: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - For `www`: Create CNAME record pointing to `Haseeb-creator.github.io`
3. Wait for DNS propagation (up to 48 hours)
4. Verify in GitHub settings

## Maintenance

### Regular Updates
```bash
# Update dependencies monthly
npm update
npm audit fix

# Test before pushing
npm run build
```

### Backup
```bash
# GitHub automatically saves your code
# Optionally create a local backup
git bundle create backup.bundle --all
```

## Support & Documentation

- [Next.js Static Export Docs](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Your site is now live!** 🚀

Visit: `https://Haseeb-creator.github.io/sirajululoom/`

For more information, check the [main README.md](./README.md)
