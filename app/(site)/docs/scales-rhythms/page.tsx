import { Box, Typography, Alert, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Link as MuiLink, Button } from '@mui/material'
import { Functions, Straighten, GridOn, MusicNote } from '@mui/icons-material'
import Link from 'next/link'

export const metadata = {
  title: 'Scales & Rhythms | Crow Create',
  description: 'Learn about modular scales, typographic scale ratios, vertical rhythm, and spacing systems to create harmonious, mathematically consistent designs.',
}

export default function ScalesRhythmsPage() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
        Scales & Rhythms in Typography
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Master modular scales and vertical rhythm to create harmonious, mathematically consistent typography systems that feel balanced and professional.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Alert severity="info" sx={{ mb: 4 }}>
        <strong>Why Scales Matter:</strong> Mathematical scales create visual harmony through consistent proportions. Like musical notes, properly scaled typography creates a rhythm that feels natural and pleasing, even if users can't consciously identify why.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600}>
        What is a Modular Scale?
      </Typography>
      <Typography variant="body1" paragraph>
        A modular scale is a sequence of numbers that are related by a consistent ratio. In typography, this means each font size is multiplied by the same ratio to get the next size, creating a harmonious progression from smallest to largest text.
      </Typography>

      <Typography variant="body1" paragraph>
        Just as musical scales use mathematical ratios to create pleasing harmonies, typographic scales use ratios to create visual harmony. This systematic approach eliminates arbitrary size choices and creates consistency.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
          <Functions sx={{ mr: 1, color: 'primary.main' }} />
          How Modular Scales Work
        </Typography>
        <Typography variant="body1" paragraph>
          Start with a base size (usually your body text size, like 16px). Multiply by your chosen ratio repeatedly to generate larger sizes. Divide by the ratio to generate smaller sizes.
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.85rem' }}>
{`Base size: 16px
Ratio: 1.5 (Perfect Fifth)

Smaller: 16 ÷ 1.5 = 10.667px
Base: 16px
Step 1: 16 × 1.5 = 24px
Step 2: 24 × 1.5 = 36px
Step 3: 36 × 1.5 = 54px`}
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Common Scale Ratios
      </Typography>
      <Typography variant="body1" paragraph>
        Different ratios create different feels. Smaller ratios (closer to 1) create subtle hierarchy, while larger ratios create dramatic size differences.
      </Typography>

      <TableContainer component={Paper} sx={{ my: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Ratio</strong></TableCell>
              <TableCell><strong>Feel</strong></TableCell>
              <TableCell><strong>Best For</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Minor Second</TableCell>
              <TableCell>1.067</TableCell>
              <TableCell>Subtle, conservative</TableCell>
              <TableCell>Dense content, technical documentation</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Major Second</TableCell>
              <TableCell>1.125</TableCell>
              <TableCell>Restrained, professional</TableCell>
              <TableCell>Corporate sites, business apps</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Minor Third</TableCell>
              <TableCell>1.2</TableCell>
              <TableCell>Balanced, versatile</TableCell>
              <TableCell>Most web applications</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Major Third</TableCell>
              <TableCell>1.25</TableCell>
              <TableCell>Moderate, clear hierarchy</TableCell>
              <TableCell>Marketing sites, blogs</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Perfect Fourth</TableCell>
              <TableCell>1.333</TableCell>
              <TableCell>Noticeable, confident</TableCell>
              <TableCell>Editorial, content-heavy sites</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Perfect Fifth</TableCell>
              <TableCell>1.5</TableCell>
              <TableCell>Strong, bold</TableCell>
              <TableCell>Landing pages, portfolios</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Golden Ratio</TableCell>
              <TableCell>1.618</TableCell>
              <TableCell>Classic, harmonious</TableCell>
              <TableCell>Design-focused projects</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Major Sixth</TableCell>
              <TableCell>1.667</TableCell>
              <TableCell>Dramatic, impactful</TableCell>
              <TableCell>Hero sections, displays</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Octave</TableCell>
              <TableCell>2</TableCell>
              <TableCell>Very dramatic</TableCell>
              <TableCell>High-impact marketing, posters</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Alert severity="success" sx={{ my: 3 }}>
        <strong>Recommendation:</strong> Start with ratios between 1.2 and 1.333 for most digital products. These provide clear hierarchy without excessive jumps between sizes. Reserve larger ratios for marketing pages with fewer text levels.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Building Your Type Scale
      </Typography>
      <Typography variant="body1" paragraph>
        Let's walk through creating a practical type scale for a web application using the Perfect Fourth ratio (1.333).
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Example: Perfect Fourth Scale (16px base, 1.333 ratio)
        </Typography>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell><strong>Level</strong></TableCell>
                <TableCell><strong>Calculation</strong></TableCell>
                <TableCell><strong>Size (px)</strong></TableCell>
                <TableCell><strong>Rounded</strong></TableCell>
                <TableCell><strong>Usage</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ bgcolor: 'white' }}>
              <TableRow>
                <TableCell>xs</TableCell>
                <TableCell>16 ÷ 1.333</TableCell>
                <TableCell>12px</TableCell>
                <TableCell>12px</TableCell>
                <TableCell>Small labels, captions</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>sm</TableCell>
                <TableCell>16 ÷ 1.125</TableCell>
                <TableCell>14.22px</TableCell>
                <TableCell>14px</TableCell>
                <TableCell>Secondary text, metadata</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>base</TableCell>
                <TableCell>16</TableCell>
                <TableCell>16px</TableCell>
                <TableCell>16px</TableCell>
                <TableCell>Body text</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>lg</TableCell>
                <TableCell>16 × 1.125</TableCell>
                <TableCell>18px</TableCell>
                <TableCell>18px</TableCell>
                <TableCell>Lead paragraphs</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>xl</TableCell>
                <TableCell>16 × 1.333</TableCell>
                <TableCell>21.33px</TableCell>
                <TableCell>21px</TableCell>
                <TableCell>H6, H5</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2xl</TableCell>
                <TableCell>16 × 1.778</TableCell>
                <TableCell>28.44px</TableCell>
                <TableCell>28px</TableCell>
                <TableCell>H4</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3xl</TableCell>
                <TableCell>16 × 2.369</TableCell>
                <TableCell>37.9px</TableCell>
                <TableCell>38px</TableCell>
                <TableCell>H3</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>4xl</TableCell>
                <TableCell>16 × 3.157</TableCell>
                <TableCell>50.5px</TableCell>
                <TableCell>50px</TableCell>
                <TableCell>H2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>5xl</TableCell>
                <TableCell>16 × 4.209</TableCell>
                <TableCell>67.35px</TableCell>
                <TableCell>67px</TableCell>
                <TableCell>H1</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Vertical Rhythm
      </Typography>
      <Typography variant="body1" paragraph>
        Vertical rhythm creates consistent spacing between text elements by ensuring line heights and margins are multiples of a baseline grid. This creates a sense of order and improves readability.
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        The Baseline Grid
      </Typography>
      <Typography variant="body1" paragraph>
        A baseline grid is an invisible grid of horizontal lines that text sits on. By aligning all text baselines to this grid, you create visual harmony and rhythm down the page.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
          <GridOn sx={{ mr: 1, color: 'primary.main' }} />
          Setting Up Vertical Rhythm
        </Typography>

        <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 2 }}>
          1. Choose a Baseline Unit
        </Typography>
        <Typography variant="body1" paragraph>
          Common choices: 4px, 6px, or 8px. This becomes your rhythmic unit. All vertical spacing should be a multiple of this value.
        </Typography>

        <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 2 }}>
          2. Set Line Heights
        </Typography>
        <Typography variant="body1" paragraph>
          Line height should be a multiple of your baseline unit. For 16px text with an 8px baseline:
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.85rem', mb: 2 }}>
{`font-size: 16px
line-height: 24px (3 × 8px baseline)
ratio: 1.5 (24 ÷ 16)`}
        </Box>

        <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 2 }}>
          3. Set Margins
        </Typography>
        <Typography variant="body1" paragraph>
          Margins between elements should also follow the baseline grid:
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.85rem' }}>
{`margin-bottom: 16px (2 × 8px baseline)
margin-bottom: 24px (3 × 8px baseline)
margin-bottom: 32px (4 × 8px baseline)`}
        </Box>
      </Paper>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Practical Vertical Rhythm Example
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          8px Baseline Grid System
        </Typography>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre', overflow: 'auto' }}>
{`:root {
  --baseline: 8px;
}

h1 {
  font-size: 48px;
  line-height: 56px; /* 7 × 8px */
  margin-bottom: 24px; /* 3 × 8px */
}

h2 {
  font-size: 36px;
  line-height: 48px; /* 6 × 8px */
  margin-bottom: 16px; /* 2 × 8px */
}

h3 {
  font-size: 24px;
  line-height: 32px; /* 4 × 8px */
  margin-bottom: 16px; /* 2 × 8px */
}

p {
  font-size: 16px;
  line-height: 24px; /* 3 × 8px */
  margin-bottom: 16px; /* 2 × 8px */
}

.small {
  font-size: 14px;
  line-height: 24px; /* 3 × 8px */
  margin-bottom: 8px; /* 1 × 8px */
}`}
        </Box>
      </Paper>

      <Alert severity="info" sx={{ my: 3 }}>
        <strong>Modern Approach:</strong> Strict baseline grids can be challenging with responsive design. Many modern systems use a looser interpretation - ensuring spacing is consistent and follows a mathematical system without rigidly adhering to a baseline for every element.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Spacing Systems
      </Typography>
      <Typography variant="body1" paragraph>
        Beyond typography, spacing systems apply the same mathematical principles to margins, padding, and gaps throughout your interface.
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Common Spacing Scales
      </Typography>

      <TableContainer component={Paper} sx={{ my: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>System</strong></TableCell>
              <TableCell><strong>Values</strong></TableCell>
              <TableCell><strong>Philosophy</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>8-Point Grid</TableCell>
              <TableCell>8, 16, 24, 32, 40, 48, 56, 64...</TableCell>
              <TableCell>Multiples of 8. Very common in digital design</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4-Point Grid</TableCell>
              <TableCell>4, 8, 12, 16, 20, 24, 28, 32...</TableCell>
              <TableCell>More granular. Common in Material Design</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tailwind Scale</TableCell>
              <TableCell>4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96...</TableCell>
              <TableCell>Combines 4px increments with larger jumps</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fibonacci</TableCell>
              <TableCell>8, 13, 21, 34, 55, 89...</TableCell>
              <TableCell>Natural proportions, organic feel</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Powers of 2</TableCell>
              <TableCell>4, 8, 16, 32, 64, 128...</TableCell>
              <TableCell>Dramatic scale, exponential growth</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Building a T-Shirt Size System
      </Typography>
      <Typography variant="body1" paragraph>
        Many design systems use semantic names (xs, sm, md, lg, xl) for spacing, making it easier to communicate and remember.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          T-Shirt Size Spacing Scale (8px base)
        </Typography>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre', overflow: 'auto' }}>
{`--spacing-xs: 4px    /* 0.5 × base */
--spacing-sm: 8px    /* 1 × base */
--spacing-md: 16px   /* 2 × base */
--spacing-lg: 24px   /* 3 × base */
--spacing-xl: 32px   /* 4 × base */
--spacing-2xl: 48px  /* 6 × base */
--spacing-3xl: 64px  /* 8 × base */
--spacing-4xl: 96px  /* 12 × base */

/* Usage */
.card {
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

.section {
  padding: var(--spacing-2xl) 0;
}`}
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Responsive Scales
      </Typography>
      <Typography variant="body1" paragraph>
        Your scale can (and often should) change at different screen sizes. Mobile devices benefit from tighter scales, while desktop displays can accommodate larger type.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Responsive Type Scale Example
        </Typography>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre', overflow: 'auto' }}>
{`:root {
  /* Mobile: 1.2 ratio (Minor Third) */
  --text-base: 16px;
  --text-lg: 19px;    /* 16 × 1.2 */
  --text-xl: 23px;    /* 19 × 1.2 */
  --text-2xl: 28px;   /* 23 × 1.2 */
  --text-3xl: 33px;   /* 28 × 1.2 */
}

@media (min-width: 768px) {
  :root {
    /* Tablet: 1.25 ratio (Major Third) */
    --text-lg: 20px;    /* 16 × 1.25 */
    --text-xl: 25px;    /* 20 × 1.25 */
    --text-2xl: 31px;   /* 25 × 1.25 */
    --text-3xl: 39px;   /* 31 × 1.25 */
  }
}

@media (min-width: 1024px) {
  :root {
    /* Desktop: 1.333 ratio (Perfect Fourth) */
    --text-lg: 21px;    /* 16 × 1.333 */
    --text-xl: 28px;    /* 21 × 1.333 */
    --text-2xl: 37px;   /* 28 × 1.333 */
    --text-3xl: 50px;   /* 37 × 1.333 */
  }
}`}
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Tools for Creating Scales
      </Typography>

      <Box component="ul" sx={{ color: 'text.primary', pl: 2 }}>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Modular Scale Calculator:</strong> Input base size and ratio to generate your scale
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Type Scale:</strong> Visual tool showing your scale applied to actual text
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Gridlover:</strong> Establish vertical rhythm with visual baseline grid
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Crow Create:</strong> Configure your type scale with real-time preview and export
          </Typography>
        </li>
      </Box>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Helpful Resources
      </Typography>
      <Box component="ul" sx={{ color: 'text.primary' }}>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://www.modularscale.com/" target="_blank" rel="noopener noreferrer">
              Modular Scale - Interactive scale calculator
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://typescale.com/" target="_blank" rel="noopener noreferrer">
              Type Scale - Visual typography scale generator
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://gridlover.net/" target="_blank" rel="noopener noreferrer">
              Gridlover - Establish vertical rhythm
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://spencermortensen.com/articles/typographic-scale/" target="_blank" rel="noopener noreferrer">
              The Typographic Scale - In-depth article
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
      </Box>

      <Box sx={{ mt: 4, p: 3, bgcolor: 'background.paper', borderRadius: 2, border: 1, borderColor: 'divider' }}>
        <Typography variant="h5" gutterBottom fontWeight={600}>
          Ready to Build Your Type Scale?
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Use Crow Create to configure your modular scale with custom ratios, preview it in real components, and export ready-to-use design tokens.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Link href="/create" passHref legacyBehavior>
            <Button component="a" variant="contained" size="large">
              Configure Type Scale
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
