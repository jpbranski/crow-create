import { Box, Typography, Alert, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Link as MuiLink, Button } from '@mui/material'
import { Layers, Brightness7, ViewInAr } from '@mui/icons-material'
import Link from 'next/link'

export const metadata = {
  title: 'Shadows & Depth | Crow Create',
  description: 'Learn about creating depth with shadows including Material Design elevation, shadow parameters, depth hierarchy, and soft vs hard shadows.',
}

export default function ShadowsDepthPage() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
        Shadows & Depth
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Master the art of using shadows to create visual hierarchy, depth, and spatial relationships in your interfaces.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Alert severity="info" sx={{ mb: 4 }}>
        <strong>Why Shadows Matter:</strong> Shadows are essential for creating depth perception in flat digital interfaces. They help users understand layering, focus attention, and recognize interactive elements. Well-designed shadow systems enhance usability and visual appeal.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600}>
        Understanding Depth in UI Design
      </Typography>
      <Typography variant="body1" paragraph>
        In the physical world, objects cast shadows based on their height and the light source. Digital interfaces mimic this reality to create intuitive spatial relationships. Depth perception helps users understand:
      </Typography>

      <Box component="ul" sx={{ color: 'text.primary', pl: 2 }}>
        <li><Typography variant="body1" paragraph>Which elements are foreground vs background</Typography></li>
        <li><Typography variant="body1" paragraph>What content is interactive vs static</Typography></li>
        <li><Typography variant="body1" paragraph>Where focus and attention should be directed</Typography></li>
        <li><Typography variant="body1" paragraph>The importance and hierarchy of interface elements</Typography></li>
      </Box>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Material Design Elevation System
      </Typography>
      <Typography variant="body1" paragraph>
        Material Design pioneered the elevation system, which uses consistent shadow values to represent different heights (measured in density-independent pixels or "dp"). This creates a predictable, scalable depth system.
      </Typography>

      <TableContainer component={Paper} sx={{ my: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Elevation (dp)</strong></TableCell>
              <TableCell><strong>Component</strong></TableCell>
              <TableCell><strong>Usage</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ bgcolor: 'grey.50' }}>
              <TableCell>0dp</TableCell>
              <TableCell>Base surface</TableCell>
              <TableCell>Page background, no elevation</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1dp</TableCell>
              <TableCell>Cards, Search bars</TableCell>
              <TableCell>Slightly elevated content containers</TableCell>
            </TableRow>
            <TableRow sx={{ bgcolor: 'grey.50' }}>
              <TableCell>2dp</TableCell>
              <TableCell>Raised buttons (resting)</TableCell>
              <TableCell>Interactive elements at rest</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3dp</TableCell>
              <TableCell>Refresh indicators, FAB (resting)</TableCell>
              <TableCell>Prominent interactive elements</TableCell>
            </TableRow>
            <TableRow sx={{ bgcolor: 'grey.50' }}>
              <TableCell>4dp</TableCell>
              <TableCell>App bar</TableCell>
              <TableCell>Primary navigation and headers</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>6dp</TableCell>
              <TableCell>Snackbar</TableCell>
              <TableCell>Temporary notifications</TableCell>
            </TableRow>
            <TableRow sx={{ bgcolor: 'grey.50' }}>
              <TableCell>8dp</TableCell>
              <TableCell>Buttons (pressed), FAB (pressed), Menu</TableCell>
              <TableCell>Active states, dropdown menus</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>12dp</TableCell>
              <TableCell>Raised button (pressed)</TableCell>
              <TableCell>Active button states</TableCell>
            </TableRow>
            <TableRow sx={{ bgcolor: 'grey.50' }}>
              <TableCell>16dp</TableCell>
              <TableCell>Navigation drawer, Modal bottom sheet</TableCell>
              <TableCell>Major overlays</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>24dp</TableCell>
              <TableCell>Dialog, Picker</TableCell>
              <TableCell>Modal dialogs and selections</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Alert severity="success" sx={{ my: 3 }}>
        <strong>Key Principle:</strong> Use a limited set of elevation levels (typically 5-7) consistently throughout your interface. This creates a coherent spatial system that users can intuitively understand.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Shadow Parameters
      </Typography>
      <Typography variant="body1" paragraph>
        CSS shadows are defined by several parameters. Understanding each parameter helps you create realistic, purposeful shadows.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          CSS Box Shadow Syntax
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, fontFamily: 'monospace', mb: 2, fontSize: '0.9rem' }}>
          box-shadow: [offset-x] [offset-y] [blur-radius] [spread-radius] [color];
        </Box>

        <Box component="ul" sx={{ color: 'text.primary' }}>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Offset-X:</strong> Horizontal distance of the shadow from the element. Positive values move shadow right, negative values move it left.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Offset-Y:</strong> Vertical distance of the shadow from the element. Positive values move shadow down (most common), negative values move it up.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Blur Radius:</strong> How soft/blurred the shadow edge is. Larger values create softer shadows. 0 creates a hard edge.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Spread Radius:</strong> Expands or contracts the shadow size before blurring. Positive values enlarge, negative values shrink.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Color:</strong> Shadow color, typically black with low opacity (rgba(0, 0, 0, 0.1) to rgba(0, 0, 0, 0.3)).
            </Typography>
          </li>
        </Box>
      </Paper>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Layered Shadows
      </Typography>
      <Typography variant="body1" paragraph>
        Realistic shadows often use multiple shadow layers to simulate both ambient and direct lighting:
      </Typography>

      <Box sx={{ pl: 2 }}>
        <Typography variant="body1" paragraph>
          <strong>Ambient Shadow:</strong> Large, soft shadow representing light bouncing from all directions. Typically a larger blur radius with small offset.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Direct Shadow (Key Shadow):</strong> Sharper shadow from primary light source. Moderate blur radius with larger Y offset.
        </Typography>
      </Box>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Example: Material Design Elevation 4dp
        </Typography>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre' }}>
{`box-shadow:
  0px 2px 4px -1px rgba(0,0,0,0.2),  /* Ambient shadow */
  0px 4px 5px 0px rgba(0,0,0,0.14),  /* Penumbra */
  0px 1px 10px 0px rgba(0,0,0,0.12); /* Direct shadow */`}
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Creating Depth Hierarchy
      </Typography>
      <Typography variant="body1" paragraph>
        A well-designed depth hierarchy helps users understand content organization and importance.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
          <Layers sx={{ mr: 1, color: 'primary.main' }} />
          Depth Hierarchy Best Practices
        </Typography>
        <Box component="ol" sx={{ color: 'text.primary' }}>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Base Layer (0dp):</strong> Page background - no shadow. This is your canvas.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Content Layer (1-2dp):</strong> Cards, panels, content containers. Subtle shadows that gently lift content.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Interactive Layer (2-4dp):</strong> Buttons, inputs, interactive components. Moderate shadows suggesting clickability.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Navigation Layer (4-8dp):</strong> Navigation bars, headers, sticky elements. Prominent shadows for persistent UI.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Overlay Layer (8-16dp):</strong> Dropdown menus, tooltips, popovers. Strong shadows for temporary overlays.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Modal Layer (16-24dp):</strong> Dialogs, full-screen overlays. Maximum shadows for critical interruptions.
            </Typography>
          </li>
        </Box>
      </Paper>

      <Alert severity="info" sx={{ my: 3 }}>
        <strong>Interaction Feedback:</strong> Increase elevation on hover and active states. For example, a button at 2dp might rise to 4dp on hover and 8dp when pressed, creating tactile feedback.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Soft vs Hard Shadows
      </Typography>
      <Typography variant="body1" paragraph>
        The softness of a shadow affects perception of height, material properties, and visual style.
      </Typography>

      <TableContainer component={Paper} sx={{ my: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Shadow Type</strong></TableCell>
              <TableCell><strong>Characteristics</strong></TableCell>
              <TableCell><strong>Best Uses</strong></TableCell>
              <TableCell><strong>Implementation</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell><strong>Hard Shadow</strong></TableCell>
              <TableCell>Sharp edges, high contrast, minimal blur</TableCell>
              <TableCell>Retro designs, graphic emphasis, strict alignment</TableCell>
              <TableCell>Low blur radius (0-4px), higher opacity (0.3-0.5)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Soft Shadow</strong></TableCell>
              <TableCell>Blurred edges, subtle, realistic</TableCell>
              <TableCell>Modern UIs, cards, modals, gentle elevation</TableCell>
              <TableCell>High blur radius (8-24px), lower opacity (0.1-0.2)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Diffuse Shadow</strong></TableCell>
              <TableCell>Very soft, spread out, atmospheric</TableCell>
              <TableCell>Floating elements, glassmorphism, subtle depth</TableCell>
              <TableCell>Very high blur (24-40px), very low opacity (0.05-0.1)</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Examples of Shadow Styles
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" fontWeight={600}>Hard Shadow</Typography>
          <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.85rem' }}>
            box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.4);
          </Box>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" fontWeight={600}>Soft Shadow (Typical)</Typography>
          <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.85rem' }}>
            box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
          </Box>
        </Box>

        <Box>
          <Typography variant="subtitle1" fontWeight={600}>Diffuse Shadow</Typography>
          <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.85rem' }}>
            box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.08);
          </Box>
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Shadow Colors
      </Typography>
      <Typography variant="body1" paragraph>
        While black is the default shadow color, thoughtful color choices can enhance your design.
      </Typography>

      <Box sx={{ pl: 2 }}>
        <Typography variant="body1" paragraph>
          <strong>Pure Black (rgba(0, 0, 0, α)):</strong> Most common and versatile. Works on any background color. Opacity typically 0.1-0.25.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Tinted Shadows:</strong> Shadows that match your brand color create cohesion. Use very low opacity (0.05-0.15) of your primary color.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Colored Shadows:</strong> For creative designs, use complementary or analogous colors at low opacity. Creates vibrant, modern effects.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Dark Mode:</strong> In dark themes, use lighter shadows or colored glows instead of dark shadows. Shadows become highlights.
        </Typography>
      </Box>

      <Alert severity="warning" sx={{ my: 3 }}>
        <strong>Accessibility Note:</strong> Shadows should enhance but never be essential for understanding UI. Don't rely on shadows alone to indicate clickability or importance. Users with certain visual impairments may not perceive subtle shadows.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Performance Considerations
      </Typography>
      <Typography variant="body1" paragraph>
        Shadows can impact rendering performance, especially on lower-end devices or when animating.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Shadow Performance Tips
        </Typography>
        <Box component="ul" sx={{ color: 'text.primary' }}>
          <li><Typography variant="body1" paragraph><strong>Limit layered shadows:</strong> More than 3-4 layered shadows can hurt performance</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Avoid animating shadows:</strong> Use transform: translateY() and opacity to simulate elevation changes instead</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Use will-change sparingly:</strong> Only for elements that will definitely animate</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Reduce blur on mobile:</strong> Mobile devices struggle with large blur radii</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Consider alternatives:</strong> Borders, background colors, or subtle gradients can sometimes replace shadows</Typography></li>
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Inner Shadows
      </Typography>
      <Typography variant="body1" paragraph>
        Inner shadows (inset) create the appearance of elements being recessed or pressed into the surface.
      </Typography>

      <Box sx={{ pl: 2 }}>
        <Typography variant="body1" paragraph>
          <strong>Use cases:</strong> Pressed button states, input fields (suggesting a "well" to type into), sunken panels, disabled states.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Syntax:</strong> Add the "inset" keyword before other shadow parameters.
        </Typography>
      </Box>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Example: Input Field with Inner Shadow
        </Typography>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>
          box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.1);
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Building a Shadow System
      </Typography>
      <Typography variant="body1" paragraph>
        A systematic approach to shadows ensures consistency and makes implementation easier.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'primary.main', color: 'primary.contrastText', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Creating Your Shadow Scale
        </Typography>
        <Box component="ol">
          <li><Typography variant="body1" paragraph><strong>Define elevation levels:</strong> Typically 0, 1, 2, 4, 8, 16, 24 (Material Design style)</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Create shadow values:</strong> For each level, define the box-shadow CSS</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Name semantically:</strong> Use tokens like shadow-sm, shadow-md, shadow-lg, or shadow-1 through shadow-5</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Document usage:</strong> Specify which shadows for which components</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Test on real content:</strong> Ensure shadows work across different backgrounds and contexts</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Export as design tokens:</strong> Make shadows available in CSS variables, Tailwind config, etc.</Typography></li>
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Helpful Resources
      </Typography>
      <Box component="ul" sx={{ color: 'text.primary' }}>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://material.io/design/environment/elevation.html" target="_blank" rel="noopener noreferrer">
              Material Design - Elevation System
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://shadows.brumm.af/" target="_blank" rel="noopener noreferrer">
              Smooth Shadow Generator by Philipp Brumm
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://www.joshwcomeau.com/css/designing-shadows/" target="_blank" rel="noopener noreferrer">
              Designing Beautiful Shadows in CSS - Josh Comeau
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
            <Link href="/docs/visual-hierarchy" passHref legacyBehavior>
              <MuiLink>Visual Hierarchy (Crow Create Docs)</MuiLink>
            </Link>
          </Typography>
        </li>
      </Box>

      <Box sx={{ mt: 4, p: 3, bgcolor: 'background.paper', borderRadius: 2, border: 1, borderColor: 'divider' }}>
        <Typography variant="h5" gutterBottom fontWeight={600}>
          Ready to Define Your Shadow System?
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Use Crow Create to configure your shadow system with consistent elevation levels and export-ready design tokens.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Link href="/create" passHref legacyBehavior>
            <Button component="a" variant="contained" size="large">
              Configure Shadows
            </Button>
          </Link>
          <Link href="/docs/visual-hierarchy" passHref legacyBehavior>
            <Button component="a" variant="outlined" size="large">
              Learn About Visual Hierarchy
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
