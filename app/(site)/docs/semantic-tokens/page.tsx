import { Box, Typography, Alert, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Link as MuiLink, Button } from '@mui/material'
import { Label, CheckCircle, Warning, Error as ErrorIcon, Info } from '@mui/icons-material'
import Link from 'next/link'

export const metadata = {
  title: 'Semantic Tokens | Crow Create',
  description: 'Learn about semantic design tokens, naming conventions, success/warning/error/info colors, and when to use semantic tokens in your design system.',
}

export default function SemanticTokensPage() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
        Semantic Tokens
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Master semantic design tokens to create meaningful, maintainable design systems that communicate effectively with users.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Alert severity="info" sx={{ mb: 4 }}>
        <strong>Why Semantic Tokens Matter:</strong> Semantic tokens create a shared vocabulary between design and code, making your design system more maintainable, scalable, and meaningful. They describe the purpose of a value rather than its appearance.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600}>
        What Are Semantic Tokens?
      </Typography>
      <Typography variant="body1" paragraph>
        Semantic tokens are design tokens that communicate meaning and intent rather than specific visual properties. Instead of naming a color "blue-500", semantic tokens name it based on its purpose, like "color-action-primary" or "color-feedback-info".
      </Typography>

      <Typography variant="body1" paragraph>
        This approach creates a layer of abstraction between the visual properties (raw tokens) and their application (semantic tokens), making it easier to maintain consistency and update your design system.
      </Typography>

      <Paper sx={{ p: 3, my: 4, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Raw Tokens vs Semantic Tokens
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" fontWeight={600} color="error.main">
            Raw Tokens (What it is)
          </Typography>
          <Box component="ul" sx={{ color: 'text.primary' }}>
            <li><Typography variant="body1">blue-500</Typography></li>
            <li><Typography variant="body1">gray-700</Typography></li>
            <li><Typography variant="body1">spacing-16</Typography></li>
            <li><Typography variant="body1">font-weight-600</Typography></li>
          </Box>
        </Box>

        <Box>
          <Typography variant="subtitle1" fontWeight={600} color="success.main">
            Semantic Tokens (What it's for)
          </Typography>
          <Box component="ul" sx={{ color: 'text.primary' }}>
            <li><Typography variant="body1">color-action-primary</Typography></li>
            <li><Typography variant="body1">color-text-secondary</Typography></li>
            <li><Typography variant="body1">spacing-section</Typography></li>
            <li><Typography variant="body1">font-weight-heading</Typography></li>
          </Box>
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Benefits of Semantic Tokens
      </Typography>

      <Box component="ul" sx={{ color: 'text.primary', pl: 2 }}>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Better Maintainability:</strong> Change the value of "color-action-primary" in one place to update all primary actions across your application.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Clearer Intent:</strong> Developers immediately understand that "color-feedback-success" is for success messages, not just "green-500".
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Easier Theming:</strong> Swap out semantic token values to create different themes (light/dark, brand variations) without touching component code.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Design-Development Alignment:</strong> Creates a shared language that both designers and developers understand.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Scalability:</strong> New team members can understand token purposes without knowing the entire design system.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Consistency:</strong> Encourages using the right color for the right purpose throughout your application.
          </Typography>
        </li>
      </Box>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Semantic Token Naming Conventions
      </Typography>
      <Typography variant="body1" paragraph>
        Consistent naming conventions are essential for semantic tokens. They should be descriptive, predictable, and follow a clear hierarchy.
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Common Naming Structure
        </Typography>
        <Typography variant="body1" paragraph>
          Most semantic token names follow this pattern:
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, fontFamily: 'monospace', mb: 2 }}>
          [category]-[type]-[variant]-[state]
        </Box>

        <Box component="ul" sx={{ color: 'text.primary' }}>
          <li><Typography variant="body1" paragraph><strong>Category:</strong> color, spacing, typography, border, shadow, etc.</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Type:</strong> The semantic purpose (action, feedback, text, background, etc.)</Typography></li>
          <li><Typography variant="body1" paragraph><strong>Variant:</strong> Primary, secondary, tertiary, or specific meaning (success, error, etc.)</Typography></li>
          <li><Typography variant="body1" paragraph><strong>State:</strong> Optional - hover, active, disabled, focus, etc.</Typography></li>
        </Box>

        <Typography variant="subtitle2" fontWeight={600} sx={{ mt: 2, mb: 1 }}>Examples:</Typography>
        <Box component="ul" sx={{ color: 'text.primary', fontFamily: 'monospace', fontSize: '0.9rem' }}>
          <li>color-action-primary</li>
          <li>color-action-primary-hover</li>
          <li>color-feedback-error</li>
          <li>color-text-secondary</li>
          <li>color-background-elevated</li>
          <li>spacing-component-padding</li>
          <li>border-radius-button</li>
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Feedback Colors (Status Tokens)
      </Typography>
      <Typography variant="body1" paragraph>
        Feedback colors are the most common semantic tokens. They communicate system status and user action outcomes.
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CheckCircle sx={{ color: 'success.main', mr: 1 }} />
          Success Colors
        </Box>
      </Typography>
      <Typography variant="body1" paragraph>
        Success colors indicate positive outcomes, completed actions, and confirmations.
      </Typography>

      <TableContainer component={Paper} sx={{ my: 2, mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Token Name</strong></TableCell>
              <TableCell><strong>Purpose</strong></TableCell>
              <TableCell><strong>Typical Usage</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>color-feedback-success</TableCell>
              <TableCell>Main success color</TableCell>
              <TableCell>Success message backgrounds, icons</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>color-feedback-success-text</TableCell>
              <TableCell>Text on success backgrounds</TableCell>
              <TableCell>Message text, labels in success contexts</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>color-feedback-success-border</TableCell>
              <TableCell>Success element borders</TableCell>
              <TableCell>Alert borders, form validation indicators</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>color-feedback-success-subtle</TableCell>
              <TableCell>Subtle success backgrounds</TableCell>
              <TableCell>Light backgrounds for success banners</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Warning sx={{ color: 'warning.main', mr: 1 }} />
          Warning Colors
        </Box>
      </Typography>
      <Typography variant="body1" paragraph>
        Warning colors indicate cautions, important information that needs attention, or potentially destructive actions.
      </Typography>

      <TableContainer component={Paper} sx={{ my: 2, mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Token Name</strong></TableCell>
              <TableCell><strong>Purpose</strong></TableCell>
              <TableCell><strong>Typical Usage</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>color-feedback-warning</TableCell>
              <TableCell>Main warning color</TableCell>
              <TableCell>Warning banners, caution icons</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>color-feedback-warning-text</TableCell>
              <TableCell>Text on warning backgrounds</TableCell>
              <TableCell>Warning message text</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>color-feedback-warning-border</TableCell>
              <TableCell>Warning element borders</TableCell>
              <TableCell>Alert borders, highlighted areas</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>color-feedback-warning-subtle</TableCell>
              <TableCell>Subtle warning backgrounds</TableCell>
              <TableCell>Light backgrounds for warning banners</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ErrorIcon sx={{ color: 'error.main', mr: 1 }} />
          Error Colors
        </Box>
      </Typography>
      <Typography variant="body1" paragraph>
        Error colors indicate failures, validation errors, and destructive or dangerous actions.
      </Typography>

      <TableContainer component={Paper} sx={{ my: 2, mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Token Name</strong></TableCell>
              <TableCell><strong>Purpose</strong></TableCell>
              <TableCell><strong>Typical Usage</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>color-feedback-error</TableCell>
              <TableCell>Main error color</TableCell>
              <TableCell>Error messages, form validation</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>color-feedback-error-text</TableCell>
              <TableCell>Text on error backgrounds</TableCell>
              <TableCell>Error message text, labels</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>color-feedback-error-border</TableCell>
              <TableCell>Error element borders</TableCell>
              <TableCell>Invalid input borders, error alerts</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>color-feedback-error-subtle</TableCell>
              <TableCell>Subtle error backgrounds</TableCell>
              <TableCell>Light backgrounds for error banners</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Info sx={{ color: 'info.main', mr: 1 }} />
          Info Colors
        </Box>
      </Typography>
      <Typography variant="body1" paragraph>
        Info colors communicate neutral, informational messages and helpful tips.
      </Typography>

      <TableContainer component={Paper} sx={{ my: 2, mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Token Name</strong></TableCell>
              <TableCell><strong>Purpose</strong></TableCell>
              <TableCell><strong>Typical Usage</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>color-feedback-info</TableCell>
              <TableCell>Main info color</TableCell>
              <TableCell>Info banners, tooltips, helpful hints</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>color-feedback-info-text</TableCell>
              <TableCell>Text on info backgrounds</TableCell>
              <TableCell>Info message text</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>color-feedback-info-border</TableCell>
              <TableCell>Info element borders</TableCell>
              <TableCell>Info alert borders, callout boxes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>color-feedback-info-subtle</TableCell>
              <TableCell>Subtle info backgrounds</TableCell>
              <TableCell>Light backgrounds for info banners</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Alert severity="warning" sx={{ my: 3 }}>
        <strong>Accessibility Reminder:</strong> Never rely on color alone to convey meaning. Always pair semantic colors with icons, text labels, or other visual indicators to ensure all users can understand the message.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Other Common Semantic Token Categories
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Action Colors
      </Typography>
      <Typography variant="body1" paragraph>
        Action colors are used for interactive elements like buttons, links, and clickable items.
      </Typography>

      <Box component="ul" sx={{ color: 'text.primary', pl: 2, fontFamily: 'monospace', fontSize: '0.9rem' }}>
        <li>color-action-primary (main call-to-action)</li>
        <li>color-action-primary-hover</li>
        <li>color-action-primary-active</li>
        <li>color-action-primary-disabled</li>
        <li>color-action-secondary</li>
        <li>color-action-secondary-hover</li>
      </Box>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Text Colors
      </Typography>
      <Typography variant="body1" paragraph>
        Text colors define the hierarchy and emphasis of textual content.
      </Typography>

      <Box component="ul" sx={{ color: 'text.primary', pl: 2, fontFamily: 'monospace', fontSize: '0.9rem' }}>
        <li>color-text-primary (main body text)</li>
        <li>color-text-secondary (less emphasized text)</li>
        <li>color-text-tertiary (de-emphasized text)</li>
        <li>color-text-disabled</li>
        <li>color-text-inverse (text on dark backgrounds)</li>
        <li>color-text-link</li>
        <li>color-text-link-hover</li>
      </Box>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Background Colors
      </Typography>
      <Typography variant="body1" paragraph>
        Background colors establish layers and surfaces in your interface.
      </Typography>

      <Box component="ul" sx={{ color: 'text.primary', pl: 2, fontFamily: 'monospace', fontSize: '0.9rem' }}>
        <li>color-background-primary (main page background)</li>
        <li>color-background-secondary (cards, panels)</li>
        <li>color-background-elevated (modals, popovers)</li>
        <li>color-background-overlay (backdrop, scrim)</li>
        <li>color-background-inverse (dark sections on light pages)</li>
      </Box>

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mt: 3 }}>
        Border Colors
      </Typography>
      <Typography variant="body1" paragraph>
        Border colors separate and define elements.
      </Typography>

      <Box component="ul" sx={{ color: 'text.primary', pl: 2, fontFamily: 'monospace', fontSize: '0.9rem' }}>
        <li>color-border-primary (default borders)</li>
        <li>color-border-secondary (subtle dividers)</li>
        <li>color-border-focus (keyboard focus indicators)</li>
        <li>color-border-selected (active/selected state)</li>
      </Box>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        When to Use Semantic Tokens
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'success.light', color: 'success.contrastText', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Use Semantic Tokens When:
        </Typography>
        <Box component="ul">
          <li><Typography variant="body1" paragraph>Building a design system that will be maintained long-term</Typography></li>
          <li><Typography variant="body1" paragraph>Multiple teams will be working with your tokens</Typography></li>
          <li><Typography variant="body1" paragraph>You need to support theming (light/dark mode, brand variations)</Typography></li>
          <li><Typography variant="body1" paragraph>You want to establish clear patterns for color usage</Typography></li>
          <li><Typography variant="body1" paragraph>Your application has complex color requirements with many contexts</Typography></li>
          <li><Typography variant="body1" paragraph>You need clear communication between design and development</Typography></li>
        </Box>
      </Paper>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'warning.light', color: 'warning.contrastText', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Consider Raw Tokens When:
        </Typography>
        <Box component="ul">
          <li><Typography variant="body1" paragraph>Building a small, simple project with limited scope</Typography></li>
          <li><Typography variant="body1" paragraph>You're prototyping or experimenting</Typography></li>
          <li><Typography variant="body1" paragraph>Working solo on a project with minimal complexity</Typography></li>
          <li><Typography variant="body1" paragraph>You need maximum flexibility without abstraction layers</Typography></li>
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Implementing Semantic Tokens
      </Typography>
      <Typography variant="body1" paragraph>
        Semantic tokens typically reference raw tokens as their values. This creates a two-tier system:
      </Typography>

      <Paper sx={{ p: 3, my: 3, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Example Token Structure (CSS Variables):
        </Typography>
        <Box sx={{ fontFamily: 'monospace', fontSize: '0.85rem', whiteSpace: 'pre' }}>
{`/* Raw Tokens (Colors) */
--color-blue-50: #eff6ff;
--color-blue-500: #3b82f6;
--color-blue-700: #1d4ed8;
--color-green-500: #22c55e;
--color-red-500: #ef4444;

/* Semantic Tokens */
--color-action-primary: var(--color-blue-500);
--color-action-primary-hover: var(--color-blue-700);
--color-feedback-success: var(--color-green-500);
--color-feedback-error: var(--color-red-500);
--color-background-primary: #ffffff;
--color-background-secondary: var(--color-blue-50);`}
        </Box>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Helpful Resources
      </Typography>
      <Box component="ul" sx={{ color: 'text.primary' }}>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://www.designtokens.org/" target="_blank" rel="noopener noreferrer">
              Design Tokens Community Group - W3C standard for design tokens
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://spectrum.adobe.com/page/design-tokens/" target="_blank" rel="noopener noreferrer">
              Adobe Spectrum - Design Tokens Documentation
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <MuiLink href="https://m3.material.io/foundations/design-tokens/overview" target="_blank" rel="noopener noreferrer">
              Material Design 3 - Design Tokens
            </MuiLink>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <Link href="/docs/css-variables" passHref legacyBehavior>
              <MuiLink>CSS Variables (Crow Create Docs)</MuiLink>
            </Link>
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <Link href="/docs/palette-generation" passHref legacyBehavior>
              <MuiLink>Palette Generation Best Practices (Crow Create Docs)</MuiLink>
            </Link>
          </Typography>
        </li>
      </Box>

      <Box sx={{ mt: 4, p: 3, bgcolor: 'background.paper', borderRadius: 2, border: 1, borderColor: 'divider' }}>
        <Typography variant="h5" gutterBottom fontWeight={600}>
          Ready to Define Your Semantic Tokens?
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          Use Crow Create to generate semantic color tokens automatically, with proper naming conventions and accessibility built in.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Link href="/create" passHref legacyBehavior>
            <Button component="a" variant="contained" size="large">
              Create Semantic Tokens
            </Button>
          </Link>
          <Link href="/docs/exporting-guide" passHref legacyBehavior>
            <Button component="a" variant="outlined" size="large">
              Learn About Exporting
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
