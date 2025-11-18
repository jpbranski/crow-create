import { Box, Typography, Alert, Divider, Paper } from '@mui/material'
import { Lightbulb } from '@mui/icons-material'

export default function PalettePage() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
        Creating Your First Palette
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Learn how to build beautiful, accessible color palettes with Crow Create.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h4" gutterBottom fontWeight={600}>
        Understanding Color Palettes
      </Typography>
      <Typography variant="body1" paragraph>
        A color palette is the foundation of your design system. It defines the visual identity
        and mood of your application while ensuring accessibility and consistency.
      </Typography>

      <Alert severity="info" icon={<Lightbulb />} sx={{ my: 3 }}>
        <strong>Pro Tip:</strong> Start with 2-3 colors (primary, secondary, and optionally an
        accent) and let Crow Create generate the rest of your palette automatically.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Methods for Creating Palettes
      </Typography>

      <Paper sx={{ p: 3, my: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          1. Manual Color Selection
        </Typography>
        <Typography variant="body1" paragraph>
          Use the color picker to select your primary and secondary colors. Simply click on the
          color swatch to open the picker and choose your desired color.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Best for: When you have specific brand colors or a clear vision for your design.
        </Typography>
      </Paper>

      <Paper sx={{ p: 3, my: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          2. Image Color Extraction
        </Typography>
        <Typography variant="body1" paragraph>
          Upload an image (logo, photo, or inspiration) and Crow Create will automatically
          extract the dominant colors. This is perfect for creating palettes that match existing
          brand materials.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Best for: Creating palettes based on existing imagery or brand assets.
        </Typography>
      </Paper>

      <Paper sx={{ p: 3, my: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          3. Randomize Palette
        </Typography>
        <Typography variant="body1" paragraph>
          Click the "Randomize" button to generate aesthetically pleasing color combinations
          automatically. The algorithm ensures colors work well together and maintains good
          contrast ratios.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Best for: Exploring color options and finding unexpected combinations.
        </Typography>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Color Types in Your Palette
      </Typography>

      <Box sx={{ pl: 2 }}>
        <Typography variant="body1" paragraph>
          <strong>Primary Color:</strong> Your brand's main color, used for primary actions and
          key UI elements.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Secondary Color:</strong> A complementary color that supports your primary
          color in the interface.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Semantic Colors:</strong> Automatically generated colors for success (green),
          warning (orange), error (red), and info (blue) states. These communicate meaning and
          status to users.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Background & Text Colors:</strong> Neutral colors for backgrounds, text, and
          borders that ensure readability and visual hierarchy.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Best Practices
      </Typography>

      <Box component="ul" sx={{ color: 'text.primary', pl: 2 }}>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Start simple:</strong> Begin with 2-3 core colors and expand from there
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Test contrast:</strong> Always check your color combinations using the WCAG
            checker (see Accessibility Basics)
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Consider context:</strong> Colors appear differently on light vs. dark
            backgrounds
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Use semantic meaning:</strong> Red for errors, green for success - these
            associations are culturally ingrained
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Maintain consistency:</strong> Use the same colors throughout your entire
            application
          </Typography>
        </li>
      </Box>

      <Alert severity="warning" sx={{ mt: 4 }}>
        <strong>Accessibility Warning:</strong> Never rely on color alone to convey information.
        Always pair color with text, icons, or other visual indicators for users with color
        vision deficiencies.
      </Alert>
    </Box>
  )
}
