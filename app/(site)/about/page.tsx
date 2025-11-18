'use client'

import { Container, Box, Typography, Paper, Link as MuiLink, Chip } from '@mui/material'
import Grid2 from '@mui/material/Grid2'
import { Palette, Code, Accessibility, Favorite } from '@mui/icons-material'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h1" fontWeight={700} gutterBottom>
            About Crow Create
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto', mb: 3 }}>
            Making the web more colorful, accessible, and creative for everyone.
          </Typography>
        </Box>

        {/* Mission Statement */}
        <Paper sx={{ p: 5, mb: 5, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
          <Typography variant="h4" fontWeight={600} gutterBottom textAlign="center">
            Our Mission
          </Typography>
          <Typography variant="h6" textAlign="center" sx={{ maxWidth: '700px', mx: 'auto', lineHeight: 1.6 }}>
            Crow Create exists to make the web more colorful, accessible, and creative for everyone.
          </Typography>
        </Paper>

        {/* Values Grid */}
        <Grid2 container spacing={3} sx={{ mb: 5 }}>
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <Paper
              sx={{
                p: 3,
                height: '100%',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                },
              }}
            >
              <Accessibility sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Accessibility First
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Every design system should be WCAG-compliant and usable by everyone.
              </Typography>
            </Paper>
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <Paper
              sx={{
                p: 3,
                height: '100%',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                },
              }}
            >
              <Palette sx={{ fontSize: 48, color: 'secondary.main', mb: 2 }} />
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Creative Freedom
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Build unique, expressive color palettes that reflect your brand identity.
              </Typography>
            </Paper>
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <Paper
              sx={{
                p: 3,
                height: '100%',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                },
              }}
            >
              <Code sx={{ fontSize: 48, color: 'success.main', mb: 2 }} />
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Developer Friendly
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Export ready-to-use code for your favorite frameworks and libraries.
              </Typography>
            </Paper>
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <Paper
              sx={{
                p: 3,
                height: '100%',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                },
              }}
            >
              <Favorite sx={{ fontSize: 48, color: 'error.main', mb: 2 }} />
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Open Source
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Free forever, community-driven, and built with love.
              </Typography>
            </Paper>
          </Grid2>
        </Grid2>

        {/* About the Creator */}
        <Paper sx={{ p: 5, mb: 5 }}>
          <Grid2 container spacing={4} alignItems="center">
            <Grid2 size={{ xs: 12, md: 4 }}>
              {/* Placeholder for profile image */}
              <Box
                sx={{
                  width: '100%',
                  aspectRatio: '1/1',
                  borderRadius: 2,
                  bgcolor: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'primary.contrastText',
                }}
              >
                <Typography variant="h3" fontWeight={700}>
                  JP
                </Typography>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 8 }}>
              <Typography variant="h4" fontWeight={600} gutterBottom>
                Jonathan "JP" Branski
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                I'm a full-stack developer, designer, and accessibility advocate with a passion for
                creating tools that make the web better for everyone. With over a decade of
                experience in web development, I've seen firsthand how good design systems can
                transform projects and empower teams.
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Crow Create was born from my frustration with existing design system tools that
                either ignored accessibility or were too complex for quick iteration. I wanted to
                build something that put WCAG compliance front and center while remaining fast,
                intuitive, and free.
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                When I'm not coding, you can find me reading about color theory, exploring the
                outdoors, or tinkering with new creative projects.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 3 }}>
                <Chip label="UI/UX Design" color="primary" />
                <Chip label="Accessibility (WCAG)" color="secondary" />
                <Chip label="TypeScript" color="primary" variant="outlined" />
                <Chip label="React" color="secondary" variant="outlined" />
                <Chip label="Color Theory" color="primary" variant="outlined" />
              </Box>
            </Grid2>
          </Grid2>
        </Paper>

        {/* Links Section */}
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Learn More
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3, alignItems: 'center' }}>
            <MuiLink
              href="https://jpbranski.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'primary.main',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1.1rem',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              jpbranski.com →
            </MuiLink>
            <MuiLink
              href="https://foxandcrowstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'primary.main',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1.1rem',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Fox & Crow Studio →
            </MuiLink>
            <MuiLink
              component={Link}
              href="/contact"
              sx={{
                color: 'primary.main',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1.1rem',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Get in Touch →
            </MuiLink>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}
