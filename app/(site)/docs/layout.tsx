'use client'

import { Box, Container, Drawer, List, ListItem, ListItemButton, ListItemText, Typography, useMediaQuery, useTheme, IconButton } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const drawerWidth = 240

const docLinks = [
  { title: 'Getting Started', href: '/docs' },
  { title: 'Understanding WCAG Contrast', href: '/docs/wcag-contrast' },
  { title: 'Accessible Typography', href: '/docs/accessible-typography' },
  { title: 'Color Theory for UI', href: '/docs/color-theory' },
  { title: 'Palette Generation Best Practices', href: '/docs/palette-generation' },
  { title: 'Creating Your First Palette', href: '/docs/palette' },
  { title: 'Semantic Tokens', href: '/docs/semantic-tokens' },
  { title: 'Shadows & Depth', href: '/docs/shadows-depth' },
  { title: 'CSS Variables', href: '/docs/css-variables' },
  { title: 'Material UI Theming', href: '/docs/material-ui-theming' },
  { title: 'Typography & Font Pairings', href: '/docs/typography' },
  { title: 'Serif vs Sans-Serif', href: '/docs/serif-vs-sans' },
  { title: 'Scales & Rhythms', href: '/docs/scales-rhythms' },
  { title: 'Choosing Accessible Fonts', href: '/docs/choosing-fonts' },
  { title: 'Adaptive Color Systems', href: '/docs/adaptive-colors' },
  { title: 'Designing for Dark Mode', href: '/docs/dark-mode' },
  { title: 'Visual Hierarchy', href: '/docs/visual-hierarchy' },
  { title: 'Accessibility Basics', href: '/docs/accessibility' },
  { title: 'Exporting Design Tokens', href: '/docs/exporting' },
  { title: 'Advanced Exporting Guide', href: '/docs/exporting-guide' },
]

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
        Documentation
      </Typography>
      <List>
        {docLinks.map((link) => (
          <ListItem key={link.href} disablePadding>
            <ListItemButton
              component={Link}
              href={link.href}
              selected={pathname === link.href}
              onClick={() => isMobile && setMobileOpen(false)}
              sx={{
                borderRadius: 1,
                mb: 0.5,
                '&.Mui-selected': {
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  },
                },
              }}
            >
              <ListItemText primary={link.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
      <Box sx={{ display: 'flex', flex: 1 }}>
      {/* Mobile menu button */}
      {isMobile && (
        <Box
          sx={{
            position: 'fixed',
            top: 80,
            left: 16,
            zIndex: theme.zIndex.drawer + 1,
          }}
        >
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              bgcolor: 'background.paper',
              boxShadow: theme.shadows[2],
              '&:hover': {
                bgcolor: 'background.paper',
                boxShadow: theme.shadows[4],
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      )}

      {/* Desktop sidebar */}
      {!isMobile && (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              position: 'fixed',
              top: 64,
              height: 'calc(100vh - 64px)',
              borderRight: 1,
              borderColor: 'divider',
              overflowY: 'auto',
              overflowX: 'hidden',
            },
          }}
        >
          {drawer}
        </Drawer>
      )}

      {/* Mobile sidebar */}
      {isMobile && (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          {drawer}
        </Drawer>
      )}

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: isMobile ? 0 : `${drawerWidth}px`,
          mb: 8,
        }}
      >
        <Container maxWidth="md">{children}</Container>
      </Box>
      </Box>
    </Box>
  )
}
