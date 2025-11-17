import { Container, Typography, Box, Paper } from '@mui/material'

export default function AccessibilityPage() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
          Accessibility Statement
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Last updated: November 2025
        </Typography>

        <Paper variant="outlined" sx={{ p: 4, mt: 4 }}>
          <Typography variant="h5" gutterBottom fontWeight={600}>
            Our Commitment
          </Typography>
          <Typography paragraph>
            Crow Create is committed to ensuring digital accessibility for people with
            disabilities. We are continually improving the user experience for everyone and
            applying the relevant accessibility standards.
          </Typography>

          <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
            Conformance Status
          </Typography>
          <Typography paragraph>
            We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. WCAG
            2.1 Level AA requires that web content is:
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <li><strong>Perceivable:</strong> Information and user interface components must be presentable to users in ways they can perceive</li>
            <li><strong>Operable:</strong> User interface components and navigation must be operable</li>
            <li><strong>Understandable:</strong> Information and operation of the user interface must be understandable</li>
            <li><strong>Robust:</strong> Content must be robust enough to be interpreted by a wide variety of user agents, including assistive technologies</li>
          </Box>

          <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
            Accessibility Features
          </Typography>
          <Typography paragraph>
            Crow Create includes the following accessibility features:
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <li>Semantic HTML structure with proper heading hierarchy</li>
            <li>ARIA labels and landmarks for screen readers</li>
            <li>Keyboard navigation support throughout the application</li>
            <li>Sufficient color contrast ratios (tested via our own WCAG checker)</li>
            <li>Responsive design that works across different devices and screen sizes</li>
            <li>Focus indicators for interactive elements</li>
            <li>Alternative text for meaningful images and icons</li>
            <li>Light and dark theme options for visual comfort</li>
          </Box>

          <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
            Known Limitations
          </Typography>
          <Typography paragraph>
            We strive for full accessibility, but some limitations may exist:
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <li>Color picker interactions may require mouse/touch input in some browsers</li>
            <li>Complex interactive components may have varying support across different assistive technologies</li>
          </Box>
          <Typography paragraph>
            We are actively working to address these limitations in future updates.
          </Typography>

          <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
            Third-Party Content
          </Typography>
          <Typography paragraph>
            Some content on Crow Create may be provided by third parties (such as Google Analytics
            or AdSense when enabled). While we strive to ensure all content is accessible, we
            cannot guarantee the accessibility of third-party content.
          </Typography>

          <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
            Feedback and Contact
          </Typography>
          <Typography paragraph>
            We welcome feedback on the accessibility of Crow Create. If you encounter any
            accessibility barriers or have suggestions for improvement, please let us know through
            our feedback channels.
          </Typography>
          <Typography paragraph>
            We aim to respond to accessibility feedback within 5 business days and to propose a
            solution within 10 business days.
          </Typography>

          <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
            Assessment Approach
          </Typography>
          <Typography paragraph>
            Crow Create's accessibility is assessed through:
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <li>Self-evaluation using automated testing tools</li>
            <li>Manual testing with keyboard navigation</li>
            <li>Testing with screen readers (NVDA, JAWS, VoiceOver)</li>
            <li>Color contrast analysis using our built-in WCAG checker</li>
          </Box>

          <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
            Compatibility
          </Typography>
          <Typography paragraph>
            Crow Create is designed to be compatible with:
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <li>Recent versions of Chrome, Firefox, Safari, and Edge</li>
            <li>Screen readers including NVDA, JAWS, and VoiceOver</li>
            <li>Operating systems including Windows, macOS, iOS, and Android</li>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}
