'use client'

import { Box, Container, Typography, Link as MuiLink, Divider } from '@mui/material'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: 'auto',
        borderTop: 1,
        borderColor: 'divider',
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 2,
            mb: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Crow Create. All rights reserved.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: 3,
              flexWrap: 'wrap',
            }}
          >
            <MuiLink
              component={Link}
              href="/legal/privacy"
              color="text.secondary"
              underline="hover"
              variant="body2"
            >
              Privacy Policy
            </MuiLink>
            <MuiLink
              component={Link}
              href="/legal/terms"
              color="text.secondary"
              underline="hover"
              variant="body2"
            >
              Terms of Service
            </MuiLink>
            <MuiLink
              component={Link}
              href="/legal/accessibility"
              color="text.secondary"
              underline="hover"
              variant="body2"
            >
              Accessibility Statement
            </MuiLink>
            <MuiLink
              component={Link}
              href="/legal/cookies"
              color="text.secondary"
              underline="hover"
              variant="body2"
            >
              Cookies
            </MuiLink>
            <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />
            <MuiLink
              href="https://jpbranski.com"
              target="_blank"
              rel="noopener noreferrer"
              color="primary.main"
              underline="hover"
              variant="body2"
              sx={{ fontWeight: 600 }}
            >
              jpbranski.com
            </MuiLink>
          </Box>
        </Box>

        {/* Affiliate Disclaimer */}
        <Typography
          variant="caption"
          sx={{
            display: 'block',
            textAlign: 'center',
            color: 'text.disabled',
            opacity: 0.7,
            fontSize: '0.7rem',
          }}
        >
          As an Amazon Associate I earn from qualifying purchases.
        </Typography>
      </Container>
    </Box>
  )
}
