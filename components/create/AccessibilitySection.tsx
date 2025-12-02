'use client'

import { useState, useMemo, useEffect } from 'react'
import {
  Box,
  Typography,
  Paper,
  ToggleButtonGroup,
  ToggleButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  Tooltip,
  IconButton,
  Link,
  TextField,
  Button,
  Alert,
} from '@mui/material'
import Grid2 from '@mui/material/Grid2'
import { CheckCircle, Cancel, Warning, HelpOutline, Add } from '@mui/icons-material'
import { useDesignSystem } from '@/context/DesignSystemContext'
import {
  calculateWCAGContrast,
  calculateAPCAContrast,
  normalizeHex,
  isValidHex,
  formatLc,
  formatRatio,
  type WCAGResult,
  type APCAResult,
} from '@/utils/contrastCalc'

type ContrastAlgorithm = 'wcag' | 'apca'
type ColorMode = 'palette' | 'custom'

export default function AccessibilitySection() {
  const { config } = useDesignSystem()

  // Algorithm state
  const [algorithm, setAlgorithm] = useState<ContrastAlgorithm>('wcag')

  // Foreground state
  const [foregroundMode, setForegroundMode] = useState<ColorMode>('palette')
  const [foregroundPalette, setForegroundPalette] = useState('textPrimary')
  const [foregroundCustom, setForegroundCustom] = useState('#000000')

  // Background state
  const [backgroundMode, setBackgroundMode] = useState<ColorMode>('palette')
  const [backgroundPalette, setBackgroundPalette] = useState('background')
  const [backgroundCustom, setBackgroundCustom] = useState('#FFFFFF')

  // Palette color options with actual hex values
  const paletteColors = useMemo(
    () => [
      { key: 'primary', label: 'Primary', value: config.palette.primary },
      { key: 'primaryDark', label: 'Primary Dark', value: config.palette.primaryDark },
      { key: 'primaryLight', label: 'Primary Light', value: config.palette.primaryLight },
      { key: 'secondary', label: 'Secondary', value: config.palette.secondary },
      { key: 'secondaryDark', label: 'Secondary Dark', value: config.palette.secondaryDark },
      { key: 'secondaryLight', label: 'Secondary Light', value: config.palette.secondaryLight },
      { key: 'background', label: 'Background', value: config.palette.background },
      { key: 'surface', label: 'Surface', value: config.palette.surface },
      { key: 'textPrimary', label: 'Text Primary', value: config.palette.textPrimary },
      { key: 'textSecondary', label: 'Text Secondary', value: config.palette.textSecondary },
      { key: 'success', label: 'Success', value: config.palette.success },
      { key: 'warning', label: 'Warning', value: config.palette.warning },
      { key: 'error', label: 'Error', value: config.palette.error },
      { key: 'info', label: 'Info', value: config.palette.info },
    ],
    [config.palette]
  )

  // Get actual foreground color (resolve from palette or use custom)
  const foregroundColor = useMemo(() => {
    if (foregroundMode === 'palette') {
      const paletteColor = paletteColors.find((c) => c.key === foregroundPalette)
      return paletteColor?.value || '#000000'
    }
    return normalizeHex(foregroundCustom)
  }, [foregroundMode, foregroundPalette, foregroundCustom, paletteColors])

  // Get actual background color (resolve from palette or use custom)
  const backgroundColor = useMemo(() => {
    if (backgroundMode === 'palette') {
      const paletteColor = paletteColors.find((c) => c.key === backgroundPalette)
      return paletteColor?.value || '#FFFFFF'
    }
    return normalizeHex(backgroundCustom)
  }, [backgroundMode, backgroundPalette, backgroundCustom, paletteColors])

  // Calculate WCAG contrast
  const wcagResult: WCAGResult = useMemo(() => {
    if (!isValidHex(foregroundColor) || !isValidHex(backgroundColor)) {
      return {
        ratio: 0,
        level: { normal: 'Fail', large: 'Fail' },
      }
    }
    return calculateWCAGContrast(foregroundColor, backgroundColor)
  }, [foregroundColor, backgroundColor])

  // Calculate APCA contrast
  const apcaResult: APCAResult = useMemo(() => {
    if (!isValidHex(foregroundColor) || !isValidHex(backgroundColor)) {
      return {
        lc: 0,
        level: { normal: 'Fail', large: 'Fail' },
      }
    }
    return calculateAPCAContrast(foregroundColor, backgroundColor)
  }, [foregroundColor, backgroundColor])

  // Debug logging (remove in production)
  useEffect(() => {
    console.log('Contrast Debug:', {
      foreground: foregroundColor,
      background: backgroundColor,
      wcag: wcagResult,
      apca: apcaResult,
    })
  }, [foregroundColor, backgroundColor, wcagResult, apcaResult])

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'AAA':
      case 'Pass':
        return <CheckCircle color="success" />
      case 'AA':
        return <Warning color="warning" />
      default:
        return <Cancel color="error" />
    }
  }

  const getLevelColor = (level: string): 'success' | 'warning' | 'error' => {
    switch (level) {
      case 'AAA':
      case 'Pass':
        return 'success'
      case 'AA':
        return 'warning'
      default:
        return 'error'
    }
  }

  const handleCustomColorChange = (
    value: string,
    setter: (val: string) => void
  ) => {
    // Allow typing without # prefix
    const cleaned = value.replace(/[^0-9A-Fa-f]/g, '')
    if (cleaned.length <= 6) {
      setter('#' + cleaned)
    }
  }

  return (
    <Box>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        Accessibility & Contrast Checker
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Test color combinations for accessibility compliance using WCAG 2.2 or APCA (WCAG 3 preview)
      </Typography>

      <Grid2 container spacing={3}>
        {/* Algorithm Toggle */}
        <Grid2 size={{ xs: 12 }}>
          <Paper variant="outlined" sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Typography variant="h6">Contrast Algorithm</Typography>
              <Tooltip
                title={
                  <Box sx={{ p: 1 }}>
                    <Typography variant="body2" paragraph>
                      <strong>WCAG 2.2:</strong> Current standard using contrast ratios (e.g., 4.5:1)
                    </Typography>
                    <Typography variant="body2">
                      <strong>APCA:</strong> Experimental algorithm for WCAG 3, uses perceptual
                      lightness contrast (Lc values)
                    </Typography>
                  </Box>
                }
                arrow
              >
                <IconButton size="small">
                  <HelpOutline fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
            <ToggleButtonGroup
              value={algorithm}
              exclusive
              onChange={(_, value) => value && setAlgorithm(value)}
              aria-label="contrast algorithm"
              fullWidth
            >
              <ToggleButton value="wcag" aria-label="WCAG 2.2">
                WCAG 2.2
              </ToggleButton>
              <ToggleButton value="apca" aria-label="APCA">
                APCA (Experimental—WCAG 3 Preview)
              </ToggleButton>
            </ToggleButtonGroup>
          </Paper>
        </Grid2>

        {/* Foreground Color Selection */}
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Paper variant="outlined" sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Foreground (Text)
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              <ToggleButtonGroup
                value={foregroundMode}
                exclusive
                onChange={(_, value) => value && setForegroundMode(value)}
                size="small"
                fullWidth
              >
                <ToggleButton value="palette">Palette</ToggleButton>
                <ToggleButton value="custom">Custom</ToggleButton>
              </ToggleButtonGroup>
            </Box>

            {foregroundMode === 'palette' ? (
              <FormControl fullWidth>
                <InputLabel>Select Color</InputLabel>
                <Select
                  value={foregroundPalette}
                  label="Select Color"
                  onChange={(e) => setForegroundPalette(e.target.value)}
                >
                  {paletteColors.map((option) => (
                    <MenuItem key={option.key} value={option.key}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box
                          sx={{
                            width: 20,
                            height: 20,
                            bgcolor: option.value,
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 0.5,
                          }}
                        />
                        {option.label}
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : (
              <Box>
                <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                  <Box
                    component="input"
                    type="color"
                    value={foregroundColor}
                    onChange={(e) =>
                      setForegroundCustom((e.target as HTMLInputElement).value)
                    }
                    sx={{
                      width: 56,
                      height: 56,
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 1,
                      cursor: 'pointer',
                    }}
                    aria-label="Pick foreground color"
                  />
                  <TextField
                    label="Hex Color"
                    value={foregroundCustom.replace('#', '')}
                    onChange={(e) => handleCustomColorChange(e.target.value, setForegroundCustom)}
                    size="small"
                    fullWidth
                    InputProps={{
                      startAdornment: '#',
                    }}
                    inputProps={{
                      maxLength: 6,
                      style: { textTransform: 'uppercase' },
                    }}
                  />
                </Box>
                <Chip
                  label="Custom color (not in palette)"
                  size="small"
                  color="warning"
                  variant="outlined"
                  sx={{ mb: 1 }}
                />
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<Add />}
                  fullWidth
                  disabled
                  sx={{ opacity: 0.6 }}
                >
                  Promote custom color to palette
                </Button>
              </Box>
            )}
          </Paper>
        </Grid2>

        {/* Background Color Selection */}
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Paper variant="outlined" sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Background
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              <ToggleButtonGroup
                value={backgroundMode}
                exclusive
                onChange={(_, value) => value && setBackgroundMode(value)}
                size="small"
                fullWidth
              >
                <ToggleButton value="palette">Palette</ToggleButton>
                <ToggleButton value="custom">Custom</ToggleButton>
              </ToggleButtonGroup>
            </Box>

            {backgroundMode === 'palette' ? (
              <FormControl fullWidth>
                <InputLabel>Select Color</InputLabel>
                <Select
                  value={backgroundPalette}
                  label="Select Color"
                  onChange={(e) => setBackgroundPalette(e.target.value)}
                >
                  {paletteColors.map((option) => (
                    <MenuItem key={option.key} value={option.key}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box
                          sx={{
                            width: 20,
                            height: 20,
                            bgcolor: option.value,
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 0.5,
                          }}
                        />
                        {option.label}
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : (
              <Box>
                <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                  <Box
                    component="input"
                    type="color"
                    value={backgroundColor}
                    onChange={(e) =>
                      setBackgroundCustom((e.target as HTMLInputElement).value)
                    }
                    sx={{
                      width: 56,
                      height: 56,
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 1,
                      cursor: 'pointer',
                    }}
                    aria-label="Pick background color"
                  />
                  <TextField
                    label="Hex Color"
                    value={backgroundCustom.replace('#', '')}
                    onChange={(e) => handleCustomColorChange(e.target.value, setBackgroundCustom)}
                    size="small"
                    fullWidth
                    InputProps={{
                      startAdornment: '#',
                    }}
                    inputProps={{
                      maxLength: 6,
                      style: { textTransform: 'uppercase' },
                    }}
                  />
                </Box>
                <Chip
                  label="Custom color (not in palette)"
                  size="small"
                  color="warning"
                  variant="outlined"
                  sx={{ mb: 1 }}
                />
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<Add />}
                  fullWidth
                  disabled
                  sx={{ opacity: 0.6 }}
                >
                  Promote custom color to palette
                </Button>
              </Box>
            )}
          </Paper>
        </Grid2>

        {/* Preview */}
        <Grid2 size={{ xs: 12 }}>
          <Paper variant="outlined" sx={{ p: 0, overflow: 'hidden' }}>
            <Box
              sx={{
                p: 4,
                bgcolor: backgroundColor,
                color: foregroundColor,
              }}
            >
              <Typography variant="h5" sx={{ mb: 2, color: foregroundColor }}>
                Sample Heading Text
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, color: foregroundColor }}>
                This is sample body text to preview the contrast ratio between the selected
                foreground and background colors. The quick brown fox jumps over the lazy dog.
              </Typography>
              <Typography variant="h6" sx={{ color: foregroundColor }}>
                Large text sample for testing
              </Typography>
            </Box>
          </Paper>
        </Grid2>

        {/* Contrast Results */}
        <Grid2 size={{ xs: 12 }}>
          <Paper variant="outlined" sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Contrast Results
            </Typography>

            {algorithm === 'wcag' ? (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
                    <Typography variant="subtitle2">Contrast Ratio</Typography>
                    <Tooltip
                      title={
                        <Box sx={{ p: 1 }}>
                          <Typography variant="body2" paragraph>
                            <strong>WCAG 2.2 Formula:</strong> Contrast ratio is calculated using
                            the relative luminance of two colors.
                          </Typography>
                          <Typography variant="body2" paragraph sx={{ mb: 1 }}>
                            <strong>AA:</strong> Minimum standard for normal text (4.5:1) and large
                            text (3:1)
                          </Typography>
                          <Typography variant="body2" paragraph sx={{ mb: 1 }}>
                            <strong>AAA:</strong> Enhanced standard for normal text (7:1) and large
                            text (4.5:1)
                          </Typography>
                          <Typography variant="body2" sx={{ mb: 1 }}>
                            <strong>Learn more:</strong>
                          </Typography>
                          <Link
                            href="https://www.w3.org/TR/WCAG21/#contrast-minimum"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="inherit"
                            sx={{ display: 'block', mb: 0.5 }}
                          >
                            → WCAG 2.1 Contrast Guidelines
                          </Link>
                          <Link
                            href="https://webaim.org/resources/contrastchecker/"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="inherit"
                            sx={{ display: 'block' }}
                          >
                            → WebAIM Contrast Checker
                          </Link>
                        </Box>
                      }
                      arrow
                    >
                      <IconButton size="small" sx={{ p: 0.5 }}>
                        <HelpOutline fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Box>
                  <Typography variant="h4" fontWeight={600}>
                    {formatRatio(wcagResult.ratio)}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Box>
                    <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                      Normal Text (16px)
                    </Typography>
                    <Chip
                      icon={getLevelIcon(wcagResult.level.normal)}
                      label={wcagResult.level.normal}
                      color={getLevelColor(wcagResult.level.normal)}
                      size="small"
                    />
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                      Large Text (24px)
                    </Typography>
                    <Chip
                      icon={getLevelIcon(wcagResult.level.large)}
                      label={wcagResult.level.large}
                      color={getLevelColor(wcagResult.level.large)}
                      size="small"
                    />
                  </Box>
                </Box>

                <Alert severity="info" sx={{ mt: 1 }}>
                  <Typography variant="caption">
                    <strong>WCAG 2.2 Requirements:</strong> Normal text needs 4.5:1 for AA, 7:1 for
                    AAA. Large text needs 3:1 for AA, 4.5:1 for AAA.
                  </Typography>
                </Alert>
              </Box>
            ) : (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
                    <Typography variant="subtitle2">APCA Lightness Contrast (Lc)</Typography>
                    <Tooltip
                      title={
                        <Box sx={{ p: 1 }}>
                          <Typography variant="body2" paragraph>
                            <strong>APCA (Accessible Perceptual Contrast Algorithm):</strong> An
                            experimental algorithm being developed for WCAG 3.0 that uses perceptual
                            lightness contrast.
                          </Typography>
                          <Typography variant="body2" paragraph>
                            <strong>Body text:</strong> Minimum Lc 60
                          </Typography>
                          <Typography variant="body2" paragraph>
                            <strong>Large text/headings:</strong> Minimum Lc 45
                          </Typography>
                          <Typography variant="body2">
                            <strong>Learn more:</strong>
                          </Typography>
                          <Link
                            href="https://github.com/Myndex/SAPC-APCA"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="inherit"
                            sx={{ display: 'block', mb: 0.5 }}
                          >
                            → APCA Documentation
                          </Link>
                          <Link
                            href="https://www.myndex.com/APCA/"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="inherit"
                            sx={{ display: 'block' }}
                          >
                            → APCA Calculator
                          </Link>
                        </Box>
                      }
                      arrow
                    >
                      <IconButton size="small" sx={{ p: 0.5 }}>
                        <HelpOutline fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Box>
                  <Typography variant="h4" fontWeight={600}>
                    {formatLc(apcaResult.lc)}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {apcaResult.lc > 0 ? 'Dark text on light background' : 'Light text on dark background'}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Box>
                    <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                      Body Text (Lc ≥ 60)
                    </Typography>
                    <Chip
                      icon={getLevelIcon(apcaResult.level.normal)}
                      label={apcaResult.level.normal}
                      color={getLevelColor(apcaResult.level.normal)}
                      size="small"
                    />
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                      Large Text/Headings (Lc ≥ 45)
                    </Typography>
                    <Chip
                      icon={getLevelIcon(apcaResult.level.large)}
                      label={apcaResult.level.large}
                      color={getLevelColor(apcaResult.level.large)}
                      size="small"
                    />
                  </Box>
                </Box>

                <Alert severity="warning" sx={{ mt: 1 }}>
                  <Typography variant="caption">
                    <strong>Experimental:</strong> APCA is part of the WCAG 3.0 draft specification
                    and is subject to change. Use WCAG 2.2 for compliance requirements.
                  </Typography>
                </Alert>
              </Box>
            )}
          </Paper>
        </Grid2>
      </Grid2>
    </Box>
  )
}
