import { Box, Typography, Button, Alert, Divider } from '@mui/material'
import { Palette, Code, Accessibility } from '@mui/icons-material'
import Link from 'next/link'

export default function GettingStartedPage() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
        Getting Started
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Welcome to Crow Create! This guide will help you create your first accessible design
        system in minutes.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h4" gutterBottom fontWeight={600}>
        What is Crow Create?
      </Typography>
      <Typography variant="body1" paragraph>
        Crow Create is a browser-based design system helper that enables designers and developers
        to build comprehensive, WCAG-compliant design systems. All processing happens locally in
        your browser - no account or server needed.
      </Typography>

      <Alert severity="info" sx={{ my: 3 }}>
        <strong>Privacy First:</strong> All your data stays in your browser. We don't collect or
        store any personal information. Your design systems are saved locally and can be shared
        via URL encoding.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Quick Start
      </Typography>
      <Typography variant="body1" paragraph>
        Follow these simple steps to create your first design system:
      </Typography>

      <Box sx={{ pl: 2 }}>
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                mr: 2,
              }}
            >
              1
            </Box>
            <Typography variant="h6" fontWeight={600}>
              Choose Your Colors
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ ml: 6 }}>
            Start by selecting your primary and secondary colors in the Palette & Accessibility
            tab. You can pick colors manually, extract them from images, or use our palette
            enhancement feature to generate semantic colors.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                mr: 2,
              }}
            >
              2
            </Box>
            <Typography variant="h6" fontWeight={600}>
              Check Accessibility
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ ml: 6 }}>
            Use the built-in WCAG contrast checker to ensure your color combinations meet
            accessibility standards. Aim for at least AA compliance for normal text (4.5:1) and
            AAA for critical content (7:1).
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                mr: 2,
              }}
            >
              3
            </Box>
            <Typography variant="h6" fontWeight={600}>
              Configure Typography
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ ml: 6 }}>
            Select your heading and body fonts, or use our intelligent font pairing suggestions.
            Configure your typography scale with custom base sizes and scale ratios.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                mr: 2,
              }}
            >
              4
            </Box>
            <Typography variant="h6" fontWeight={600}>
              Define Layout & Style
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ ml: 6 }}>
            Set up spacing scales, border radius presets, shadow systems, and motion durations.
            These tokens create a consistent visual language across your entire design system.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                mr: 2,
              }}
            >
              5
            </Box>
            <Typography variant="h6" fontWeight={600}>
              Preview & Export
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ ml: 6 }}>
            See your design system in action with live component previews. When satisfied, export
            your design tokens in multiple formats: Material-UI, Tailwind CSS, CSS Variables, or
            JSON.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mt: 4, p: 3, bgcolor: 'grey.50', borderRadius: 2, border: 1, borderColor: 'divider' }}>
        <Typography variant="h5" gutterBottom fontWeight={600}>
          Key Features
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
          <Palette sx={{ mr: 2, color: 'primary.main' }} />
          <Box>
            <Typography variant="subtitle1" fontWeight={600}>
              Color Palette Generation
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Create beautiful palettes with shade generation, image extraction, and semantic
              color creation.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
          <Accessibility sx={{ mr: 2, color: 'primary.main' }} />
          <Box>
            <Typography variant="subtitle1" fontWeight={600}>
              WCAG Compliance Checking
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Ensure your designs meet WCAG 2.1 standards with real-time contrast ratio
              calculation and AA/AAA compliance indicators.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
          <Code sx={{ mr: 2, color: 'primary.main' }} />
          <Box>
            <Typography variant="subtitle1" fontWeight={600}>
              Multi-Framework Export
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Export your design tokens in formats ready for Material-UI, Tailwind, vanilla CSS,
              or JSON for any framework.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ mt: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Button variant="contained" size="large" component={Link} href="/create">
          Start Creating
        </Button>
        <Button variant="outlined" size="large" component={Link} href="/docs/palette">
          Learn About Palettes
        </Button>
      </Box>
    </Box>
  )
}
