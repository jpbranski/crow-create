import { Box, Typography, Alert, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Link as MuiLink, Button } from '@mui/material'
import { Download, Code, Settings, ContentCopy } from '@mui/icons-material'
import Link from 'next/link'

export const metadata = {
  title: 'Advanced Exporting Guide | Crow Create',
  description: 'Learn how to export design tokens to different formats including JSON, Tailwind config, Material UI theme, and CSS variables.',
}

export default function ExportingGuidePage() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
        Advanced Exporting Guide
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Master exporting your design system in multiple formats to integrate seamlessly with your development workflow and favorite frameworks.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Alert severity="info" sx={{ mb: 4 }}>
        <strong>Why Exporting Matters:</strong> Creating a design system is just the first step. Exporting in the right format ensures your carefully crafted tokens integrate smoothly into your codebase, enabling consistency between design and development.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600}>
        Available Export Formats
      </Typography>
      <Typography variant="body1" paragraph>
        Crow Create supports exporting to multiple formats, each optimized for different frameworks and use cases. Choose the format that best matches your technology stack.
      </Typography>

      <TableContainer component={Paper} sx={{ my: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Format</strong></TableCell>
              <TableCell><strong>Best For</strong></TableCell>
              <TableCell><strong>File Type</strong></TableCell>
              <TableCell><strong>Framework</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell><strong>CSS Variables</strong></TableCell>
              <TableCell>Universal, framework-agnostic</TableCell>
              <TableCell>.css</TableCell>
              <TableCell>Any (vanilla CSS)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>JSON</strong></TableCell>
              <TableCell>Maximum flexibility, custom integrations</TableCell>
              <TableCell>.json</TableCell>
              <TableCell>Any (process with scripts)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Material UI</strong></TableCell>
              <TableCell>React apps using MUI</TableCell>
              <TableCell>.ts / .js</TableCell>
              <TableCell>React + Material UI</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Tailwind CSS</strong></TableCell>
              <TableCell>Utility-first CSS frameworks</TableCell>
              <TableCell>tailwind.config.js</TableCell>
              <TableCell>Tailwind CSS</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>SCSS Variables</strong></TableCell>
              <TableCell>Projects using Sass/SCSS</TableCell>
              <TableCell>.scss</TableCell>
              <TableCell>Sass preprocessor</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        1. CSS Variables Export
      </Typography>
      <Typography variant="body1" paragraph>
        CSS Custom Properties (variables) are the most universal format. They work with any framework, can be updated at runtime, and support theming natively.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
          <Code sx={{ mr: 1, color: 'primary.main' }} />
          CSS Variables Structure
        </Typography>
        <Typography variant="body1" paragraph>
          Exported CSS variables are organized by category and use semantic naming conventions.
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.75rem', overflow: 'auto', whiteSpace: 'pre' }}>
{`:root {
  /* Color Palette */
  --color-primary: #3b82f6;
  --color-primary-light: #60a5fa;
  --color-primary-dark: #2563eb;

  --color-secondary: #8b5cf6;
  --color-secondary-light: #a78bfa;
  --color-secondary-dark: #7c3aed;

  /* Semantic Colors */
  --color-success: #10b981;
  --color-error: #ef4444;
  --color-warning: #f59e0b;
  --color-info: #3b82f6;

  /* Typography */
  --font-family-base: 'Inter', sans-serif;
  --font-family-heading: 'Inter', sans-serif;

  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;

  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);

  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-full: 9999px;
}

/* Usage Example */
.button {
  background: var(--color-primary);
  color: white;
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
}`}
        </Box>
      </Paper>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        How to Use CSS Variables Export
      </Typography>
      <Box component="ol" sx={{ color: 'text.primary', pl: 2 }}>
        <li><Typography variant="body1" paragraph>Click the Export button in Crow Create</Typography></li>
        <li><Typography variant="body1" paragraph>Select "CSS Variables" format</Typography></li>
        <li><Typography variant="body1" paragraph>Copy the generated code or download as .css file</Typography></li>
        <li><Typography variant="body1" paragraph>Import the CSS file in your project or paste into your stylesheet</Typography></li>
        <li><Typography variant="body1" paragraph>Reference variables using var(--variable-name) in your CSS</Typography></li>
      </Box>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        2. JSON Export
      </Typography>
      <Typography variant="body1" paragraph>
        JSON provides maximum flexibility. Use it to build custom integrations, generate multiple formats, or process tokens with build tools.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          JSON Structure Example
        </Typography>
        <Box sx={{ bgcolor: 'white', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.75rem', overflow: 'auto', whiteSpace: 'pre' }}>
{`{
  "colors": {
    "primary": {
      "main": "#3b82f6",
      "light": "#60a5fa",
      "dark": "#2563eb",
      "contrastText": "#ffffff"
    },
    "secondary": {
      "main": "#8b5cf6",
      "light": "#a78bfa",
      "dark": "#7c3aed",
      "contrastText": "#ffffff"
    },
    "semantic": {
      "success": "#10b981",
      "error": "#ef4444",
      "warning": "#f59e0b",
      "info": "#3b82f6"
    }
  },
  "typography": {
    "fontFamily": {
      "base": "'Inter', sans-serif",
      "heading": "'Inter', sans-serif"
    },
    "fontSize": {
      "xs": "0.75rem",
      "sm": "0.875rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem"
    },
    "fontWeight": {
      "normal": 400,
      "medium": 500,
      "semibold": 600,
      "bold": 700
    }
  },
  "spacing": {
    "xs": "0.25rem",
    "sm": "0.5rem",
    "md": "1rem",
    "lg": "1.5rem",
    "xl": "2rem"
  }
}`}
        </Box>
      </Paper>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Processing JSON Tokens
      </Typography>
      <Typography variant="body1" paragraph>
        JSON tokens can be transformed into any format using build tools like Style Dictionary, Theo, or custom scripts.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Example: Converting to SCSS Variables
        </Typography>
        <Box sx={{ bgcolor: 'white', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.75rem', overflow: 'auto', whiteSpace: 'pre' }}>
{`// Node.js script to convert JSON to SCSS
const fs = require('fs');
const tokens = require('./design-tokens.json');

let scss = '// Generated from design tokens\\n\\n';

// Process colors
Object.entries(tokens.colors.primary).forEach(([key, value]) => {
  scss += \`$color-primary-\${key}: \${value};\\n\`;
});

// Process spacing
Object.entries(tokens.spacing).forEach(([key, value]) => {
  scss += \`$spacing-\${key}: \${value};\\n\`;
});

fs.writeFileSync('_tokens.scss', scss);`}
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        3. Material UI Theme Export
      </Typography>
      <Typography variant="body1" paragraph>
        For React applications using Material UI, Crow Create generates a complete, ready-to-use theme object with createTheme() configuration.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Material UI Theme Export
        </Typography>
        <Box sx={{ bgcolor: 'white', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.7rem', overflow: 'auto', whiteSpace: 'pre' }}>
{`import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3b82f6',
      light: '#60a5fa',
      dark: '#2563eb',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#8b5cf6',
      light: '#a78bfa',
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
      primary: '#111827',
      secondary: '#6b7280',
      disabled: '#9ca3af',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
});

export default theme;`}
        </Box>
      </Paper>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Implementing MUI Theme
      </Typography>
      <Paper sx={{ p: 3, my: 3, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Box sx={{ bgcolor: 'white', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.8rem', overflow: 'auto', whiteSpace: 'pre' }}>
{`// App.tsx or _app.tsx
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Your app components */}
    </ThemeProvider>
  );
}`}
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        4. Tailwind CSS Config Export
      </Typography>
      <Typography variant="body1" paragraph>
        Tailwind users get a complete tailwind.config.js file with custom colors, spacing, typography, and more, ready to extend your Tailwind configuration.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Tailwind Configuration Export
        </Typography>
        <Box sx={{ bgcolor: 'white', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.7rem', overflow: 'auto', whiteSpace: 'pre' }}>
{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#60a5fa',
          DEFAULT: '#3b82f6',
          dark: '#2563eb',
        },
        secondary: {
          light: '#a78bfa',
          DEFAULT: '#8b5cf6',
          dark: '#7c3aed',
        },
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        DEFAULT: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
      },
    },
  },
}`}
        </Box>
      </Paper>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Using Tailwind Tokens
      </Typography>
      <Paper sx={{ p: 3, my: 3, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Box sx={{ bgcolor: 'white', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.8rem', overflow: 'auto' }}>
{`<button className="bg-primary text-white px-lg py-md rounded-md shadow-md">
  Primary Button
</button>

<h1 className="font-heading text-3xl font-bold text-gray-900">
  Page Title
</h1>`}
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Export Best Practices
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'primary.main', color: 'primary.contrastText', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
          <Settings sx={{ mr: 1 }} />
          Integration Guidelines
        </Typography>
        <Box component="ol">
          <li>
            <Typography variant="body1" paragraph>
              <strong>Version control your tokens:</strong> Commit exported files to Git so changes are tracked
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Document token usage:</strong> Create a guide showing which tokens to use where
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Automate exports:</strong> Set up CI/CD to regenerate tokens when design system updates
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Test after exporting:</strong> Verify that exported tokens work correctly in your app
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Use semantic names:</strong> Prefer --color-primary over --blue-500 for maintainability
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Maintain fallbacks:</strong> Include fallback values for older browsers
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Keep tokens DRY:</strong> Don't duplicate values - reference tokens from other tokens
            </Typography>
          </li>
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Advanced: Multi-Theme Exports
      </Typography>
      <Typography variant="body1" paragraph>
        For applications supporting multiple themes (light/dark, brand variations), export separate token sets and switch between them.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Multi-Theme CSS Variables
        </Typography>
        <Box sx={{ bgcolor: 'white', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.75rem', overflow: 'auto', whiteSpace: 'pre' }}>
{`:root {
  /* Light theme (default) */
  --bg-primary: #ffffff;
  --text-primary: #111827;
}

[data-theme="dark"] {
  /* Dark theme */
  --bg-primary: #121212;
  --text-primary: #e5e5e5;
}

[data-theme="brand-blue"] {
  /* Blue brand variant */
  --color-primary: #1e40af;
}

[data-theme="brand-purple"] {
  /* Purple brand variant */
  --color-primary: #6d28d9;
}`}
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Helpful Resources
      </Typography>
      <Box component="ul" sx={{ color: 'text.primary' }}>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://amzn.github.io/style-dictionary/" target="_blank" rel="noopener noreferrer">
              Style Dictionary - Design token transformer
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://www.designtokens.org/" target="_blank" rel="noopener noreferrer">
              Design Tokens Community Group - W3C specification
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://mui.com/material-ui/customization/theming/" target="_blank" rel="noopener noreferrer">
              Material UI Theming Documentation
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://tailwindcss.com/docs/configuration" target="_blank" rel="noopener noreferrer">
              Tailwind CSS Configuration
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <Link href="/docs/css-variables" passHref legacyBehavior>
              <MuiLink>CSS Variables (Crow Create Docs)</MuiLink>
            </Link>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <Link href="/docs/material-ui-theming" passHref legacyBehavior>
              <MuiLink>Material UI Theming (Crow Create Docs)</MuiLink>
            </Link>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <Link href="/docs/semantic-tokens" passHref legacyBehavior>
              <MuiLink>Semantic Tokens (Crow Create Docs)</MuiLink>
            </Link>
          </Typography>
        </li>
      </Box>

      <Box sx={{ mt: 4, p: 3, bgcolor: 'background.paper', borderRadius: 2, border: 1, borderColor: 'divider' }}>
        <Typography variant="h5" gutterBottom fontWeight={600}>
          Ready to Export Your Design System?
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Head over to the Create tool to build your design system and export it in your preferred format - CSS Variables, JSON, Material UI, or Tailwind CSS.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Link href="/create" passHref legacyBehavior>
            <Button component="a" variant="contained" size="large">
              Create & Export Design System
            </Button>
          </Link>
          <Link href="/docs" passHref legacyBehavior>
            <Button component="a" variant="outlined" size="large">
              View All Docs
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
