import { Box, Typography, Alert, Divider, Paper, Link as MuiLink, Button } from '@mui/material'
import { Palette, Code, Settings, AutoAwesome } from '@mui/icons-material'
import Link from 'next/link'

export const metadata = {
  title: 'Material UI Theming | Crow Create',
  description: 'Learn about Material UI theming including MUI theme structure, createTheme, palette configuration, typography system, and component overrides.',
}

export default function MaterialUIThemingPage() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
        Material UI Theming
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Master Material UI's powerful theming system to create custom, accessible React applications with comprehensive design systems.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Alert severity="info" sx={{ mb: 4 }}>
        <strong>Why MUI Theming Matters:</strong> Material UI provides one of the most comprehensive and flexible theming systems for React. Understanding how to customize MUI themes allows you to maintain design system consistency while leveraging a battle-tested component library.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600}>
        MUI Theme Structure
      </Typography>
      <Typography variant="body1" paragraph>
        A Material UI theme is a JavaScript object that defines your application's design tokens. It includes palette (colors), typography, spacing, breakpoints, shadows, and component-specific customizations.
      </Typography>

      <Paper sx={(theme) => ({ p: 3, my: 3, bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100], borderRadius: 2 })}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Basic Theme Structure
        </Typography>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre', overflow: 'auto' }}>
{`const theme = {
  palette: { /* Colors */ },
  typography: { /* Fonts and sizes */ },
  spacing: 8, /* Base spacing unit */
  breakpoints: { /* Responsive breakpoints */ },
  shadows: [ /* Elevation shadows */ ],
  components: { /* Component overrides */ }
}`}
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Using createTheme()
      </Typography>
      <Typography variant="body1" paragraph>
        The createTheme() function is the entry point for creating custom MUI themes. It accepts your custom configuration and returns a complete theme object with all necessary properties.
      </Typography>

      <Paper sx={(theme) => ({ p: 3, my: 3, bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100], borderRadius: 2 })}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Creating a Custom Theme
        </Typography>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre', overflow: 'auto' }}>
{`import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3b82f6',
    },
    secondary: {
      main: '#8b5cf6',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Your app components */}
    </ThemeProvider>
  );
}`}
        </Box>
      </Paper>

      <Alert severity="success" sx={{ my: 3 }}>
        <strong>Pro Tip:</strong> Wrap your entire application with ThemeProvider at the root level to ensure all MUI components have access to your theme.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Palette Configuration
      </Typography>
      <Typography variant="body1" paragraph>
        The palette is the heart of MUI theming. It defines all colors used throughout your application.
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Color Object Structure
      </Typography>
      <Typography variant="body1" paragraph>
        Each color in MUI's palette can be defined with multiple shades and a contrast text color.
      </Typography>

      <Paper sx={(theme) => ({ p: 3, my: 3, bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100], borderRadius: 2 })}>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre', overflow: 'auto' }}>
{`palette: {
  primary: {
    light: '#60a5fa',    // Lighter variant
    main: '#3b82f6',     // Base color (required)
    dark: '#2563eb',     // Darker variant
    contrastText: '#fff' // Text color on this background
  },
  secondary: {
    light: '#a78bfa',
    main: '#8b5cf6',
    dark: '#7c3aed',
    contrastText: '#fff'
  },
  // Semantic colors
  error: {
    main: '#ef4444',
  },
  warning: {
    main: '#f59e0b',
  },
  info: {
    main: '#3b82f6',
  },
  success: {
    main: '#10b981',
  },
}`}
        </Box>
      </Paper>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Automatic Shade Generation
      </Typography>
      <Typography variant="body1" paragraph>
        If you only provide the main color, MUI automatically generates light, dark, and contrastText values using its color manipulation utilities.
      </Typography>

      <Paper sx={(theme) => ({ p: 3, my: 3, bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100], borderRadius: 2 })}>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre', overflow: 'auto' }}>
{`import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3b82f6', // MUI generates light, dark, contrastText
    },
  },
});

// Access generated values
theme.palette.primary.light // Auto-generated
theme.palette.primary.dark  // Auto-generated`}
        </Box>
      </Paper>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Background and Text Colors
      </Typography>
      <Paper sx={(theme) => ({ p: 3, my: 3, bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100], borderRadius: 2 })}>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre', overflow: 'auto' }}>
{`palette: {
  mode: 'light', // or 'dark'
  background: {
    default: '#ffffff',
    paper: '#f9fafb',
  },
  text: {
    primary: '#1f2937',
    secondary: '#6b7280',
    disabled: '#9ca3af',
  },
  divider: '#e5e7eb',
}`}
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Typography System
      </Typography>
      <Typography variant="body1" paragraph>
        MUI's typography system provides 13 predefined text variants, each with configurable font family, size, weight, and line height.
      </Typography>

      <Paper sx={(theme) => ({ p: 3, my: 3, bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100], borderRadius: 2 })}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Typography Configuration
        </Typography>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre', overflow: 'auto' }}>
{`typography: {
  // Global font family
  fontFamily: '"Inter", "Roboto", "Helvetica", sans-serif',

  // Typography variants
  h1: {
    fontSize: '3rem',      // 48px
    fontWeight: 700,
    lineHeight: 1.2,
  },
  h2: {
    fontSize: '2.25rem',   // 36px
    fontWeight: 700,
    lineHeight: 1.3,
  },
  h3: {
    fontSize: '1.875rem',  // 30px
    fontWeight: 600,
    lineHeight: 1.4,
  },
  body1: {
    fontSize: '1rem',      // 16px
    lineHeight: 1.5,
  },
  button: {
    fontSize: '0.875rem',
    fontWeight: 600,
    textTransform: 'none', // Disable uppercase
  },
}`}
        </Box>
      </Paper>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Responsive Typography
      </Typography>
      <Typography variant="body1" paragraph>
        Use the theme.breakpoints helper to create responsive typography that scales across screen sizes.
      </Typography>

      <Paper sx={(theme) => ({ p: 3, my: 3, bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100], borderRadius: 2 })}>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre', overflow: 'auto' }}>
{`typography: {
  h1: {
    fontSize: '2rem',      // Mobile: 32px
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem',    // Desktop: 48px
    },
  },
}`}
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Spacing System
      </Typography>
      <Typography variant="body1" paragraph>
        MUI uses a spacing function based on a spacing unit (default 8px). This creates a consistent rhythm throughout your UI.
      </Typography>

      <Paper sx={(theme) => ({ p: 3, my: 3, bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100], borderRadius: 2 })}>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre', overflow: 'auto' }}>
{`const theme = createTheme({
  spacing: 8, // Base unit
});

// Usage in components
sx={{
  padding: 2,     // 16px (2 * 8px)
  margin: 3,      // 24px (3 * 8px)
  gap: 1.5,       // 12px (1.5 * 8px)
  mt: 4,          // margin-top: 32px
  px: 2,          // padding-left & right: 16px
}}`}
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Breakpoints
      </Typography>
      <Typography variant="body1" paragraph>
        MUI provides five default breakpoints for responsive design. You can customize these to match your design system.
      </Typography>

      <Paper sx={(theme) => ({ p: 3, my: 3, bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100], borderRadius: 2 })}>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre', overflow: 'auto' }}>
{`breakpoints: {
  values: {
    xs: 0,      // Extra small (mobile)
    sm: 600,    // Small (tablet)
    md: 900,    // Medium (small laptop)
    lg: 1200,   // Large (desktop)
    xl: 1536,   // Extra large (large desktop)
  },
}

// Usage
sx={{
  display: 'block',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}}`}
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Component Overrides
      </Typography>
      <Typography variant="body1" paragraph>
        Customize the default props and styles of any MUI component globally through the theme.
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Default Props
      </Typography>
      <Paper sx={(theme) => ({ p: 3, my: 3, bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100], borderRadius: 2 })}>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre', overflow: 'auto' }}>
{`components: {
  MuiButton: {
    defaultProps: {
      disableElevation: true,  // Remove shadow from all buttons
      variant: 'contained',     // Default variant
    },
  },
  MuiTextField: {
    defaultProps: {
      variant: 'outlined',
      size: 'small',
    },
  },
}`}
        </Box>
      </Paper>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Style Overrides
      </Typography>
      <Paper sx={(theme) => ({ p: 3, my: 3, bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100], borderRadius: 2 })}>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre', overflow: 'auto' }}>
{`components: {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,      // Rounded corners
        textTransform: 'none', // No uppercase
        fontWeight: 600,
      },
      contained: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      },
    },
  },
}`}
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Dark Mode Support
      </Typography>
      <Typography variant="body1" paragraph>
        MUI makes it easy to support light and dark modes by simply changing the palette mode.
      </Typography>

      <Paper sx={(theme) => ({ p: 3, my: 3, bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100], borderRadius: 2 })}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Implementing Dark Mode
        </Typography>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre', overflow: 'auto' }}>
{`import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useMemo } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#3b82f6',
          },
          ...(mode === 'dark' ? {
            background: {
              default: '#1f2937',
              paper: '#111827',
            },
            text: {
              primary: '#f9fafb',
              secondary: '#d1d5db',
            },
          } : {}),
        },
      }),
    [mode]
  );

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      {/* Your app */}
    </ThemeProvider>
  );
}`}
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Complete Theme Example
      </Typography>
      <Typography variant="body1" paragraph>
        Here's a comprehensive example combining all theming concepts:
      </Typography>

      <Paper sx={(theme) => ({ p: 3, my: 3, bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100], borderRadius: 2 })}>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.75rem', whiteSpace: 'pre', overflow: 'auto', maxHeight: '500px' }}>
{`import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#60a5fa',
      main: '#3b82f6',
      dark: '#2563eb',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#a78bfa',
      main: '#8b5cf6',
      dark: '#7c3aed',
      contrastText: '#ffffff',
    },
    error: {
      main: '#ef4444',
    },
    warning: {
      main: '#f59e0b',
    },
    info: {
      main: '#3b82f6',
    },
    success: {
      main: '#10b981',
    },
    background: {
      default: '#ffffff',
      paper: '#f9fafb',
    },
    text: {
      primary: '#1f2937',
      secondary: '#6b7280',
      disabled: '#9ca3af',
    },
    divider: '#e5e7eb',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.875rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 20px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        },
      },
    },
  },
});

export default theme;`}
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Exporting from Crow Create
      </Typography>
      <Typography variant="body1" paragraph>
        Crow Create can generate ready-to-use Material UI theme objects with your custom colors, typography, and design tokens.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'primary.main', color: 'primary.contrastText', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
          <AutoAwesome sx={{ mr: 1 }} />
          Crow Create MUI Export Features
        </Typography>
        <Box component="ul">
          <li><Typography variant="body1">Complete theme object with all palette colors</Typography></li>
          <li><Typography variant="body1">Typography configuration with your selected fonts</Typography></li>
          <li><Typography variant="body1">Semantic color tokens (success, error, warning, info)</Typography></li>
          <li><Typography variant="body1">Proper contrast text colors automatically calculated</Typography></li>
          <li><Typography variant="body1">WCAG-compliant color combinations</Typography></li>
          <li><Typography variant="body1">Copy-paste ready TypeScript/JavaScript code</Typography></li>
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Helpful Resources
      </Typography>
      <Box component="ul" sx={{ color: 'text.primary' }}>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://mui.com/material-ui/customization/theming/" target="_blank" rel="noopener noreferrer">
              MUI Official Theming Documentation
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://mui.com/material-ui/customization/palette/" target="_blank" rel="noopener noreferrer">
              MUI Palette Customization
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://mui.com/material-ui/customization/typography/" target="_blank" rel="noopener noreferrer">
              MUI Typography Customization
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <Link href="/docs/exporting-guide" passHref legacyBehavior>
              <MuiLink>Advanced Exporting Guide (Crow Create Docs)</MuiLink>
            </Link>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <Link href="/docs/dark-mode" passHref legacyBehavior>
              <MuiLink>Designing for Dark Mode (Crow Create Docs)</MuiLink>
            </Link>
          </Typography>
        </li>
      </Box>

      <Box sx={{ mt: 4, p: 3, bgcolor: 'background.paper', borderRadius: 2, border: 1, borderColor: 'divider' }}>
        <Typography variant="h5" gutterBottom fontWeight={600}>
          Ready to Create Your MUI Theme?
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Use Crow Create to generate a complete, accessible Material UI theme with proper color palettes, typography, and semantic tokens.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Link href="/create" passHref legacyBehavior>
            <Button component="a" variant="contained" size="large">
              Generate MUI Theme
            </Button>
          </Link>
          <Link href="/docs/exporting-guide" passHref legacyBehavior>
            <Button component="a" variant="outlined" size="large">
              View Exporting Guide
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
