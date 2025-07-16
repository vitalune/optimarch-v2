# Optimarch Website Deployment Guide

## Pre-Deployment Checklist ✅

### Required Actions Before Going Live:

1. **Create OG Image (REQUIRED)**
   - Open `/public/og-image-placeholder.html` in your browser
   - Take a screenshot at exactly 1200x630 pixels
   - Save as `/public/og-image.jpg`
   - Delete the placeholder HTML file

2. **Environment Variables**
   - Your EmailJS credentials are already set up in `.env.local`
   - These will need to be configured in your hosting platform

3. **Test the Contact Form**
   - Fill out the contact form locally
   - Verify you receive the email
   - Check that success/error messages work properly

## Recommended Hosting: Vercel (Free)

### Why Vercel?
- ✅ **Free tier perfect for startups**
- ✅ **Automatic Next.js optimization**
- ✅ **Built-in SSL certificates**
- ✅ **Global CDN included**
- ✅ **GitHub integration**
- ✅ **Automatic deployments**

### Step-by-Step Deployment to Vercel:

#### 1. Push to GitHub
```bash
git add .
git commit -m "Ready for production deployment"
git push origin main
```

#### 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Click "New Project"
4. Import your `optimarch-v2` repository
5. Configure project settings:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: Leave empty (default)

#### 3. Add Environment Variables
In Vercel dashboard:
1. Go to Project Settings > Environment Variables
2. Add these variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = `service_3m77tyq`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = `template_em6yvk8`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = `ajm8zZ1DzvV7dQF-3`

#### 4. Deploy
- Click "Deploy" button
- Wait for build to complete (~2-3 minutes)
- Your site will be live at: `https://optimarch-v2.vercel.app`

#### 5. Custom Domain (Optional)
1. Purchase `optimarch.ai` domain from Namecheap, GoDaddy, etc.
2. In Vercel: Go to Project Settings > Domains
3. Add your domain: `optimarch.ai`
4. Configure DNS records as shown in Vercel
5. Wait for DNS propagation (up to 24 hours)

## Alternative: Netlify Deployment

### Step-by-Step Netlify:

#### 1. Build for Production
```bash
npm run build
```

#### 2. Deploy to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`

#### 3. Environment Variables
1. Go to Site Settings > Environment Variables
2. Add the same EmailJS variables as above

## Post-Deployment Tasks

### 1. Test Everything
- [ ] Website loads correctly
- [ ] All animations work
- [ ] Contact form sends emails
- [ ] Mobile responsiveness
- [ ] Page load speed

### 2. SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Verify robots.txt is accessible
- [ ] Test social media sharing (OG image)
- [ ] Check page speed with PageSpeed Insights

### 3. Monitoring
- [ ] Set up Google Analytics (optional)
- [ ] Monitor EmailJS usage
- [ ] Set up uptime monitoring

## Performance Optimization

### Current Status:
- ✅ Images optimized with Next.js Image component
- ✅ Code splitting enabled
- ✅ CSS optimized with Tailwind
- ✅ Animations optimized with Framer Motion
- ✅ Lazy loading implemented

### Production Features:
- ✅ Automatic compression
- ✅ CDN delivery
- ✅ SSL certificate
- ✅ Minified assets

## Security

### Current Security Features:
- ✅ No sensitive data in client-side code
- ✅ EmailJS keys are public keys (safe to expose)
- ✅ Input validation with Zod
- ✅ Rate limiting protection
- ✅ HTTPS enforced

## Costs

### Vercel Free Tier Limits:
- 100GB bandwidth/month
- 1000 serverless function invocations/month
- Perfect for startup traffic

### EmailJS Free Tier:
- 200 emails/month
- Upgrade to paid plan when needed

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Test locally with `npm run build && npm start`
3. Verify environment variables are set correctly
4. Check EmailJS dashboard for email delivery status

## Next Steps After Launch

1. **Domain & SSL**: Set up custom domain
2. **Analytics**: Add Google Analytics
3. **SEO**: Submit to search engines
4. **Marketing**: Share on social media
5. **Monitoring**: Set up uptime monitoring

Your website is now production-ready! 🚀