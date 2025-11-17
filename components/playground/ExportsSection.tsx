'use client'

import { Box, Typography, Grid, Paper, Tabs, Tab } from '@mui/material'
import { useState } from 'react'
import { useDesignSystem } from '@/context/DesignSystemContext'
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

  const exports = [
    { label: 'MUI Theme', code: generateMUITheme(), language: 'typescript' },
    { label: 'CSS Variables', code: generateCSSVariables(), language: 'css' },
    { label: 'Tailwind Config', code: generateTailwindConfig(), language: 'javascript' },
    { label: 'Design Tokens JSON', code: generateDesignTokens(), language: 'json' },
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
