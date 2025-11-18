'use client'

import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Link as MuiLink,
  Chip,
} from '@mui/material'
import {
  Palette,
  Accessibility,
  Code,
  DesignServices,
  Language,
  MenuBook,
  Bolt,
} from '@mui/icons-material'

interface Resource {
  name: string
  description: string
  url: string
  category: string
  isAffiliate?: boolean
}

const resources: Resource[] = [
  // Design Tools
  {
    name: 'Figma',
    description: 'Collaborative interface design tool with powerful prototyping',
    url: 'https://figma.com',
    category: 'Design Tools',
    isAffiliate: true,
  },
  {
    name: 'Material-UI (MUI)',
    description: 'React component library implementing Material Design',
    url: 'https://mui.com',
    category: 'Design Tools',
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first CSS framework for rapid UI development',
    url: 'https://tailwindcss.com',
    category: 'Design Tools',
  },
  {
    name: 'Radix UI',
    description: 'Unstyled, accessible components for building design systems',
    url: 'https://radix-ui.com',
    category: 'Design Tools',
  },
  {
    name: 'Sketch',
    description: 'Professional digital design toolkit for Mac',
    url: 'https://sketch.com',
    category: 'Design Tools',
    isAffiliate: true,
  },
  {
    name: 'Adobe XD',
    description: 'Design, prototype, and share user experiences',
    url: 'https://adobe.com/products/xd.html',
    category: 'Design Tools',
  },

  // Color Tools
  {
    name: 'OKLCH Color Picker',
    description: 'Perceptually uniform color picker using OKLCH color space',
    url: 'https://oklch.com',
    category: 'Color Tools',
  },
  {
    name: 'Coolors',
    description: 'Fast color scheme generator with accessibility features',
    url: 'https://coolors.co',
    category: 'Color Tools',
  },
  {
    name: 'Adobe Color',
    description: 'Create and explore color themes and palettes',
    url: 'https://color.adobe.com',
    category: 'Color Tools',
  },
  {
    name: 'Accessible Colors',
    description: 'WCAG-compliant color combinations generator',
    url: 'https://accessible-colors.com',
    category: 'Color Tools',
  },
  {
    name: 'Colorable',
    description: 'Color combination contrast tester',
    url: 'https://colorable.jxnblk.com',
    category: 'Color Tools',
  },

  // Accessibility
  {
    name: 'WCAG Guidelines',
    description: 'Official Web Content Accessibility Guidelines documentation',
    url: 'https://www.w3.org/WAI/WCAG21/quickref/',
    category: 'Accessibility',
  },
  {
    name: 'WebAIM',
    description: 'Web accessibility resources and tools',
    url: 'https://webaim.org',
    category: 'Accessibility',
  },
  {
    name: 'Ally.js',
    description: 'JavaScript library for accessibility tooling',
    url: 'https://allyjs.io',
    category: 'Accessibility',
  },
  {
    name: 'Stark',
    description: 'Accessibility checker for designers and developers',
    url: 'https://getstark.co',
    category: 'Accessibility',
  },
  {
    name: 'axe DevTools',
    description: 'Browser extension for accessibility testing',
    url: 'https://www.deque.com/axe/devtools/',
    category: 'Accessibility',
  },

  // Branding Utilities
  {
    name: 'Favicon.io',
    description: 'Simple favicon generator from text, image, or emoji',
    url: 'https://favicon.io',
    category: 'Branding',
  },
  {
    name: 'Iconify',
    description: 'Unified icon framework with 100,000+ icons',
    url: 'https://iconify.design',
    category: 'Branding',
  },
  {
    name: 'Lucide Icons',
    description: 'Beautiful, customizable open-source icons',
    url: 'https://lucide.dev',
    category: 'Branding',
  },
  {
    name: 'uiGradients',
    description: 'Beautiful gradient color combinations',
    url: 'https://uigradients.com',
    category: 'Branding',
  },
  {
    name: 'Font Awesome',
    description: 'Popular icon toolkit with thousands of icons',
    url: 'https://fontawesome.com',
    category: 'Branding',
  },

  // Developer Tools
  {
    name: 'Next.js',
    description: 'React framework for production-grade applications',
    url: 'https://nextjs.org',
    category: 'Developer Tools',
  },
  {
    name: 'Vercel',
    description: 'Platform for deploying and hosting modern web apps',
    url: 'https://vercel.com',
    category: 'Developer Tools',
    isAffiliate: true,
  },
  {
    name: 'GitHub',
    description: 'Version control and collaboration platform',
    url: 'https://github.com',
    category: 'Developer Tools',
  },
  {
    name: 'Storybook',
    description: 'Build and document UI components in isolation',
    url: 'https://storybook.js.org',
    category: 'Developer Tools',
  },
  {
    name: 'TypeScript',
    description: 'Typed superset of JavaScript for better tooling',
    url: 'https://www.typescriptlang.org',
    category: 'Developer Tools',
  },

  // Learning
  {
    name: 'MDN Web Docs',
    description: 'Comprehensive web development documentation',
    url: 'https://developer.mozilla.org',
    category: 'Learning',
  },
  {
    name: 'Smashing Magazine',
    description: 'Articles for web designers and developers',
    url: 'https://smashingmagazine.com',
    category: 'Learning',
  },
  {
    name: 'CSS-Tricks',
    description: 'Tips, tricks, and techniques for web design',
    url: 'https://css-tricks.com',
    category: 'Learning',
  },
  {
    name: 'A11y Project',
    description: 'Community-driven effort to make accessibility easier',
    url: 'https://a11yproject.com',
    category: 'Learning',
  },
]

const categoryIcons: Record<string, React.ReactNode> = {
  'Design Tools': <DesignServices />,
  'Color Tools': <Palette />,
  Accessibility: <Accessibility />,
  Branding: <Bolt />,
  'Developer Tools': <Code />,
  Learning: <MenuBook />,
}

export default function ResourcesPage() {
  const categories = Array.from(new Set(resources.map((r) => r.category)))

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="xl">
        {/* Hero */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Language sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
          <Typography variant="h2" component="h1" fontWeight={700} gutterBottom>
            Design Resources
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Curated tools and resources for designers and developers
          </Typography>
        </Box>

        {/* Resources by Category */}
        {categories.map((category) => (
          <Box key={category} sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
              {categoryIcons[category]}
              <Typography variant="h4" component="h2" fontWeight={600}>
                {category}
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {resources
                .filter((r) => r.category === category)
                .map((resource) => (
                  <Grid item xs={12} sm={6} md={4} key={resource.name}>
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        border: 1,
                        borderColor: 'divider',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: 4,
                        },
                      }}
                    >
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            mb: 1,
                          }}
                        >
                          <Typography variant="h6" component="h3" fontWeight={600}>
                            {resource.name}
                          </Typography>
                          {resource.isAffiliate && (
                            <Chip
                              label="Affiliate"
                              size="small"
                              sx={{
                                fontSize: '0.65rem',
                                height: 20,
                                bgcolor: 'action.selected',
                              }}
                            />
                          )}
                        </Box>
                        <Typography variant="body2" color="text.secondary" paragraph>
                          {resource.description}
                        </Typography>
                        <MuiLink
                          href={resource.url}
                          target="_blank"
                          rel={resource.isAffiliate ? 'noopener noreferrer sponsored' : 'noopener noreferrer'}
                          sx={{
                            color: 'primary.main',
                            textDecoration: 'none',
                            fontWeight: 500,
                            fontSize: '0.9rem',
                            '&:hover': {
                              textDecoration: 'underline',
                            },
                          }}
                        >
                          Visit {resource.name} →
                        </MuiLink>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Box>
        ))}

        {/* Footer Link */}
        <Box
          sx={{
            mt: 8,
            pt: 4,
            borderTop: 1,
            borderColor: 'divider',
            textAlign: 'center',
          }}
        >
          <Typography variant="body1" color="text.secondary">
            Built with passion by{' '}
            <MuiLink
              href="https://jpbranski.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'primary.main',
                textDecoration: 'none',
                fontWeight: 600,
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              jpbranski.com
            </MuiLink>
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
