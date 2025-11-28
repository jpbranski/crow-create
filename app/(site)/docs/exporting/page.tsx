import { Box, Typography, Alert, Divider, Paper, Chip } from '@mui/material'
import { Code, ContentCopy } from '@mui/icons-material'

export default function ExportingPage() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
        Exporting Design Tokens
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Learn how to export and integrate your design system into your development workflow.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h4" gutterBottom fontWeight={600}>
        What Are Design Tokens?
      </Typography>
      <Typography variant="body1" paragraph>
        Design tokens are the visual design atoms of your design system. They're named values that
        represent design decisions - colors, spacing, typography, shadows, and more. By storing
        these values as tokens, you create a single source of truth that can be shared across
        platforms and frameworks.
      </Typography>

      <Alert severity="info" sx={{ my: 3 }}>
        <strong>Why Tokens?</strong> Design tokens bridge the gap between design and development.
        They ensure consistency, enable theming, and make large-scale design updates manageable.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Export Formats
      </Typography>
      <Typography variant="body1" paragraph>
        Crow Create supports four export formats, each optimized for different use cases:
      </Typography>

      <Paper sx={{ p: 3, my: 3, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Code sx={{ mr: 2, color: 'primary.main' }} />
          <Typography variant="h6" fontWeight={600}>
            Material-UI Theme
          </Typography>
          <Chip label="TypeScript" size="small" sx={{ ml: 2 }} />
        </Box>
        <Typography variant="body1" paragraph>
          Ready-to-use Material-UI v5/v6 theme configuration. Simply import into your app and pass
          to the ThemeProvider component.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={(theme) => ({ fontFamily: 'monospace', bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100], p: 1, borderRadius: 1 })}>
          import &#123; createTheme &#125; from '@mui/material/styles'
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          <strong>Best for:</strong> React applications using Material-UI
        </Typography>
      </Paper>

      <Paper sx={{ p: 3, my: 3, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Code sx={{ mr: 2, color: 'primary.main' }} />
          <Typography variant="h6" fontWeight={600}>
            CSS Variables
          </Typography>
          <Chip label="CSS" size="small" sx={{ ml: 2 }} />
        </Box>
        <Typography variant="body1" paragraph>
          Custom properties (CSS variables) that work with any framework or vanilla CSS. Scope to
          :root for global access or component-level for encapsulation.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={(theme) => ({ fontFamily: 'monospace', bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100], p: 1, borderRadius: 1 })}>
          --color-primary: #3361CC;
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          <strong>Best for:</strong> Framework-agnostic projects, vanilla CSS, progressive
          enhancement
        </Typography>
      </Paper>

      <Paper sx={{ p: 3, my: 3, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Code sx={{ mr: 2, color: 'primary.main' }} />
          <Typography variant="h6" fontWeight={600}>
            Tailwind Config
          </Typography>
          <Chip label="JavaScript" size="small" sx={{ ml: 2 }} />
        </Box>
        <Typography variant="body1" paragraph>
          Tailwind CSS configuration extending the default theme. Merge with your existing
          tailwind.config.js to add custom colors, spacing, and more.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={(theme) => ({ fontFamily: 'monospace', bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100], p: 1, borderRadius: 1 })}>
          theme: &#123; extend: &#123; colors: &#123;...&#125; &#125; &#125;
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          <strong>Best for:</strong> Projects using Tailwind CSS
        </Typography>
      </Paper>

      <Paper sx={{ p: 3, my: 3, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Code sx={{ mr: 2, color: 'primary.main' }} />
          <Typography variant="h6" fontWeight={600}>
            Design Tokens JSON
          </Typography>
          <Chip label="JSON" size="small" sx={{ ml: 2 }} />
        </Box>
        <Typography variant="body1" paragraph>
          Framework-agnostic JSON format following design token standards. Use with build tools,
          design token transformers like Style Dictionary, or import into design tools.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={(theme) => ({ fontFamily: 'monospace', bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100], p: 1, borderRadius: 1 })}>
          &#123; "color": &#123; "primary": &#123; "value": "#3361CC" &#125; &#125; &#125;
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          <strong>Best for:</strong> Multi-platform projects, design tool integration, token
          transformation pipelines
        </Typography>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        How to Export
      </Typography>
      <Typography variant="body1" paragraph>
        Exporting your design system is simple:
      </Typography>

      <Box sx={{ pl: 2 }}>
        <Typography variant="body1" paragraph>
          1. Navigate to the <strong>Exports</strong> tab in the Create tool
        </Typography>
        <Typography variant="body1" paragraph>
          2. Select your desired export format from the tabs
        </Typography>
        <Typography variant="body1" paragraph>
          3. Click the <ContentCopy fontSize="small" sx={{ verticalAlign: 'middle' }} /> <strong>Copy</strong> button to copy the code
        </Typography>
        <Typography variant="body1" paragraph>
          4. Paste into your project's configuration file
        </Typography>
      </Box>

      <Alert severity="success" sx={{ my: 3 }}>
        <strong>Pro Tip:</strong> Save your design system using the Project Manager before
        exporting. This creates a shareable URL you can use to reload your configuration anytime.
      </Alert>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Integration Examples
      </Typography>

      <Paper sx={{ p: 3, my: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Material-UI Integration
        </Typography>
        <Typography variant="body2" component="pre" sx={{ fontFamily: 'monospace', overflow: 'auto', fontSize: '0.875rem' }}>
{`// theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  // Paste exported MUI theme here
});

export default theme;

// App.tsx
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Your app */}
    </ThemeProvider>
  );
}`}
        </Typography>
      </Paper>

      <Paper sx={{ p: 3, my: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          CSS Variables Integration
        </Typography>
        <Typography variant="body2" component="pre" sx={{ fontFamily: 'monospace', overflow: 'auto', fontSize: '0.875rem' }}>
{`/* styles/tokens.css */
:root {
  /* Paste exported CSS variables here */
}

/* Use in your CSS */
.button {
  background-color: var(--color-primary);
  padding: var(--spacing-2);
  border-radius: var(--radius-medium);
}`}
        </Typography>
      </Paper>

      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mt: 4 }}>
        Best Practices
      </Typography>

      <Box component="ul" sx={{ color: 'text.primary' }}>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Version control:</strong> Commit design tokens to your repository for tracking
            changes
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Documentation:</strong> Document token usage and naming conventions for your
            team
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Testing:</strong> Test exported tokens in your actual application before
            deploying
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Updates:</strong> Re-export and update tokens when making design system changes
          </Typography>
        </li>
        <li>
          <Typography variant="body1" paragraph>
            <strong>Automation:</strong> Consider setting up automated token updates using build
            tools
          </Typography>
        </li>
      </Box>

      <Alert severity="info" sx={{ mt: 4 }}>
        <strong>Need Help?</strong> Each export format includes helpful comments explaining how to
        use the tokens in your project. Read the inline documentation carefully.
      </Alert>
    </Box>
  )
}
