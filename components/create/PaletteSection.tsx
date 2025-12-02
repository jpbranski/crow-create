'use client'

import { useState } from 'react'
import {
  Box,
  Typography,
  TextField,
  Paper,
  Button,
  Chip,
  Alert,
  Tooltip,
} from '@mui/material'
import Grid2 from '@mui/material/Grid2'
import { AutoAwesome, CloudUpload, Shuffle } from '@mui/icons-material'
import { useDesignSystem } from '@/context/DesignSystemContext'
import {
  getContrastRatio,
  getWCAGLevel,
  extractColorsFromImage,
  generateSemanticColors,
  adjustLightness,
  generateRandomPalette,
} from '@/lib/colorUtils'
import ColorPicker from './ColorPicker'

export default function PaletteSection() {
  const { config, updatePalette } = useDesignSystem()
  const [uploadError, setUploadError] = useState('')

  const handleColorChange = (field: keyof typeof config.palette, value: string) => {
    updatePalette({ [field]: value })
  }

  const handleLogoUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Validate file size (500KB max)
    if (file.size > 500 * 1024) {
      setUploadError('File size must be less than 500KB')
      return
    }

    // Validate file type
    if (!['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml'].includes(file.type)) {
      setUploadError('Only PNG, JPG, and SVG files are allowed')
      return
    }

    setUploadError('')

    try {
      const colors = await extractColorsFromImage(file)
      if (colors.length > 0) {
        updatePalette({
          primary: colors[0],
          secondary: colors[1] || colors[0],
        })
      }
    } catch (error) {
      setUploadError('Failed to extract colors from image')
    }
  }

  const handleEnhancePalette = () => {
    const semantic = generateSemanticColors(config.palette.primary)
    const primaryDark = adjustLightness(config.palette.primary, -20)
    const primaryLight = adjustLightness(config.palette.primary, 20)
    const secondaryDark = adjustLightness(config.palette.secondary, -20)
    const secondaryLight = adjustLightness(config.palette.secondary, 20)

    updatePalette({
      primaryDark,
      primaryLight,
      secondaryDark,
      secondaryLight,
      ...semantic,
    })
  }

  const handleRandomizePalette = () => {
    const { primary, secondary } = generateRandomPalette()
    const semantic = generateSemanticColors(primary)
    const primaryDark = adjustLightness(primary, -20)
    const primaryLight = adjustLightness(primary, 20)
    const secondaryDark = adjustLightness(secondary, -20)
    const secondaryLight = adjustLightness(secondary, 20)

    updatePalette({
      primary,
      secondary,
      primaryDark,
      primaryLight,
      secondaryDark,
      secondaryLight,
      ...semantic,
    })
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
        <Box>
          <Typography variant="h5" gutterBottom fontWeight={600}>
            Color Palette
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Build your color palette with primary, secondary, semantic, and neutral colors
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<Shuffle />}
          onClick={handleRandomizePalette}
          sx={{ ml: 2, flexShrink: 0 }}
        >
          Randomize
        </Button>
      </Box>

      <Grid2 container spacing={3}>
        {/* Logo Upload */}
        <Grid2 size={{ xs: 12 }}>
          <Paper variant="outlined" sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Extract from Logo
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Upload your logo (max 500KB, PNG/JPG/SVG) to extract dominant colors
            </Typography>
            <Button
              variant="outlined"
              component="label"
              startIcon={<CloudUpload />}
            >
              Upload Logo
              <input
                type="file"
                hidden
                accept="image/png,image/jpeg,image/jpg,image/svg+xml"
                onChange={handleLogoUpload}
              />
            </Button>
            {uploadError && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {uploadError}
              </Alert>
            )}
          </Paper>
        </Grid2>

        {/* Primary Colors */}
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Paper variant="outlined" sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Primary Color
            </Typography>
            <Box sx={{ mb: 2 }}>
              <ColorPicker
                label="Main"
                value={config.palette.primary}
                onChange={(value) => handleColorChange('primary', value)}
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <ColorPicker
                label="Dark"
                value={config.palette.primaryDark}
                onChange={(value) => handleColorChange('primaryDark', value)}
              />
            </Box>
            <Box>
              <ColorPicker
                label="Light"
                value={config.palette.primaryLight}
                onChange={(value) => handleColorChange('primaryLight', value)}
              />
            </Box>
          </Paper>
        </Grid2>

        {/* Secondary Colors */}
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Paper variant="outlined" sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Secondary Color
            </Typography>
            <Box sx={{ mb: 2 }}>
              <ColorPicker
                label="Main"
                value={config.palette.secondary}
                onChange={(value) => handleColorChange('secondary', value)}
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <ColorPicker
                label="Dark"
                value={config.palette.secondaryDark}
                onChange={(value) => handleColorChange('secondaryDark', value)}
              />
            </Box>
            <Box>
              <ColorPicker
                label="Light"
                value={config.palette.secondaryLight}
                onChange={(value) => handleColorChange('secondaryLight', value)}
              />
            </Box>
          </Paper>
        </Grid2>

        {/* Semantic Colors */}
        <Grid2 size={{ xs: 12 }}>
          <Paper variant="outlined" sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6">Semantic Colors</Typography>
              <Tooltip
                title="Automatically improves contrast, harmonizes tones, and adjusts accessibility values while preserving the palette's identity."
                arrow
                placement="top"
              >
                <Button
                  variant="outlined"
                  startIcon={<AutoAwesome />}
                  onClick={handleEnhancePalette}
                >
                  Enhance Palette
                </Button>
              </Tooltip>
            </Box>
            <Grid2 container spacing={2}>
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                <ColorPicker
                  label="Success"
                  value={config.palette.success}
                  onChange={(value) => handleColorChange('success', value)}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                <ColorPicker
                  label="Warning"
                  value={config.palette.warning}
                  onChange={(value) => handleColorChange('warning', value)}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                <ColorPicker
                  label="Error"
                  value={config.palette.error}
                  onChange={(value) => handleColorChange('error', value)}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                <ColorPicker
                  label="Info"
                  value={config.palette.info}
                  onChange={(value) => handleColorChange('info', value)}
                />
              </Grid2>
            </Grid2>
          </Paper>
        </Grid2>

        {/* Background & Text Colors */}
        <Grid2 size={{ xs: 12 }}>
          <Paper variant="outlined" sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Background & Text
            </Typography>
            <Grid2 container spacing={2}>
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                <ColorPicker
                  label="Background"
                  value={config.palette.background}
                  onChange={(value) => handleColorChange('background', value)}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                <ColorPicker
                  label="Surface"
                  value={config.palette.surface}
                  onChange={(value) => handleColorChange('surface', value)}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                <ColorPicker
                  label="Text Primary"
                  value={config.palette.textPrimary}
                  onChange={(value) => handleColorChange('textPrimary', value)}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                <ColorPicker
                  label="Text Secondary"
                  value={config.palette.textSecondary}
                  onChange={(value) => handleColorChange('textSecondary', value)}
                />
              </Grid2>
            </Grid2>
          </Paper>
        </Grid2>

      </Grid2>
    </Box>
  )
}
