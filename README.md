# Optimarch - AI Automation Services Website

A modern, professional NextJS website for Optimarch, an AI automation services business. Built using MCP servers with agentic AI systems to showcase AI capabilities through impressive 3D visuals and smooth animations.

## 🛠 Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme
- **3D Graphics**: React Three Fiber (@react-three/fiber, @react-three/drei)
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Build Tool**: Turbopack (Next.js experimental)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd optimarch-v2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗 Build & Deploy

### Build for production
```bash
npm run build
```

### Start production server
```bash
npm start
```

### Lint code
```bash
npm run lint
```

## 🎨 Customization

### Colors & Theme
The website uses a custom Tailwind configuration with AI/tech themed colors:
- **Primary**: Blue gradient (from blue-500 to blue-600)
- **Secondary**: Purple gradient (from purple-500 to purple-600)
- **Accent**: Cyan, green, orange gradients for variety
- **Background**: Black with subtle gradients

### 3D Effects
The particle system and geometric shapes can be customized in:
- `src/components/3d/ParticleBackground.tsx`

### Content
Business content can be updated in individual component files:
- `src/components/ui/Hero.tsx` - Main headline and value proposition
- `src/components/ui/Services.tsx` - Service offerings
- `src/components/ui/About.tsx` - Company information and team
- `src/components/ui/Contact.tsx` - Contact information and form

## 📱 Mobile Optimization

The website is fully responsive with:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized 3D performance for mobile devices
- Flexible grid layouts
- Readable typography at all screen sizes

## ⚡ Performance Features

- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components loaded on demand
- **Image Optimization**: Next.js automatic image optimization
- **Bundle Analysis**: Optimized package imports
- **Compression**: Gzip compression enabled
- **Static Generation**: Pre-rendered static pages

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta tags for social sharing
- **Structured Data**: JSON-LD schema markup for organization and services
- **Open Graph**: Social media preview optimization
- **Twitter Cards**: Twitter-specific meta tags
- **Canonical URLs**: Proper URL canonicalization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary and confidential to Optimarch.

## 🆘 Support

For questions or support, contact:
- Email: amirvalizadeh161@gmail.com

---

Built with ❤️ and AI-powered innovation by Amir Valizadeh.
