'use client'

import { useState, useEffect } from 'react'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Typography,
  Switch,
  FormControlLabel,
  FormGroup,
} from '@mui/material'
import Link from 'next/link'

interface ConsentPreferences {
  necessary: boolean
  analytics: boolean
  advertising: boolean
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    necessary: true,
    analytics: false,
    advertising: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    } else {
      const saved = JSON.parse(consent) as ConsentPreferences
      setPreferences(saved)
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted: ConsentPreferences = {
      necessary: true,
      analytics: true,
      advertising: true,
    }
    setPreferences(allAccepted)
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted))
    setShowBanner(false)
    setShowPreferences(false)
  }

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences))
    setShowBanner(false)
    setShowPreferences(false)
  }

  const handlePreferenceChange = (key: keyof ConsentPreferences) => {
    if (key === 'necessary') return // Necessary cookies cannot be disabled
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  if (!showBanner) {
    return null
  }

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          p: 2,
          zIndex: 1300,
          bgcolor: 'background.paper',
          borderTop: 1,
          borderColor: 'divider',
        }}
      >
        <Box
          sx={{
            maxWidth: 'lg',
            mx: 'auto',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 2,
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="body2" gutterBottom>
              <strong>We use cookies</strong>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This site uses cookies for analytics and advertising (when configured). By clicking
              "Accept all", you consent to our use of cookies.{' '}
              <Link href="/legal/cookies" style={{ color: 'inherit' }}>
                Learn more
              </Link>
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              flexShrink: 0,
            }}
          >
            <Button variant="outlined" onClick={() => setShowPreferences(true)}>
              Manage preferences
            </Button>
            <Button variant="contained" onClick={handleAcceptAll}>
              Accept all
            </Button>
          </Box>
        </Box>
      </Paper>

      <Dialog
        open={showPreferences}
        onClose={() => setShowPreferences(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Cookie Preferences</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 2 }}>
            We use different types of cookies to optimize your experience on our website. Choose
            which cookies you want to allow.
          </DialogContentText>
          <FormGroup>
            <FormControlLabel
              control={<Switch checked={preferences.necessary} disabled />}
              label={
                <Box>
                  <Typography variant="body2" fontWeight={500}>
                    Necessary Cookies (Required)
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Essential for the website to function properly, such as remembering your theme
                    preference and saved projects.
                  </Typography>
                </Box>
              }
            />
            <FormControlLabel
              control={
                <Switch
                  checked={preferences.analytics}
                  onChange={() => handlePreferenceChange('analytics')}
                />
              }
              label={
                <Box>
                  <Typography variant="body2" fontWeight={500}>
                    Analytics Cookies
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Help us understand how visitors interact with the website by collecting
                    anonymous data (Google Analytics).
                  </Typography>
                </Box>
              }
            />
            <FormControlLabel
              control={
                <Switch
                  checked={preferences.advertising}
                  onChange={() => handlePreferenceChange('advertising')}
                />
              }
              label={
                <Box>
                  <Typography variant="body2" fontWeight={500}>
                    Advertising Cookies
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Used to show relevant advertisements (Google AdSense).
                  </Typography>
                </Box>
              }
            />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowPreferences(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSavePreferences}>
            Save preferences
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
