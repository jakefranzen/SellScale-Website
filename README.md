# SellScale - AI-Powered Outbound Sales Agent

A modern, dynamic website for SellScale's AI platform "Selix" that automates outbound sales messaging. Built with Tailwind CSS and vanilla JavaScript for optimal performance and maintainability.

## 🚀 Features

- **Full-screen Hero Section** with animated gradient background and floating particles
- **Interactive Selix Chat Demo** with AI-generated sales content examples
- **Brand Logo Carousel** showcasing trusted industry leaders
- **Key Benefits Toggle** highlighting three core platform advantages
- **Dark/Light Mode Toggle** with system preference detection
- **Mobile Responsive Design** with smooth animations and transitions
- **Pipeline-focused CTA** leading to dedicated intake form

## 🎯 Target Audience

Sales leaders and operators looking for AI-powered outbound sales automation that:
- Never lands in spam
- Pulls enrichment from multiple data sources
- Finds messaging that resonates with prospects

## 🛠️ Tech Stack

- **HTML5** - Semantic markup with accessibility features
- **Tailwind CSS** - Utility-first CSS framework via CDN
- **Vanilla JavaScript** - No dependencies for optimal performance
- **Inter Font** - Modern, professional typography
- **CSS Animations** - Smooth transitions and hover effects

## 📁 Project Structure

```
sellscale-website/
├── index.html          # Main landing page
├── intake.html          # Lead capture form
├── script.js           # Interactive functionality
└── README.md           # Project documentation
```

## 🚦 Getting Started

1. **Clone or download** the project files
2. **Open `index.html`** in any modern web browser
3. **No build process required** - everything runs client-side

### Local Development

For local development with live reload, you can use any static file server:

```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if installed)
npx serve .

# Or simply open index.html directly in your browser
```

## 🎨 Design System

### Colors
- **Primary Purple**: `#8B5CF6` (Tailwind violet-500)
- **Primary Green**: `#10B981` (Tailwind emerald-500)
- **Background**: White/Gray-900 (light/dark mode)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### Components
- **Cards**: Rounded corners (xl), subtle shadows
- **Buttons**: Gradient backgrounds with hover effects
- **Forms**: Focus states with purple accent
- **Animations**: Smooth 300ms transitions

## 🔧 Customization

### Updating Brand Logos
The brand carousel currently uses styled placeholders. To integrate real logos via Brandfetch MCP:

1. Set up Brandfetch MCP server
2. Replace the `fetchBrandLogos()` function in `script.js`
3. Add proper API calls to fetch brand assets

### Modifying Chat Responses
Edit the `sampleResponses` array in `script.js` to customize AI demo responses:

```javascript
const sampleResponses = [
    {
        user: "Your trigger phrase",
        ai: {
            subject: "Email subject line",
            body: "Email body content",
            insights: "AI insights and tips"
        }
    }
];
```

### Adding New Benefits
Extend the `benefits` object in `script.js`:

```javascript
const benefits = {
    newBenefit: {
        title: 'Your Benefit Title',
        icon: '🎯',
        description: 'Benefit description',
        features: ['Feature 1', 'Feature 2'],
        stats: 'Key statistic'
    }
};
```

## 📱 Mobile Responsiveness

The site is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

Key mobile optimizations:
- Collapsible navigation
- Stacked layouts on smaller screens
- Touch-friendly button sizes
- Optimized font scaling

## 🌙 Dark Mode

Dark mode is automatically detected from system preferences and can be toggled manually. Theme preference is saved to localStorage for persistence across sessions.

## 🔗 Navigation

- **Smooth scrolling** to page sections
- **Sticky navigation** with transparency effects
- **Back to home** link on intake page

## 📊 Performance

- **No external dependencies** (except Tailwind CDN and Google Fonts)
- **Minimal JavaScript** for fast loading
- **Optimized animations** using CSS transforms
- **Lazy loading** for better performance

## 🚀 Deployment

The site is ready for deployment to any static hosting service:

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect to Git repository
- **GitHub Pages**: Push to gh-pages branch
- **AWS S3**: Upload as static website

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different browsers
5. Submit a pull request

## 📄 License

This project is created for SellScale. All rights reserved.

## 📞 Contact

For questions about this implementation, please contact the development team.

---

**Built with ❤️ for sales teams who want to scale their outbound efforts with AI.**
