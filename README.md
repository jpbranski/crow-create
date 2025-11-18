# Crow Create

A complete front-end design system helper built with Next.js 15, TypeScript, and Material-UI.

## Overview

Crow Create is a browser-based tool for creating accessible design systems. Build color palettes, configure typography, define spacing and layout tokens, preview components, and export ready-to-use code for MUI, Tailwind, CSS variables, and design tokens.

## Features

### 🎨 Color Palette & Accessibility
- **Color Picker**: Define primary, secondary, semantic, and background colors
- **Logo Upload**: Extract dominant colors from logo images (max 500KB, PNG/JPG/SVG)
- **Palette Enhancer**: Rule-based palette generation with semantic colors
- **WCAG Contrast Checker**: Test color combinations for AA/AAA compliance
- **Real-time Preview**: See contrast ratios and accessibility ratings

### ✏️ Typography & Font Pairings
- **Font Selection**: Choose from curated font options (Inter, Roboto, Playfair Display, etc.)
- **Intelligent Pairing**: Get suggested heading/body font combinations
- **Typography Scale**: Configure base size and scale ratios (Minor 2nd to Perfect 5th)
- **Live Preview**: See your typography scale with actual font rendering

### 📐 Layout & Style System
- **Spacing Scale**: Define base units and see generated spacing values
- **Border Radius**: Choose from Sharp, Subtle, Rounded, or Pill presets
- **Shadow System**: Configure elevation levels (sm, md, lg, xl)
- **Motion Settings**: Set duration scales and easing functions

### 👁️ Component Preview
- **Live Components**: See your design system applied to real UI components
- **Mock Page Layout**: Hero section, feature cards, forms, alerts, and more
- **Responsive Design**: Preview how components adapt to different contexts

### 💾 Export & Share
Export your design system in multiple formats:
- **MUI Theme**: Complete TypeScript theme configuration
- **CSS Variables**: Custom properties for vanilla CSS
- **Tailwind Config**: Extend configuration for Tailwind CSS
- **Design Tokens JSON**: Standard format for design tools

### 🔄 Project Management
- **Save/Load Projects**: Store configurations in browser localStorage
- **Shareable URLs**: Encode entire design system in URL parameters
- **No Backend Required**: Everything runs client-side

### 🌗 Theme Support
- **Light/Dark Modes**: Toggle between light and dark themes
- **System Preference**: Respects user's OS theme preference
- **Persistent Choice**: Remembers your theme selection

### ♿ Accessibility
- **WCAG AA Compliance**: Built with accessibility in mind
- **Keyboard Navigation**: Full keyboard support throughout
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Indicators**: Clear visual focus states

### 🍪 Privacy & Compliance
- **Cookie Consent**: Granular consent management
- **Optional Analytics**: Google Analytics (opt-in only)
- **Optional AdSense**: Google AdSense (opt-in only)
- **Legal Pages**: Privacy Policy, Terms, Accessibility Statement, Cookie Policy

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI Library**: Material-UI (MUI) v6
- **Styling**: Emotion (MUI's styling solution)
- **Fonts**: Google Fonts (Inter + JetBrains Mono)
- **Deployment**: Vercel-ready (front-end only)

## Project Structure

```
crow-create/
├── app/
│   ├── (site)/
│   │   ├── layout.tsx          # Main site layout
│   │   ├── page.tsx            # Home page
│   │   ├── create/             # Create tool page
│   │   ├── themes/             # Theme library
│   │   ├── compare/            # Theme comparison
│   │   ├── resources/          # Resources page
│   │   ├── docs/               # Documentation
│   │   └── legal/              # Legal pages
│   │       ├── privacy/
│   │       ├── terms/
│   │       ├── accessibility/
│   │       └── cookies/
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── components/
│   ├── create/
│   │   ├── PaletteSection.tsx
│   │   ├── TypographySection.tsx
│   │   ├── LayoutSection.tsx
│   │   ├── PreviewSection.tsx
│   │   ├── ExportsSection.tsx
│   │   ├── ColorPicker.tsx
│   │   └── WCAGChecker.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Logo.tsx
│   ├── ThemeToggle.tsx
│   ├── CookieConsent.tsx
│   ├── Analytics.tsx
│   ├── ProjectManager.tsx
│   └── CodeBlock.tsx
├── context/
│   ├── ThemeContext.tsx        # Light/dark theme management
│   └── DesignSystemContext.tsx # Design system state
├── lib/
│   ├── theme.ts                # MUI theme definitions
│   ├── fonts.ts                # Font configuration
│   └── colorUtils.ts           # Color manipulation utilities
└── package.json
```

## Key Components

### DesignSystemContext (`context/DesignSystemContext.tsx`)
- Manages all design system configuration state
- Handles localStorage persistence
- Provides shareable URL encoding/decoding
- Exports project management functions

### ThemeContext (`context/ThemeContext.tsx`)
- Manages light/dark mode switching
- Persists theme preference to localStorage
- Respects system theme preference on first load
- Provides MUI theme provider integration

### Color Utilities (`lib/colorUtils.ts`)
- WCAG contrast ratio calculation
- Color space conversions (hex, RGB, HSL)
- Logo color extraction from images
- Palette generation helpers

### Create Sections (`components/create/`)
- **PaletteSection**: Color configuration and WCAG checking
- **TypographySection**: Font selection and scale configuration
- **LayoutSection**: Spacing, radius, shadows, and motion
- **PreviewSection**: Live component gallery
- **ExportsSection**: Code generation and export

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Type Checking

```bash
npm run type-check
```

## Environment Variables

Optional environment variables for analytics and advertising:

```env
# Google Analytics (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google AdSense (optional)
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX
```

These services are only loaded when:
1. Environment variables are set
2. User has consented via cookie banner

## Deployment

This project is designed for deployment on Vercel:

1. Push to GitHub
2. Import repository in Vercel
3. Configure environment variables (optional)
4. Deploy

The app is fully static and requires no backend services.

## Features Not Yet Implemented

The following features from the original spec are not yet implemented but can be added:

- **Extract from URL/CSS**: Proxy API route for extracting tokens from websites
- **Design Personality Generator**: Rule-based brand personality analysis
- **Icon Pack Preview**: Built-in SVG icon set with palette theming
- **Starter Templates**: Code snippets for Minimal, SaaS, and Portfolio layouts
- **Colorblind Simulations**: Visual filters for accessibility testing

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Material-UI](https://mui.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Color contrast calculations follow [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/) guidelines
