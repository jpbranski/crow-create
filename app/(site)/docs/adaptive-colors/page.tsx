import { Box, Typography, Alert, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Link as MuiLink, Button } from '@mui/material'
import { Palette, DevicesOther, AutoAwesome, Adjust } from '@mui/icons-material'
import Link from 'next/link'

export const metadata = {
  title: 'Adaptive Color Systems | Crow Create',
  description: 'Learn how to build color systems that adapt to context, including responsive colors, state-based colors, and adaptive design principles.',
}

export default function AdaptiveColorsPage() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
        Adaptive Color Systems
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Build intelligent color systems that adapt to context, user preferences, and environmental conditions for optimal usability and visual quality.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Alert severity="info" sx={{ mb: 4 }}>
        <strong>Why Adaptive Colors Matter:</strong> Static color systems can't address all user needs and contexts. Adaptive color systems respond to light conditions, user preferences, device capabilities, and interaction states to provide the best experience in every situation.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600}>
        What Are Adaptive Color Systems?
      </Typography>
      <Typography variant="body1" paragraph>
        Adaptive color systems intelligently adjust colors based on context - whether that's environmental (light/dark mode), behavioral (user interaction states), situational (screen size, device type), or user-defined (accessibility settings, personal preferences).
      </Typography>

      <Typography variant="body1" paragraph>
        Unlike static palettes that look the same everywhere, adaptive systems recognize that the same color might need different values or adjustments to maintain usability and aesthetics across varying conditions.
      </Typography>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Context-Based Color Adaptation
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Light and Dark Modes
      </Typography>
      <Typography variant="body1" paragraph>
        The most common form of adaptive color is light/dark mode switching. However, effective dark mode isn't just inverting colors - it requires thoughtful adaptation.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Adaptive Color Principles for Light/Dark
        </Typography>
        <Box component="ul" sx={{ color: 'text.primary' }}>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Adjust saturation:</strong> Colors appear more vibrant in dark mode. Reduce saturation by 10-15% for dark backgrounds.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Lighten primary colors:</strong> Dark mode primary colors should be lighter than light mode versions for proper contrast.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Avoid pure black:</strong> Use dark grays (#121212, #1a1a1a) instead of #000000 to reduce eye strain and allow layering.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Adapt semantic colors:</strong> Error red, success green need different tones for dark backgrounds.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Elevate with lightness:</strong> In dark mode, higher surfaces are lighter (opposite of light mode shadows).
            </Typography>
          </li>
        </Box>
      </Paper>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Adaptive Color Example: Primary Button
        </Typography>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre', overflow: 'auto' }}>
{`:root {
  /* Light mode */
  --color-primary: #3b82f6;  /* Saturated blue */
  --color-on-primary: #ffffff;
}

[data-theme="dark"] {
  /* Dark mode - lighter, less saturated */
  --color-primary: #60a5fa;  /* Lighter blue, -10% saturation */
  --color-on-primary: #0f172a;  /* Dark text for lighter button */
}

.button-primary {
  background: var(--color-primary);
  color: var(--color-on-primary);
}`}
        </Box>
      </Paper>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Ambient Light Adaptation
      </Typography>
      <Typography variant="body1" paragraph>
        Some systems adapt based on ambient light sensors (common on mobile devices) or time of day.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Detecting User Preference with prefers-color-scheme
        </Typography>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre', overflow: 'auto' }}>
{`/* Auto-adapt based on system preference */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #1a1a1a;
    --text-color: #f5f5f5;
  }
}

@media (prefers-color-scheme: light) {
  :root {
    --bg-color: #ffffff;
    --text-color: #1a1a1a;
  }
}`}
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        State-Based Color Adaptation
      </Typography>
      <Typography variant="body1" paragraph>
        Colors should adapt to communicate component states - hover, active, focus, disabled, selected, error, and more.
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Interactive States
      </Typography>

      <TableContainer component={Paper} sx={{ my: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>State</strong></TableCell>
              <TableCell><strong>Color Adaptation</strong></TableCell>
              <TableCell><strong>Typical Change</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Default (Rest)</TableCell>
              <TableCell>Base color</TableCell>
              <TableCell>100% of defined color</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Hover</TableCell>
              <TableCell>Lighten or darken 8-12%</TableCell>
              <TableCell>Lightness +8% (light mode), -8% (dark mode)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Active/Pressed</TableCell>
              <TableCell>Darken 12-16%</TableCell>
              <TableCell>Lightness +12% (light mode), -12% (dark mode)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Focus</TableCell>
              <TableCell>Add outline, may lighten fill</TableCell>
              <TableCell>3px outline at 100% color + lightened fill</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Disabled</TableCell>
              <TableCell>Reduce opacity or desaturate</TableCell>
              <TableCell>40-60% opacity or grayscale</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Selected</TableCell>
              <TableCell>Saturate, add background tint</TableCell>
              <TableCell>+10-15% saturation, light background tint</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Error</TableCell>
              <TableCell>Shift to error color</TableCell>
              <TableCell>Semantic error color with proper contrast</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Adaptive Button States Example
        </Typography>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre', overflow: 'auto' }}>
{`.button {
  --btn-bg: #3b82f6;
  --btn-text: #ffffff;

  background: var(--btn-bg);
  color: var(--btn-text);
  transition: all 200ms ease;
}

.button:hover {
  --btn-bg: #2563eb;  /* Darker on hover */
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.button:active {
  --btn-bg: #1d4ed8;  /* Even darker when pressed */
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.button:focus-visible {
  outline: 3px solid #60a5fa;
  outline-offset: 2px;
}

.button:disabled {
  --btn-bg: #94a3b8;  /* Desaturated gray */
  --btn-text: #cbd5e1;
  cursor: not-allowed;
  opacity: 0.6;
}`}
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Responsive Color Adaptation
      </Typography>
      <Typography variant="body1" paragraph>
        Colors can adapt based on screen size, device type, or viewport characteristics.
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Screen Size Considerations
      </Typography>

      <Box component="ul" sx={{ color: 'text.primary', pl: 2 }}>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Mobile:</strong> Higher contrast may be needed for outdoor viewing. Consider slightly darker text, more saturated colors.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Tablet:</strong> Balance between mobile and desktop. Standard contrast works well.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Desktop:</strong> More subtle colors possible with controlled viewing environments. Can use softer backgrounds.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Large displays:</strong> Avoid large areas of saturated color that may cause eye strain.
          </Typography>
        </li>
      </Box>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Responsive Color Adaptation Example
        </Typography>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre', overflow: 'auto' }}>
{`:root {
  /* Mobile - Higher contrast for outdoor viewing */
  --text-primary: #111827;
  --text-secondary: #4b5563;
}

@media (min-width: 768px) {
  :root {
    /* Tablet/Desktop - Softer for indoor viewing */
    --text-primary: #1f2937;
    --text-secondary: #6b7280;
  }
}`}
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        User Preference Adaptation
      </Typography>
      <Typography variant="body1" paragraph>
        Modern CSS provides media queries to detect user preferences, allowing colors to adapt to individual needs.
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Preference Media Queries
      </Typography>

      <TableContainer component={Paper} sx={{ my: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Media Query</strong></TableCell>
              <TableCell><strong>Purpose</strong></TableCell>
              <TableCell><strong>Adaptation Strategy</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>prefers-color-scheme</TableCell>
              <TableCell>Detect light/dark preference</TableCell>
              <TableCell>Switch to appropriate theme automatically</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>prefers-contrast</TableCell>
              <TableCell>User needs high/low contrast</TableCell>
              <TableCell>Increase or decrease color differences</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>prefers-reduced-motion</TableCell>
              <TableCell>User sensitive to motion</TableCell>
              <TableCell>Disable color transitions/animations</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>inverted-colors</TableCell>
              <TableCell>System colors inverted</TableCell>
              <TableCell>Adjust colors to maintain readability</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          High Contrast Mode Support
        </Typography>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre', overflow: 'auto' }}>
{`@media (prefers-contrast: high) {
  :root {
    /* Increase contrast for accessibility */
    --bg-primary: #ffffff;
    --text-primary: #000000;
    --border-color: #000000;

    /* Use more saturated, darker colors */
    --color-primary: #1e40af;  /* Darker blue */
    --color-success: #065f46;  /* Darker green */
    --color-error: #991b1b;    /* Darker red */
  }

  .button {
    /* Add visible borders in high contrast */
    border: 2px solid currentColor;
  }
}

@media (prefers-contrast: low) {
  :root {
    /* Reduce contrast for users who prefer it */
    --text-primary: #374151;   /* Softer than pure black */
    --border-color: #e5e7eb;   /* Very subtle borders */
  }
}`}
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Contextual Color Adaptation
      </Typography>
      <Typography variant="body1" paragraph>
        Colors can adapt based on where they appear in your interface - on different backgrounds, in different sections, or serving different purposes.
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Background-Aware Colors
      </Typography>
      <Typography variant="body1" paragraph>
        The same semantic color may need different values when placed on different background colors to maintain WCAG contrast.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Adaptive Text Colors Based on Background
        </Typography>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre', overflow: 'auto' }}>
{`/* Light background */
.bg-light {
  background: #ffffff;
  --text-primary: #111827;
  --text-secondary: #6b7280;
  --text-link: #2563eb;
}

/* Dark background */
.bg-dark {
  background: #111827;
  --text-primary: #f9fafb;
  --text-secondary: #d1d5db;
  --text-link: #60a5fa;
}

/* Colored background */
.bg-primary {
  background: #3b82f6;
  --text-primary: #ffffff;
  --text-secondary: #dbeafe;
  --text-link: #eff6ff;
}

/* Text automatically adapts */
.text {
  color: var(--text-primary);
}`}
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Dynamic Color Computation
      </Typography>
      <Typography variant="body1" paragraph>
        Advanced adaptive systems can compute colors dynamically using JavaScript and CSS custom properties.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          JavaScript-Powered Color Adaptation
        </Typography>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.75rem', whiteSpace: 'pre', overflow: 'auto' }}>
{`// Function to lighten/darken colors
function adjustColor(color, amount) {
  const num = parseInt(color.replace('#', ''), 16);
  const r = Math.max(0, Math.min(255, (num >> 16) + amount));
  const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amount));
  const b = Math.max(0, Math.min(255, (num & 0x0000FF) + amount));
  return \`#\${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}\`;
}

// Apply adaptive hover states
const buttons = document.querySelectorAll('.adaptive-button');
buttons.forEach(button => {
  const baseColor = getComputedStyle(button).backgroundColor;
  // Convert to hex and adjust for hover
  const hoverColor = adjustColor(baseColor, -20);
  button.style.setProperty('--hover-color', hoverColor);
});`}
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Best Practices for Adaptive Color Systems
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'primary.main', color: 'primary.contrastText', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
          <AutoAwesome sx={{ mr: 1 }} />
          Adaptive Color Guidelines
        </Typography>
        <Box component="ol">
          <li><Typography variant="body1" paragraph><strong>Test all states:</strong> Verify colors work in all adaptive contexts (light/dark, hover, focus, etc.)</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Maintain contrast:</strong> Ensure WCAG compliance in all adaptive states and themes</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Provide fallbacks:</strong> Define sensible defaults when preferences can't be detected</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Be consistent:</strong> Apply adaptation rules consistently across all colors</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Test with real users:</strong> Verify that adaptations improve UX for target audiences</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Document behavior:</strong> Clearly explain how and why colors adapt</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Consider performance:</strong> Minimize repaints when colors adapt dynamically</Typography></li>
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Helpful Resources
      </Typography>
      <Box component="ul" sx={{ color: 'text.primary' }}>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://web.dev/prefers-color-scheme/" target="_blank" rel="noopener noreferrer">
              web.dev - prefers-color-scheme Guide
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast" target="_blank" rel="noopener noreferrer">
              MDN - prefers-contrast
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
            <Link href="/docs/css-variables" passHref legacyBehavior>
              <MuiLink>CSS Variables (Crow Create Docs)</MuiLink>
            </Link>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <Link href="/docs/accessibility" passHref legacyBehavior>
              <MuiLink>Accessibility Basics (Crow Create Docs)</MuiLink>
            </Link>
          </Typography>
        </li>
      </Box>

      <Box sx={{ mt: 4, p: 3, bgcolor: 'background.paper', borderRadius: 2, border: 1, borderColor: 'divider' }}>
        <Typography variant="h5" gutterBottom fontWeight={600}>
          Ready to Build an Adaptive Color System?
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Use Crow Create to generate adaptive color palettes with automatic light/dark mode variants and state-based color adjustments.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Link href="/create" passHref legacyBehavior>
            <Button component="a" variant="contained" size="large">
              Create Adaptive Colors
            </Button>
          </Link>
          <Link href="/docs/dark-mode" passHref legacyBehavior>
            <Button component="a" variant="outlined" size="large">
              Learn Dark Mode Design
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
