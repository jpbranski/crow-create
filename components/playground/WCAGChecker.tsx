'use client'

import { useState } from 'react'
import {
  Box,
  Typography,
  Paper,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
} from '@mui/material'
import { CheckCircle, Cancel, Warning } from '@mui/icons-material'
import { useDesignSystem } from '@/context/DesignSystemContext'
import { getContrastRatio, getWCAGLevel } from '@/lib/colorUtils'

export default function WCAGChecker() {
  const { config } = useDesignSystem()
  const [foreground, setForeground] = useState(config.palette.textPrimary)
  const [background, setBackground] = useState(config.palette.background)

  const ratio = getContrastRatio(foreground, background)
  const normalLevel = getWCAGLevel(ratio, false)
  const largeLevel = getWCAGLevel(ratio, true)

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'AAA':
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
        return 'success'
      case 'AA':
        return 'warning'
      default:
        return 'error'
    }
  }

  const colorOptions = [
    { label: 'Primary', value: config.palette.primary },
    { label: 'Secondary', value: config.palette.secondary },
    { label: 'Background', value: config.palette.background },
    { label: 'Surface', value: config.palette.surface },
    { label: 'Text Primary', value: config.palette.textPrimary },
    { label: 'Text Secondary', value: config.palette.textSecondary },
    { label: 'Success', value: config.palette.success },
    { label: 'Warning', value: config.palette.warning },
    { label: 'Error', value: config.palette.error },
    { label: 'Info', value: config.palette.info },
  ]

  return (
    <Paper variant="outlined" sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        WCAG Contrast Checker
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Check contrast ratios between colors to ensure accessibility compliance
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Foreground (Text)</InputLabel>
            <Select
              value={foreground}
              label="Foreground (Text)"
              onChange={(e) => setForeground(e.target.value)}
            >
              {colorOptions.map((option) => (
                <MenuItem key={option.label} value={option.value}>
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
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Background</InputLabel>
            <Select
              value={background}
              label="Background"
              onChange={(e) => setBackground(e.target.value)}
            >
              {colorOptions.map((option) => (
                <MenuItem key={option.label} value={option.value}>
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
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{
              p: 4,
              bgcolor: background,
              color: foreground,
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Typography variant="h5" sx={{ mb: 2 }}>
              Sample Heading Text
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              This is sample body text to preview the contrast ratio between the selected
              foreground and background colors.
            </Typography>
            <Typography variant="h6">
              Large text sample for testing
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Contrast Ratio
              </Typography>
              <Typography variant="h4" fontWeight={600}>
                {ratio.toFixed(2)}:1
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Box>
                <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                  Normal Text (16px)
                </Typography>
                <Chip
                  icon={getLevelIcon(normalLevel)}
                  label={normalLevel}
                  color={getLevelColor(normalLevel)}
                  size="small"
                />
              </Box>
              <Box>
                <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                  Large Text (24px)
                </Typography>
                <Chip
                  icon={getLevelIcon(largeLevel)}
                  label={largeLevel}
                  color={getLevelColor(largeLevel)}
                  size="small"
                />
              </Box>
            </Box>

            <Box>
              <Typography variant="caption" color="text.secondary">
                <strong>WCAG Requirements:</strong> Normal text needs 4.5:1 for AA, 7:1 for AAA.
                Large text needs 3:1 for AA, 4.5:1 for AAA.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}
