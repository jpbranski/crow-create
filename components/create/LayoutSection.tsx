'use client'

import {
  Box,
  Grid,
  Typography,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Card,
  CardContent,
  Button,
  Chip,
  Divider,
} from '@mui/material'
import { useDesignSystem } from '@/context/DesignSystemContext'
import { generateShadowWithColor } from '@/lib/colorUtils'
import ColorPicker from './ColorPicker'
import CodeBlock from '../CodeBlock'

export default function LayoutSection() {
  const { config, updateSpacing, updateRadius, updateShadows, updateMotion } = useDesignSystem()

  const applyShadowOffset = (shadow: string, offsetX: number, offsetY: number): string => {
    // Parse and apply offsets to shadow values
    return shadow.split(',').map(s => {
      const trimmed = s.trim()
      const parts = trimmed.split(' ')
      if (parts.length >= 4) {
        const currentX = parseFloat(parts[0])
        const currentY = parseFloat(parts[1])
        const newX = currentX + offsetX
        const newY = currentY + offsetY
        return `${newX}px ${newY}px ${parts.slice(2).join(' ')}`
      }
      return s
    }).join(', ')
  }

  const handleShadowColorChange = (color: string) => {
    // Generate new shadows with the new color
    const baseShadows = {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    }

    updateShadows({
      color,
      sm: applyShadowOffset(generateShadowWithColor(baseShadows.sm, color), config.shadows.offsetX, config.shadows.offsetY),
      md: applyShadowOffset(generateShadowWithColor(baseShadows.md, color), config.shadows.offsetX, config.shadows.offsetY),
      lg: applyShadowOffset(generateShadowWithColor(baseShadows.lg, color), config.shadows.offsetX, config.shadows.offsetY),
      xl: applyShadowOffset(generateShadowWithColor(baseShadows.xl, color), config.shadows.offsetX, config.shadows.offsetY),
    })
  }

  const handleOffsetChange = (offsetX: number, offsetY: number) => {
    const baseShadows = {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    }

    updateShadows({
      offsetX,
      offsetY,
      sm: applyShadowOffset(generateShadowWithColor(baseShadows.sm, config.shadows.color), offsetX, offsetY),
      md: applyShadowOffset(generateShadowWithColor(baseShadows.md, config.shadows.color), offsetX, offsetY),
      lg: applyShadowOffset(generateShadowWithColor(baseShadows.lg, config.shadows.color), offsetX, offsetY),
      xl: applyShadowOffset(generateShadowWithColor(baseShadows.xl, config.shadows.color), offsetX, offsetY),
    })
  }

  const radiusPresets = {
    sharp: { small: 0, medium: 0, large: 0 },
    subtle: { small: 4, medium: 8, large: 12 },
    rounded: { small: 8, medium: 16, large: 24 },
    pill: { small: 12, medium: 24, large: 32 },
  }

  const handleRadiusStyleChange = (style: 'sharp' | 'subtle' | 'rounded' | 'pill') => {
    updateRadius({ style, ...radiusPresets[style] })
  }

  const spacingScale = [
    config.spacing.baseUnit * 0.5,
    config.spacing.baseUnit,
    config.spacing.baseUnit * 1.5,
    config.spacing.baseUnit * 2,
    config.spacing.baseUnit * 3,
    config.spacing.baseUnit * 4,
    config.spacing.baseUnit * 6,
    config.spacing.baseUnit * 8,
  ]

  return (
    <Box>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        Layout, Spacing, Radius, Shadows & Motion
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Configure spacing scales, border radius, shadows, and motion for your design system
      </Typography>

      <Grid container spacing={3}>
        {/* Spacing */}
        <Grid item xs={12} md={6}>
          <Paper variant="outlined" sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Spacing Scale
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography variant="caption" color="text.secondary" gutterBottom display="block">
                Base Unit: {config.spacing.baseUnit}px
              </Typography>
              <Slider
                value={config.spacing.baseUnit}
                onChange={(_e, value) => updateSpacing({ baseUnit: value as number })}
                min={4}
                max={16}
                step={2}
                marks
                valueLabelDisplay="auto"
              />
            </Box>

            <Box>
              <Typography variant="caption" color="text.secondary" gutterBottom display="block">
                Generated Scale
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1 }}>
                {spacingScale.map((value, index) => (
                  <Chip key={index} label={`${value}px`} size="small" />
                ))}
              </Box>
            </Box>

            <Box sx={{ mt: 3 }}>
              <Typography variant="caption" color="text.secondary" gutterBottom display="block">
                Visual Example
              </Typography>
              <Box sx={{ display: 'flex', gap: `${config.spacing.baseUnit}px`, flexWrap: 'wrap', mt: 1 }}>
                {[1, 2, 3].map((i) => (
                  <Box
                    key={i}
                    sx={{
                      width: 40,
                      height: 40,
                      bgcolor: 'primary.main',
                      borderRadius: 1,
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Border Radius */}
        <Grid item xs={12} md={6}>
          <Paper variant="outlined" sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Border Radius
            </Typography>

            <Box sx={{ mb: 2 }}>
              <FormControl fullWidth size="small">
                <InputLabel>Radius Style</InputLabel>
                <Select
                  value={config.radius.style}
                  label="Radius Style"
                  onChange={(e) => handleRadiusStyleChange(e.target.value as any)}
                >
                  <MenuItem value="sharp">Sharp (0px)</MenuItem>
                  <MenuItem value="subtle">Subtle (4-12px)</MenuItem>
                  <MenuItem value="rounded">Rounded (8-24px)</MenuItem>
                  <MenuItem value="pill">Pill (12-32px)</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="caption" color="text.secondary" gutterBottom display="block">
                Small: {config.radius.small}px | Medium: {config.radius.medium}px | Large:{' '}
                {config.radius.large}px
              </Typography>
            </Box>

            <Box>
              <Typography variant="caption" color="text.secondary" gutterBottom display="block">
                Visual Example
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    bgcolor: 'primary.main',
                    borderRadius: `${config.radius.small}px`,
                  }}
                />
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    bgcolor: 'primary.main',
                    borderRadius: `${config.radius.medium}px`,
                  }}
                />
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    bgcolor: 'primary.main',
                    borderRadius: `${config.radius.large}px`,
                  }}
                />
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Shadows */}
        <Grid item xs={12}>
          <Paper variant="outlined" sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Shadow System
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Elevation levels for depth and hierarchy
            </Typography>

            <Grid container spacing={3} sx={{ mb: 3 }}>
              <Grid item xs={12} md={4}>
                <ColorPicker
                  label="Shadow Color"
                  value={config.shadows.color}
                  onChange={handleShadowColorChange}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="caption" color="text.secondary" gutterBottom display="block">
                  Offset X: {config.shadows.offsetX}px
                </Typography>
                <Slider
                  value={config.shadows.offsetX}
                  onChange={(_e, value) => handleOffsetChange(value as number, config.shadows.offsetY)}
                  min={-20}
                  max={20}
                  step={1}
                  marks={[
                    { value: -20, label: '-20' },
                    { value: 0, label: '0' },
                    { value: 20, label: '20' },
                  ]}
                  valueLabelDisplay="auto"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="caption" color="text.secondary" gutterBottom display="block">
                  Offset Y: {config.shadows.offsetY}px
                </Typography>
                <Slider
                  value={config.shadows.offsetY}
                  onChange={(_e, value) => handleOffsetChange(config.shadows.offsetX, value as number)}
                  min={-20}
                  max={20}
                  step={1}
                  marks={[
                    { value: -20, label: '-20' },
                    { value: 0, label: '0' },
                    { value: 20, label: '20' },
                  ]}
                  valueLabelDisplay="auto"
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <Box>
                  <Card
                    sx={{
                      height: 120,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: config.shadows.sm,
                      mb: 1,
                    }}
                  >
                    <Typography variant="caption" fontWeight={600}>Small</Typography>
                  </Card>
                  <Box sx={{ mt: 1 }}>
                    <Typography variant="caption" color="text.secondary" gutterBottom display="block" sx={{ mb: 0.5 }}>
                      CSS:
                    </Typography>
                    <Box
                      sx={{
                        p: 1,
                        bgcolor: '#0D1117',
                        borderRadius: 1,
                        fontFamily: 'var(--font-jetbrains-mono), monospace',
                        fontSize: '0.7rem',
                        color: '#F3F4F6',
                        overflowX: 'auto',
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-all',
                      }}
                    >
                      box-shadow: {config.shadows.sm};
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box>
                  <Card
                    sx={{
                      height: 120,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: config.shadows.md,
                      mb: 1,
                    }}
                  >
                    <Typography variant="caption" fontWeight={600}>Medium</Typography>
                  </Card>
                  <Box sx={{ mt: 1 }}>
                    <Typography variant="caption" color="text.secondary" gutterBottom display="block" sx={{ mb: 0.5 }}>
                      CSS:
                    </Typography>
                    <Box
                      sx={{
                        p: 1,
                        bgcolor: '#0D1117',
                        borderRadius: 1,
                        fontFamily: 'var(--font-jetbrains-mono), monospace',
                        fontSize: '0.7rem',
                        color: '#F3F4F6',
                        overflowX: 'auto',
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-all',
                      }}
                    >
                      box-shadow: {config.shadows.md};
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box>
                  <Card
                    sx={{
                      height: 120,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: config.shadows.lg,
                      mb: 1,
                    }}
                  >
                    <Typography variant="caption" fontWeight={600}>Large</Typography>
                  </Card>
                  <Box sx={{ mt: 1 }}>
                    <Typography variant="caption" color="text.secondary" gutterBottom display="block" sx={{ mb: 0.5 }}>
                      CSS:
                    </Typography>
                    <Box
                      sx={{
                        p: 1,
                        bgcolor: '#0D1117',
                        borderRadius: 1,
                        fontFamily: 'var(--font-jetbrains-mono), monospace',
                        fontSize: '0.7rem',
                        color: '#F3F4F6',
                        overflowX: 'auto',
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-all',
                      }}
                    >
                      box-shadow: {config.shadows.lg};
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box>
                  <Card
                    sx={{
                      height: 120,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: config.shadows.xl,
                      mb: 1,
                    }}
                  >
                    <Typography variant="caption" fontWeight={600}>Extra Large</Typography>
                  </Card>
                  <Box sx={{ mt: 1 }}>
                    <Typography variant="caption" color="text.secondary" gutterBottom display="block" sx={{ mb: 0.5 }}>
                      CSS:
                    </Typography>
                    <Box
                      sx={{
                        p: 1,
                        bgcolor: '#0D1117',
                        borderRadius: 1,
                        fontFamily: 'var(--font-jetbrains-mono), monospace',
                        fontSize: '0.7rem',
                        color: '#F3F4F6',
                        overflowX: 'auto',
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-all',
                      }}
                    >
                      box-shadow: {config.shadows.xl};
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Motion */}
        <Grid item xs={12}>
          <Paper variant="outlined" sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Motion System
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Typography variant="caption" color="text.secondary" gutterBottom display="block">
                  Fast Duration: {config.motion.duration.fast}ms
                </Typography>
                <Slider
                  value={config.motion.duration.fast}
                  onChange={(_e, value) =>
                    updateMotion({
                      duration: { ...config.motion.duration, fast: value as number },
                    })
                  }
                  min={100}
                  max={300}
                  step={50}
                  valueLabelDisplay="auto"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="caption" color="text.secondary" gutterBottom display="block">
                  Normal Duration: {config.motion.duration.normal}ms
                </Typography>
                <Slider
                  value={config.motion.duration.normal}
                  onChange={(_e, value) =>
                    updateMotion({
                      duration: { ...config.motion.duration, normal: value as number },
                    })
                  }
                  min={200}
                  max={500}
                  step={50}
                  valueLabelDisplay="auto"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="caption" color="text.secondary" gutterBottom display="block">
                  Slow Duration: {config.motion.duration.slow}ms
                </Typography>
                <Slider
                  value={config.motion.duration.slow}
                  onChange={(_e, value) =>
                    updateMotion({
                      duration: { ...config.motion.duration, slow: value as number },
                    })
                  }
                  min={400}
                  max={800}
                  step={50}
                  valueLabelDisplay="auto"
                />
              </Grid>
            </Grid>

            <Box sx={{ mt: 2 }}>
              <Typography variant="caption" color="text.secondary" gutterBottom display="block">
                Easing: {config.motion.easing}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}
