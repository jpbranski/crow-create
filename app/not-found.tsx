'use client'

import { Container, Box, Typography, Button } from '@mui/material'
import { Home, Create as CreateIcon, Palette } from '@mui/icons-material'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        py: 6,
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          {/* Large 404 */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '8rem', md: '12rem' },
              fontWeight: 900,
              color: 'primary.main',
              lineHeight: 1,
              mb: 2,
            }}
          >
            404
          </Typography>

          {/* Crow Icon or ASCII Art */}
          <Typography
            variant="h3"
            sx={{
              fontFamily: 'monospace',
              color: 'text.secondary',
              mb: 3,
            }}
          >
            ∧___∧
          </Typography>

          {/* Error Message */}
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Page Not Found
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph sx={{ maxWidth: '600px', mx: 'auto', mb: 4 }}>
            Oops! The crow flew away with this page. It seems you've ventured into uncharted
            territory. Don't worry, we'll help you find your way back.
          </Typography>

          {/* Navigation Buttons */}
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              flexWrap: 'wrap',
              mb: 4,
            }}
          >
            <Button
              component={Link}
              href="/"
              variant="contained"
              size="large"
              startIcon={<Home />}
              sx={{ minWidth: 160 }}
            >
              Go Home
            </Button>
            <Button
              component={Link}
              href="/create"
              variant="outlined"
              size="large"
              startIcon={<CreateIcon />}
              sx={{ minWidth: 160 }}
            >
              Create
            </Button>
            <Button
              component={Link}
              href="/themes"
              variant="outlined"
              size="large"
              startIcon={<Palette />}
              sx={{ minWidth: 160 }}
            >
              Explore Themes
            </Button>
          </Box>

          {/* Additional Help */}
          <Typography variant="body2" color="text.secondary">
            If you believe this is a mistake, please{' '}
            <Typography
              component={Link}
              href="/contact"
              sx={{
                color: 'primary.main',
                textDecoration: 'none',
                fontWeight: 600,
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              contact us
            </Typography>
            .
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
