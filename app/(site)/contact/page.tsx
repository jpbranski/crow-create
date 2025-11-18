'use client'

import { Container, Box, Typography, Paper, Link as MuiLink } from '@mui/material'
import Grid2 from '@mui/material/Grid2'
import { Email, GitHub, LinkedIn } from '@mui/icons-material'

export default function ContactPage() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="md">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h1" fontWeight={700} gutterBottom>
            Get in Touch
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
            Have questions, feedback, or want to collaborate? I'd love to hear from you.
          </Typography>
        </Box>

        {/* Contact Methods */}
        <Grid2 container spacing={3}>
          {/* Email */}
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Paper
              sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                },
              }}
            >
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                }}
              >
                <Email sx={{ fontSize: 32 }} />
              </Box>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Email
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Send me an email for support, inquiries, or feedback.
              </Typography>
              <MuiLink
                href="mailto:dev@jpbranski.com"
                sx={{
                  mt: 'auto',
                  color: 'primary.main',
                  textDecoration: 'none',
                  fontWeight: 600,
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                dev@jpbranski.com
              </MuiLink>
            </Paper>
          </Grid2>

          {/* GitHub Issues */}
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Paper
              sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                },
              }}
            >
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  bgcolor: 'secondary.main',
                  color: 'secondary.contrastText',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                }}
              >
                <GitHub sx={{ fontSize: 32 }} />
              </Box>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                GitHub Issues
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Report bugs, request features, or contribute to the project.
              </Typography>
              <MuiLink
                href="https://github.com/jpbranski/crow-create/issues"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  mt: 'auto',
                  color: 'primary.main',
                  textDecoration: 'none',
                  fontWeight: 600,
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Open an Issue →
              </MuiLink>
            </Paper>
          </Grid2>

          {/* LinkedIn */}
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Paper
              sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                },
              }}
            >
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  bgcolor: 'info.main',
                  color: 'info.contrastText',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                }}
              >
                <LinkedIn sx={{ fontSize: 32 }} />
              </Box>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                LinkedIn
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Connect with me professionally on LinkedIn.
              </Typography>
              <MuiLink
                href="https://www.linkedin.com/in/jonathanbranski/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  mt: 'auto',
                  color: 'primary.main',
                  textDecoration: 'none',
                  fontWeight: 600,
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Connect on LinkedIn →
              </MuiLink>
            </Paper>
          </Grid2>
        </Grid2>

        {/* Additional Info */}
        <Paper sx={{ p: 4, mt: 4, bgcolor: 'background.paper' }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            About Response Times
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            I typically respond to emails and GitHub issues within 1-3 business days. For urgent
            matters, please indicate "URGENT" in your subject line.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Crow Create is an open-source project developed and maintained by Jonathan "JP" Branski.
            Your feedback and contributions help make the web more accessible and beautiful for
            everyone.
          </Typography>
        </Paper>
      </Container>
    </Box>
  )
}
