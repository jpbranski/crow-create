'use client'

import { Box, Typography, Paper, Tabs, Tab } from '@mui/material'
import { useState } from 'react'
import { useDesignSystem } from '@/context/DesignSystemContext'
import { getContrastRatio, getWCAGLevel } from '@/lib/colorUtils'
import CodeBlock from '../CodeBlock'

export default function ExportsSection() {
  const { config } = useDesignSystem()
  const [activeTab, setActiveTab] = useState(0)

  // Generate MUI theme code
  const generateMUITheme = () => {
    return `import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '${config.palette.primary}',
      dark: '${config.palette.primaryDark}',
      light: '${config.palette.primaryLight}',
    },
    secondary: {
      main: '${config.palette.secondary}',
      dark: '${config.palette.secondaryDark}',
      light: '${config.palette.secondaryLight}',
    },
    success: {
      main: '${config.palette.success}',
    },
    warning: {
      main: '${config.palette.warning}',
    },
    error: {
      main: '${config.palette.error}',
    },
    info: {
      main: '${config.palette.info}',
    },
    background: {
      default: '${config.palette.background}',
      paper: '${config.palette.surface}',
    },
    text: {
      primary: '${config.palette.textPrimary}',
      secondary: '${config.palette.textSecondary}',
    },
  },
  typography: {
    fontFamily: '${config.typography.bodyFont}, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: ${config.typography.baseFontSize},
    h1: {
      fontFamily: '${config.typography.headingFont}',
      fontSize: '${(config.typography.baseFontSize * Math.pow(config.typography.scale, 4)).toFixed(1)}px',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '${config.typography.headingFont}',
      fontSize: '${(config.typography.baseFontSize * Math.pow(config.typography.scale, 3)).toFixed(1)}px',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '${config.typography.headingFont}',
      fontSize: '${(config.typography.baseFontSize * Math.pow(config.typography.scale, 2)).toFixed(1)}px',
      fontWeight: 600,
    },
  },
  spacing: ${config.spacing.baseUnit},
  shape: {
    borderRadius: ${config.radius.medium},
  },
  shadows: [
    'none',
    '${config.shadows.sm}',
    '${config.shadows.sm}',
    '${config.shadows.md}',
    '${config.shadows.md}',
    '${config.shadows.lg}',
    '${config.shadows.lg}',
    '${config.shadows.xl}',
    '${config.shadows.xl}',
    '${config.shadows.xl}',
  ],
});`
  }

  // Generate CSS variables
  const generateCSSVariables = () => {
    return `:root {
  /* Colors */
  --color-primary: ${config.palette.primary};
  --color-primary-dark: ${config.palette.primaryDark};
  --color-primary-light: ${config.palette.primaryLight};
  --color-secondary: ${config.palette.secondary};
  --color-secondary-dark: ${config.palette.secondaryDark};
  --color-secondary-light: ${config.palette.secondaryLight};
  --color-success: ${config.palette.success};
  --color-warning: ${config.palette.warning};
  --color-error: ${config.palette.error};
  --color-info: ${config.palette.info};
  --color-background: ${config.palette.background};
  --color-surface: ${config.palette.surface};
  --color-text-primary: ${config.palette.textPrimary};
  --color-text-secondary: ${config.palette.textSecondary};

  /* Typography */
  --font-heading: '${config.typography.headingFont}', sans-serif;
  --font-body: '${config.typography.bodyFont}', sans-serif;
  --font-size-base: ${config.typography.baseFontSize}px;
  --font-size-h1: ${(config.typography.baseFontSize * Math.pow(config.typography.scale, 4)).toFixed(1)}px;
  --font-size-h2: ${(config.typography.baseFontSize * Math.pow(config.typography.scale, 3)).toFixed(1)}px;
  --font-size-h3: ${(config.typography.baseFontSize * Math.pow(config.typography.scale, 2)).toFixed(1)}px;

  /* Spacing */
  --spacing-base: ${config.spacing.baseUnit}px;
  --spacing-xs: ${config.spacing.baseUnit * 0.5}px;
  --spacing-sm: ${config.spacing.baseUnit}px;
  --spacing-md: ${config.spacing.baseUnit * 2}px;
  --spacing-lg: ${config.spacing.baseUnit * 3}px;
  --spacing-xl: ${config.spacing.baseUnit * 4}px;

  /* Border Radius */
  --radius-sm: ${config.radius.small}px;
  --radius-md: ${config.radius.medium}px;
  --radius-lg: ${config.radius.large}px;

  /* Shadows */
  --shadow-sm: ${config.shadows.sm};
  --shadow-md: ${config.shadows.md};
  --shadow-lg: ${config.shadows.lg};
  --shadow-xl: ${config.shadows.xl};

  /* Motion */
  --duration-fast: ${config.motion.duration.fast}ms;
  --duration-normal: ${config.motion.duration.normal}ms;
  --duration-slow: ${config.motion.duration.slow}ms;
  --easing: ${config.motion.easing};
}`
  }

  // Generate Tailwind config
  const generateTailwindConfig = () => {
    return `/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '${config.palette.primary}',
          dark: '${config.palette.primaryDark}',
          light: '${config.palette.primaryLight}',
        },
        secondary: {
          DEFAULT: '${config.palette.secondary}',
          dark: '${config.palette.secondaryDark}',
          light: '${config.palette.secondaryLight}',
        },
        success: '${config.palette.success}',
        warning: '${config.palette.warning}',
        error: '${config.palette.error}',
        info: '${config.palette.info}',
      },
      fontFamily: {
        heading: ['${config.typography.headingFont}', 'sans-serif'],
        body: ['${config.typography.bodyFont}', 'sans-serif'],
      },
      fontSize: {
        base: '${config.typography.baseFontSize}px',
      },
      spacing: {
        xs: '${config.spacing.baseUnit * 0.5}px',
        sm: '${config.spacing.baseUnit}px',
        md: '${config.spacing.baseUnit * 2}px',
        lg: '${config.spacing.baseUnit * 3}px',
        xl: '${config.spacing.baseUnit * 4}px',
      },
      borderRadius: {
        sm: '${config.radius.small}px',
        DEFAULT: '${config.radius.medium}px',
        lg: '${config.radius.large}px',
      },
      boxShadow: {
        sm: '${config.shadows.sm}',
        DEFAULT: '${config.shadows.md}',
        lg: '${config.shadows.lg}',
        xl: '${config.shadows.xl}',
      },
      transitionDuration: {
        fast: '${config.motion.duration.fast}ms',
        DEFAULT: '${config.motion.duration.normal}ms',
        slow: '${config.motion.duration.slow}ms',
      },
    },
  },
  plugins: [],
};`
  }

  // Generate design tokens JSON
  const generateDesignTokens = () => {
    const tokens = {
      color: {
        primary: {
          main: { value: config.palette.primary },
          dark: { value: config.palette.primaryDark },
          light: { value: config.palette.primaryLight },
        },
        secondary: {
          main: { value: config.palette.secondary },
          dark: { value: config.palette.secondaryDark },
          light: { value: config.palette.secondaryLight },
        },
        semantic: {
          success: { value: config.palette.success },
          warning: { value: config.palette.warning },
          error: { value: config.palette.error },
          info: { value: config.palette.info },
        },
        background: {
          default: { value: config.palette.background },
          surface: { value: config.palette.surface },
        },
        text: {
          primary: { value: config.palette.textPrimary },
          secondary: { value: config.palette.textSecondary },
        },
      },
      typography: {
        fontFamily: {
          heading: { value: config.typography.headingFont },
          body: { value: config.typography.bodyFont },
        },
        fontSize: {
          base: { value: `${config.typography.baseFontSize}px` },
          scale: { value: config.typography.scale },
        },
      },
      spacing: {
        base: { value: `${config.spacing.baseUnit}px` },
      },
      radius: {
        small: { value: `${config.radius.small}px` },
        medium: { value: `${config.radius.medium}px` },
        large: { value: `${config.radius.large}px` },
      },
      shadow: {
        sm: { value: config.shadows.sm },
        md: { value: config.shadows.md },
        lg: { value: config.shadows.lg },
        xl: { value: config.shadows.xl },
      },
      motion: {
        duration: {
          fast: { value: `${config.motion.duration.fast}ms` },
          normal: { value: `${config.motion.duration.normal}ms` },
          slow: { value: `${config.motion.duration.slow}ms` },
        },
        easing: { value: config.motion.easing },
      },
    }

    return JSON.stringify(tokens, null, 2)
  }

  // Generate markdown documentation
  const generateDocumentation = () => {
    const scale = config.typography.scale
    const base = config.typography.baseFontSize

    const typographySizes = {
      h1: (base * Math.pow(scale, 4)).toFixed(1),
      h2: (base * Math.pow(scale, 3)).toFixed(1),
      h3: (base * Math.pow(scale, 2)).toFixed(1),
      h4: (base * Math.pow(scale, 1.5)).toFixed(1),
      h5: (base * Math.pow(scale, 1)).toFixed(1),
      h6: (base * Math.pow(scale, 0.5)).toFixed(1),
      body: base.toFixed(1),
      caption: (base * 0.875).toFixed(1),
    }

    // Calculate contrast ratios
    const textOnBg = getContrastRatio(config.palette.textPrimary, config.palette.background)
    const textSecondaryOnBg = getContrastRatio(config.palette.textSecondary, config.palette.background)
    const primaryOnSurface = getContrastRatio(config.palette.primary, config.palette.surface)
    const secondaryOnSurface = getContrastRatio(config.palette.secondary, config.palette.surface)

    return `# Design System Style Guide

> Generated from Crow Create

## 🎨 Color Palette

### Brand Colors

| Color | Hex Value | Usage |
|-------|-----------|-------|
| **Primary** | ${config.palette.primary} | Main brand color, primary actions |
| **Primary Dark** | ${config.palette.primaryDark} | Hover states, emphasis |
| **Primary Light** | ${config.palette.primaryLight} | Backgrounds, subtle highlights |
| **Secondary** | ${config.palette.secondary} | Secondary actions, accents |
| **Secondary Dark** | ${config.palette.secondaryDark} | Secondary hover states |
| **Secondary Light** | ${config.palette.secondaryLight} | Secondary backgrounds |

### Semantic Colors

| Color | Hex Value | Usage |
|-------|-----------|-------|
| **Success** | ${config.palette.success} | Success states, confirmations |
| **Warning** | ${config.palette.warning} | Warning states, alerts |
| **Error** | ${config.palette.error} | Error states, destructive actions |
| **Info** | ${config.palette.info} | Informational messages |

### Base Colors

| Color | Hex Value | Usage |
|-------|-----------|-------|
| **Background** | ${config.palette.background} | Main background |
| **Surface** | ${config.palette.surface} | Card backgrounds, elevated surfaces |
| **Text Primary** | ${config.palette.textPrimary} | Primary text content |
| **Text Secondary** | ${config.palette.textSecondary} | Secondary text, captions |

---

## ✍️ Typography

### Font Families

- **Headings:** ${config.typography.headingFont}
- **Body:** ${config.typography.bodyFont}

### Type Scale

**Base Font Size:** ${base}px
**Scale Ratio:** ${scale.toFixed(2)}

| Element | Size | Usage |
|---------|------|-------|
| **H1** | ${typographySizes.h1}px | Page titles, hero headings |
| **H2** | ${typographySizes.h2}px | Section headings |
| **H3** | ${typographySizes.h3}px | Subsection headings |
| **H4** | ${typographySizes.h4}px | Card titles |
| **H5** | ${typographySizes.h5}px | Small headings |
| **H6** | ${typographySizes.h6}px | Overlines, labels |
| **Body** | ${typographySizes.body}px | Body copy, paragraphs |
| **Caption** | ${typographySizes.caption}px | Captions, helper text |

### Typography Examples

\`\`\`
H1: Build Better Experiences (${typographySizes.h1}px, ${config.typography.headingFont}, 700 weight)
H2: Create Beautiful Interfaces (${typographySizes.h2}px, ${config.typography.headingFont}, 600 weight)
H3: Design With Purpose (${typographySizes.h3}px, ${config.typography.headingFont}, 600 weight)

Body: This is body text using ${config.typography.bodyFont} at ${typographySizes.body}px.
The quick brown fox jumps over the lazy dog.

Caption: Small annotations and labels (${typographySizes.caption}px)
\`\`\`

---

## ♿ Accessibility

### Contrast Ratios (WCAG 2.1)

| Pairing | Contrast Ratio | Normal Text | Large Text |
|---------|----------------|-------------|------------|
| Text Primary on Background | ${textOnBg.toFixed(2)}:1 | ${getWCAGLevel(textOnBg)} | ${getWCAGLevel(textOnBg, true)} |
| Text Secondary on Background | ${textSecondaryOnBg.toFixed(2)}:1 | ${getWCAGLevel(textSecondaryOnBg)} | ${getWCAGLevel(textSecondaryOnBg, true)} |
| Primary on Surface | ${primaryOnSurface.toFixed(2)}:1 | ${getWCAGLevel(primaryOnSurface)} | ${getWCAGLevel(primaryOnSurface, true)} |
| Secondary on Surface | ${secondaryOnSurface.toFixed(2)}:1 | ${getWCAGLevel(secondaryOnSurface)} | ${getWCAGLevel(secondaryOnSurface, true)} |

**WCAG Levels:**
- **AAA:** Contrast ≥ 7:1 (normal), ≥ 4.5:1 (large)
- **AA:** Contrast ≥ 4.5:1 (normal), ≥ 3:1 (large)
- **Fail:** Below AA standards

---

## 📐 Layout & Spacing

### Spacing System

**Base Unit:** ${config.spacing.baseUnit}px

| Token | Value | Usage |
|-------|-------|-------|
| **xs** | ${config.spacing.baseUnit * 0.5}px | Tight spacing |
| **sm** | ${config.spacing.baseUnit}px | Compact spacing |
| **md** | ${config.spacing.baseUnit * 2}px | Default spacing |
| **lg** | ${config.spacing.baseUnit * 3}px | Generous spacing |
| **xl** | ${config.spacing.baseUnit * 4}px | Large spacing |

### Border Radius

**Style:** ${config.radius.style}

| Token | Value |
|-------|-------|
| **Small** | ${config.radius.small}px |
| **Medium** | ${config.radius.medium}px |
| **Large** | ${config.radius.large}px |

### Shadows

| Token | Value |
|-------|-------|
| **sm** | \`${config.shadows.sm}\` |
| **md** | \`${config.shadows.md}\` |
| **lg** | \`${config.shadows.lg}\` |
| **xl** | \`${config.shadows.xl}\` |

---

## 🎬 Motion

### Duration

| Token | Value | Usage |
|-------|-------|-------|
| **Fast** | ${config.motion.duration.fast}ms | Micro-interactions |
| **Normal** | ${config.motion.duration.normal}ms | Standard transitions |
| **Slow** | ${config.motion.duration.slow}ms | Complex animations |

**Easing:** \`${config.motion.easing}\`

---

## 📦 Sample Components

### Button Example

\`\`\`css
.button-primary {
  background-color: ${config.palette.primary};
  color: ${config.palette.surface};
  font-family: ${config.typography.bodyFont};
  font-size: ${typographySizes.body}px;
  padding: ${config.spacing.baseUnit * 1.5}px ${config.spacing.baseUnit * 3}px;
  border-radius: ${config.radius.medium}px;
  transition: all ${config.motion.duration.normal}ms ${config.motion.easing};
}

.button-primary:hover {
  background-color: ${config.palette.primaryDark};
  box-shadow: ${config.shadows.md};
}

.button-secondary {
  background-color: transparent;
  color: ${config.palette.primary};
  border: 2px solid ${config.palette.primary};
  font-family: ${config.typography.bodyFont};
  font-size: ${typographySizes.body}px;
  padding: ${config.spacing.baseUnit * 1.5}px ${config.spacing.baseUnit * 3}px;
  border-radius: ${config.radius.medium}px;
}
\`\`\`

### Card Example

\`\`\`css
.card {
  background-color: ${config.palette.surface};
  border-radius: ${config.radius.medium}px;
  box-shadow: ${config.shadows.md};
  padding: ${config.spacing.baseUnit * 3}px;
}

.card-title {
  font-family: ${config.typography.headingFont};
  font-size: ${typographySizes.h3}px;
  font-weight: 600;
  color: ${config.palette.textPrimary};
  margin-bottom: ${config.spacing.baseUnit * 2}px;
}

.card-body {
  font-family: ${config.typography.bodyFont};
  font-size: ${typographySizes.body}px;
  color: ${config.palette.textSecondary};
  line-height: 1.6;
}
\`\`\`

---

## 📝 Notes

- All measurements are in pixels unless otherwise specified
- Color values use hexadecimal format
- Shadows use CSS box-shadow syntax
- Typography scale calculated using: base × ratio^exponent
- Always test color combinations for accessibility compliance

---

*Generated with [Crow Create](https://crowcreate.io) — Design System Helper*
`
  }

  const exports = [
    { label: 'MUI Theme', code: generateMUITheme(), language: 'typescript' },
    { label: 'CSS Variables', code: generateCSSVariables(), language: 'css' },
    { label: 'Tailwind Config', code: generateTailwindConfig(), language: 'javascript' },
    { label: 'Design Tokens JSON', code: generateDesignTokens(), language: 'json' },
    { label: 'Documentation (Markdown)', code: generateDocumentation(), language: 'markdown' },
  ]

  return (
    <Box>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        Export Design System
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Copy ready-to-use code for your design system in multiple formats
      </Typography>

      <Paper variant="outlined">
        <Tabs
          value={activeTab}
          onChange={(_e, newValue) => setActiveTab(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          {exports.map((exp, index) => (
            <Tab key={index} label={exp.label} />
          ))}
        </Tabs>

        <Box sx={{ p: 0 }}>
          {exports.map((exp, index) => (
            <Box key={index} hidden={activeTab !== index} role="tabpanel">
              {activeTab === index && <CodeBlock code={exp.code} language={exp.language} />}
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  )
}
