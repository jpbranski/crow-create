import { Box, Typography, Alert, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Link as MuiLink, Button } from '@mui/material'
import { FormatSize, Palette, Layers, SpaceBar } from '@mui/icons-material'
import Link from 'next/link'

export const metadata = {
  title: 'Visual Hierarchy | Crow Create',
  description: 'Learn how to create clear visual hierarchy using size, weight, color, spacing, and z-index to guide users through your interface.',
}

export default function VisualHierarchyPage() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
        Visual Hierarchy
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Master the art of visual hierarchy to guide users through your interface, communicate importance, and create intuitive, scannable designs.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Alert severity="info" sx={{ mb: 4 }}>
        <strong>Why Visual Hierarchy Matters:</strong> Visual hierarchy organizes information by importance, guides the eye through content in a logical order, and helps users quickly find what they need. Clear hierarchy reduces cognitive load and improves usability.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600}>
        What is Visual Hierarchy?
      </Typography>
      <Typography variant="body1" paragraph>
        Visual hierarchy is the principle of arranging elements to show their order of importance. It guides viewers through content by making some elements more prominent than others. Effective hierarchy helps users understand which information is most important, where to look first, and how elements relate to each other.
      </Typography>

      <Typography variant="body1" paragraph>
        Our brains naturally process visual information hierarchically - we notice large, bright, or contrasting elements before small, dull, or similar ones. Good design leverages these natural tendencies to create intuitive interfaces.
      </Typography>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        The Five Tools of Visual Hierarchy
      </Typography>
      <Typography variant="body1" paragraph>
        Designers have five main tools for establishing hierarchy: size, weight, color, spacing, and depth (z-index). Let's explore each in detail.
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <FormatSize sx={{ color: 'primary.main', mr: 1 }} />
          1. Size
        </Box>
      </Typography>
      <Typography variant="body1" paragraph>
        Size is the most powerful hierarchy tool. Larger elements naturally draw attention first. This is why headings are bigger than body text and why hero images dominate landing pages.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Using Size for Hierarchy
        </Typography>
        <Box component="ul" sx={{ color: 'text.primary' }}>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Create dramatic differences:</strong> Don't make H1 slightly larger than H2. Make it significantly larger (at least 1.5x) for clear distinction.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Use a type scale:</strong> Mathematical progressions (like modular scales) create harmonious size relationships.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Limit levels:</strong> Use 3-5 distinct text sizes maximum to avoid chaos.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Balance with whitespace:</strong> Large elements need breathing room. Don't crowd them.
            </Typography>
          </li>
        </Box>
      </Paper>

      <TableContainer component={Paper} sx={{ my: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Element</strong></TableCell>
              <TableCell><strong>Size Range</strong></TableCell>
              <TableCell><strong>Purpose</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>H1 (Page Title)</TableCell>
              <TableCell>32-72px</TableCell>
              <TableCell>Primary focus, page subject</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>H2 (Section)</TableCell>
              <TableCell>24-48px</TableCell>
              <TableCell>Major sections, secondary importance</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>H3 (Subsection)</TableCell>
              <TableCell>20-32px</TableCell>
              <TableCell>Subsections within sections</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Body Text</TableCell>
              <TableCell>16-18px</TableCell>
              <TableCell>Main content, comfortable reading</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Small Text</TableCell>
              <TableCell>12-14px</TableCell>
              <TableCell>Captions, metadata, less important info</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        2. Weight (Boldness)
      </Typography>
      <Typography variant="body1" paragraph>
        Font weight creates hierarchy without changing size. Heavier weights draw more attention. This is why buttons use bold text and headings are often weighted heavily.
      </Typography>

      <Box sx={{ pl: 2 }}>
        <Typography variant="body1" paragraph>
          <strong>Light (300):</strong> De-emphasized content, large display text only. Avoid for body text.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Regular (400):</strong> Default for body text. Neutral weight, maximum readability.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Medium (500-600):</strong> Subheadings, emphasis within text, semi-important UI elements.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Bold (700):</strong> Headings, buttons, critical information. High emphasis.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Extra Bold (800+):</strong> Display text, hero headings. Use sparingly for maximum impact.
        </Typography>
      </Box>

      <Alert severity="success" sx={{ my: 3 }}>
        <strong>Tip:</strong> Combine size and weight for maximum hierarchy. Large + bold = highest importance. Small + light = lowest importance.
      </Alert>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Palette sx={{ color: 'primary.main', mr: 1 }} />
          3. Color
        </Box>
      </Typography>
      <Typography variant="body1" paragraph>
        Color draws attention and communicates meaning. Bright, saturated colors attract the eye before muted ones. High contrast creates prominence.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Color Hierarchy Strategies
        </Typography>

        <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 2 }}>
          Text Hierarchy with Color
        </Typography>
        <Box component="ul" sx={{ color: 'text.primary' }}>
          <li><Typography variant="body1">Primary text: Highest contrast (#111827 on white, #e5e5e5 on dark)</Typography></li>
          <li><Typography variant="body1">Secondary text: Medium contrast (#6b7280 - grays)</Typography></li>
          <li><Typography variant="body1">Tertiary text: Lower contrast (#9ca3af - light grays)</Typography></li>
          <li><Typography variant="body1">Disabled text: Minimal contrast (#d1d5db - very light grays)</Typography></li>
        </Box>

        <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 2 }}>
          UI Element Hierarchy with Color
        </Typography>
        <Box component="ul" sx={{ color: 'text.primary' }}>
          <li><Typography variant="body1">Primary actions: Saturated brand color (buttons, links)</Typography></li>
          <li><Typography variant="body1">Secondary actions: Muted or outlined (less saturated)</Typography></li>
          <li><Typography variant="body1">Tertiary actions: Ghost or text-only (minimal color)</Typography></li>
          <li><Typography variant="body1">Semantic colors: Red for errors, green for success (instant recognition)</Typography></li>
        </Box>
      </Paper>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <SpaceBar sx={{ color: 'primary.main', mr: 1 }} />
          4. Spacing
        </Box>
      </Typography>
      <Typography variant="body1" paragraph>
        Whitespace (negative space) is a powerful hierarchy tool. More space around an element makes it more prominent and important-feeling. Tight spacing groups related items.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Proximity and Grouping
        </Typography>
        <Typography variant="body1" paragraph>
          Elements close together are perceived as related. Elements far apart are seen as separate. This is the Gestalt principle of proximity.
        </Typography>

        <Box component="ul" sx={{ color: 'text.primary' }}>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Tight spacing (4-8px):</strong> Related items within a group (list items, form fields in a section)
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Medium spacing (16-24px):</strong> Separation between groups (form sections, card content)
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Large spacing (32-64px):</strong> Major sections, page divisions
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Extra large spacing (64px+):</strong> Hero sections, major content blocks
            </Typography>
          </li>
        </Box>
      </Paper>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Layers sx={{ color: 'primary.main', mr: 1 }} />
          5. Depth (Z-Index/Elevation)
        </Box>
      </Typography>
      <Typography variant="body1" paragraph>
        Elements that appear "closer" to the user (through shadows, overlays, or z-index) feel more important. Modals, dropdowns, and sticky headers use elevation to command attention.
      </Typography>

      <TableContainer component={Paper} sx={{ my: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Layer</strong></TableCell>
              <TableCell><strong>Z-Index Range</strong></TableCell>
              <TableCell><strong>Examples</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Base Content</TableCell>
              <TableCell>0-10</TableCell>
              <TableCell>Page background, body text, images</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Raised Content</TableCell>
              <TableCell>10-100</TableCell>
              <TableCell>Cards, buttons, raised panels</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fixed Elements</TableCell>
              <TableCell>100-500</TableCell>
              <TableCell>Sticky headers, floating action buttons</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Overlays</TableCell>
              <TableCell>500-1000</TableCell>
              <TableCell>Dropdown menus, tooltips, popovers</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Modals</TableCell>
              <TableCell>1000-2000</TableCell>
              <TableCell>Dialogs, full-screen modals</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Notifications</TableCell>
              <TableCell>2000+</TableCell>
              <TableCell>Toasts, alerts, critical messages</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Establishing Clear Hierarchies
      </Typography>
      <Typography variant="body1" paragraph>
        Effective hierarchy uses multiple tools together. Here's how to establish three levels of importance in any interface.
      </Typography>

      <TableContainer component={Paper} sx={{ my: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Level</strong></TableCell>
              <TableCell><strong>Size</strong></TableCell>
              <TableCell><strong>Weight</strong></TableCell>
              <TableCell><strong>Color</strong></TableCell>
              <TableCell><strong>Spacing</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell><strong>Primary</strong></TableCell>
              <TableCell>Large (32-72px)</TableCell>
              <TableCell>Bold (700+)</TableCell>
              <TableCell>High contrast, saturated</TableCell>
              <TableCell>Generous (32px+)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Secondary</strong></TableCell>
              <TableCell>Medium (20-28px)</TableCell>
              <TableCell>Medium (500-600)</TableCell>
              <TableCell>Medium contrast</TableCell>
              <TableCell>Moderate (16-24px)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Tertiary</strong></TableCell>
              <TableCell>Small (14-16px)</TableCell>
              <TableCell>Regular (400)</TableCell>
              <TableCell>Low contrast, muted</TableCell>
              <TableCell>Minimal (8-12px)</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        F-Pattern and Z-Pattern Reading
      </Typography>
      <Typography variant="body1" paragraph>
        Eye-tracking studies show that users scan content in predictable patterns. Design hierarchy should align with these natural behaviors.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          F-Pattern (Content-Heavy Pages)
        </Typography>
        <Typography variant="body1" paragraph>
          Users read the top of the content horizontally, then down the left side, making occasional rightward movements. This creates an F shape.
        </Typography>
        <Box component="ul" sx={{ color: 'text.primary' }}>
          <li><Typography variant="body1">Place most important content at the top</Typography></li>
          <li><Typography variant="body1">Use subheadings to guide the eye down the left side</Typography></li>
          <li><Typography variant="body1">Front-load paragraphs with key information</Typography></li>
          <li><Typography variant="body1">Use bullet points and lists for scanability</Typography></li>
        </Box>

        <Typography variant="h6" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
          Z-Pattern (Simple Pages)
        </Typography>
        <Typography variant="body1" paragraph>
          Eyes scan top-left to top-right, then diagonally down to bottom-left, then across to bottom-right. Creates a Z shape.
        </Typography>
        <Box component="ul" sx={{ color: 'text.primary' }}>
          <li><Typography variant="body1">Logo/branding: Top-left</Typography></li>
          <li><Typography variant="body1">Primary CTA: Top-right</Typography></li>
          <li><Typography variant="body1">Supporting content: Middle diagonal</Typography></li>
          <li><Typography variant="body1">Secondary CTA: Bottom-right</Typography></li>
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Common Hierarchy Mistakes
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'error.light', color: '#000', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Mistakes to Avoid
        </Typography>
        <Box component="ul">
          <li><Typography variant="body1" paragraph><strong>Everything is important:</strong> When everything screams for attention, nothing stands out</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Too many hierarchy levels:</strong> More than 5 levels creates confusion and complexity</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Insufficient contrast:</strong> Similar sizes/weights/colors fail to establish clear hierarchy</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Inconsistent patterns:</strong> H2s that are sometimes bigger than H1s confuse users</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Fighting with layout:</strong> Hierarchy should align with layout, not fight it</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Ignoring whitespace:</strong> Cramped layouts make hierarchy invisible</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Color-only hierarchy:</strong> Never rely solely on color (accessibility!)</Typography></li>
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Testing Your Hierarchy
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'primary.main', color: 'primary.contrastText', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Hierarchy Check list
        </Typography>
        <Box component="ol">
          <li><Typography variant="body1" paragraph><strong>The squint test:</strong> Blur your eyes or zoom out - does the important content still stand out?</Typography></li>
          <li><Typography variant="body1" paragraph><strong>The 5-second test:</strong> Can users identify the most important element in 5 seconds?</Typography></li>
          <li><Typography variant="body1" paragraph><strong>The grayscale test:</strong> Remove all color - is hierarchy still clear?</Typography></li>
          <li><Typography variant="body1" paragraph><strong>The scanning test:</strong> Can users quickly scan to find specific information?</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Ask users:</strong> "What's the most important thing on this page?" Do they get it right?</Typography></li>
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Helpful Resources
      </Typography>
      <Box component="ul" sx={{ color: 'text.primary' }}>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://www.nngroup.com/articles/visual-hierarchy-ux/" target="_blank" rel="noopener noreferrer">
              Nielsen Norman Group - Visual Hierarchy in UX
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/" target="_blank" rel="noopener noreferrer">
              Nielsen Norman Group - F-Shaped Pattern
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <Link href="/docs/accessible-typography" passHref legacyBehavior>
              <MuiLink>Accessible Typography (Crow Create Docs)</MuiLink>
            </Link>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <Link href="/docs/scales-rhythms" passHref legacyBehavior>
              <MuiLink>Scales & Rhythms (Crow Create Docs)</MuiLink>
            </Link>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <Link href="/docs/shadows-depth" passHref legacyBehavior>
              <MuiLink>Shadows & Depth (Crow Create Docs)</MuiLink>
            </Link>
          </Typography>
        </li>
      </Box>

      <Box sx={{ mt: 4, p: 3, bgcolor: 'background.paper', borderRadius: 2, border: 1, borderColor: 'divider' }}>
        <Typography variant="h5" gutterBottom fontWeight={600}>
          Ready to Build Clear Hierarchy?
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Use Crow Create to configure typography scales, color hierarchies, and spacing systems that establish clear visual importance in your designs.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Link href="/create" passHref legacyBehavior>
            <Button component="a" variant="contained" size="large">
              Configure Design System
            </Button>
          </Link>
          <Link href="/docs/scales-rhythms" passHref legacyBehavior>
            <Button component="a" variant="outlined" size="large">
              Learn About Scales
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
