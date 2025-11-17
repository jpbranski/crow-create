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
} from '@mui/material'
import { useDesignSystem } from '@/context/DesignSystemContext'

export default function LayoutSection() {
  const { config, updateSpacing, updateRadius, updateShadows, updateMotion } = useDesignSystem()

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

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    height: 120,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: config.shadows.sm,
                  }}
                >
                  <Typography variant="caption">Small</Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    height: 120,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: config.shadows.md,
                  }}
                >
                  <Typography variant="caption">Medium</Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    height: 120,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: config.shadows.lg,
                  }}
                >
                  <Typography variant="caption">Large</Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    height: 120,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: config.shadows.xl,
                  }}
                >
                  <Typography variant="caption">Extra Large</Typography>
                </Card>
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
