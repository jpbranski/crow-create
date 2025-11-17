import { Container, Typography, Box, Paper } from '@mui/material'

export default function PrivacyPage() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
          Privacy Policy
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Last updated: November 2025
        </Typography>

        <Paper variant="outlined" sx={{ p: 4, mt: 4 }}>
          <Typography variant="h5" gutterBottom fontWeight={600}>
            Introduction
          </Typography>
          <Typography paragraph>
            Crow Create is a front-end design system helper tool that operates entirely in your
            browser. We are committed to protecting your privacy and being transparent about our
            data practices.
          </Typography>

          <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
            Data Collection
          </Typography>
          <Typography paragraph>
            Crow Create stores your design system configurations locally in your browser using
            localStorage. This data never leaves your device and is not transmitted to any server.
          </Typography>

          <Typography variant="h6" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
            Third-Party Services
          </Typography>
          <Typography paragraph>
            When configured and with your consent, we may use the following third-party services:
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <li>
              <Typography paragraph>
                <strong>Google Analytics:</strong> To understand how visitors interact with the
                website by collecting anonymous usage data. This requires your consent via the
                cookie banner.
              </Typography>
            </li>
            <li>
              <Typography paragraph>
                <strong>Google AdSense:</strong> To display relevant advertisements. This requires
                your consent via the cookie banner.
              </Typography>
            </li>
          </Box>

          <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
            Your Design Projects
          </Typography>
          <Typography paragraph>
            All design projects you create and save are stored locally in your browser. We do not
            have access to this data. When you use the "Share URL" feature, your design
            configuration is encoded in the URL itself, not stored on our servers.
          </Typography>

          <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
            Cookies
          </Typography>
          <Typography paragraph>
            We use cookies to remember your theme preference (light/dark mode) and cookie consent
            choices. For more information about cookies, please see our{' '}
            <a href="/legal/cookies">Cookie Policy</a>.
          </Typography>

          <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
            Your Rights
          </Typography>
          <Typography paragraph>
            Under GDPR and CCPA, you have the right to:
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Withdraw consent at any time</li>
          </Box>
          <Typography paragraph>
            Since all data is stored locally in your browser, you can manage or delete it at any
            time through your browser settings.
          </Typography>

          <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
            Changes to This Policy
          </Typography>
          <Typography paragraph>
            We may update this privacy policy from time to time. Any changes will be posted on this
            page with an updated revision date.
          </Typography>

          <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
            Contact
          </Typography>
          <Typography paragraph>
            If you have any questions about this privacy policy, please contact us through the
            feedback mechanisms provided in the application.
          </Typography>
        </Paper>
      </Container>
    </Box>
  )
}
