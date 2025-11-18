'use client'

import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import Grid2 from '@mui/material/Grid2'
import {
  Palette as PaletteIcon,
  Accessibility,
  Code,
  Settings,
  Speed,
  Security,
  ExpandMore,
  ColorLens,
  Compare,
} from '@mui/icons-material'
import Link from 'next/link'

export default function AboutPage() {
  const theme = useTheme()

  const features = [
    {
      icon: <PaletteIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Design Token Exporter',
      description:
        'Build beautiful color palettes with intelligent shade generation. Export to MUI, Tailwind, CSS variables, or JSON.',
    },
    {
      icon: <Settings sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Typography Tools',
      description:
        'Configure typography scales, font pairings, and type systems with intelligent suggestions and live previews.',
    },
    {
      icon: <Accessibility sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Accessibility Checker',
      description:
        'Ensure your designs meet WCAG 2.1 standards with built-in contrast ratio checking for AA and AAA compliance.',
    },
    {
      icon: <Speed sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Component Previews',
      description:
        'See your design system in action with real-time component previews showing buttons, cards, forms, and more.',
    },
    {
      icon: <ColorLens sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Theme Library',
      description:
        'Explore curated, accessible themes. Apply instantly or use as inspiration for your own custom designs.',
    },
    {
      icon: <Compare sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Compare Tool',
      description:
        'Compare themes side-by-side with synchronized previews. Find the perfect palette for your project.',
    },
  ]

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'grey.50',
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Build Accessible Design Systems
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 4, fontWeight: 400 }}
            >
              A powerful, browser-based tool for designers and developers to
              create beautiful, WCAG-compliant design systems
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                component={Link}
                href="/create"
                variant="contained"
                size="large"
                sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
              >
                Start Creating
              </Button>
              <Button
                component={Link}
                href="/docs"
                variant="outlined"
                size="large"
                sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
              >
                View Docs
              </Button>
            </Box>
          </Box>

          {/* Visual Mock */}
          <Box
            sx={{
              mt: 8,
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: theme.shadows[8],
              bgcolor: 'background.paper',
              border: 1,
              borderColor: 'divider',
              p: 3,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 200,
                bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.100',
                borderRadius: 1,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* SVG Illustration */}
              <svg
                width="100%"
                height="200"
                viewBox="0 0 800 200"
                style={{ maxWidth: '800px' }}
              >
                {/* Color palette swatches */}
                <g transform="translate(50, 50)">
                  <rect x="0" y="0" width="60" height="100" fill="#3361CC" rx="8" />
                  <rect x="70" y="0" width="60" height="100" fill="#6E6BA8" rx="8" />
                  <rect x="140" y="0" width="60" height="100" fill="#10B981" rx="8" />
                  <rect x="210" y="0" width="60" height="100" fill="#F59E0B" rx="8" />
                  <rect x="280" y="0" width="60" height="100" fill="#EF4444" rx="8" />
                </g>

                {/* Typography example */}
                <g transform="translate(420, 60)">
                  <text
                    x="0"
                    y="0"
                    fill={theme.palette.text.primary}
                    fontSize="24"
                    fontWeight="700"
                  >
                    Typography
                  </text>
                  <text
                    x="0"
                    y="30"
                    fill={theme.palette.text.secondary}
                    fontSize="16"
                  >
                    Font pairing & scales
                  </text>
                  <text
                    x="0"
                    y="55"
                    fill={theme.palette.text.secondary}
                    fontSize="12"
                  >
                    WCAG compliant colors
                  </text>
                </g>
              </svg>
            </Box>
          </Box>

          {/* How It Works Accordion */}
          <Box sx={{ mt: 6 }}>
            <Accordion
              sx={{
                bgcolor: 'background.paper',
                borderRadius: 2,
                '&:before': { display: 'none' },
                boxShadow: theme.shadows[2],
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="how-it-works-content"
                id="how-it-works-header"
              >
                <Typography variant="h6" fontWeight={600}>
                  How Crow Create Works
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" paragraph>
                  Crow Create is a comprehensive design system builder that runs entirely in your browser.
                  No backend, no accounts, no data sent to servers.
                </Typography>
                <Typography variant="body2" component="div" color="text.secondary">
                  <Box component="ol" sx={{ pl: 2 }}>
                    <li>
                      <strong>Build Your Palette:</strong> Start by defining your brand colors. Extract them from
                      your logo, generate random palettes, or create from scratch. The tool automatically generates
                      light and dark variants.
                    </li>
                    <li>
                      <strong>Check Accessibility:</strong> Use the built-in WCAG contrast checker to ensure your
                      color combinations meet AA or AAA standards for text readability.
                    </li>
                    <li>
                      <strong>Configure Typography:</strong> Select fonts, define type scales, and get intelligent
                      pairing suggestions between heading and body fonts.
                    </li>
                    <li>
                      <strong>Define Layout Tokens:</strong> Set spacing scales, border radius, shadow systems, and
                      animation timings that match your brand.
                    </li>
                    <li>
                      <strong>Preview Components:</strong> See how your design system looks with real UI components
                      like buttons, cards, forms, and alerts.
                    </li>
                    <li>
                      <strong>Export & Share:</strong> Generate production-ready code for Material-UI, Tailwind CSS,
                      CSS variables, or JSON tokens. Share via URL with teammates.
                    </li>
                  </Box>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h2" gutterBottom fontWeight={600}>
            Everything You Need
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
            Crow Create provides all the tools you need to build comprehensive,
            accessible design systems
          </Typography>
        </Box>

        <Grid2 container spacing={4}>
          {features.map((feature, index) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 2,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[8],
                  },
                }}
              >
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>

      {/* Why Section */}
      <Box
        sx={{
          bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'grey.50',
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h2" gutterBottom fontWeight={600} textAlign="center">
            Why Crow Create?
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Typography variant="body1" paragraph>
              <strong>For Designers:</strong> Create comprehensive design systems with
              confidence. Ensure your color choices meet WCAG accessibility standards,
              experiment with typography pairings, and export your designs as tokens that
              developers can use directly.
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>For Developers:</strong> Generate production-ready code for your
              favorite frameworks. Export to Material-UI themes, Tailwind configurations,
              CSS variables, or framework-agnostic JSON tokens. No manual conversion needed.
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>For Teams:</strong> Share design systems via URL. No accounts, no
              files to send. Just copy the link and collaborate. All processing happens
              locally in your browser for complete privacy.
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Accessibility First:</strong> Built with WCAG 2.1 compliance in mind.
              Check contrast ratios in real-time, understand AA vs AAA requirements, and
              create designs that work for everyone.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 }, textAlign: 'center' }}>
        <Typography variant="h2" component="h2" gutterBottom fontWeight={600}>
          Ready to Get Started?
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph sx={{ mb: 4 }}>
          Create your first design system in minutes. No account required.
        </Typography>
        <Button
          component={Link}
          href="/create"
          variant="contained"
          size="large"
          sx={{ px: 6, py: 2, fontSize: '1.2rem' }}
        >
          Start Creating Now
        </Button>
      </Container>
    </Box>
  )
}
