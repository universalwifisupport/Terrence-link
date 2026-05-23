# GitHub Pages Deployment Setup

## ✅ What's Been Configured

### 1. GitHub Actions Workflow
- Created `.github/workflows/deploy.yml`
- Automatically builds and deploys on every push to `main` branch
- Uses Node.js 18 to build your Vite project
- Deploys to GitHub Pages using the `gh-pages` action

### 2. Build Process
- Installs dependencies via npm
- Runs `npm run build` to generate optimized production files
- Uploads to GitHub Pages

## 🔧 Next Steps: Authenticate & Push

Your git repository is ready locally with:
- Initial commit with all source files
- GitHub Actions workflow configuration
- Remote set to: `https://github.com/universalwifisupport/Terrence-link.git`

### Option 1: Using GitHub CLI (Recommended)
```bash
# Install GitHub CLI: https://cli.github.com/
gh auth login
# Follow the prompts to authenticate
cd "d:\Campaign website\Terrencelink\terrence link"
git push -u origin main
```

### Option 2: Using SSH
```bash
# Generate SSH key (if you don't have one)
ssh-keygen -t ed25519 -C "your_email@example.com"

# Add to GitHub: https://github.com/settings/keys

# Update remote to use SSH
cd "d:\Campaign website\Terrencelink\terrence link"
git remote set-url origin git@github.com:universalwifisupport/Terrence-link.git
git push -u origin main
```

### Option 3: Using Personal Access Token
```bash
cd "d:\Campaign website\Terrencelink\terrence link"
git remote set-url origin https://<your-username>:<personal-access-token>@github.com/universalwifisupport/Terrence-link.git
git push -u origin main
```

## 📋 GitHub Pages Configuration Checklist

Once you've pushed to GitHub:

1. **Go to Repository Settings**
   - Navigate to: https://github.com/universalwifisupport/Terrence-link/settings/pages

2. **Verify GitHub Pages Settings**
   - Source: Deploy from a branch
   - Branch: gh-pages / (root)
   - ✅ This is automatically created by the workflow after first successful build

3. **Custom Domain Configuration**
   - Add CNAME record in your DNS provider pointing to GitHub Pages
   - Domain: terencelink.com
   - Add file: CNAME with content "terencelink.com" (will be auto-generated)

4. **Enable HTTPS** (Recommended)
   - Check "Enforce HTTPS" in Settings > Pages after deployment

## 🚀 Automatic Deployment

After pushing once:
- Every future push to `main` branch triggers automatic build & deployment
- Website updates within 1-2 minutes
- Check Actions tab for build status: https://github.com/universalwifisupport/Terrence-link/actions

## ✨ Your Domain Configuration

With terencelink.com connected:
- GitHub Pages serves your site at terencelink.com
- CNAME records handle the routing
- SSL/TLS certificate auto-renews

## 🐛 Troubleshooting

**Build fails in Actions?**
- Check the workflow logs in Actions tab
- Ensure all dependencies are in package.json
- Verify Node.js version compatibility

**Domain not resolving?**
- Check DNS records are pointing to GitHub Pages IP
- Wait 24-48 hours for DNS propagation
- Verify CNAME file exists in repository

**Pages not updating?**
- Check gh-pages branch exists
- Verify workflow completed successfully
- Clear browser cache (Ctrl+Shift+Delete)
