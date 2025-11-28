import { Box, Typography, Alert, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Link as MuiLink, Button } from '@mui/material'
import { TextFields, Visibility, MenuBook } from '@mui/icons-material'
import Link from 'next/link'

export const metadata = {
  title: 'Serif vs Sans-Serif | Crow Create',
  description: 'Learn the differences between serif and sans-serif fonts, when to use each type, readability studies, web safe fonts, and modern font stacks.',
}

export default function SerifVsSansPage() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
        Serif vs Sans-Serif Fonts
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Understand the fundamental differences between serif and sans-serif typefaces and learn when to use each for optimal readability and impact.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Alert severity="info" sx={{ mb: 4 }}>
        <strong>Why Font Classification Matters:</strong> Choosing between serif and sans-serif fonts affects readability, brand perception, and user experience. Understanding their characteristics helps you make informed typography decisions for your design system.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600}>
        What Are Serifs?
      </Typography>
      <Typography variant="body1" paragraph>
        Serifs are small decorative strokes or lines attached to the ends of letters. They originated in ancient Roman inscriptions and have been used in typography for centuries. Sans-serif fonts ("sans" meaning "without" in French) lack these decorative strokes, featuring clean, simple letterforms.
      </Typography>

      <TableContainer component={Paper} sx={{ my: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Aspect</strong></TableCell>
              <TableCell><strong>Serif Fonts</strong></TableCell>
              <TableCell><strong>Sans-Serif Fonts</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell><strong>Appearance</strong></TableCell>
              <TableCell>Decorative strokes at letter endings</TableCell>
              <TableCell>Clean, straight letter endings</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Feel</strong></TableCell>
              <TableCell>Traditional, formal, elegant, authoritative</TableCell>
              <TableCell>Modern, clean, minimalist, approachable</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Best For</strong></TableCell>
              <TableCell>Long-form text, print, editorial, luxury brands</TableCell>
              <TableCell>Digital interfaces, headings, clean designs</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Examples</strong></TableCell>
              <TableCell>Times New Roman, Georgia, Merriweather</TableCell>
              <TableCell>Arial, Helvetica, Roboto, Inter</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Historical Context
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Serif Fonts
      </Typography>
      <Typography variant="body1" paragraph>
        Serif typefaces have roots in ancient Roman inscriptions. The serifs helped stonemasons create clean edges when carving letters. In the printing press era, serifs served a practical purpose: they helped guide the reader's eye along lines of text in printed books and newspapers.
      </Typography>

      <Box sx={{ pl: 2 }}>
        <Typography variant="body1" paragraph>
          <strong>Old Style Serifs (1465-1780):</strong> Garamond, Caslon - Low contrast, diagonal stress, bracketed serifs
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Transitional Serifs (1750-1830):</strong> Times New Roman, Baskerville - Sharper serifs, more vertical stress
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Modern Serifs (1780-1820):</strong> Didot, Bodoni - High contrast, vertical stress, thin serifs
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Slab Serifs (1815-present):</strong> Rockwell, Courier - Thick, blocky serifs, minimal contrast
        </Typography>
      </Box>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Sans-Serif Fonts
      </Typography>
      <Typography variant="body1" paragraph>
        Sans-serif typefaces emerged in the early 19th century and gained popularity in the 20th century with modernist design movements. They became the standard for digital interfaces due to their clarity on low-resolution screens.
      </Typography>

      <Box sx={{ pl: 2 }}>
        <Typography variant="body1" paragraph>
          <strong>Grotesque (1815-1900):</strong> Franklin Gothic - Early sans-serifs, irregular letter widths
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Neo-Grotesque (1950s):</strong> Helvetica, Arial - Clean, neutral, uniform appearance
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Humanist (1920s-present):</strong> Gill Sans, Verdana - Calligraphic influence, more organic
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Geometric (1920s-present):</strong> Futura, Gotham - Based on geometric shapes, very modern
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Readability Studies
      </Typography>
      <Typography variant="body1" paragraph>
        The "serif vs sans-serif readability" debate has been ongoing for decades. Research provides nuanced insights rather than absolute answers.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
          <Visibility sx={{ mr: 1, color: 'primary.main' }} />
          What Research Shows
        </Typography>

        <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 2 }}>
          Print Reading
        </Typography>
        <Typography variant="body1" paragraph>
          Traditional wisdom holds that serif fonts are more readable in print because serifs guide the eye along lines of text. Studies show mixed results, but many readers report subjective preference for serifs in long-form print content.
        </Typography>

        <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 2 }}>
          Screen Reading
        </Typography>
        <Typography variant="body1" paragraph>
          On digital screens, especially at lower resolutions, sans-serif fonts typically perform better. The simpler letterforms render more clearly at small sizes and on varied screen qualities. However, with modern high-DPI displays, this advantage has diminished.
        </Typography>

        <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 2 }}>
          Key Findings
        </Typography>
        <Box component="ul" sx={{ color: 'text.primary' }}>
          <li><Typography variant="body1">Familiarity matters most - people read best what they're used to</Typography></li>
          <li><Typography variant="body1">Font quality matters more than category (serif vs sans-serif)</Typography></li>
          <li><Typography variant="body1">Context affects performance - different tasks favor different fonts</Typography></li>
          <li><Typography variant="body1">Personal preference significantly affects reading speed and comprehension</Typography></li>
          <li><Typography variant="body1">Modern, well-designed fonts in both categories perform similarly</Typography></li>
        </Box>
      </Paper>

      <Alert severity="info" sx={{ my: 3 }}>
        <strong>Bottom Line:</strong> With modern high-resolution displays, the readability difference between well-designed serif and sans-serif fonts is minimal. Choose based on your brand, audience, and context rather than outdated assumptions about screen readability.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        When to Use Serif Fonts
      </Typography>

      <Box component="ul" sx={{ color: 'text.primary', pl: 2 }}>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Long-form content:</strong> Articles, blog posts, ebooks - serifs create a traditional reading experience
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Print materials:</strong> Brochures, business cards, letterheads - serifs convey professionalism
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Editorial and publishing:</strong> Newspapers, magazines, journals - established tradition
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Luxury and premium brands:</strong> High-end products, fashion, fine dining - serifs suggest elegance
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Traditional industries:</strong> Law, finance, education - serifs convey authority and trust
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Decorative headings:</strong> Display type where character and personality matter
          </Typography>
        </li>
      </Box>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        When to Use Sans-Serif Fonts
      </Typography>

      <Box component="ul" sx={{ color: 'text.primary', pl: 2 }}>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Digital interfaces:</strong> Websites, apps, dashboards - clean, modern appearance
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>UI elements:</strong> Buttons, labels, navigation - clarity at small sizes
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Mobile applications:</strong> Small screens require maximum clarity
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Technology companies:</strong> Startups, SaaS, tech brands - modern, forward-thinking
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Minimalist designs:</strong> Clean aesthetics, whitespace-heavy layouts
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Accessibility-focused projects:</strong> Simple letterforms aid dyslexic readers
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Headings and short text:</strong> Impact and clarity at large sizes
          </Typography>
        </li>
      </Box>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Mixing Serif and Sans-Serif
      </Typography>
      <Typography variant="body1" paragraph>
        Combining serif and sans-serif fonts is a classic typography technique that creates visual interest and hierarchy.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Font Pairing Strategies
        </Typography>

        <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 2 }}>
          1. Serif Headings + Sans-Serif Body
        </Typography>
        <Typography variant="body1" paragraph>
          Traditional, elegant approach. Serif headings add character while sans-serif body ensures digital readability.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
          Example: Merriweather (headings) + Open Sans (body)
        </Typography>

        <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 2 }}>
          2. Sans-Serif Headings + Serif Body
        </Typography>
        <Typography variant="body1" paragraph>
          Modern, clean headings with traditional body text. Common in editorial and magazine websites.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
          Example: Inter (headings) + Lora (body)
        </Typography>

        <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 2 }}>
          3. Contrast in Weight and Style
        </Typography>
        <Typography variant="body1" paragraph>
          Use fonts from the same category but with different weights and styles for subtle hierarchy.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
          Example: Roboto Bold (headings) + Roboto Regular (body)
        </Typography>
      </Paper>

      <Alert severity="warning" sx={{ my: 3 }}>
        <strong>Pairing Caution:</strong> Limit yourself to 2-3 typefaces maximum. Too many fonts create visual chaos and harm readability. Ensure chosen fonts have sufficient contrast in style but maintain harmony.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Web Safe Fonts
      </Typography>
      <Typography variant="body1" paragraph>
        Web safe fonts are pre-installed on most operating systems, ensuring consistent display without requiring downloads.
      </Typography>

      <TableContainer component={Paper} sx={{ my: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Font</strong></TableCell>
              <TableCell><strong>Category</strong></TableCell>
              <TableCell><strong>Characteristics</strong></TableCell>
              <TableCell><strong>Availability</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Arial</TableCell>
              <TableCell>Sans-Serif</TableCell>
              <TableCell>Clean, neutral, highly legible</TableCell>
              <TableCell>Windows, macOS, Linux</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Helvetica</TableCell>
              <TableCell>Sans-Serif</TableCell>
              <TableCell>Classic, modern, widely used</TableCell>
              <TableCell>macOS, iOS</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Times New Roman</TableCell>
              <TableCell>Serif</TableCell>
              <TableCell>Traditional, formal, newspapers</TableCell>
              <TableCell>Windows, macOS</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Georgia</TableCell>
              <TableCell>Serif</TableCell>
              <TableCell>Designed for screens, elegant</TableCell>
              <TableCell>Windows, macOS</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Verdana</TableCell>
              <TableCell>Sans-Serif</TableCell>
              <TableCell>Wide letters, excellent screen readability</TableCell>
              <TableCell>Windows, macOS</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Courier New</TableCell>
              <TableCell>Monospace</TableCell>
              <TableCell>Fixed-width, code, typewriter</TableCell>
              <TableCell>Windows, macOS</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Modern Font Stacks
      </Typography>
      <Typography variant="body1" paragraph>
        Modern font stacks use system fonts for optimal performance and native appearance across platforms.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          System Font Stacks
        </Typography>

        <Typography variant="body2" fontWeight={600} sx={{ mt: 2 }}>Sans-Serif System Stack:</Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.75rem', my: 1, overflow: 'auto' }}>
{`font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
             Roboto, "Helvetica Neue", Arial, sans-serif;`}
        </Box>

        <Typography variant="body2" fontWeight={600} sx={{ mt: 2 }}>Serif System Stack:</Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.75rem', my: 1, overflow: 'auto' }}>
{`font-family: Georgia, "Times New Roman", Times, serif;`}
        </Box>

        <Typography variant="body2" fontWeight={600} sx={{ mt: 2 }}>Monospace System Stack:</Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.75rem', my: 1, overflow: 'auto' }}>
{`font-family: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono",
             Consolas, "Courier New", monospace;`}
        </Box>
      </Paper>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Google Fonts Popular Choices
      </Typography>

      <TableContainer component={Paper} sx={{ my: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Sans-Serif</strong></TableCell>
              <TableCell><strong>Serif</strong></TableCell>
              <TableCell><strong>Best For</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Inter</TableCell>
              <TableCell>Merriweather</TableCell>
              <TableCell>Modern UI, readability</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Roboto</TableCell>
              <TableCell>Lora</TableCell>
              <TableCell>Material Design, blogs</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Open Sans</TableCell>
              <TableCell>Source Serif Pro</TableCell>
              <TableCell>Versatile, professional</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Poppins</TableCell>
              <TableCell>Playfair Display</TableCell>
              <TableCell>Geometric, elegant headings</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Montserrat</TableCell>
              <TableCell>Crimson Text</TableCell>
              <TableCell>Modern, editorial</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Helpful Resources
      </Typography>
      <Box component="ul" sx={{ color: 'text.primary' }}>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer">
              Google Fonts - Free, open-source fonts
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://fontpair.co/" target="_blank" rel="noopener noreferrer">
              Font Pair - Beautiful Google Font combinations
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://www.cssfontstack.com/" target="_blank" rel="noopener noreferrer">
              CSS Font Stack - Web safe font combinations
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
            <Link href="/docs/choosing-fonts" passHref legacyBehavior>
              <MuiLink>Choosing Accessible Fonts (Crow Create Docs)</MuiLink>
            </Link>
          </Typography>
        </li>
      </Box>

      <Box sx={{ mt: 4, p: 3, bgcolor: 'background.paper', borderRadius: 2, border: 1, borderColor: 'divider' }}>
        <Typography variant="h5" gutterBottom fontWeight={600}>
          Ready to Choose Your Fonts?
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Use Crow Create to experiment with different font combinations and see them applied in real UI components.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Link href="/create" passHref legacyBehavior>
            <Button component="a" variant="contained" size="large">
              Explore Font Options
            </Button>
          </Link>
          <Link href="/docs/choosing-fonts" passHref legacyBehavior>
            <Button component="a" variant="outlined" size="large">
              Learn Font Selection
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
