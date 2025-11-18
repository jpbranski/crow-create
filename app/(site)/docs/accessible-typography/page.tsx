import { Box, Typography, Alert, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Link as MuiLink, Button } from '@mui/material'
import { Visibility, TextFields, AccessibilityNew, CheckCircle } from '@mui/icons-material'
import Link from 'next/link'

export const metadata = {
  title: 'Accessible Typography | Crow Create',
  description: 'Learn about accessible typography including font families, sizes, weights, line height, spacing, and readability considerations for WCAG compliance.',
}

export default function AccessibleTypographyPage() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
        Accessible Typography
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Master the fundamentals of accessible typography to create readable, inclusive text experiences for all users.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Alert severity="info" sx={{ mb: 4 }}>
        <strong>Why Typography Matters:</strong> Typography affects not only the aesthetics of your design but also the readability and accessibility for users with visual impairments, dyslexia, and other reading difficulties. Well-chosen typography improves comprehension and reduces cognitive load for everyone.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600}>
        Font Family Selection
      </Typography>
      <Typography variant="body1" paragraph>
        The choice of font family has a significant impact on readability and accessibility. While aesthetic preferences vary, certain characteristics make fonts more accessible for users with visual impairments or reading difficulties.
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Characteristics of Accessible Fonts
      </Typography>

      <Box component="ul" sx={{ color: 'text.primary', pl: 2 }}>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Clear letterforms:</strong> Characters should be easily distinguishable from one another (e.g., the letter 'I', number '1', and lowercase 'l' should be clearly different)
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Open apertures:</strong> Letters like 'c', 'e', and 'a' should have open counters (the enclosed or partially enclosed space) to improve legibility at smaller sizes
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Adequate x-height:</strong> A taller x-height (the height of lowercase letters) improves readability, especially at smaller sizes
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Moderate stroke contrast:</strong> Avoid extremely thin strokes that may disappear at small sizes or on low-resolution screens
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Avoid excessive ornamentation:</strong> Decorative fonts should be reserved for headings and used sparingly
          </Typography>
        </li>
      </Box>

      <Paper sx={{ p: 3, my: 4, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
          <TextFields sx={{ mr: 1, color: 'primary.main' }} />
          Recommended Font Families
        </Typography>
        <Typography variant="body1" paragraph>
          These fonts have been tested for accessibility and readability:
        </Typography>
        <Box component="ul" sx={{ color: 'text.primary' }}>
          <li><Typography variant="body1"><strong>Sans-serif:</strong> Inter, Roboto, Open Sans, Lato, Source Sans Pro, Noto Sans</Typography></li>
          <li><Typography variant="body1"><strong>Serif:</strong> Georgia, Merriweather, Source Serif Pro, Lora</Typography></li>
          <li><Typography variant="body1"><strong>Monospace:</strong> Fira Code, JetBrains Mono, Source Code Pro (for code)</Typography></li>
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Font Sizes
      </Typography>
      <Typography variant="body1" paragraph>
        Font size directly impacts readability. WCAG 2.1 doesn't specify minimum font sizes, but recommends that text can be resized up to 200% without loss of content or functionality. Following established best practices helps ensure your typography is accessible from the start.
      </Typography>

      <TableContainer component={Paper} sx={{ my: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Element</strong></TableCell>
              <TableCell><strong>Minimum Size</strong></TableCell>
              <TableCell><strong>Recommended Size</strong></TableCell>
              <TableCell><strong>Notes</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Body Text</TableCell>
              <TableCell>14px</TableCell>
              <TableCell>16px - 18px</TableCell>
              <TableCell>Larger is better for readability</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Small Text</TableCell>
              <TableCell>12px</TableCell>
              <TableCell>14px</TableCell>
              <TableCell>Use sparingly (captions, labels)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>H1 Heading</TableCell>
              <TableCell>28px</TableCell>
              <TableCell>32px - 48px</TableCell>
              <TableCell>Should establish clear hierarchy</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>H2 Heading</TableCell>
              <TableCell>24px</TableCell>
              <TableCell>28px - 36px</TableCell>
              <TableCell>Secondary page sections</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>H3 Heading</TableCell>
              <TableCell>20px</TableCell>
              <TableCell>24px - 28px</TableCell>
              <TableCell>Subsections</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Alert severity="warning" sx={{ my: 3 }}>
        <strong>Mobile Considerations:</strong> On mobile devices, body text should be at least 16px to prevent browsers from zooming in when users focus on input fields. This improves the overall user experience on touch devices.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Font Weight
      </Typography>
      <Typography variant="body1" paragraph>
        Font weight affects both emphasis and readability. Using weight strategically helps establish visual hierarchy without relying solely on size or color.
      </Typography>

      <Box sx={{ pl: 2 }}>
        <Typography variant="body1" paragraph>
          <strong>Light weights (300):</strong> Use sparingly, primarily for large headings. Avoid for body text as it can be difficult to read, especially for users with visual impairments.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Regular weight (400):</strong> The standard for body text. Provides good readability across different screen sizes and resolutions.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Medium weight (500-600):</strong> Excellent for subheadings and emphasis within body text. Creates hierarchy without being too bold.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Bold weight (700):</strong> Use for headings and strong emphasis. Ensures important text stands out clearly.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Extra bold (800-900):</strong> Reserve for large display text and primary headings. Can appear too heavy for body text or smaller sizes.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Line Height (Leading)
      </Typography>
      <Typography variant="body1" paragraph>
        Line height, or leading, is the vertical space between lines of text. Proper line height significantly improves readability by making it easier for the eye to track from one line to the next.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Line Height Guidelines
        </Typography>
        <Box component="ul" sx={{ color: 'text.primary' }}>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Body text:</strong> 1.5 to 1.8 (150% to 180% of font size) - WCAG 2.1 recommends at least 1.5 for paragraphs
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Headings:</strong> 1.2 to 1.4 (120% to 140%) - Tighter leading works for larger text
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Short lines (mobile):</strong> 1.4 to 1.6 - Slightly tighter than desktop
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Long lines:</strong> 1.6 to 1.8 - More space helps the eye track across longer lines
            </Typography>
          </li>
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Letter Spacing (Tracking)
      </Typography>
      <Typography variant="body1" paragraph>
        Letter spacing affects how tightly or loosely characters are spaced. While often subtle, proper letter spacing improves readability, especially for users with dyslexia.
      </Typography>

      <Box sx={{ pl: 2 }}>
        <Typography variant="body1" paragraph>
          <strong>Body text:</strong> Use the font's default spacing (0) or slightly increase (0.01em to 0.02em) for improved readability.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Headings:</strong> Large headings often benefit from slightly tighter tracking (-0.01em to -0.02em), while all-caps text needs more space (0.05em to 0.1em).
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Small text:</strong> Increase letter spacing slightly (0.02em to 0.05em) to improve legibility at small sizes.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>All caps:</strong> Always increase letter spacing (0.05em to 0.15em) as capitals naturally appear more tightly spaced.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Line Length (Measure)
      </Typography>
      <Typography variant="body1" paragraph>
        The optimal line length for readability is 50-75 characters per line (about 8-12 words). Lines that are too long cause the eye to lose its place when moving to the next line, while lines that are too short create choppy reading experiences.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Line Length Best Practices
        </Typography>
        <Box component="ul" sx={{ color: 'text.primary' }}>
          <li><Typography variant="body1">Optimal: 50-75 characters (including spaces)</Typography></li>
          <li><Typography variant="body1">Acceptable: 45-90 characters</Typography></li>
          <li><Typography variant="body1">Use max-width to constrain line length on large screens</Typography></li>
          <li><Typography variant="body1">Consider using columns for very wide layouts</Typography></li>
          <li><Typography variant="body1">Adjust line height based on line length (longer lines need more leading)</Typography></li>
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Paragraph Spacing
      </Typography>
      <Typography variant="body1" paragraph>
        Adequate spacing between paragraphs helps users distinguish between separate ideas and improves scannability. WCAG 2.1 recommends paragraph spacing of at least 2 times the font size.
      </Typography>

      <Box sx={{ pl: 2 }}>
        <Typography variant="body1" paragraph>
          <strong>Minimum spacing:</strong> 2em (twice the font size) between paragraphs
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Recommended spacing:</strong> 1.5em to 2em provides good visual separation
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Word spacing:</strong> At least 0.16 times the font size (WCAG 2.1 requirement)
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Dyslexia-Friendly Typography
      </Typography>
      <Typography variant="body1" paragraph>
        Approximately 10-15% of the population has dyslexia. While there's no single "dyslexia font" that works for everyone, certain typographic choices can significantly improve readability for dyslexic readers.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
          <AccessibilityNew sx={{ mr: 1, color: 'primary.main' }} />
          Dyslexia-Friendly Design Principles
        </Typography>
        <Box component="ul" sx={{ color: 'text.primary' }}>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Use sans-serif fonts:</strong> Generally easier to read than serif fonts for dyslexic users
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Increase letter spacing:</strong> 0.12em to 0.15em can reduce crowding and improve recognition
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Larger text:</strong> 16px minimum, 18px preferred for body text
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Generous line height:</strong> 1.5 to 2.0 reduces line confusion
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Avoid italics:</strong> Slanted text can be harder to read; use bold for emphasis instead
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Avoid justified text:</strong> Left-aligned text creates consistent word spacing
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Use weighted fonts:</strong> Fonts with heavier weights (500-600) can be easier to read than very light weights
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Distinct letterforms:</strong> Choose fonts where b/d, p/q, and n/u are clearly different
            </Typography>
          </li>
        </Box>
      </Paper>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Recommended Fonts for Dyslexic Readers
      </Typography>
      <Typography variant="body1" paragraph>
        While individual preferences vary, research and user testing suggest these fonts work well for many dyslexic readers:
      </Typography>

      <Box component="ul" sx={{ color: 'text.primary', pl: 2 }}>
        <li><Typography variant="body1">OpenDyslexic (specifically designed for dyslexia, though not universally preferred)</Typography></li>
        <li><Typography variant="body1">Comic Sans (despite its reputation, it has distinct letterforms that help some dyslexic readers)</Typography></li>
        <li><Typography variant="body1">Verdana (wide spacing and distinct characters)</Typography></li>
        <li><Typography variant="body1">Arial (clean, simple sans-serif)</Typography></li>
        <li><Typography variant="body1">Lexend (designed for readability with increased character spacing)</Typography></li>
        <li><Typography variant="body1">Atkinson Hyperlegible (designed by Braille Institute for low vision readers)</Typography></li>
      </Box>

      <Alert severity="info" sx={{ my: 3 }}>
        <strong>User Choice is Key:</strong> The best approach for accessibility is to allow users to override your font choices with their preferences. Always use relative units (em, rem) and avoid disabling user stylesheet options.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Text Alignment
      </Typography>
      <Typography variant="body1" paragraph>
        Text alignment affects both aesthetics and readability. While centered or justified text may look elegant, they can create readability challenges.
      </Typography>

      <Box sx={{ pl: 2 }}>
        <Typography variant="body1" paragraph>
          <strong>Left-aligned (LTR languages):</strong> Best for body text. Creates a consistent left edge that helps the eye find the start of each line.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Right-aligned (RTL languages):</strong> Appropriate for languages like Arabic and Hebrew.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Centered:</strong> Use only for headings or short amounts of text. Difficult to read for longer passages.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Justified:</strong> Avoid for web content. Creates uneven word spacing (especially problematic on narrow screens) and can make reading difficult for dyslexic users.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Using Typography in Crow Create
      </Typography>
      <Typography variant="body1" paragraph>
        Crow Create's Typography tab allows you to configure your type system with accessibility in mind. You can set font families, define your typographic scale, and configure spacing that follows WCAG guidelines.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'primary.main', color: 'primary.contrastText', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Quick Tips for Accessible Typography in Crow Create
        </Typography>
        <Box component="ul">
          <li><Typography variant="body1">Start with 16px or 18px base font size</Typography></li>
          <li><Typography variant="body1">Use a modular scale ratio (1.25 or 1.333) for consistent hierarchy</Typography></li>
          <li><Typography variant="body1">Set line height to at least 1.5 for body text</Typography></li>
          <li><Typography variant="body1">Choose fonts with good x-height and open apertures</Typography></li>
          <li><Typography variant="body1">Test your typography with real content at different viewport sizes</Typography></li>
          <li><Typography variant="body1">Export your typography tokens for use in your design system</Typography></li>
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        WCAG 2.1 Typography Requirements
      </Typography>
      <Typography variant="body1" paragraph>
        WCAG 2.1 Success Criterion 1.4.12 (Text Spacing) requires that content doesn't lose functionality when users apply the following text spacing settings:
      </Typography>

      <TableContainer component={Paper} sx={{ my: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Property</strong></TableCell>
              <TableCell><strong>Minimum Required</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Line height (line spacing)</TableCell>
              <TableCell>At least 1.5 times the font size</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Paragraph spacing</TableCell>
              <TableCell>At least 2 times the font size</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Letter spacing (tracking)</TableCell>
              <TableCell>At least 0.12 times the font size</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Word spacing</TableCell>
              <TableCell>At least 0.16 times the font size</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Alert severity="success" sx={{ my: 3 }}>
        <strong>Testing Tip:</strong> Install a browser extension like "Text Spacing Editor" to test whether your design maintains functionality when users increase text spacing according to WCAG requirements.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Helpful Resources
      </Typography>
      <Box component="ul" sx={{ color: 'text.primary' }}>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html" target="_blank" rel="noopener noreferrer">
              WCAG 2.1 Understanding Text Spacing
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://webaim.org/articles/typography/" target="_blank" rel="noopener noreferrer">
              WebAIM: Typefaces and Fonts
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://www.bdadyslexia.org.uk/advice/employers/creating-a-dyslexia-friendly-workplace/dyslexia-friendly-style-guide" target="_blank" rel="noopener noreferrer">
              British Dyslexia Association Style Guide
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://material.io/design/typography/understanding-typography.html" target="_blank" rel="noopener noreferrer">
              Material Design Typography Guidelines
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <Link href="/docs/choosing-fonts" passHref legacyBehavior>
              <MuiLink>Choosing Accessible Fonts (Crow Create Docs)</MuiLink>
            </Link>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <Link href="/docs/scales-rhythms" passHref legacyBehavior>
              <MuiLink>Typography Scales & Rhythms (Crow Create Docs)</MuiLink>
            </Link>
          </Typography>
        </li>
      </Box>

      <Box sx={{ mt: 4, p: 3, bgcolor: 'background.paper', borderRadius: 2, border: 1, borderColor: 'divider' }}>
        <Typography variant="h5" gutterBottom fontWeight={600}>
          Ready to Configure Your Typography?
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Head over to the Create tool to set up your accessible typography system with proper font families, sizes, and spacing.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Link href="/create" passHref legacyBehavior>
            <Button component="a" variant="contained" size="large">
              Configure Typography
            </Button>
          </Link>
          <Link href="/docs/serif-vs-sans" passHref legacyBehavior>
            <Button component="a" variant="outlined" size="large">
              Learn About Serif vs Sans-Serif
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
