# Evolune EdgeTech - Company Website

A stunning, professional business website for Evolune EdgeTech featuring glassmorphic design, pale colors, and modern aesthetics.

## Features

- **Glassmorphic Design**: Beautiful glass-like UI elements with backdrop blur effects
- **Pale Color Palette**: Soft, professional colors with gradient accents
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Elegant fade-in and transition effects
- **5 Product Showcases**:
  - Cal Coach - Calorie tracking application
  - Evo-TFX - AI-based API testing platform
  - NextPost - Social media management platform
  - DarkPearl - Natural language coding platform
  - More coming soon...

## Tech Stack

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Pure CSS** - Custom CSS with glassmorphic design (no frameworks!)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in terminal (e.g., `http://localhost:5173`)

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.tsx   # Navigation header
│   │   ├── Hero.tsx     # Hero section
│   │   ├── About.tsx    # About/Company section
│   │   ├── Products.tsx # Products showcase
│   │   ├── Features.tsx # Features section
│   │   ├── Contact.tsx  # Contact form
│   │   └── Footer.tsx   # Footer
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles & animations
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Design Highlights

### Glassmorphic Style
- Transparent backgrounds with backdrop blur
- Subtle borders and shadows
- Layered depth effects

### Color Scheme
- Primary: Blue (#2563eb to #4f46e5)
- Secondary: Indigo, Purple gradients
- Background: Pale slate and blue tones
- Text: Slate grays for readability

### Animations
- Fade-in effects on scroll
- Smooth transitions
- Hover effects on cards
- Pulsing glow effects

## Customization

### Updating Products
Edit `src/components/Products.tsx` to add or modify product information.

### Changing Colors
Modify the color scheme in `tailwind.config.js` and `src/index.css`.

### Adding Sections
Create new components in `src/components/` and import them in `App.tsx`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Evolune EdgeTech. All rights reserved.

## Contact

For inquiries: contact@evoluneedgetech.com

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
