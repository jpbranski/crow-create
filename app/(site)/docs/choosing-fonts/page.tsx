import { Box, Typography, Alert, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Link as MuiLink, Button } from '@mui/material'
import { Accessibility, CheckCircle, TextFields, Height } from '@mui/icons-material'
import Link from 'next/link'

export const metadata = {
  title: 'Choosing Accessible Fonts | Crow Create',
  description: 'Learn criteria for choosing accessible fonts including x-height, character spacing, avoiding decorative fonts for body text, and ensuring readability for all users.',
}

export default function ChoosingFontsPage() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
        Choosing Accessible Fonts
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Master the art of selecting typefaces that ensure readability, accessibility, and excellent user experience for all users, including those with visual impairments.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Alert severity="info" sx={{ mb: 4 }}>
        <strong>Why Accessible Fonts Matter:</strong> Typography is foundational to accessibility. The right font choices ensure your content is readable for users with dyslexia, low vision, aging eyes, and other reading difficulties. Accessible fonts benefit everyone, not just users with disabilities.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600}>
        Key Criteria for Accessible Fonts
      </Typography>
      <Typography variant="body1" paragraph>
        When evaluating fonts for accessibility, consider these essential characteristics that impact readability and usability.
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Height sx={{ color: 'primary.main', mr: 1 }} />
          X-Height
        </Box>
      </Typography>
      <Typography variant="body1" paragraph>
        X-height is the height of lowercase letters (specifically the letter 'x'), excluding ascenders and descenders. A larger x-height improves readability, especially at smaller sizes.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Why X-Height Matters
        </Typography>
        <Box component="ul" sx={{ color: 'text.primary' }}>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Improved legibility:</strong> Larger x-height means more open counter space, making letters easier to distinguish
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Better at small sizes:</strong> Text remains readable when rendered at 14px or smaller
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Reduced eye strain:</strong> Less squinting required to differentiate letterforms
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Mobile friendly:</strong> Critical for small smartphone screens
            </Typography>
          </li>
        </Box>

        <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 2 }}>
          Good X-Height Examples:
        </Typography>
        <Typography variant="body1">
          Verdana, Tahoma, Georgia, Trebuchet MS, Comic Sans MS (despite its reputation), Open Sans, Roboto, Inter
        </Typography>

        <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 2 }}>
          Poor X-Height Examples:
        </Typography>
        <Typography variant="body1">
          Garamond, Baskerville, Bodoni, many script and decorative fonts
        </Typography>
      </Paper>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Character Spacing (Tracking)
      </Typography>
      <Typography variant="body1" paragraph>
        Adequate space between characters prevents crowding and improves letter recognition, especially for dyslexic readers.
      </Typography>

      <Box sx={{ pl: 2 }}>
        <Typography variant="body1" paragraph>
          <strong>Natural spacing:</strong> Choose fonts with generous default letter spacing. Avoid fonts that feel cramped or condensed for body text.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Adjust when needed:</strong> Use CSS letter-spacing to add 0.03em to 0.12em for improved dyslexia-friendly readability.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Avoid extreme condensed fonts:</strong> Condensed fonts save space but harm readability. Reserve for display use only.
        </Typography>
      </Box>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Open Apertures
      </Typography>
      <Typography variant="body1" paragraph>
        Apertures are the openings in letters like 'c', 'e', 'a', 's'. Open apertures prevent letters from appearing closed or ambiguous.
      </Typography>

      <TableContainer component={Paper} sx={{ my: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Letter Pairs to Check</strong></TableCell>
              <TableCell><strong>What to Look For</strong></TableCell>
              <TableCell><strong>Why It Matters</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>c, e, a, s</TableCell>
              <TableCell>Wide, open apertures</TableCell>
              <TableCell>Prevents letters from appearing closed or blob-like at small sizes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>b, d, p, q</TableCell>
              <TableCell>Clear distinction between shapes</TableCell>
              <TableCell>Common confusion points for dyslexic readers</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>I, l, 1</TableCell>
              <TableCell>Clearly different from each other</TableCell>
              <TableCell>Critical for code, data, and technical content</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>0, O</TableCell>
              <TableCell>Distinct appearance (slashed zero ideal)</TableCell>
              <TableCell>Prevents confusion in numbers and text</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Distinct Letterforms
      </Typography>
      <Typography variant="body1" paragraph>
        Each character should be immediately recognizable and distinct from similar letters.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Test These Common Confusion Points
        </Typography>
        <Box component="ul" sx={{ color: 'text.primary' }}>
          <li><Typography variant="body1"><strong>I vs l vs 1:</strong> Capital I, lowercase L, number 1 should be clearly different</Typography></li>
          <li><Typography variant="body1"><strong>O vs 0:</strong> Letter O vs number zero (consider slashed or dotted zero)</Typography></li>
          <li><Typography variant="body1"><strong>rn vs m:</strong> Should not look identical ('rn' should not look like 'm')</Typography></li>
          <li><Typography variant="body1"><strong>cl vs d:</strong> 'c' and 'l' together should not look like 'd'</Typography></li>
          <li><Typography variant="body1"><strong>fi vs ﬁ:</strong> Clear distinction between separate letters and ligatures</Typography></li>
        </Box>
      </Paper>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Avoid High Stroke Contrast
      </Typography>
      <Typography variant="body1" paragraph>
        Fonts with extreme variation between thick and thin strokes can be difficult to read, especially at small sizes or on screens.
      </Typography>

      <Box sx={{ pl: 2 }}>
        <Typography variant="body1" paragraph>
          <strong>Problems with high contrast:</strong> Thin strokes may disappear on low-resolution screens, create shimmer effects, or be invisible to users with certain visual impairments.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Better choice:</strong> Moderate contrast fonts (like Helvetica, Arial, Roboto) maintain visibility across contexts.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>High contrast fonts:</strong> Didot, Bodoni, Baskerville - Beautiful for display, problematic for body text.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Avoiding Decorative Fonts for Body Text
      </Typography>
      <Typography variant="body1" paragraph>
        Decorative, script, handwriting, and highly stylized fonts should never be used for body text. They're designed for impact, not sustained reading.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'error.light', color: 'error.contrastText', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Never Use for Body Text:
        </Typography>
        <Box component="ul">
          <li><Typography variant="body1">Script or handwriting fonts (Brush Script, Pacifico, Dancing Script)</Typography></li>
          <li><Typography variant="body1">All-caps fonts (use uppercase sparingly via CSS instead)</Typography></li>
          <li><Typography variant="body1">Distressed or grunge fonts</Typography></li>
          <li><Typography variant="body1">Overly decorative serifs (Blackletter, Uncial)</Typography></li>
          <li><Typography variant="body1">Novelty fonts (Comic Sans for professional contexts)</Typography></li>
          <li><Typography variant="body1">Ultra-light weight fonts (100-200 weight)</Typography></li>
          <li><Typography variant="body1">Extremely condensed or extended fonts</Typography></li>
        </Box>
      </Paper>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'success.light', color: 'success.contrastText', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Appropriate Uses for Decorative Fonts:
        </Typography>
        <Box component="ul">
          <li><Typography variant="body1">Large headings and display text (when legible)</Typography></li>
          <li><Typography variant="body1">Logos and brand marks</Typography></li>
          <li><Typography variant="body1">Short promotional text (2-5 words)</Typography></li>
          <li><Typography variant="body1">Decorative initial caps (drop caps)</Typography></li>
          <li><Typography variant="body1">Hero sections with minimal text</Typography></li>
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Recommended Accessible Fonts
      </Typography>
      <Typography variant="body1" paragraph>
        These fonts have been tested and recommended for accessibility by organizations like the British Dyslexia Association, RNIB, and accessibility experts.
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Sans-Serif (Best for Digital)
      </Typography>

      <TableContainer component={Paper} sx={{ my: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Font</strong></TableCell>
              <TableCell><strong>Strengths</strong></TableCell>
              <TableCell><strong>Availability</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Inter</TableCell>
              <TableCell>Designed for screens, excellent x-height, wide apertures</TableCell>
              <TableCell>Google Fonts, free</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Roboto</TableCell>
              <TableCell>Open letterforms, multiple weights, widely tested</TableCell>
              <TableCell>Google Fonts, free</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Open Sans</TableCell>
              <TableCell>Neutral, highly legible, friendly appearance</TableCell>
              <TableCell>Google Fonts, free</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Verdana</TableCell>
              <TableCell>Designed for screens, very large x-height</TableCell>
              <TableCell>System font (Windows, macOS)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Arial</TableCell>
              <TableCell>Neutral, familiar, highly legible</TableCell>
              <TableCell>System font (universal)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Atkinson Hyperlegible</TableCell>
              <TableCell>Specifically designed for low vision, distinct characters</TableCell>
              <TableCell>Google Fonts, Braille Institute, free</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Lexend</TableCell>
              <TableCell>Designed to improve reading proficiency</TableCell>
              <TableCell>Google Fonts, free</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Serif (For Long-Form Reading)
      </Typography>

      <TableContainer component={Paper} sx={{ my: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Font</strong></TableCell>
              <TableCell><strong>Strengths</strong></TableCell>
              <TableCell><strong>Availability</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Georgia</TableCell>
              <TableCell>Designed for screens, large x-height, open apertures</TableCell>
              <TableCell>System font (universal)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Merriweather</TableCell>
              <TableCell>Designed for screens, condensed yet readable</TableCell>
              <TableCell>Google Fonts, free</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Source Serif Pro</TableCell>
              <TableCell>Clear, professional, good x-height</TableCell>
              <TableCell>Google Fonts, free</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Lora</TableCell>
              <TableCell>Brushed curves, moderate contrast, calligraphic details</TableCell>
              <TableCell>Google Fonts, free</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Alert severity="info" sx={{ my: 3 }}>
        <strong>Note on Comic Sans:</strong> Despite its poor reputation among designers, Comic Sans has been shown to help some dyslexic readers due to its varied letterforms and lack of mirror-image letters. Consider it for specific accessibility contexts, not general professional use.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Font Size and Weight Considerations
      </Typography>

      <Box component="ul" sx={{ color: 'text.primary', pl: 2 }}>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Minimum body size:</strong> 16px (14px absolute minimum). Many accessibility guidelines recommend 18px for optimal readability.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Avoid ultra-light weights:</strong> Weights 100-200 are decorative only. Use 400 (regular) or heavier for body text.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Medium weights for small text:</strong> If using 14px, use weight 500-600 to compensate for reduced size.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Responsive sizing:</strong> Increase base font size on mobile (minimum 16px to prevent zoom on input focus).
          </Typography>
        </li>
      </Box>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Testing Your Font Choices
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'primary.main', color: 'primary.contrastText', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
          <CheckCircle sx={{ mr: 1 }} />
          Accessibility Testing Checklist
        </Typography>
        <Box component="ol">
          <li><Typography variant="body1" paragraph><strong>The "Illl1" Test:</strong> Type "Illl1" - can you distinguish capital I, lowercase L, and number 1?</Typography></li>
          <li><Typography variant="body1" paragraph><strong>The "0O" Test:</strong> Type "0O" - are zero and letter O clearly different?</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Small Size Test:</strong> Read a paragraph at 14px - is it comfortably readable?</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Gray Text Test:</strong> Test at #666 on white background - still readable?</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Blur Test:</strong> Blur your screen or squint - letters remain distinct?</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Long-form Reading:</strong> Read 2-3 paragraphs - does it cause eye strain?</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Distance Test:</strong> View from arm's length - still readable?</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Dyslexia Simulation:</strong> Use browser extensions to simulate dyslexia</Typography></li>
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Helpful Resources
      </Typography>
      <Box component="ul" sx={{ color: 'text.primary' }}>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://www.bdadyslexia.org.uk/advice/employers/creating-a-dyslexia-friendly-workplace/dyslexia-friendly-style-guide" target="_blank" rel="noopener noreferrer">
              British Dyslexia Association - Dyslexia Friendly Style Guide
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://www.rnib.org.uk/professionals/knowledge-and-research-hub/key-information-and-statistics/fonts" target="_blank" rel="noopener noreferrer">
              RNIB - Clear Print Guidelines
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://brailleinstitute.org/freefont" target="_blank" rel="noopener noreferrer">
              Atkinson Hyperlegible Font - Braille Institute
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
            <Link href="/docs/serif-vs-sans" passHref legacyBehavior>
              <MuiLink>Serif vs Sans-Serif (Crow Create Docs)</MuiLink>
            </Link>
          </Typography>
        </li>
      </Box>

      <Box sx={{ mt: 4, p: 3, bgcolor: 'background.paper', borderRadius: 2, border: 1, borderColor: 'divider' }}>
        <Typography variant="h5" gutterBottom fontWeight={600}>
          Ready to Choose Your Fonts?
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Use Crow Create to preview accessible font combinations and see how they perform across different use cases.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Link href="/create" passHref legacyBehavior>
            <Button component="a" variant="contained" size="large">
              Explore Font Options
            </Button>
          </Link>
          <Link href="/docs/accessible-typography" passHref legacyBehavior>
            <Button component="a" variant="outlined" size="large">
              Learn Typography Basics
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
