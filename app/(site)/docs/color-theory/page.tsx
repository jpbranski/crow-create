import { Box, Typography, Alert, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Link as MuiLink, Button } from '@mui/material'
import { Palette, Psychology, Public, Lightbulb } from '@mui/icons-material'
import Link from 'next/link'

export const metadata = {
  title: 'Color Theory for UI | Crow Create',
  description: 'Learn color theory fundamentals for UI design including the color wheel, complementary, analogous, and triadic schemes, warm vs cool colors, color psychology, and cultural meanings.',
}

export default function ColorTheoryPage() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
        Color Theory for UI Design
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Master the fundamentals of color theory to create harmonious, meaningful, and accessible user interfaces.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Alert severity="info" sx={{ mb: 4 }}>
        <strong>Why Color Theory Matters:</strong> Color is one of the most powerful tools in design. Understanding color theory helps you create interfaces that are not only visually appealing but also communicate effectively and evoke the right emotional responses from users.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600}>
        The Color Wheel
      </Typography>
      <Typography variant="body1" paragraph>
        The color wheel is the foundation of color theory. Developed by Sir Isaac Newton in 1666, it organizes colors in a circular format based on their chromatic relationships. Understanding the color wheel is essential for creating harmonious color schemes.
      </Typography>

      <Paper sx={{ p: 3, my: 4, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Color Wheel Structure
        </Typography>
        <Box component="ul" sx={{ color: 'text.primary' }}>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Primary Colors:</strong> Red, Yellow, Blue - Cannot be created by mixing other colors
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Secondary Colors:</strong> Orange, Green, Purple - Created by mixing two primary colors
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Tertiary Colors:</strong> Red-Orange, Yellow-Orange, Yellow-Green, Blue-Green, Blue-Purple, Red-Purple - Created by mixing a primary with an adjacent secondary color
            </Typography>
          </li>
        </Box>
      </Paper>

      <Alert severity="info" sx={{ my: 3 }}>
        <strong>Note:</strong> Digital design uses the RGB (Red, Green, Blue) additive color model, where colors are created by adding light. This differs from the traditional RYB (Red, Yellow, Blue) model used in painting. However, the color relationships and harmonies remain consistent across both models.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Color Harmony Schemes
      </Typography>
      <Typography variant="body1" paragraph>
        Color harmonies are combinations of colors that are pleasing to the eye and create a sense of order. These schemes are based on geometric relationships on the color wheel.
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Complementary Colors
      </Typography>
      <Typography variant="body1" paragraph>
        Complementary colors sit directly opposite each other on the color wheel (e.g., red and green, blue and orange, yellow and purple). These pairs create maximum contrast and vibrant visual impact.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Using Complementary Colors in UI
        </Typography>
        <Box component="ul" sx={{ color: 'text.primary' }}>
          <li><Typography variant="body1">Creates strong visual contrast and draws attention</Typography></li>
          <li><Typography variant="body1">Ideal for call-to-action buttons against backgrounds</Typography></li>
          <li><Typography variant="body1">Use sparingly - can be overwhelming if overused</Typography></li>
          <li><Typography variant="body1">Tone down saturation for better usability (don't use pure complements at full saturation)</Typography></li>
          <li><Typography variant="body1">Excellent for highlighting important elements</Typography></li>
        </Box>
        <Alert severity="warning" sx={{ mt: 2 }}>
          <strong>Accessibility Warning:</strong> High-contrast complementary colors (especially red-green) can be problematic for users with color blindness. Always ensure sufficient luminance contrast and don't rely on color alone to convey information.
        </Alert>
      </Paper>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Analogous Colors
      </Typography>
      <Typography variant="body1" paragraph>
        Analogous colors sit next to each other on the color wheel (e.g., blue, blue-green, and green). These schemes create harmonious, serene, and comfortable designs.
      </Typography>

      <Box sx={{ pl: 2 }}>
        <Typography variant="body1" paragraph>
          <strong>Characteristics:</strong> Analogous schemes are naturally harmonious and pleasing to the eye. They create a sense of unity and cohesion.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Best for:</strong> Creating calm, comfortable interfaces. Common in productivity apps, wellness applications, and content-focused designs.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Tips:</strong> Choose one color as dominant, use the second to support, and use the third as an accent. Ensure enough contrast for accessibility.
        </Typography>
      </Box>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Triadic Colors
      </Typography>
      <Typography variant="body1" paragraph>
        Triadic color schemes use three colors equally spaced around the color wheel (e.g., red, yellow, and blue or orange, green, and purple). These schemes are vibrant and balanced.
      </Typography>

      <Box sx={{ pl: 2 }}>
        <Typography variant="body1" paragraph>
          <strong>Characteristics:</strong> Triadic schemes offer strong visual contrast while retaining harmony and balance. They feel lively and energetic.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Best for:</strong> Playful, creative, or youthful brands. Works well for multi-section interfaces where you need distinct but related colors.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Tips:</strong> Use one color as dominant and the other two as accents. Desaturate colors slightly for better usability in UI design.
        </Typography>
      </Box>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Split-Complementary Colors
      </Typography>
      <Typography variant="body1" paragraph>
        A variation of complementary colors, this scheme uses a base color and the two colors adjacent to its complement. For example, blue with yellow-orange and red-orange.
      </Typography>

      <Box sx={{ pl: 2 }}>
        <Typography variant="body1" paragraph>
          <strong>Characteristics:</strong> Provides strong visual contrast like complementary colors but is less tense and more balanced.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Best for:</strong> When you want high contrast without the intensity of pure complementary colors. Good for beginners as it's harder to mess up than complementary schemes.
        </Typography>
      </Box>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Tetradic (Double Complementary) Colors
      </Typography>
      <Typography variant="body1" paragraph>
        Tetradic schemes use two complementary color pairs, forming a rectangle on the color wheel. This offers the richest color combinations but is the most difficult to balance.
      </Typography>

      <Box sx={{ pl: 2 }}>
        <Typography variant="body1" paragraph>
          <strong>Tips:</strong> Let one color dominate and use the others as accents. Be careful not to overwhelm the user with too many competing colors.
        </Typography>
      </Box>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Monochromatic Colors
      </Typography>
      <Typography variant="body1" paragraph>
        Monochromatic schemes use variations (tints, shades, and tones) of a single hue. This creates a clean, elegant, and cohesive look.
      </Typography>

      <Box sx={{ pl: 2 }}>
        <Typography variant="body1" paragraph>
          <strong>Characteristics:</strong> Creates harmony and unity. Easy on the eyes and sophisticated.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Best for:</strong> Minimalist designs, professional interfaces, brands that want to convey sophistication and simplicity.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Challenges:</strong> Can lack visual interest. Ensure sufficient contrast between shades for accessibility and hierarchy.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Warm vs Cool Colors
      </Typography>
      <Typography variant="body1" paragraph>
        Colors are often categorized as warm or cool, which affects how they're perceived and the emotions they evoke.
      </Typography>

      <TableContainer component={Paper} sx={{ my: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Temperature</strong></TableCell>
              <TableCell><strong>Colors</strong></TableCell>
              <TableCell><strong>Psychological Effects</strong></TableCell>
              <TableCell><strong>Best Uses</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Warm</TableCell>
              <TableCell>Red, Orange, Yellow</TableCell>
              <TableCell>Energy, passion, happiness, excitement, urgency</TableCell>
              <TableCell>CTAs, food apps, creative brands, warnings</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cool</TableCell>
              <TableCell>Blue, Green, Purple</TableCell>
              <TableCell>Calm, trust, stability, professionalism, relaxation</TableCell>
              <TableCell>Finance, healthcare, technology, social media</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="body1" paragraph>
        Understanding warm and cool colors helps you create the right emotional atmosphere for your interface. Warm colors advance and attract attention, while cool colors recede and create a sense of space.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
          <Lightbulb sx={{ mr: 1, color: 'warning.main' }} />
          Practical Tips for Warm vs Cool Colors
        </Typography>
        <Box component="ul" sx={{ color: 'text.primary' }}>
          <li><Typography variant="body1">Use warm colors to draw attention to CTAs and important elements</Typography></li>
          <li><Typography variant="body1">Cool colors work well for large background areas without overwhelming users</Typography></li>
          <li><Typography variant="body1">Balance warm and cool colors to create visual interest and hierarchy</Typography></li>
          <li><Typography variant="body1">Consider your industry: tech and finance lean cool, food and entertainment lean warm</Typography></li>
          <li><Typography variant="body1">Neutral colors (grays, beiges) can balance warm/cool schemes</Typography></li>
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Color Psychology
      </Typography>
      <Typography variant="body1" paragraph>
        Colors evoke emotional and psychological responses. While individual reactions vary, certain color associations are widely recognized in Western cultures.
      </Typography>

      <TableContainer component={Paper} sx={{ my: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Color</strong></TableCell>
              <TableCell><strong>Psychological Associations</strong></TableCell>
              <TableCell><strong>Common Uses in UI</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell><strong>Red</strong></TableCell>
              <TableCell>Passion, urgency, danger, excitement, love, energy</TableCell>
              <TableCell>Error messages, urgent CTAs, sale badges, notifications</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Orange</strong></TableCell>
              <TableCell>Enthusiasm, creativity, adventure, warmth, caution</TableCell>
              <TableCell>Warning messages, creative brands, food apps, CTAs</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Yellow</strong></TableCell>
              <TableCell>Optimism, happiness, clarity, caution, energy</TableCell>
              <TableCell>Highlights, warnings, cheerful brands, notifications</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Green</strong></TableCell>
              <TableCell>Growth, health, nature, success, harmony, money</TableCell>
              <TableCell>Success messages, environmental brands, finance apps, go/proceed actions</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Blue</strong></TableCell>
              <TableCell>Trust, stability, calm, professionalism, security</TableCell>
              <TableCell>Primary brand color, finance, healthcare, social media, info messages</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Purple</strong></TableCell>
              <TableCell>Luxury, creativity, wisdom, spirituality, mystery</TableCell>
              <TableCell>Premium features, creative apps, beauty brands</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Pink</strong></TableCell>
              <TableCell>Love, compassion, playfulness, youth, romance</TableCell>
              <TableCell>Beauty apps, dating apps, feminine products, playful brands</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Black</strong></TableCell>
              <TableCell>Sophistication, luxury, power, elegance, formality</TableCell>
              <TableCell>Luxury brands, text, high-end products, backgrounds</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>White</strong></TableCell>
              <TableCell>Purity, simplicity, cleanliness, innocence, space</TableCell>
              <TableCell>Backgrounds, minimalist designs, medical/health apps</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Gray</strong></TableCell>
              <TableCell>Neutrality, balance, sophistication, practicality</TableCell>
              <TableCell>Secondary text, borders, disabled states, professional brands</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Alert severity="info" sx={{ my: 3 }}>
        <strong>Context Matters:</strong> Color psychology is influenced by personal experience, cultural background, and context. Always test your color choices with your target audience.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Cultural Color Meanings
      </Typography>
      <Typography variant="body1" paragraph>
        Color meanings vary significantly across cultures. What conveys positivity in one culture may have negative connotations in another. If you're designing for a global audience, it's crucial to understand these cultural differences.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
          <Public sx={{ mr: 1, color: 'info.main' }} />
          Cultural Color Associations
        </Typography>

        <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 2 }}>
          Red
        </Typography>
        <Box component="ul" sx={{ color: 'text.primary' }}>
          <li><Typography variant="body2">Western: Danger, love, passion, excitement</Typography></li>
          <li><Typography variant="body2">China: Good luck, prosperity, happiness, celebration</Typography></li>
          <li><Typography variant="body2">India: Purity, sensuality, weddings</Typography></li>
          <li><Typography variant="body2">South Africa: Mourning</Typography></li>
        </Box>

        <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 2 }}>
          White
        </Typography>
        <Box component="ul" sx={{ color: 'text.primary' }}>
          <li><Typography variant="body2">Western: Purity, innocence, cleanliness, weddings</Typography></li>
          <li><Typography variant="body2">China, Korea, India: Mourning, death, funerals</Typography></li>
          <li><Typography variant="body2">Middle East: Purity, mourning</Typography></li>
        </Box>

        <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 2 }}>
          Black
        </Typography>
        <Box component="ul" sx={{ color: 'text.primary' }}>
          <li><Typography variant="body2">Western: Mourning, formality, sophistication</Typography></li>
          <li><Typography variant="body2">Asia: Career, knowledge, mourning</Typography></li>
          <li><Typography variant="body2">Africa: Maturity, masculinity</Typography></li>
        </Box>

        <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 2 }}>
          Blue
        </Typography>
        <Box component="ul" sx={{ color: 'text.primary' }}>
          <li><Typography variant="body2">Western: Trust, stability, professionalism</Typography></li>
          <li><Typography variant="body2">Middle East: Protection, spirituality</Typography></li>
          <li><Typography variant="body2">Latin America: Mourning (in some countries)</Typography></li>
          <li><Typography variant="body2">Generally positive across most cultures</Typography></li>
        </Box>

        <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 2 }}>
          Yellow
        </Typography>
        <Box component="ul" sx={{ color: 'text.primary' }}>
          <li><Typography variant="body2">Western: Happiness, caution, optimism</Typography></li>
          <li><Typography variant="body2">China: Imperial color, prosperity, royalty</Typography></li>
          <li><Typography variant="body2">Egypt: Mourning</Typography></li>
          <li><Typography variant="body2">Japan: Courage, beauty</Typography></li>
        </Box>

        <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 2 }}>
          Green
        </Typography>
        <Box component="ul" sx={{ color: 'text.primary' }}>
          <li><Typography variant="body2">Western: Nature, growth, money, success</Typography></li>
          <li><Typography variant="body2">Middle East: Islam, fertility, luck, wealth</Typography></li>
          <li><Typography variant="body2">China: Infidelity, exorcism</Typography></li>
          <li><Typography variant="body2">Ireland: National color, luck</Typography></li>
        </Box>

        <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 2 }}>
          Purple
        </Typography>
        <Box component="ul" sx={{ color: 'text.primary' }}>
          <li><Typography variant="body2">Western: Royalty, luxury, spirituality</Typography></li>
          <li><Typography variant="body2">Thailand: Mourning (widows)</Typography></li>
          <li><Typography variant="body2">Brazil: Death, mourning</Typography></li>
        </Box>
      </Paper>

      <Alert severity="warning" sx={{ my: 3 }}>
        <strong>Design for Global Audiences:</strong> When creating designs for international markets, research color meanings in your target cultures. Consider offering theme options or using more neutral color schemes for global products.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Applying Color Theory in UI Design
      </Typography>
      <Typography variant="body1" paragraph>
        Understanding color theory is just the beginning. Here's how to apply these principles practically in UI design:
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'primary.main', color: 'primary.contrastText', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Practical Color Theory Guidelines
        </Typography>
        <Box component="ol">
          <li>
            <Typography variant="body1" paragraph>
              <strong>Start with your primary color:</strong> Choose a color that aligns with your brand and the emotions you want to evoke.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Choose a color harmony:</strong> Select a color scheme (complementary, analogous, etc.) based on your design goals.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Create variations:</strong> Generate tints, shades, and tones of your colors for different UI states and contexts.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Add neutral colors:</strong> Include grays or neutral tones to balance your palette and provide breathing room.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Define semantic colors:</strong> Establish colors for success, error, warning, and information states.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Test for accessibility:</strong> Ensure all color combinations meet WCAG contrast requirements.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Consider color blindness:</strong> Test your palette with color blindness simulators.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Limit your palette:</strong> Use 3-5 main colors to maintain consistency and avoid overwhelming users.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Use the 60-30-10 rule:</strong> 60% dominant color, 30% secondary color, 10% accent color.
            </Typography>
          </li>
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Helpful Resources
      </Typography>
      <Box component="ul" sx={{ color: 'text.primary' }}>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://color.adobe.com/" target="_blank" rel="noopener noreferrer">
              Adobe Color Wheel - Interactive color scheme generator
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://coolors.co/" target="_blank" rel="noopener noreferrer">
              Coolors - Fast color scheme generator
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://www.colorhexa.com/" target="_blank" rel="noopener noreferrer">
              ColorHexa - Color encyclopedia
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <Link href="/docs/palette-generation" passHref legacyBehavior>
              <MuiLink>Palette Generation Best Practices (Crow Create Docs)</MuiLink>
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
        <li>
          <Typography variant="body1">
            <Link href="/docs/accessibility" passHref legacyBehavior>
              <MuiLink>Accessibility Basics (Crow Create Docs)</MuiLink>
            </Link>
          </Typography>
        </li>
      </Box>

      <Box sx={{ mt: 4, p: 3, bgcolor: 'background.paper', borderRadius: 2, border: 1, borderColor: 'divider' }}>
        <Typography variant="h5" gutterBottom fontWeight={600}>
          Ready to Create Your Color Palette?
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Use Crow Create's palette generator to apply color theory principles and create harmonious, accessible color schemes for your design system.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Link href="/create" passHref legacyBehavior>
            <Button component="a" variant="contained" size="large">
              Create Color Palette
            </Button>
          </Link>
          <Link href="/docs/palette-generation" passHref legacyBehavior>
            <Button component="a" variant="outlined" size="large">
              Learn Palette Generation
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
