import { Box, Typography, Alert, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Link as MuiLink, Button } from '@mui/material'
import { Palette, AutoAwesome, Settings, CheckCircle } from '@mui/icons-material'
import Link from 'next/link'

export const metadata = {
  title: 'Palette Generation Best Practices | Crow Create',
  description: 'Learn best practices for creating harmonious color palettes including the 60-30-10 rule, tints, shades, tones, and color harmony algorithms.',
}

export default function PaletteGenerationPage() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
        Palette Generation Best Practices
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Learn how to create harmonious, accessible color palettes that work beautifully across your entire design system.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Alert severity="info" sx={{ mb: 4 }}>
        <strong>Why Palette Generation Matters:</strong> A well-crafted color palette is the foundation of a cohesive design system. It ensures consistency, enhances user experience, and communicates your brand effectively while maintaining accessibility.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600}>
        Starting with Your Base Colors
      </Typography>
      <Typography variant="body1" paragraph>
        Every great palette begins with selecting the right base colors. These serve as the foundation upon which you'll build your entire color system.
      </Typography>

      <Paper sx={{ p: 3, my: 4, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
          <Palette sx={{ mr: 1, color: 'primary.main' }} />
          Choosing Base Colors
        </Typography>
        <Box component="ul" sx={{ color: 'text.primary' }}>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Primary Color:</strong> Your main brand color. Should reflect your brand personality and be versatile enough to use across many contexts.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Secondary Color:</strong> Complements your primary color. Often used for secondary actions, highlights, and visual variety.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Accent Color:</strong> Optional third color for special emphasis, calls-to-action, or highlighting key elements.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Neutral Colors:</strong> Grays and muted tones for backgrounds, borders, and text. Essential for balance.
            </Typography>
          </li>
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        The 60-30-10 Rule
      </Typography>
      <Typography variant="body1" paragraph>
        The 60-30-10 rule is a timeless interior design principle that works beautifully in UI design. It creates balance and prevents any single color from overwhelming the design.
      </Typography>

      <Box sx={{ pl: 2 }}>
        <Typography variant="body1" paragraph>
          <strong>60% - Dominant Color:</strong> This is your primary color or neutral background color. It sets the overall tone and provides the foundation for your interface. In UI design, this is often a neutral color (white, light gray, or subtle tint) to prevent eye fatigue.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>30% - Secondary Color:</strong> Your supporting color. It creates contrast with the dominant color and is used for secondary UI elements, navigation, cards, or content sections.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>10% - Accent Color:</strong> Your pop of color. Used sparingly for calls-to-action, important buttons, highlights, and elements you want to draw attention to. This is where you can use your most vibrant colors.
        </Typography>
      </Box>

      <Alert severity="success" sx={{ my: 3 }}>
        <strong>Pro Tip:</strong> Think of 60% as walls, 30% as furniture, and 10% as decorative accessories. This mental model helps you understand where each color should be applied in your interface.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Understanding Tints, Shades, and Tones
      </Typography>
      <Typography variant="body1" paragraph>
        Creating variations of your base colors is essential for building a flexible palette that works across different contexts and UI states.
      </Typography>

      <TableContainer component={Paper} sx={{ my: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Type</strong></TableCell>
              <TableCell><strong>Definition</strong></TableCell>
              <TableCell><strong>How to Create</strong></TableCell>
              <TableCell><strong>Use Cases</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell><strong>Tint</strong></TableCell>
              <TableCell>Color mixed with white</TableCell>
              <TableCell>Increase lightness while maintaining hue</TableCell>
              <TableCell>Hover states, light backgrounds, subtle accents</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Shade</strong></TableCell>
              <TableCell>Color mixed with black</TableCell>
              <TableCell>Decrease lightness while maintaining hue</TableCell>
              <TableCell>Active states, dark mode, emphasis</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Tone</strong></TableCell>
              <TableCell>Color mixed with gray</TableCell>
              <TableCell>Adjust saturation while maintaining lightness</TableCell>
              <TableCell>Disabled states, muted backgrounds, secondary elements</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Creating a Color Scale
      </Typography>
      <Typography variant="body1" paragraph>
        A color scale is a progression of tints and shades from your base color. Most design systems include 9-11 variations of each color, providing flexibility for different use cases.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Typical Color Scale Structure
        </Typography>
        <Box component="ul" sx={{ color: 'text.primary' }}>
          <li><Typography variant="body1">50 - Lightest (95-99% lightness) - Subtle backgrounds</Typography></li>
          <li><Typography variant="body1">100 - Very Light (90-95% lightness) - Hover backgrounds</Typography></li>
          <li><Typography variant="body1">200 - Light (80-90% lightness) - Borders, dividers</Typography></li>
          <li><Typography variant="body1">300 - Light-Medium (70-80% lightness) - Disabled states</Typography></li>
          <li><Typography variant="body1">400 - Medium-Light (60-70% lightness) - Placeholder text</Typography></li>
          <li><Typography variant="body1">500 - Base Color (50% lightness) - Your main brand color</Typography></li>
          <li><Typography variant="body1">600 - Medium-Dark (40% lightness) - Hover states on colored elements</Typography></li>
          <li><Typography variant="body1">700 - Dark (30% lightness) - Active/pressed states</Typography></li>
          <li><Typography variant="body1">800 - Very Dark (20% lightness) - Text on light backgrounds</Typography></li>
          <li><Typography variant="body1">900 - Darkest (10% lightness) - High emphasis text</Typography></li>
        </Box>
      </Paper>

      <Alert severity="warning" sx={{ my: 3 }}>
        <strong>Accessibility Note:</strong> Not all color scale steps will pass WCAG contrast requirements for text. Always test combinations and reserve lighter shades for backgrounds and decorative elements only.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Color Harmony Algorithms
      </Typography>
      <Typography variant="body1" paragraph>
        Mathematical approaches to color harmony help create palettes that are inherently balanced and pleasing to the eye.
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        HSL/HSB Color Model
      </Typography>
      <Typography variant="body1" paragraph>
        Working in HSL (Hue, Saturation, Lightness) or HSB (Hue, Saturation, Brightness) makes it easier to create harmonious variations because you can adjust individual properties independently.
      </Typography>

      <Box sx={{ pl: 2 }}>
        <Typography variant="body1" paragraph>
          <strong>Hue (0-360°):</strong> The color itself on the color wheel. Changing hue creates different colors.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Saturation (0-100%):</strong> The intensity or purity of the color. 0% is gray, 100% is full color.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Lightness (0-100%):</strong> How light or dark the color is. 0% is black, 50% is the pure color, 100% is white.
        </Typography>
      </Box>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Algorithmic Palette Generation
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Common Palette Generation Algorithms
        </Typography>

        <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 2 }}>
          1. Equal Step Method
        </Typography>
        <Typography variant="body1" paragraph>
          Divide lightness into equal steps (e.g., 10% increments). Simple but may not look perceptually uniform.
        </Typography>

        <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 2 }}>
          2. Easing Curves
        </Typography>
        <Typography variant="body1" paragraph>
          Use easing functions (ease-in, ease-out) to create more natural progressions. Provides more variation where the eye is sensitive and less where it's not.
        </Typography>

        <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 2 }}>
          3. Perceptual Lightness (L* in LAB)
        </Typography>
        <Typography variant="body1" paragraph>
          Use the LAB color space which is designed to be perceptually uniform. Colors with the same L* value appear equally bright to the human eye.
        </Typography>

        <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 2 }}>
          4. Bezier Curve Interpolation
        </Typography>
        <Typography variant="body1" paragraph>
          Define anchor points and interpolate between them using Bezier curves. Allows fine-tuned control over the color progression.
        </Typography>

        <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 2 }}>
          5. Chroma.js Scale
        </Typography>
        <Typography variant="body1" paragraph>
          Use libraries like Chroma.js that provide built-in color scaling with various interpolation modes. Handles complex color spaces automatically.
        </Typography>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Creating Semantic Colors
      </Typography>
      <Typography variant="body1" paragraph>
        Semantic colors communicate meaning and status. They should be distinct from your brand colors and immediately recognizable.
      </Typography>

      <TableContainer component={Paper} sx={{ my: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Semantic Type</strong></TableCell>
              <TableCell><strong>Typical Hue Range</strong></TableCell>
              <TableCell><strong>Purpose</strong></TableCell>
              <TableCell><strong>Considerations</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell><strong>Success</strong></TableCell>
              <TableCell>Green (90-150°)</TableCell>
              <TableCell>Confirmations, successful actions, positive states</TableCell>
              <TableCell>Avoid pure green if brand is green; adjust hue slightly</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Warning</strong></TableCell>
              <TableCell>Orange/Yellow (30-60°)</TableCell>
              <TableCell>Cautions, alerts, important information</TableCell>
              <TableCell>Ensure sufficient contrast on light backgrounds</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Error</strong></TableCell>
              <TableCell>Red (0-20° or 340-360°)</TableCell>
              <TableCell>Errors, destructive actions, validation failures</TableCell>
              <TableCell>Must be highly visible and pass contrast checks</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Info</strong></TableCell>
              <TableCell>Blue (200-240°)</TableCell>
              <TableCell>Informational messages, helpful tips, neutral notifications</TableCell>
              <TableCell>Should differ from primary blue if using blue brand</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Alert severity="info" sx={{ my: 3 }}>
        <strong>Semantic Color Tip:</strong> Generate shade scales for semantic colors too. You'll need lighter versions for backgrounds (e.g., light green for success banners) and darker versions for text and icons.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Neutral Color Generation
      </Typography>
      <Typography variant="body1" paragraph>
        Neutral colors (grays) are workhorses of your palette. They're used for text, backgrounds, borders, and shadows. A well-crafted neutral palette can make or break your design.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Creating Better Grays
        </Typography>
        <Box component="ul" sx={{ color: 'text.primary' }}>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Avoid pure grays:</strong> Add a subtle tint of your primary color to create "warm" or "cool" grays that feel more cohesive with your brand.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Blue-tinted grays:</strong> Add 1-2% blue saturation for a modern, tech-forward feel. Common in productivity and SaaS apps.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Warm grays:</strong> Add subtle orange or yellow for a friendly, approachable feel. Good for consumer apps.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Create enough steps:</strong> Generate 9-11 gray shades from near-white to near-black for maximum flexibility.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Test for accessibility:</strong> Ensure your darkest grays pass WCAG AA against white (4.5:1) for body text.
            </Typography>
          </li>
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Testing Your Palette
      </Typography>
      <Typography variant="body1" paragraph>
        A great palette looks good in theory but must be tested in practice. Here's how to validate your color choices:
      </Typography>

      <Box component="ol" sx={{ color: 'text.primary', pl: 2 }}>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Accessibility Testing:</strong> Test all text/background combinations with WCAG contrast checkers. Aim for AA (4.5:1 for normal text) or AAA (7:1) compliance.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Color Blindness Simulation:</strong> Use tools like Color Oracle or browser extensions to see how your palette appears to users with various types of color blindness.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Real-World Application:</strong> Apply your palette to actual UI components (buttons, cards, forms) to see how it works in context.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Multiple Displays:</strong> View your palette on different screens (IPS, OLED, older displays) to ensure it works across hardware.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Light and Dark Modes:</strong> If supporting dark mode, test that your palette works in both contexts.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Print Test:</strong> If your brand will appear in print, test how colors reproduce in CMYK.
          </Typography>
        </li>
      </Box>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Common Palette Generation Mistakes
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'error.light', color: 'error.contrastText', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Mistakes to Avoid
        </Typography>
        <Box component="ul">
          <li><Typography variant="body1" paragraph><strong>Too many colors:</strong> More than 3-5 main colors creates chaos. Keep it simple.</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Insufficient contrast:</strong> Beautiful colors mean nothing if users can't read your text.</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Ignoring color blindness:</strong> ~8% of men and ~0.5% of women have some form of color blindness.</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Pure black and white:</strong> #000000 and #FFFFFF are harsh. Use near-black (#1a1a1a) and off-white (#fafafa).</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Inconsistent shade generation:</strong> Random color picking for shades creates an incoherent system.</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Not testing in context:</strong> Colors look different next to other colors. Always test combinations.</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Forgetting UI states:</strong> You need colors for hover, active, disabled, and focus states.</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Cultural insensitivity:</strong> Research color meanings in your target markets.</Typography></li>
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Using Crow Create for Palette Generation
      </Typography>
      <Typography variant="body1" paragraph>
        Crow Create simplifies palette generation by automating the complex mathematics while giving you full control over the results.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'primary.main', color: 'primary.contrastText', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
          <AutoAwesome sx={{ mr: 1 }} />
          Crow Create Palette Features
        </Typography>
        <Box component="ul">
          <li><Typography variant="body1">Automatic shade generation using perceptually uniform algorithms</Typography></li>
          <li><Typography variant="body1">Built-in WCAG contrast checking for all color combinations</Typography></li>
          <li><Typography variant="body1">Semantic color generation (success, warning, error, info)</Typography></li>
          <li><Typography variant="body1">Export to multiple formats (CSS, Tailwind, Material-UI, JSON)</Typography></li>
          <li><Typography variant="body1">Real-time preview of colors in actual UI components</Typography></li>
          <li><Typography variant="body1">Color extraction from images and logos</Typography></li>
          <li><Typography variant="body1">Intelligent neutral color generation with brand tinting</Typography></li>
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Helpful Resources
      </Typography>
      <Box component="ul" sx={{ color: 'text.primary' }}>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://www.learnui.design/tools/data-color-picker.html" target="_blank" rel="noopener noreferrer">
              Data Color Picker - Generate color scales
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://palettte.app/" target="_blank" rel="noopener noreferrer">
              Palettte - Create smooth color scales
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://colorbox.io/" target="_blank" rel="noopener noreferrer">
              Colorbox - Advanced color palette builder
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://gka.github.io/chroma.js/" target="_blank" rel="noopener noreferrer">
              Chroma.js - JavaScript library for color manipulation
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <Link href="/docs/color-theory" passHref legacyBehavior>
              <MuiLink>Color Theory for UI (Crow Create Docs)</MuiLink>
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
        <li>
          <Typography variant="body1">
            <Link href="/docs/adaptive-colors" passHref legacyBehavior>
              <MuiLink>Adaptive Color Systems (Crow Create Docs)</MuiLink>
            </Link>
          </Typography>
        </li>
      </Box>

      <Box sx={{ mt: 4, p: 3, bgcolor: 'background.paper', borderRadius: 2, border: 1, borderColor: 'divider' }}>
        <Typography variant="h5" gutterBottom fontWeight={600}>
          Ready to Generate Your Palette?
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Use Crow Create's intelligent palette generator to create harmonious, accessible color systems with automatic shade generation and WCAG testing.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Link href="/create" passHref legacyBehavior>
            <Button component="a" variant="contained" size="large">
              Generate Palette
            </Button>
          </Link>
          <Link href="/docs/semantic-tokens" passHref legacyBehavior>
            <Button component="a" variant="outlined" size="large">
              Learn About Semantic Tokens
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
