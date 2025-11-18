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
  Chip,
} from '@mui/material'
import { AutoAwesome } from '@mui/icons-material'
import { useDesignSystem } from '@/context/DesignSystemContext'

const AVAILABLE_FONTS = [
  'Inter',
  'Roboto',
  'Open Sans',
  'Lato',
  'Montserrat',
  'Playfair Display',
  'Merriweather',
  'Source Serif Pro',
  'Sora',
  'Space Grotesk',
]

const FONT_PAIRINGS: Record<string, string[]> = {
  Inter: ['Playfair Display', 'Merriweather', 'Source Serif Pro'],
  Roboto: ['Playfair Display', 'Merriweather', 'Lato'],
  'Open Sans': ['Playfair Display', 'Merriweather', 'Montserrat'],
  Lato: ['Playfair Display', 'Merriweather', 'Roboto'],
  Montserrat: ['Merriweather', 'Source Serif Pro', 'Open Sans'],
  'Playfair Display': ['Inter', 'Roboto', 'Lato'],
  Merriweather: ['Inter', 'Roboto', 'Montserrat'],
  'Source Serif Pro': ['Inter', 'Montserrat', 'Space Grotesk'],
  Sora: ['Playfair Display', 'Merriweather', 'Inter'],
  'Space Grotesk': ['Source Serif Pro', 'Merriweather', 'Inter'],
}

export default function TypographySection() {
  const { config, updateTypography } = useDesignSystem()

  const suggestedHeadingFonts = FONT_PAIRINGS[config.typography.bodyFont] || []

  const getTypographyScale = () => {
    const scale = config.typography.scale
    const base = config.typography.baseFontSize

    return {
      h1: (base * Math.pow(scale, 4)).toFixed(1),
      h2: (base * Math.pow(scale, 3)).toFixed(1),
      h3: (base * Math.pow(scale, 2)).toFixed(1),
      h4: (base * Math.pow(scale, 1.5)).toFixed(1),
      h5: (base * Math.pow(scale, 1)).toFixed(1),
      h6: (base * Math.pow(scale, 0.5)).toFixed(1),
      body: base.toFixed(1),
      caption: (base * 0.875).toFixed(1),
    }
  }

  const scale = getTypographyScale()

  return (
    <Box>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        Typography & Font Pairings
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Configure your typography system with intelligent font pairing suggestions
      </Typography>

      <Grid container spacing={3}>
        {/* Font Selection */}
        <Grid item xs={12} md={6}>
          <Paper variant="outlined" sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
              Font Selection
            </Typography>

            <Box sx={{ mb: 3 }}>
              <FormControl fullWidth>
                <InputLabel>Heading Font</InputLabel>
                <Select
                  value={config.typography.headingFont}
                  label="Heading Font"
                  onChange={(e) => updateTypography({ headingFont: e.target.value })}
                >
                  {AVAILABLE_FONTS.map((font) => (
                    <MenuItem key={font} value={font} style={{ fontFamily: font }}>
                      {font}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ mb: 3 }}>
              <FormControl fullWidth>
                <InputLabel>Body Font</InputLabel>
                <Select
                  value={config.typography.bodyFont}
                  label="Body Font"
                  onChange={(e) => updateTypography({ bodyFont: e.target.value })}
                >
                  {AVAILABLE_FONTS.map((font) => (
                    <MenuItem key={font} value={font} style={{ fontFamily: font }}>
                      {font}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            {suggestedHeadingFonts.length > 0 && (
              <Box>
                <Typography variant="caption" color="text.secondary" gutterBottom display="block" sx={{ mb: 1 }}>
                  <AutoAwesome sx={{ fontSize: 14, mr: 0.5, verticalAlign: 'middle' }} />
                  Suggested heading fonts for {config.typography.bodyFont}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {suggestedHeadingFonts.map((font) => (
                    <Chip
                      key={font}
                      label={font}
                      size="small"
                      onClick={() => updateTypography({ headingFont: font })}
                      sx={{ fontFamily: font }}
                    />
                  ))}
                </Box>
              </Box>
            )}
          </Paper>
        </Grid>

        {/* Typography Scale */}
        <Grid item xs={12} md={6}>
          <Paper variant="outlined" sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
              Typography Scale
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Typography variant="caption" color="text.secondary" gutterBottom display="block" sx={{ mb: 2 }}>
                Base Font Size: {config.typography.baseFontSize}px
              </Typography>
              <Slider
                value={config.typography.baseFontSize}
                onChange={(_e, value) => updateTypography({ baseFontSize: value as number })}
                min={12}
                max={20}
                step={1}
                marks
                valueLabelDisplay="auto"
              />
            </Box>

            <Box sx={{ pb: 2 }}>
              <Typography variant="caption" color="text.secondary" gutterBottom display="block" sx={{ mb: 2 }}>
                Scale Ratio: {config.typography.scale.toFixed(2)}
              </Typography>
              <Box sx={{ px: 2, pb: 3 }}>
                <Slider
                  value={config.typography.scale}
                  onChange={(_e, value) => updateTypography({ scale: value as number })}
                  min={1.125}
                  max={1.5}
                  step={0.025}
                  marks={[
                    { value: 1.125, label: <span style={{ fontSize: '0.65rem', whiteSpace: 'nowrap' }}>Minor 2nd</span> },
                    { value: 1.25, label: <span style={{ fontSize: '0.65rem', whiteSpace: 'nowrap' }}>Major 3rd</span> },
                    { value: 1.333, label: <span style={{ fontSize: '0.65rem', whiteSpace: 'nowrap' }}>Perfect 4th</span> },
                    { value: 1.5, label: <span style={{ fontSize: '0.65rem', whiteSpace: 'nowrap' }}>Perfect 5th</span> },
                  ]}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(v) => v.toFixed(2)}
                  sx={{
                    '& .MuiSlider-markLabel': {
                      fontSize: '0.65rem',
                      whiteSpace: 'nowrap',
                      overflow: 'visible',
                    },
                  }}
                />
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Typography Preview */}
        <Grid item xs={12}>
          <Paper variant="outlined" sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Scale Preview
            </Typography>

            <Box sx={{ '& > *': { mb: 2 } }}>
              <Box>
                <Typography
                  sx={{ fontFamily: config.typography.headingFont, fontSize: `${scale.h1}px`, fontWeight: 700 }}
                >
                  H1 Heading
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {scale.h1}px / {config.typography.headingFont}
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{ fontFamily: config.typography.headingFont, fontSize: `${scale.h2}px`, fontWeight: 600 }}
                >
                  H2 Heading
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {scale.h2}px / {config.typography.headingFont}
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{ fontFamily: config.typography.headingFont, fontSize: `${scale.h3}px`, fontWeight: 600 }}
                >
                  H3 Heading
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {scale.h3}px / {config.typography.headingFont}
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{ fontFamily: config.typography.bodyFont, fontSize: `${scale.body}px` }}
                >
                  This is body text. The quick brown fox jumps over the lazy dog.
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {scale.body}px / {config.typography.bodyFont}
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{ fontFamily: config.typography.bodyFont, fontSize: `${scale.caption}px` }}
                >
                  This is caption text for small annotations and labels.
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {scale.caption}px / {config.typography.bodyFont}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}
