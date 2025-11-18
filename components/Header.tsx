'use client'

import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme as useMuiTheme,
} from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import Link from 'next/link'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const theme = useMuiTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        borderBottom: 1,
        borderColor: 'divider',
        bgcolor: 'background.paper',
        color: 'text.primary',
      }}
    >
      <Toolbar>
        {/* Logo and wordmark */}
        <Box
          component={Link}
          href="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'inherit',
            mr: 4,
          }}
        >
          <Logo width={32} height={32} />
          <Typography
            variant="h6"
            component="span"
            sx={{
              ml: 1.5,
              fontWeight: 700,
              color: 'primary.main',
            }}
          >
            Crow Create
          </Typography>
        </Box>

        {/* Desktop navigation */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 1, flexGrow: 1 }}>
            <Button component={Link} href="/create" color="inherit">
              Create
            </Button>
            <Button component={Link} href="/themes" color="inherit">
              Themes
            </Button>
            <Button component={Link} href="/docs" color="inherit">
              Docs
            </Button>
            <Button component={Link} href="/resources" color="inherit">
              Resources
            </Button>
            <Button component={Link} href="/contact" color="inherit">
              Contact
            </Button>
          </Box>
        )}

        <Box sx={{ flexGrow: 1 }} />

        {/* Theme toggle */}
        <ThemeToggle />

        {/* Mobile menu button */}
        {isMobile && (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setMobileMenuOpen(true)}
            sx={{ ml: 1 }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/create" onClick={() => setMobileMenuOpen(false)}>
                <ListItemText primary="Create" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/themes" onClick={() => setMobileMenuOpen(false)}>
                <ListItemText primary="Themes" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                href="/docs"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ListItemText primary="Docs" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                href="/resources"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ListItemText primary="Resources" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ListItemText primary="Contact" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  )
}
