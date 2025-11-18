'use client'

import { useState, useEffect } from 'react'
import {
  Container,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Paper,
  Divider,
} from '@mui/material'
import { CompareArrows, GetApp, Shuffle } from '@mui/icons-material'
import { curatedThemes, CuratedTheme, getRandomTheme, getThemeById } from '@/data/curatedThemes'
import { useDesignSystem } from '@/context/DesignSystemContext'
import ThemePreview from '@/components/ThemePreview'
import { useSearchParams, useRouter } from 'next/navigation'

export default function ComparePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { config, loadConfig } = useDesignSystem()

  // Initialize themes from URL or defaults
  const [themeA, setThemeA] = useState<CuratedTheme | null>(null)
  const [themeB, setThemeB] = useState<CuratedTheme | null>(null)

  // Load theme from URL on mount
  useEffect(() => {
    const themeParam = searchParams.get('theme')
    if (themeParam) {
      const theme = getThemeById(themeParam)
      if (theme) {
        setThemeA(theme)
        setThemeB(curatedThemes[0])
      }
    } else {
      setThemeA(curatedThemes[0])
      setThemeB(curatedThemes[1])
    }
  }, [searchParams])

  const handleRandomizeA = () => {
    setThemeA(getRandomTheme())
  }

  const handleRandomizeB = () => {
    setThemeB(getRandomTheme())
  }

  const handleApplyTheme = (theme: CuratedTheme) => {
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
    router.push('/create')
  }

  if (!themeA || !themeB) {
    return null
  }

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <CompareArrows sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
          <Typography variant="h2" component="h1" fontWeight={700} gutterBottom>
            Compare Themes
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Compare two themes side-by-side and choose the one that fits your vision
          </Typography>
        </Box>

        {/* Controls */}
        <Paper sx={{ p: 3, mb: 4 }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr auto 1fr' },
              gap: 3,
              alignItems: 'center',
            }}
          >
            {/* Theme A Controls */}
            <Box>
              <FormControl fullWidth>
                <InputLabel>Theme A</InputLabel>
                <Select
                  value={themeA.id}
                  label="Theme A"
                  onChange={(e: any) => {
                    const theme = getThemeById(e.target.value)
                    if (theme) setThemeA(theme)
                  }}
                >
                  {curatedThemes.map((theme) => (
                    <MenuItem key={theme.id} value={theme.id}>
                      {theme.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<Shuffle />}
                  onClick={handleRandomizeA}
                  fullWidth
                >
                  Random
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<GetApp />}
                  onClick={() => handleApplyTheme(themeA)}
                  fullWidth
                >
                  Apply
                </Button>
              </Box>
            </Box>

            {/* Divider */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Divider orientation="vertical" sx={{ height: 80 }} />
            </Box>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <Divider />
            </Box>

            {/* Theme B Controls */}
            <Box>
              <FormControl fullWidth>
                <InputLabel>Theme B</InputLabel>
                <Select
                  value={themeB.id}
                  label="Theme B"
                  onChange={(e: any) => {
                    const theme = getThemeById(e.target.value)
                    if (theme) setThemeB(theme)
                  }}
                >
                  {curatedThemes.map((theme) => (
                    <MenuItem key={theme.id} value={theme.id}>
                      {theme.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<Shuffle />}
                  onClick={handleRandomizeB}
                  fullWidth
                >
                  Random
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<GetApp />}
                  onClick={() => handleApplyTheme(themeB)}
                  fullWidth
                >
                  Apply
                </Button>
              </Box>
            </Box>
          </Box>
        </Paper>

        {/* Split Comparison View */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap: 3,
          }}
        >
          {/* Theme A Preview */}
          <Paper
            sx={{
              overflow: 'hidden',
              border: 2,
              borderColor: 'primary.main',
              transition: 'all 0.3s ease',
            }}
          >
            <ThemePreview theme={themeA} />
          </Paper>

          {/* Theme B Preview */}
          <Paper
            sx={{
              overflow: 'hidden',
              border: 2,
              borderColor: 'secondary.main',
              transition: 'all 0.3s ease',
            }}
          >
            <ThemePreview theme={themeB} />
          </Paper>
        </Box>
      </Container>
    </Box>
  )
}
