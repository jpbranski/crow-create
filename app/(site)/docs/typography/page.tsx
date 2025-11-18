import { Box, Typography, Alert, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Lightbulb } from '@mui/icons-material'

export default function TypographyPage() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
        Typography & Font Pairings
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Learn how to select fonts and create harmonious typography systems.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h4" gutterBottom fontWeight={600}>
        The Importance of Typography
      </Typography>
      <Typography variant="body1" paragraph>
        Typography is the foundation of communication in design. It affects readability,
        accessibility, brand identity, and user experience. A well-designed typography system
        creates visual hierarchy and guides users through your content.
      </Typography>

      <Alert severity="info" sx={{ my: 3 }}>
        <strong>Did You Know?</strong> Typography accounts for about 95% of web design. Getting it
        right dramatically improves the user experience.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Selecting Fonts
      </Typography>
      <Typography variant="body1" paragraph>
        Crow Create provides a curated selection of professional fonts optimized for web use. When
        choosing fonts, consider:
      </Typography>

      <Box component="ul" sx={{ color: 'text.primary', mb: 3 }}>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Readability:</strong> Can users easily read your content at various sizes?
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Brand alignment:</strong> Does the font match your brand's personality?
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Performance:</strong> All fonts in Crow Create are optimized for web
            performance
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Accessibility:</strong> Avoid overly decorative fonts for body text
          </Typography>
        </li>
      </Box>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Font Pairing Suggestions
      </Typography>
      <Typography variant="body1" paragraph>
        Crow Create's intelligent font pairing system suggests combinations that work well
        together. The algorithm considers:
      </Typography>

      <Paper sx={{ p: 3, my: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Pairing Principles
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Contrast:</strong> Pair a display font (for headings) with a readable body font
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Harmony:</strong> Fonts should complement each other, not compete
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Mood:</strong> Both fonts should support the same emotional tone
        </Typography>
        <Typography variant="body1">
          <strong>Hierarchy:</strong> Visual distinction between heading and body text
        </Typography>
      </Paper>

      <Alert severity="success" icon={<Lightbulb />} sx={{ my: 3 }}>
        <strong>Pro Tip:</strong> When in doubt, pair a serif heading font with a sans-serif body
        font, or vice versa. This creates natural contrast and hierarchy.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Typography Scale
      </Typography>
      <Typography variant="body1" paragraph>
        A typography scale defines the size relationships between different text elements. Crow
        Create uses a modular scale system with two key parameters:
      </Typography>

      <Paper sx={{ p: 3, my: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Base Font Size
        </Typography>
        <Typography variant="body1" paragraph>
          The foundational size for body text, typically 16px. This is your starting point for all
          other sizes.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Recommended: 16px for optimal readability on most screens
        </Typography>
      </Paper>

      <Paper sx={{ p: 3, my: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Scale Ratio
        </Typography>
        <Typography variant="body1" paragraph>
          The multiplier used to calculate each heading size. Common ratios are based on musical
          intervals and mathematical proportions.
        </Typography>

        <TableContainer sx={{ mt: 2 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell><strong>Ratio</strong></TableCell>
                <TableCell><strong>Name</strong></TableCell>
                <TableCell><strong>Use Case</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>1.125</TableCell>
                <TableCell>Minor Second</TableCell>
                <TableCell>Subtle, compact layouts</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1.200</TableCell>
                <TableCell>Minor Third</TableCell>
                <TableCell>Balanced, versatile</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1.250</TableCell>
                <TableCell>Major Third</TableCell>
                <TableCell>Clear hierarchy (recommended)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1.333</TableCell>
                <TableCell>Perfect Fourth</TableCell>
                <TableCell>Strong contrast</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1.500</TableCell>
                <TableCell>Perfect Fifth</TableCell>
                <TableCell>Dramatic, editorial</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Best Practices
      </Typography>

      <Box component="ul" sx={{ color: 'text.primary' }}>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Limit font families:</strong> Use no more than 2-3 font families in your
            design system
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Maintain minimum sizes:</strong> Never go below 14px for body text (16px
            recommended)
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Line height matters:</strong> Use 1.5-1.6 for body text, 1.2-1.3 for headings
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Test at scale:</strong> View your typography at actual device sizes, not just
            in design tools
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Consider line length:</strong> Aim for 45-75 characters per line for optimal
            readability
          </Typography>
        </li>
      </Box>

      <Alert severity="warning" sx={{ mt: 4 }}>
        <strong>Accessibility Note:</strong> Some users increase browser font size for better
        readability. Always use relative units (rem, em) rather than fixed pixels in production
        code.
      </Alert>
    </Box>
  )
}
