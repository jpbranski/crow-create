'use client'

import { useState, useMemo } from 'react'
import { Container, Box, Typography, Grid, Snackbar, Alert } from '@mui/material'
import { Palette } from '@mui/icons-material'
import { curatedThemes, CuratedTheme } from '@/data/curatedThemes'
import { getAffiliatesForInjection } from '@/data/affiliatePool'
import { useDesignSystem } from '@/context/DesignSystemContext'
import ThemeCard from '@/components/ThemeCard'
import AffiliateCard from '@/components/AffiliateCard'
import { useRouter } from 'next/navigation'

export default function ThemesPage() {
  const router = useRouter()
  const { loadConfig } = useDesignSystem()
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')

  // Get affiliates to inject
  const affiliatesToInject = useMemo(() => {
    return getAffiliatesForInjection(curatedThemes.length, 6)
  }, [])

  // Create merged array with themes and affiliates
  const items = useMemo(() => {
    const result: Array<{ type: 'theme' | 'affiliate'; data: any; index: number }> = []
    let affiliateIndex = 0

    curatedThemes.forEach((theme, index) => {
      result.push({ type: 'theme', data: theme, index })

      // Insert affiliate after every 6 items
      if ((index + 1) % 6 === 0 && affiliateIndex < affiliatesToInject.length) {
        result.push({
          type: 'affiliate',
          data: affiliatesToInject[affiliateIndex],
          index: -affiliateIndex - 1,
        })
        affiliateIndex++
      }
    })

    return result
  }, [affiliatesToInject])

  const handleApplyTheme = (theme: CuratedTheme) => {
    // Convert curated theme to full design system config
    const fullConfig = {
      palette: {
        primary: theme.palette.primary,
        primaryDark: theme.palette.primary,
        primaryLight: theme.palette.primary,
        secondary: theme.palette.secondary,
        secondaryDark: theme.palette.secondary,
        secondaryLight: theme.palette.secondary,
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
        background: theme.palette.background,
        surface: theme.palette.surface,
        textPrimary: theme.palette.text,
        textSecondary: theme.palette.textSecondary,
      },
      typography: {
        headingFont: 'Inter',
        bodyFont: 'Inter',
        baseFontSize: 16,
        scale: 1.25,
      },
      spacing: {
        baseUnit: 8,
      },
      radius: {
        style: 'subtle' as const,
        small: 4,
        medium: 8,
        large: 12,
      },
      shadows: {
        color: '#000000',
        offsetX: 0,
        offsetY: 2,
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      },
      motion: {
        duration: {
          fast: 150,
          normal: 300,
          slow: 500,
        },
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    }

    loadConfig(fullConfig)
    setSnackbarMessage(`Applied "${theme.name}" theme!`)
    setSnackbarOpen(true)

    // Navigate to create page after a short delay
    setTimeout(() => {
      router.push('/create')
    }, 1000)
  }

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="xl">
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Palette sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
          <Typography variant="h2" component="h1" fontWeight={700} gutterBottom>
            Explore Beautiful Themes
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Discover our curated collection of accessible, WCAG-compliant themes. Preview, compare,
            and apply them instantly.
          </Typography>
        </Box>

        {/* Themes Grid with Injected Affiliates */}
        <Grid container spacing={3}>
          {items.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={`${item.type}-${item.index}`}>
              {item.type === 'theme' ? (
                <ThemeCard theme={item.data} onApply={handleApplyTheme} />
              ) : (
                <AffiliateCard data={item.data} />
              )}
            </Grid>
          ))}
        </Grid>

        {/* Bottom CTA */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="body1" color="text.secondary">
            Can&apos;t find what you&apos;re looking for?{' '}
            <Typography
              component="a"
              href="/create"
              sx={{
                color: 'primary.main',
                textDecoration: 'none',
                fontWeight: 600,
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Create your own custom theme
            </Typography>
          </Typography>
        </Box>
      </Container>

      {/* Success Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  )
}
