'use client'

import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  useTheme,
} from '@mui/material'
import {
  Palette as PaletteIcon,
  Accessibility,
  Code,
  Settings,
  Speed,
  Security,
} from '@mui/icons-material'
import Link from 'next/link'

export default function AboutPage() {
  const theme = useTheme()

  const features = [
    {
      icon: <PaletteIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Color Palette Creation',
      description:
        'Build beautiful color palettes with intelligent shade generation. Extract colors from images or create from scratch.',
    },
    {
      icon: <Accessibility sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'WCAG Compliance',
      description:
        'Ensure your designs meet accessibility standards with built-in WCAG 2.1 contrast ratio checking for AA and AAA compliance.',
    },
    {
      icon: <Code sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Multi-Framework Export',
      description:
        'Export your design system to Material-UI, Tailwind CSS, CSS Variables, or JSON design tokens with a single click.',
    },
    {
      icon: <Settings sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Complete Customization',
      description:
        'Configure typography scales, spacing systems, border radius, shadows, and motion - all with live previews.',
    },
    {
      icon: <Speed sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Instant Preview',
      description:
        'See your design system come to life with real-time component previews showing buttons, cards, forms, and more.',
    },
    {
      icon: <Security sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Privacy-First',
      description:
        'All data is stored locally in your browser. No accounts, no servers, no tracking. Your designs stay yours.',
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
                View Documentation
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

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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
            </Grid>
          ))}
        </Grid>
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
