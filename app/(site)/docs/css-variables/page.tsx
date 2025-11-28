import { Box, Typography, Alert, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Link as MuiLink, Button } from '@mui/material'
import { Code, Palette, Speed, Devices } from '@mui/icons-material'
import Link from 'next/link'

export const metadata = {
  title: 'CSS Variables | Crow Create',
  description: 'Learn about CSS custom properties including theming with CSS variables, runtime updates, browser support, and fallback strategies.',
}

export default function CSSVariablesPage() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
        CSS Variables (Custom Properties)
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Master CSS custom properties to create dynamic, maintainable, and themeable design systems.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Alert severity="info" sx={{ mb: 4 }}>
        <strong>Why CSS Variables Matter:</strong> CSS custom properties enable dynamic theming, reduce code duplication, and allow runtime updates without recompiling stylesheets. They're native to CSS, performant, and supported by all modern browsers.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600}>
        What Are CSS Variables?
      </Typography>
      <Typography variant="body1" paragraph>
        CSS custom properties (commonly called CSS variables) are entities defined by developers that contain specific values to be reused throughout a document. They're set using custom property notation (e.g., --main-color: black;) and accessed using the var() function (e.g., color: var(--main-color);).
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Basic CSS Variable Syntax
        </Typography>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre' }}>
{`:root {
  /* Define variables */
  --primary-color: #3b82f6;
  --text-color: #1f2937;
  --spacing-unit: 8px;
}

.button {
  /* Use variables */
  background-color: var(--primary-color);
  color: white;
  padding: calc(var(--spacing-unit) * 2);
}`}
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Advantages of CSS Variables
      </Typography>

      <Box component="ul" sx={{ color: 'text.primary', pl: 2 }}>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Runtime Updates:</strong> Change values dynamically with JavaScript without recompiling CSS
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Cascade and Inheritance:</strong> Variables follow normal CSS cascade rules and can be scoped
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>No Build Step Required:</strong> Unlike preprocessor variables (SASS, LESS), CSS variables work natively in browsers
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Theming:</strong> Easily implement light/dark modes and multiple themes
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Maintainability:</strong> Update values in one place to affect entire design system
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Developer Tools:</strong> Inspect and modify variables in browser DevTools in real-time
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Use in Calculations:</strong> Combine with calc() for dynamic spacing and sizing
          </Typography>
        </li>
      </Box>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Variable Naming Conventions
      </Typography>
      <Typography variant="body1" paragraph>
        Consistent naming makes variables discoverable and maintainable. Follow these best practices:
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Naming Best Practices
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" fontWeight={600}>1. Use Semantic Names</Typography>
          <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.85rem', my: 1 }}>
{`/* Good - Semantic */
--color-primary: #3b82f6;
--color-text-primary: #1f2937;
--spacing-section: 48px;

/* Avoid - Non-semantic */
--blue: #3b82f6;
--dark-gray: #1f2937;
--big-space: 48px;`}
          </Box>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" fontWeight={600}>2. Use Kebab-Case</Typography>
          <Typography variant="body2" color="text.secondary">
            CSS variables are case-sensitive. Kebab-case (dashes) is the CSS convention.
          </Typography>
          <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.85rem', my: 1 }}>
{`/* Good */
--primary-button-color: blue;

/* Works but inconsistent with CSS conventions */
--primaryButtonColor: blue;`}
          </Box>
        </Box>

        <Box>
          <Typography variant="subtitle1" fontWeight={600}>3. Group by Category</Typography>
          <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.85rem', my: 1 }}>
{`/* Color variables */
--color-primary: #3b82f6;
--color-secondary: #8b5cf6;

/* Spacing variables */
--spacing-xs: 4px;
--spacing-sm: 8px;

/* Typography variables */
--font-family-base: 'Inter', sans-serif;
--font-size-base: 16px;`}
          </Box>
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Scoping CSS Variables
      </Typography>
      <Typography variant="body1" paragraph>
        CSS variables can be scoped globally or to specific elements, giving you control over where values apply.
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Global Scope (:root)
      </Typography>
      <Typography variant="body1" paragraph>
        Define variables on :root to make them available throughout your entire document.
      </Typography>

      <Paper sx={{ p: 3, my: 2, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre' }}>
{`:root {
  --primary-color: #3b82f6;
  --font-size-base: 16px;
}

/* Available everywhere */
.button {
  background: var(--primary-color);
}

.text {
  font-size: var(--font-size-base);
}`}
        </Box>
      </Paper>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Local Scope (Element-specific)
      </Typography>
      <Typography variant="body1" paragraph>
        Define variables on specific elements to limit their scope. Child elements inherit these values.
      </Typography>

      <Paper sx={{ p: 3, my: 2, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre' }}>
{`.card {
  --card-padding: 16px;
  --card-bg: white;
  padding: var(--card-padding);
  background: var(--card-bg);
}

.card-large {
  /* Override for this variant */
  --card-padding: 24px;
}

/* --card-padding is NOT available outside .card */`}
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Theming with CSS Variables
      </Typography>
      <Typography variant="body1" paragraph>
        CSS variables excel at theming. By changing variable values, you can instantly switch entire color schemes.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
          <Palette sx={{ mr: 1, color: 'primary.main' }} />
          Light/Dark Mode Implementation
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre' }}>
{`:root {
  /* Light mode (default) */
  --color-bg: #ffffff;
  --color-text: #1f2937;
  --color-border: #e5e7eb;
}

[data-theme="dark"] {
  /* Dark mode overrides */
  --color-bg: #1f2937;
  --color-text: #f9fafb;
  --color-border: #374151;
}

/* Components use the same variables */
body {
  background: var(--color-bg);
  color: var(--color-text);
}

.card {
  border: 1px solid var(--color-border);
}`}
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Toggle the theme by adding/removing the data-theme="dark" attribute on the root element.
        </Typography>
      </Paper>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Multiple Theme Support
      </Typography>
      <Paper sx={{ p: 3, my: 2, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre' }}>
{`:root {
  --theme-primary: #3b82f6; /* Default blue */
}

[data-theme="purple"] {
  --theme-primary: #8b5cf6;
}

[data-theme="green"] {
  --theme-primary: #10b981;
}

.button-primary {
  background: var(--theme-primary);
}`}
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Runtime Updates with JavaScript
      </Typography>
      <Typography variant="body1" paragraph>
        One of the most powerful features of CSS variables is the ability to update them dynamically with JavaScript.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Reading and Writing CSS Variables
        </Typography>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre' }}>
{`// Get computed value
const root = document.documentElement;
const primaryColor = getComputedStyle(root)
  .getPropertyValue('--color-primary');

// Set new value
root.style.setProperty('--color-primary', '#10b981');

// Set on specific element
const card = document.querySelector('.card');
card.style.setProperty('--card-padding', '32px');`}
        </Box>
      </Paper>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Practical Example: User Customization
      </Typography>
      <Paper sx={{ p: 3, my: 2, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre' }}>
{`// Let users customize font size
function setFontSize(size) {
  document.documentElement.style
    .setProperty('--font-size-base', size + 'px');
}

// User preference: 18px
setFontSize(18);

// Save to localStorage
localStorage.setItem('fontSize', '18');`}
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Fallback Values
      </Typography>
      <Typography variant="body1" paragraph>
        The var() function accepts a fallback value as a second parameter, used when the variable is undefined.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Fallback Syntax
        </Typography>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre' }}>
{`.button {
  /* If --button-bg is not defined, use #3b82f6 */
  background: var(--button-bg, #3b82f6);

  /* Fallback to another variable */
  color: var(--button-text, var(--text-primary, black));

  /* Fallback to calc expression */
  padding: var(--button-padding, calc(1rem * 2));
}`}
        </Box>
      </Paper>

      <Alert severity="success" sx={{ my: 3 }}>
        <strong>Best Practice:</strong> Always provide fallback values for critical styling properties to ensure graceful degradation in older browsers or when variables aren't defined.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Browser Support
      </Typography>
      <Typography variant="body1" paragraph>
        CSS custom properties are supported in all modern browsers. However, understanding support levels helps you make informed decisions.
      </Typography>

      <TableContainer component={Paper} sx={{ my: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Browser</strong></TableCell>
              <TableCell><strong>Version</strong></TableCell>
              <TableCell><strong>Support Level</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Chrome</TableCell>
              <TableCell>49+</TableCell>
              <TableCell>Full support</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Firefox</TableCell>
              <TableCell>31+</TableCell>
              <TableCell>Full support</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Safari</TableCell>
              <TableCell>9.1+</TableCell>
              <TableCell>Full support</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Edge</TableCell>
              <TableCell>15+</TableCell>
              <TableCell>Full support</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Internet Explorer</TableCell>
              <TableCell>All versions</TableCell>
              <TableCell>No support</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="body1" paragraph>
        For Internet Explorer 11 and older browsers, you must provide fallback values or use a PostCSS plugin to transform variables into static values.
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Fallback Strategy for Older Browsers
      </Typography>
      <Paper sx={{ p: 3, my: 2, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre' }}>
{`.button {
  /* Fallback for browsers without CSS variable support */
  background: #3b82f6;
  /* Modern browsers use the variable */
  background: var(--color-primary);

  /* Browser reads top-to-bottom, uses what it understands */
}`}
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Advanced Techniques
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Using calc() with Variables
      </Typography>
      <Paper sx={{ p: 3, my: 2, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre' }}>
{`:root {
  --spacing-unit: 8px;
}

.container {
  padding: calc(var(--spacing-unit) * 2);  /* 16px */
  margin: calc(var(--spacing-unit) * 4);   /* 32px */
}

.grid {
  grid-gap: calc(var(--spacing-unit) / 2); /* 4px */
}`}
        </Box>
      </Paper>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Color Manipulation
      </Typography>
      <Typography variant="body1" paragraph>
        Store RGB values separately to enable runtime color manipulation.
      </Typography>
      <Paper sx={{ p: 3, my: 2, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre' }}>
{`:root {
  /* Store RGB channels separately */
  --color-primary-r: 59;
  --color-primary-g: 130;
  --color-primary-b: 246;
}

.button {
  /* Full opacity */
  background: rgb(
    var(--color-primary-r),
    var(--color-primary-g),
    var(--color-primary-b)
  );
}

.button:hover {
  /* Semi-transparent */
  background: rgba(
    var(--color-primary-r),
    var(--color-primary-g),
    var(--color-primary-b),
    0.8
  );
}`}
        </Box>
      </Paper>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Responsive Variables
      </Typography>
      <Typography variant="body1" paragraph>
        Change variable values based on media queries for responsive design.
      </Typography>
      <Paper sx={{ p: 3, my: 2, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre' }}>
{`:root {
  --container-padding: 16px;
  --heading-size: 24px;
}

@media (min-width: 768px) {
  :root {
    --container-padding: 32px;
    --heading-size: 36px;
  }
}

@media (min-width: 1024px) {
  :root {
    --container-padding: 48px;
    --heading-size: 48px;
  }
}

.container {
  padding: var(--container-padding);
}

h1 {
  font-size: var(--heading-size);
}`}
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Common Pitfalls and Solutions
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'error.light', color: '#000', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Mistakes to Avoid
        </Typography>
        <Box component="ul">
          <li>
            <Typography variant="body1" paragraph>
              <strong>No unit inference:</strong> calc(var(--spacing) * 2) where --spacing: 8 won't work. Use --spacing: 8px.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Undefined variables silently fail:</strong> Always test that variables are defined or use fallbacks.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Case sensitivity:</strong> --Color-Primary and --color-primary are different variables.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Inheritance issues:</strong> Variables inherit like normal CSS properties. Scope carefully.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Performance:</strong> Don't create thousands of variables. Group and reuse where possible.
            </Typography>
          </li>
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Helpful Resources
      </Typography>
      <Box component="ul" sx={{ color: 'text.primary' }}>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" target="_blank" rel="noopener noreferrer">
              MDN Web Docs - Using CSS Custom Properties
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://www.w3.org/TR/css-variables-1/" target="_blank" rel="noopener noreferrer">
              W3C CSS Custom Properties Specification
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://caniuse.com/css-variables" target="_blank" rel="noopener noreferrer">
              Can I Use - CSS Variables Browser Support
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <Link href="/docs/dark-mode" passHref legacyBehavior>
              <MuiLink>Designing for Dark Mode (Crow Create Docs)</MuiLink>
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
          Ready to Export CSS Variables?
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Use Crow Create to generate a complete CSS custom properties file for your design system with all your colors, typography, and spacing tokens.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Link href="/create" passHref legacyBehavior>
            <Button component="a" variant="contained" size="large">
              Generate CSS Variables
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
