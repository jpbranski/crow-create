import { Container, Typography, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

export default function CookiesPage() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
          Cookie Policy
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Last updated: November 2025
        </Typography>

        <Paper variant="outlined" sx={{ p: 4, mt: 4 }}>
          <Typography variant="h5" gutterBottom fontWeight={600}>
            What Are Cookies
          </Typography>
          <Typography paragraph>
            Cookies are small text files that are placed on your computer or mobile device when you
            visit a website. They are widely used to make websites work more efficiently and
            provide information to website owners.
          </Typography>

          <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
            How We Use Cookies
          </Typography>
          <Typography paragraph>
            Crow Create uses cookies and browser localStorage to enhance your experience and
            provide certain functionality. We categorize our cookies as follows:
          </Typography>

          <Typography variant="h6" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
            Necessary Cookies
          </Typography>
          <Typography paragraph>
            These cookies are essential for the website to function properly. They cannot be
            disabled.
          </Typography>

          <TableContainer component={Paper} variant="outlined" sx={{ mt: 2, mb: 3 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell><strong>Cookie Name</strong></TableCell>
                  <TableCell><strong>Purpose</strong></TableCell>
                  <TableCell><strong>Duration</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>theme-mode</TableCell>
                  <TableCell>Stores your light/dark theme preference</TableCell>
                  <TableCell>Persistent</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>cookie-consent</TableCell>
                  <TableCell>Remembers your cookie consent choices</TableCell>
                  <TableCell>Persistent</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>design-projects</TableCell>
                  <TableCell>Stores your saved design system projects</TableCell>
                  <TableCell>Persistent</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Typography variant="h6" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
            Analytics Cookies (Optional)
          </Typography>
          <Typography paragraph>
            When you consent to analytics cookies, we use Google Analytics to understand how
            visitors interact with our website. These cookies collect anonymous information
            including:
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <li>Number of visitors</li>
            <li>Pages visited</li>
            <li>Time spent on the site</li>
            <li>Browser and device information</li>
            <li>Geographic location (country/city level)</li>
          </Box>
          <Typography paragraph>
            Google Analytics cookies are only activated if you accept analytics cookies through our
            cookie consent banner.
          </Typography>

          <Typography variant="h6" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
            Advertising Cookies (Optional)
          </Typography>
          <Typography paragraph>
            When enabled and with your consent, we may use Google AdSense to display relevant
            advertisements. These cookies:
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <li>Track your browsing behavior across websites</li>
            <li>Build a profile of your interests</li>
            <li>Show you personalized advertisements</li>
          </Box>
          <Typography paragraph>
            Advertising cookies are only activated if you accept advertising cookies through our
            cookie consent banner and if the site administrator has configured AdSense.
          </Typography>

          <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
            Managing Cookies
          </Typography>
          <Typography paragraph>
            You can control and manage cookies in several ways:
          </Typography>

          <Typography variant="h6" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
            Cookie Consent Banner
          </Typography>
          <Typography paragraph>
            When you first visit Crow Create, you'll see a cookie consent banner where you can:
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <li>Accept all cookies</li>
            <li>Manage your preferences to choose which types of cookies to allow</li>
          </Box>

          <Typography variant="h6" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
            Browser Settings
          </Typography>
          <Typography paragraph>
            Most web browsers allow you to control cookies through their settings. You can:
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <li>View cookies stored by websites</li>
            <li>Delete cookies</li>
            <li>Block cookies from specific websites</li>
            <li>Block all cookies</li>
          </Box>
          <Typography paragraph>
            Note: Blocking necessary cookies may prevent Crow Create from functioning properly.
          </Typography>

          <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
            Third-Party Cookies
          </Typography>
          <Typography paragraph>
            When you consent to analytics or advertising cookies, third-party services (Google
            Analytics, Google AdSense) may set their own cookies. These third parties have their
            own privacy policies:
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <li>
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Advertising
              </a>
            </li>
          </Box>

          <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
            Updates to This Policy
          </Typography>
          <Typography paragraph>
            We may update this Cookie Policy from time to time. Any changes will be posted on this
            page with an updated revision date.
          </Typography>

          <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
            Contact
          </Typography>
          <Typography paragraph>
            If you have questions about our use of cookies, please contact us through the feedback
            mechanisms provided in the application.
          </Typography>
        </Paper>
      </Container>
    </Box>
  )
}
