import { Box, Typography, Alert, Divider, Paper, Link as MuiLink, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { CheckCircle, Warning, Error } from '@mui/icons-material'

export default function AccessibilityPage() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
        Accessibility Basics
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Understanding WCAG 2.1 guidelines and how to create accessible design systems.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Alert severity="info" sx={{ mb: 4 }}>
        <strong>Why Accessibility Matters:</strong> Over 1 billion people worldwide live with
        some form of disability. Accessible design isn't just the right thing to do - it creates
        better experiences for everyone.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600}>
        WCAG 2.1 Overview
      </Typography>
      <Typography variant="body1" paragraph>
        The Web Content Accessibility Guidelines (WCAG) 2.1 are a set of recommendations for
        making web content more accessible. They are organized around four principles: Perceivable,
        Operable, Understandable, and Robust (POUR).
      </Typography>

      <Typography variant="body1" paragraph>
        For design systems, the most critical aspect is visual accessibility - ensuring sufficient
        contrast between text and backgrounds.
      </Typography>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Contrast Ratios Explained
      </Typography>
      <Typography variant="body1" paragraph>
        Contrast ratio measures the difference in perceived luminance between two colors. It's
        expressed as a ratio from 1:1 (no contrast, like white on white) to 21:1 (maximum
        contrast, like black on white).
      </Typography>

      <TableContainer component={Paper} sx={{ my: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Level</strong></TableCell>
              <TableCell><strong>Normal Text</strong></TableCell>
              <TableCell><strong>Large Text</strong></TableCell>
              <TableCell><strong>Use Case</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <CheckCircle sx={{ color: 'success.main', mr: 1 }} fontSize="small" />
                  <strong>AA</strong>
                </TableCell>
              <TableCell>4.5:1</TableCell>
              <TableCell>3:1</TableCell>
              <TableCell>Minimum for most content</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <CheckCircle sx={{ color: 'success.dark', mr: 1 }} fontSize="small" />
                  <strong>AAA</strong>
                </TableCell>
              <TableCell>7:1</TableCell>
              <TableCell>4.5:1</TableCell>
              <TableCell>Enhanced for critical content</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Alert severity="info" sx={{ my: 3 }}>
        <strong>Large Text Definition:</strong> Text is considered "large" if it's at least 18pt
        (24px) regular weight, or 14pt (18.66px) bold weight.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Using the WCAG Checker
      </Typography>
      <Typography variant="body1" paragraph>
        Crow Create includes a built-in WCAG contrast checker in the Palette & Accessibility tab.
        Here's how to use it:
      </Typography>

      <Box sx={{ pl: 2 }}>
        <Typography variant="body1" paragraph>
          1. <strong>Select Foreground Color:</strong> Choose the text or element color
        </Typography>
        <Typography variant="body1" paragraph>
          2. <strong>Select Background Color:</strong> Choose the background it will appear on
        </Typography>
        <Typography variant="body1" paragraph>
          3. <strong>Review Results:</strong> The checker shows the contrast ratio and compliance
          status for both normal and large text
        </Typography>
      </Box>

      <Paper sx={{ p: 3, my: 3, borderRadius: 2, bgcolor: 'grey.50' }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Interpreting Results
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <CheckCircle sx={{ color: 'success.main', mr: 2 }} />
          <Typography variant="body1">
            <strong>Pass:</strong> Meets the contrast requirement - safe to use
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Warning sx={{ color: 'warning.main', mr: 2 }} />
          <Typography variant="body1">
            <strong>Warning:</strong> Close to requirement - use with caution
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Error sx={{ color: 'error.main', mr: 2 }} />
          <Typography variant="body1">
            <strong>Fail:</strong> Does not meet requirement - choose different colors
          </Typography>
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Beyond Color Contrast
      </Typography>
      <Typography variant="body1" paragraph>
        While contrast is crucial, accessible design systems consider many other factors:
      </Typography>

      <Box component="ul" sx={{ color: 'text.primary' }}>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Focus indicators:</strong> Visible outlines when navigating with keyboard
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Font size:</strong> Minimum 16px for body text, larger for headings
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Touch targets:</strong> Minimum 44x44px for interactive elements (mobile)
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Meaningful labels:</strong> Clear, descriptive text for all interactive
            elements
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Motion consideration:</strong> Respect prefers-reduced-motion settings
          </Typography>
        </li>
      </Box>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Helpful Resources
      </Typography>
      <Box component="ul" sx={{ color: 'text.primary' }}>
        <li>
          <Typography variant="body1">
            <MuiLink
              href="https://www.w3.org/TR/WCAG21/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WCAG 2.1 Guidelines (W3C)
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink
              href="https://www.w3.org/TR/WCAG21/#contrast-minimum"
              target="_blank"
              rel="noopener noreferrer"
            >
              WCAG 2.1 Contrast Minimum (1.4.3)
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink
              href="https://webaim.org/resources/contrastchecker/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WebAIM Contrast Checker
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink
              href="https://www.a11yproject.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The A11Y Project (Community-driven accessibility resources)
            </MuiLink>
          </Typography>
        </li>
      </Box>

      <Alert severity="success" sx={{ mt: 4 }}>
        <strong>Remember:</strong> Accessibility is not a checklist - it's an ongoing commitment
        to inclusive design. Always test with real users and assistive technologies when possible.
      </Alert>
    </Box>
  )
}
