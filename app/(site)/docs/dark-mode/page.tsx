import { Box, Typography, Alert, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Link as MuiLink, Button } from '@mui/material'
import { DarkMode, Contrast, Palette, Warning } from '@mui/icons-material'
import Link from 'next/link'

export const metadata = {
  title: 'Designing for Dark Mode | Crow Create',
  description: 'Learn dark mode design best practices including avoiding pure black, maintaining contrast, color inversions, and creating accessible dark themes.',
}

export default function DarkModePage() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
        Designing for Dark Mode
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Master dark mode design to create comfortable, accessible experiences for users in low-light environments and those who prefer darker interfaces.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Alert severity="info" sx={{ mb: 4 }}>
        <strong>Why Dark Mode Matters:</strong> Dark mode reduces eye strain in low-light conditions, saves battery on OLED screens, and is strongly preferred by many users. Proper dark mode design requires more than inverting colors - it demands thoughtful contrast, color adaptation, and accessibility considerations.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600}>
        The Problem with Pure Black
      </Typography>
      <Typography variant="body1" paragraph>
        One of the most common dark mode mistakes is using pure black (#000000) as the background. While it seems logical, pure black creates several problems.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
          <Warning sx={{ mr: 1, color: 'warning.main' }} />
          Issues with Pure Black Backgrounds
        </Typography>
        <Box component="ul" sx={{ color: 'text.primary' }}>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Eye strain and halation:</strong> White text on pure black creates a harsh contrast that causes "halation" - a glow effect where light colors bleed into dark backgrounds, making text harder to read.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Loss of depth:</strong> Pure black provides no way to create elevation or layering - everything sits at the same level.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Looks unnatural:</strong> Even in the darkest rooms, surfaces reflect some light. Pure black feels artificial.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>OLED smearing:</strong> On OLED displays, pure black pixels are off completely, which can cause smearing effects during scrolling.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Accessibility issues:</strong> Maximum contrast isn't always better. Many users with astigmatism or sensitivity find it uncomfortable.
            </Typography>
          </li>
        </Box>
      </Paper>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Better Dark Background Colors
      </Typography>

      <TableContainer component={Paper} sx={{ my: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Color</strong></TableCell>
              <TableCell><strong>Hex Value</strong></TableCell>
              <TableCell><strong>Use Case</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Near Black</TableCell>
              <TableCell>#0a0a0a</TableCell>
              <TableCell>Very dark, minimal reflection</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Dark Charcoal</TableCell>
              <TableCell>#121212</TableCell>
              <TableCell>Material Design recommendation, balanced</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Slightly Lighter</TableCell>
              <TableCell>#1a1a1a</TableCell>
              <TableCell>More comfortable for extended reading</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Dark Gray</TableCell>
              <TableCell>#1e1e1e</TableCell>
              <TableCell>VS Code default, good for code editors</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Warmer Dark</TableCell>
              <TableCell>#1f1f1f</TableCell>
              <TableCell>Slightly warmer tone, less stark</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Alert severity="success" sx={{ my: 3 }}>
        <strong>Recommendation:</strong> Use #121212 (Material Design's choice) or #1a1a1a as your base dark mode background. These provide enough contrast for colored elements while avoiding pure black's harshness.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Creating Elevation in Dark Mode
      </Typography>
      <Typography variant="body1" paragraph>
        In light mode, elevation is created with shadows (darker = higher). In dark mode, this reverses: elevated surfaces are lighter.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Material Design Elevation System for Dark Mode
        </Typography>
        <Typography variant="body1" paragraph>
          Material Design adds white overlays to create elevation. Higher surfaces get lighter.
        </Typography>

        <TableContainer sx={{ my: 2 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell><strong>Elevation</strong></TableCell>
                <TableCell><strong>Overlay Opacity</strong></TableCell>
                <TableCell><strong>Resulting Color</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>0dp (Base)</TableCell>
                <TableCell>0%</TableCell>
                <TableCell>#121212</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1dp</TableCell>
                <TableCell>5%</TableCell>
                <TableCell>#1e1e1e</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2dp</TableCell>
                <TableCell>7%</TableCell>
                <TableCell>#222222</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>4dp</TableCell>
                <TableCell>9%</TableCell>
                <TableCell>#242424</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>8dp</TableCell>
                <TableCell>11%</TableCell>
                <TableCell>#272727</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>16dp</TableCell>
                <TableCell>12%</TableCell>
                <TableCell>#2c2c2c</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>24dp</TableCell>
                <TableCell>14%</TableCell>
                <TableCell>#2e2e2e</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Paper sx={(theme) => ({ p: 3, my: 3, bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100], borderRadius: 2 })}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Implementing Elevation with CSS
        </Typography>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre', overflow: 'auto' }}>
{`[data-theme="dark"] {
  --surface-0: #121212;  /* Base */
  --surface-1: #1e1e1e;  /* Cards */
  --surface-2: #232323;  /* Raised elements */
  --surface-3: #252525;  /* Menus */
  --surface-4: #272727;  /* Nav bar */
  --surface-5: #2c2c2c;  /* Modals */
}

.card {
  background: var(--surface-1);
}

.modal {
  background: var(--surface-5);
}`}
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Maintaining Contrast in Dark Mode
      </Typography>
      <Typography variant="body1" paragraph>
        WCAG contrast requirements apply equally to dark mode. However, achieving proper contrast in dark mode requires different color choices than light mode.
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Text Contrast
      </Typography>

      <TableContainer component={Paper} sx={{ my: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Text Type</strong></TableCell>
              <TableCell><strong>Light Mode</strong></TableCell>
              <TableCell><strong>Dark Mode</strong></TableCell>
              <TableCell><strong>Contrast Ratio</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Primary Text</TableCell>
              <TableCell>#1a1a1a on #ffffff</TableCell>
              <TableCell>#f5f5f5 on #121212</TableCell>
              <TableCell>15:1 / 14:1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Secondary Text</TableCell>
              <TableCell>#666666 on #ffffff</TableCell>
              <TableCell>#b3b3b3 on #121212</TableCell>
              <TableCell>5.7:1 / 8.4:1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Disabled Text</TableCell>
              <TableCell>#999999 on #ffffff</TableCell>
              <TableCell>#666666 on #121212</TableCell>
              <TableCell>2.8:1 / 4.5:1</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Alert severity="warning" sx={{ my: 3 }}>
        <strong>Important:</strong> Don't use pure white (#ffffff) for text in dark mode. It creates the same halation problem as pure black backgrounds. Use off-white colors like #f5f5f5, #e5e5e5, or #d4d4d4.
      </Alert>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Color Contrast
      </Typography>
      <Typography variant="body1" paragraph>
        Colors that work in light mode often need adjustment for dark mode to maintain both aesthetics and WCAG compliance.
      </Typography>

      <Paper sx={(theme) => ({ p: 3, my: 3, bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100], borderRadius: 2 })}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Color Adaptation: Light to Dark Mode
        </Typography>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre', overflow: 'auto' }}>
{`:root {
  /* Light mode - Darker, more saturated */
  --color-primary: #2563eb;    /* Blue 600 */
  --color-success: #16a34a;    /* Green 600 */
  --color-error: #dc2626;      /* Red 600 */
  --color-warning: #ea580c;    /* Orange 600 */
}

[data-theme="dark"] {
  /* Dark mode - Lighter, less saturated */
  --color-primary: #60a5fa;    /* Blue 400 */
  --color-success: #4ade80;    /* Green 400 */
  --color-error: #f87171;      /* Red 400 */
  --color-warning: #fb923c;    /* Orange 400 */
}`}
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Notice: Dark mode colors are typically 2-3 shades lighter from the same color scale
        </Typography>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Color Inversions and Adjustments
      </Typography>
      <Typography variant="body1" paragraph>
        Simply inverting colors creates poor dark mode experiences. Instead, thoughtfully adapt each color for dark backgrounds.
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        What NOT to Invert
      </Typography>

      <Box component="ul" sx={{ color: 'text.primary', pl: 2 }}>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Images and photos:</strong> Never invert. They should remain in full color.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Brand colors:</strong> Logos and brand elements should maintain their identity.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Charts and data visualization:</strong> Keep original colors or use a dark-optimized palette.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Syntax highlighting:</strong> Use purpose-built dark syntax themes, not inverted light themes.
          </Typography>
        </li>
      </Box>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Desaturation Strategy
      </Typography>
      <Typography variant="body1" paragraph>
        Highly saturated colors appear to glow on dark backgrounds. Reduce saturation by 10-20% for dark mode.
      </Typography>

      <Paper sx={(theme) => ({ p: 3, my: 3, bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100], borderRadius: 2 })}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Saturation Adjustment Example
        </Typography>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre', overflow: 'auto' }}>
{`/* Light mode: Full saturation */
--primary-hsl: 221, 83%, 53%;     /* hsl(221, 83%, 53%) */

/* Dark mode: Reduced saturation, increased lightness */
--primary-hsl: 221, 70%, 65%;     /* hsl(221, 70%, 65%) */

.button {
  background: hsl(var(--primary-hsl));
}`}
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Dark Mode Best Practices
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'primary.main', color: 'primary.contrastText', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
          <DarkMode sx={{ mr: 1 }} />
          Essential Dark Mode Guidelines
        </Typography>
        <Box component="ol">
          <li>
            <Typography variant="body1" paragraph>
              <strong>Avoid pure black (#000) and pure white (#fff):</strong> Use #121212 for backgrounds and #e5e5e5 for text
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Test WCAG contrast:</strong> Verify all text and UI elements meet AA or AAA standards in dark mode
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Reduce saturation:</strong> Desaturate bright colors by 10-20% to prevent glowing
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Lighten primary colors:</strong> Use lighter shades of your brand colors for dark backgrounds
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Create elevation with lightness:</strong> Higher surfaces should be lighter, not darker
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Don't invert images:</strong> Keep photos, illustrations, and logos in their original colors
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Reduce shadows:</strong> Shadows are less visible in dark mode. Use elevation changes instead
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Test in real conditions:</strong> View your dark mode in actual low-light environments
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Respect user preference:</strong> Use prefers-color-scheme and allow manual override
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Consider accessibility:</strong> Some users need dark mode for medical reasons, not preference
            </Typography>
          </li>
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Implementation Strategies
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        CSS Custom Properties Approach
      </Typography>
      <Paper sx={(theme) => ({ p: 3, my: 3, bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100], borderRadius: 2 })}>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.75rem', whiteSpace: 'pre', overflow: 'auto' }}>
{`:root {
  /* Light mode colors */
  --bg-primary: #ffffff;
  --bg-secondary: #f9fafb;
  --text-primary: #111827;
  --text-secondary: #6b7280;
  --border: #e5e7eb;
}

[data-theme="dark"] {
  /* Dark mode colors */
  --bg-primary: #121212;
  --bg-secondary: #1e1e1e;
  --text-primary: #e5e5e5;
  --text-secondary: #a3a3a3;
  --border: #404040;
}

/* Components automatically adapt */
body {
  background: var(--bg-primary);
  color: var(--text-primary);
}`}
        </Box>
      </Paper>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Detecting System Preference
      </Typography>
      <Paper sx={(theme) => ({ p: 3, my: 3, bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100], borderRadius: 2 })}>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre', overflow: 'auto' }}>
{`/* Auto dark mode based on system preference */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #121212;
    --text-primary: #e5e5e5;
    /* ... other dark mode variables */
  }
}

/* JavaScript detection */
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

/* Listen for changes */
window.matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', e => {
    const newColorScheme = e.matches ? "dark" : "light";
    document.documentElement.setAttribute('data-theme', newColorScheme);
  });`}
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Common Dark Mode Mistakes
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'error.light', color: '#000', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Mistakes to Avoid
        </Typography>
        <Box component="ul">
          <li><Typography variant="body1">Using pure black (#000000) for backgrounds</Typography></li>
          <li><Typography variant="body1">Using pure white (#ffffff) for text</Typography></li>
          <li><Typography variant="body1">Simply inverting all light mode colors</Typography></li>
          <li><Typography variant="body1">Forgetting to adjust shadows and borders</Typography></li>
          <li><Typography variant="body1">Inverting images and photos</Typography></li>
          <li><Typography variant="body1">Not testing for WCAG contrast compliance</Typography></li>
          <li><Typography variant="body1">Using the same color saturation as light mode</Typography></li>
          <li><Typography variant="body1">Not providing a way to override system preference</Typography></li>
          <li><Typography variant="body1">Forgetting to style third-party components</Typography></li>
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Helpful Resources
      </Typography>
      <Box component="ul" sx={{ color: 'text.primary' }}>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://material.io/design/color/dark-theme.html" target="_blank" rel="noopener noreferrer">
              Material Design - Dark Theme
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://developer.apple.com/design/human-interface-guidelines/dark-mode" target="_blank" rel="noopener noreferrer">
              Apple Human Interface Guidelines - Dark Mode
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://web.dev/prefers-color-scheme/" target="_blank" rel="noopener noreferrer">
              web.dev - prefers-color-scheme
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <Link href="/docs/adaptive-colors" passHref legacyBehavior>
              <MuiLink>Adaptive Color Systems (Crow Create Docs)</MuiLink>
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
          Ready to Create Your Dark Mode?
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Use Crow Create to generate properly adapted dark mode color palettes with automatic elevation, contrast adjustments, and accessibility built in.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Link href="/create" passHref legacyBehavior>
            <Button component="a" variant="contained" size="large">
              Generate Dark Mode Palette
            </Button>
          </Link>
          <Link href="/docs/adaptive-colors" passHref legacyBehavior>
            <Button component="a" variant="outlined" size="large">
              Learn Adaptive Colors
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
