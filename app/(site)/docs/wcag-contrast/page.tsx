import { Typography, Box, Paper, Alert, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { CheckCircle, Info } from '@mui/icons-material'
import Link from 'next/link'

export const metadata = {
  title: 'Understanding WCAG Contrast | Crow Create Docs',
  description: 'Learn about WCAG contrast requirements and how to ensure your color combinations are accessible to all users.',
}

export default function WCAGContrastPage() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
        Understanding WCAG Contrast
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph>
        Master color contrast ratios and ensure your designs meet WCAG accessibility standards.
      </Typography>

      <Alert severity="success" icon={<CheckCircle />} sx={{ my: 3 }}>
        Crow Create automatically calculates and displays contrast ratios for all your color combinations, making it easy to build accessible palettes.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        What is Color Contrast?
      </Typography>
      <Typography variant="body1" paragraph>
        Color contrast refers to the difference in luminance (perceived brightness) between two colors. In web design, we measure this difference using a contrast ratio, which ranges from 1:1 (no contrast, e.g., white on white) to 21:1 (maximum contrast, e.g., black on white).
      </Typography>
      <Typography variant="body1" paragraph>
        Adequate contrast is essential for readability and accessibility. People with low vision, color blindness, or older adults with declining vision rely on sufficient contrast to distinguish text from backgrounds. Even users with perfect vision benefit from good contrast, especially when viewing screens in bright sunlight or dim environments.
      </Typography>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        WCAG Contrast Standards
      </Typography>
      <Typography variant="body1" paragraph>
        The Web Content Accessibility Guidelines (WCAG) define minimum contrast ratios for text and UI components. These standards are organized into three levels of conformance: A, AA, and AAA.
      </Typography>

      <TableContainer component={Paper} variant="outlined" sx={{ my: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Level</strong></TableCell>
              <TableCell><strong>Normal Text</strong></TableCell>
              <TableCell><strong>Large Text</strong></TableCell>
              <TableCell><strong>UI Components</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>AA (Minimum)</TableCell>
              <TableCell>4.5:1</TableCell>
              <TableCell>3:1</TableCell>
              <TableCell>3:1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>AAA (Enhanced)</TableCell>
              <TableCell>7:1</TableCell>
              <TableCell>4.5:1</TableCell>
              <TableCell>3:1</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="body1" paragraph>
        <strong>Normal text</strong> is defined as text smaller than 18pt (or 14pt bold). <strong>Large text</strong> is defined as 18pt+ (or 14pt+ bold). UI components include buttons, form controls, icons, and interactive elements.
      </Typography>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Why WCAG AA is the Standard
      </Typography>
      <Typography variant="body1" paragraph>
        WCAG AA is considered the industry standard for web accessibility and is often a legal requirement for government websites, educational institutions, and large organizations. It represents a balance between accessibility and design flexibility.
      </Typography>
      <Typography variant="body1" paragraph>
        AAA compliance provides enhanced accessibility but can be more restrictive in design choices. It's recommended for content targeting users with severe visual impairments or for critical information that must be universally accessible.
      </Typography>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Common Misconceptions
      </Typography>

      <Paper variant="outlined" sx={{ p: 3, my: 3, bgcolor: 'background.default' }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Myth: "If it looks good to me, it's accessible"
        </Typography>
        <Typography variant="body1" paragraph>
          Reality: Your vision may be better than average, or your screen may be brighter than typical user conditions. Always use objective contrast measurements rather than relying on subjective judgment.
        </Typography>

        <Typography variant="h6" gutterBottom fontWeight={600} sx={{ mt: 2 }}>
          Myth: "Accessibility means ugly design"
        </Typography>
        <Typography variant="body1" paragraph>
          Reality: Many beautiful, award-winning websites meet WCAG AA standards. Accessibility constraints often lead to clearer, more effective designs with better visual hierarchy.
        </Typography>

        <Typography variant="h6" gutterBottom fontWeight={600} sx={{ mt: 2 }}>
          Myth: "I only need to check primary colors"
        </Typography>
        <Typography variant="body1">
          Reality: Every text color on every background needs to meet contrast requirements. This includes hover states, error messages, disabled states, and overlay text on images.
        </Typography>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Calculating Contrast Ratios
      </Typography>
      <Typography variant="body1" paragraph>
        Contrast ratios are calculated using the relative luminance of two colors. The formula is defined in WCAG 2.1:
      </Typography>
      <Paper variant="outlined" sx={{ p: 2, my: 2, bgcolor: 'background.default', fontFamily: 'monospace', fontSize: '0.9rem' }}>
        (L1 + 0.05) / (L2 + 0.05)
        <br />
        where L1 is the lighter color and L2 is the darker color
      </Paper>
      <Typography variant="body1" paragraph>
        You don't need to calculate this manually—Crow Create does it automatically for every color combination in your palette. Simply adjust your colors until you see the green checkmark indicating WCAG compliance.
      </Typography>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Practical Tips for Better Contrast
      </Typography>

      <Box component="ol" sx={{ pl: 3, '& li': { mb: 2 } }}>
        <li>
          <Typography variant="body1">
            <strong>Start with extremes:</strong> Begin with dark text on light backgrounds or light text on dark backgrounds. Mid-tone combinations rarely meet contrast requirements.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Test in grayscale:</strong> Convert your design to grayscale to see contrast more clearly without color influencing your perception.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Avoid pure black on pure white:</strong> While it meets contrast requirements, it can cause eye strain. Slightly off-black (#1a1a1a) on slightly off-white (#fafafa) is often more comfortable.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Consider context:</strong> Body text that users read for extended periods benefits from AAA contrast, while decorative elements or large headings can safely use AA contrast.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Don't rely on color alone:</strong> Supplement color with icons, patterns, or text labels for important information like errors or success states.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Test with real users:</strong> Automated tools catch many issues, but nothing replaces testing with people who have visual impairments.
          </Typography>
        </li>
      </Box>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Beyond Contrast: Other Accessibility Factors
      </Typography>
      <Typography variant="body1" paragraph>
        While contrast is critical, it's not the only factor in accessible design. Consider these additional elements:
      </Typography>
      <Box component="ul" sx={{ pl: 3, '& li': { mb: 1.5 } }}>
        <li>
          <Typography variant="body1">
            <strong>Font size:</strong> Text smaller than 16px can be difficult to read even with good contrast.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Font weight:</strong> Thin fonts can be harder to read. Use at least 400 (normal) weight for body text.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Line height:</strong> Adequate spacing between lines (1.5x for body text) improves readability.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Line length:</strong> Lines longer than 80 characters are harder to track. Limit content width for better reading flow.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Anti-aliasing:</strong> Ensure your fonts are rendered with proper anti-aliasing for smooth, clear edges.
          </Typography>
        </li>
      </Box>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Using Crow Create's WCAG Checker
      </Typography>
      <Typography variant="body1" paragraph>
        Crow Create includes a built-in WCAG contrast checker in the Palette & Accessibility tab. Here's how to use it effectively:
      </Typography>
      <Box component="ol" sx={{ pl: 3, '& li': { mb: 2 } }}>
        <li>
          <Typography variant="body1">
            Select your text color and background color from your palette.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            The contrast ratio is calculated instantly and displayed with a clear pass/fail indicator.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Check all critical combinations: body text on backgrounds, button text on button colors, link colors, etc.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Use the "Enhance Palette" feature to automatically adjust colors while maintaining WCAG compliance.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Export your palette knowing that all documented combinations meet accessibility standards.
          </Typography>
        </li>
      </Box>

      <Alert severity="info" icon={<Info />} sx={{ my: 4 }}>
        Remember: Meeting WCAG contrast requirements is a minimum standard, not a maximum goal. Strive for clarity and readability in all your design decisions.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Next Steps
      </Typography>
      <Typography variant="body1" paragraph>
        Now that you understand WCAG contrast requirements, explore these related topics:
      </Typography>
      <Box component="ul" sx={{ pl: 3, '& li': { mb: 1 } }}>
        <li>
          <Typography variant="body1">
            <Link href="/docs/color-theory" style={{ color: 'inherit' }}>Color Theory for UI</Link> - Learn how to create harmonious color palettes
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <Link href="/docs/accessible-typography" style={{ color: 'inherit' }}>Accessible Typography</Link> - Explore font choices and text styling for accessibility
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <Link href="/docs/dark-mode" style={{ color: 'inherit' }}>Designing for Dark Mode</Link> - Apply contrast principles to dark themes
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <Link href="/create" style={{ color: 'inherit' }}>Try the Crow Create Tool</Link> - Put your knowledge into practice
          </Typography>
        </li>
      </Box>
    </Box>
  )
}
