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
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme as useMuiTheme,
} from '@mui/material'
import { Menu as MenuIcon, KeyboardArrowDown } from '@mui/icons-material'
import Link from 'next/link'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [legalMenuAnchor, setLegalMenuAnchor] = useState<null | HTMLElement>(null)
  const theme = useMuiTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleLegalMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setLegalMenuAnchor(event.currentTarget)
  }

  const handleLegalMenuClose = () => {
    setLegalMenuAnchor(null)
  }

  const legalLinks = [
    { text: 'Privacy Policy', href: '/legal/privacy' },
    { text: 'Terms of Service', href: '/legal/terms' },
    { text: 'Accessibility', href: '/legal/accessibility' },
    { text: 'Cookies', href: '/legal/cookies' },
  ]

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
            <Button component={Link} href="/docs" color="inherit">
              Docs
            </Button>
            <Button
              color="inherit"
              onClick={handleLegalMenuOpen}
              endIcon={<KeyboardArrowDown />}
              aria-controls={legalMenuAnchor ? 'legal-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={legalMenuAnchor ? 'true' : undefined}
            >
              Legal
            </Button>
            <Menu
              id="legal-menu"
              anchorEl={legalMenuAnchor}
              open={Boolean(legalMenuAnchor)}
              onClose={handleLegalMenuClose}
              MenuListProps={{
                'aria-labelledby': 'legal-button',
              }}
            >
              {legalLinks.map((link) => (
                <MenuItem
                  key={link.href}
                  component={Link}
                  href={link.href}
                  onClick={handleLegalMenuClose}
                >
                  {link.text}
                </MenuItem>
              ))}
            </Menu>
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
              <ListItemButton
                component={Link}
                href="/docs"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ListItemText primary="Docs" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Legal"
                primaryTypographyProps={{
                  variant: 'overline',
                  color: 'text.secondary',
                }}
              />
            </ListItem>
            {legalLinks.map((link) => (
              <ListItem key={link.href} disablePadding sx={{ pl: 2 }}>
                <ListItemButton
                  component={Link}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ListItemText primary={link.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  )
}
