'use client'

import { useState, useMemo } from 'react'
import {
  Box,
  Typography,
  Paper,
  Button,
  TextField,
  Card,
  CardContent,
  CardActions,
  Chip,
  Alert,
  Avatar,
  IconButton,
  Checkbox,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ThemeProvider,
  createTheme,
} from '@mui/material'
import Grid2 from '@mui/material/Grid2'
import {
  Favorite,
  Share,
  MoreVert,
  CheckCircle,
  Info,
  Warning,
  Error as ErrorIcon,
  Compare,
  Visibility,
} from '@mui/icons-material'
import { useDesignSystem } from '@/context/DesignSystemContext'
import { useRouter } from 'next/navigation'

type ColorBlindMode = 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia' | 'monochromacy'

export default function PreviewSection() {
  const { config } = useDesignSystem()
  const router = useRouter()
  const [colorBlindMode, setColorBlindMode] = useState<ColorBlindMode>('none')

  // Create a custom MUI theme based on the user's design system configuration
  const previewTheme = useMemo(() => {
    return createTheme({
      palette: {
        primary: {
          main: config.palette.primary,
          dark: config.palette.primaryDark,
          light: config.palette.primaryLight,
        },
        secondary: {
          main: config.palette.secondary,
          dark: config.palette.secondaryDark,
          light: config.palette.secondaryLight,
        },
        success: {
          main: config.palette.success,
        },
        warning: {
          main: config.palette.warning,
        },
        error: {
          main: config.palette.error,
        },
        info: {
          main: config.palette.info,
        },
        background: {
          default: config.palette.background,
          paper: config.palette.surface,
        },
        text: {
          primary: config.palette.textPrimary,
          secondary: config.palette.textSecondary,
        },
      },
      typography: {
        fontFamily: config.typography.bodyFont,
        fontSize: config.typography.baseFontSize,
        h1: {
          fontFamily: config.typography.headingFont,
          fontSize: `${(config.typography.baseFontSize * Math.pow(config.typography.scale, 4)).toFixed(1)}px`,
          fontWeight: 700,
        },
        h2: {
          fontFamily: config.typography.headingFont,
          fontSize: `${(config.typography.baseFontSize * Math.pow(config.typography.scale, 3)).toFixed(1)}px`,
          fontWeight: 600,
        },
        h3: {
          fontFamily: config.typography.headingFont,
          fontSize: `${(config.typography.baseFontSize * Math.pow(config.typography.scale, 2)).toFixed(1)}px`,
          fontWeight: 600,
        },
        h4: {
          fontFamily: config.typography.headingFont,
          fontSize: `${(config.typography.baseFontSize * Math.pow(config.typography.scale, 1.5)).toFixed(1)}px`,
          fontWeight: 600,
        },
        h5: {
          fontFamily: config.typography.headingFont,
          fontSize: `${(config.typography.baseFontSize * Math.pow(config.typography.scale, 1)).toFixed(1)}px`,
          fontWeight: 600,
        },
        h6: {
          fontFamily: config.typography.headingFont,
          fontSize: `${(config.typography.baseFontSize * Math.pow(config.typography.scale, 0.5)).toFixed(1)}px`,
          fontWeight: 600,
        },
        body1: {
          fontFamily: config.typography.bodyFont,
          fontSize: `${config.typography.baseFontSize}px`,
        },
        body2: {
          fontFamily: config.typography.bodyFont,
          fontSize: `${config.typography.baseFontSize}px`,
        },
        button: {
          fontFamily: config.typography.bodyFont,
          fontSize: `${config.typography.baseFontSize}px`,
        },
        caption: {
          fontFamily: config.typography.bodyFont,
          fontSize: `${(config.typography.baseFontSize * 0.875).toFixed(1)}px`,
        },
      },
      spacing: config.spacing.baseUnit,
      shape: {
        borderRadius: config.radius.medium,
      },
      components: {
        MuiTextField: {
          styleOverrides: {
            root: {
              '& input': {
                fontFamily: config.typography.bodyFont,
              },
              '& textarea': {
                fontFamily: config.typography.bodyFont,
              },
              '& label': {
                fontFamily: config.typography.bodyFont,
              },
              '& input::placeholder': {
                fontFamily: config.typography.bodyFont,
              },
              '& textarea::placeholder': {
                fontFamily: config.typography.bodyFont,
              },
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              fontFamily: config.typography.bodyFont,
              textTransform: 'none',
            },
          },
        },
        MuiChip: {
          styleOverrides: {
            root: {
              fontFamily: config.typography.bodyFont,
            },
          },
        },
        MuiAlert: {
          styleOverrides: {
            root: {
              fontFamily: config.typography.bodyFont,
            },
          },
        },
        MuiFormControlLabel: {
          styleOverrides: {
            label: {
              fontFamily: config.typography.bodyFont,
            },
          },
        },
        MuiInputLabel: {
          styleOverrides: {
            root: {
              fontFamily: config.typography.bodyFont,
            },
          },
        },
      },
    })
  }, [config])

  const previewStyle = {
    fontFamily: config.typography.bodyFont,
    '--primary': config.palette.primary,
    '--secondary': config.palette.secondary,
    '--background': config.palette.background,
    '--surface': config.palette.surface,
    '--spacing': `${config.spacing.baseUnit}px`,
    '--radius-sm': `${config.radius.small}px`,
    '--radius-md': `${config.radius.medium}px`,
    '--radius-lg': `${config.radius.large}px`,
  } as React.CSSProperties

  const handleCompareWithMidnightPurple = () => {
    // Encode current config as JSON
    const customTheme = encodeURIComponent(JSON.stringify(config))
    // Navigate to compare page with custom theme vs midnight-purple
    router.push(`/compare?themeA=custom&customTheme=${customTheme}&themeB=midnight-purple`)
  }

  const getColorBlindFilter = (): string => {
    switch (colorBlindMode) {
      case 'protanopia':
      case 'deuteranopia':
        // Red-Green color blindness simulation
        return 'url(#protanopia-filter)'
      case 'tritanopia':
        // Blue-Yellow color blindness simulation
        return 'url(#tritanopia-filter)'
      case 'monochromacy':
        // Complete color blindness
        return 'grayscale(100%)'
      default:
        return 'none'
    }
  }

  return (
    <Box sx={previewStyle}>
      {/* Section Header and Controls - Use Default Typography */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3, gap: 2, flexWrap: 'wrap' }}>
        <Box>
          <Typography
            variant="h5"
            gutterBottom
            fontWeight={600}
            color="text.primary"
          >
            Component Preview
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            See your design system in action with live component examples
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', flexShrink: 0 }}>
          <FormControl size="small" sx={{ minWidth: 200 }}>
            <InputLabel>Color Blindness Simulator</InputLabel>
            <Select
              value={colorBlindMode}
              label="Color Blindness Simulator"
              onChange={(e) => setColorBlindMode(e.target.value as ColorBlindMode)}
              startAdornment={<Visibility sx={{ mr: 1, ml: 0.5, color: 'action.active' }} />}
            >
              <MenuItem value="none">None</MenuItem>
              <MenuItem value="protanopia">Protanopia (Red-Green)</MenuItem>
              <MenuItem value="deuteranopia">Deuteranopia (Red-Green)</MenuItem>
              <MenuItem value="tritanopia">Tritanopia (Blue-Yellow)</MenuItem>
              <MenuItem value="monochromacy">Monochromacy (No Color)</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="outlined"
            startIcon={<Compare />}
            onClick={handleCompareWithMidnightPurple}
            sx={{ flexShrink: 0 }}
          >
            Compare With Midnight Purple
          </Button>
        </Box>
      </Box>

      {/* Preview Content - Apply Custom Typography Theme */}
      <ThemeProvider theme={previewTheme}>
        <Box sx={{ filter: getColorBlindFilter(), transition: 'filter 0.3s ease' }}>
          {/* SVG filters for color blindness simulation */}
          <svg style={{ position: 'absolute', width: 0, height: 0 }}>
            <defs>
              {/* Protanopia/Deuteranopia (Red-Green) filter */}
              <filter id="protanopia-filter">
                <feColorMatrix
                  type="matrix"
                  values="0.567, 0.433, 0,     0, 0
                          0.558, 0.442, 0,     0, 0
                          0,     0.242, 0.758, 0, 0
                          0,     0,     0,     1, 0"
                />
              </filter>
              {/* Tritanopia (Blue-Yellow) filter */}
              <filter id="tritanopia-filter">
                <feColorMatrix
                  type="matrix"
                  values="0.95, 0.05,  0,     0, 0
                          0,    0.433, 0.567, 0, 0
                          0,    0.475, 0.525, 0, 0
                          0,    0,     0,     1, 0"
                />
              </filter>
            </defs>
          </svg>
        <Grid2 container spacing={3}>
          {/* Hero Section */}
          <Grid2 size={{ xs: 12 }}>
            <Paper
            variant="outlined"
            sx={{
              p: 4,
              bgcolor: config.palette.surface,
              borderRadius: `${config.radius.medium}px`,
            }}
          >
            <Typography
              variant="h3"
              gutterBottom
              fontWeight={700}
              sx={{
                fontFamily: config.typography.headingFont,
                color: config.palette.textPrimary,
              }}
            >
              Build Better Experiences
            </Typography>
            <Typography
              variant="h6"
              paragraph
              sx={{
                fontFamily: config.typography.bodyFont,
                color: config.palette.textSecondary,
                mb: 3,
              }}
            >
              Create beautiful, accessible interfaces with this design system
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: config.palette.primary,
                  color: config.palette.surface,
                  borderRadius: `${config.radius.medium}px`,
                  transition: `all ${config.motion.duration.normal}ms ${config.motion.easing}`,
                  '&:hover': {
                    bgcolor: config.palette.primaryDark,
                  },
                }}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderRadius: `${config.radius.medium}px`,
                  borderColor: config.palette.primary,
                  color: config.palette.primary,
                }}
              >
                Learn More
              </Button>
            </Box>
          </Paper>
        </Grid2>

        {/* Feature Cards */}
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Card
            sx={{
              height: '100%',
              bgcolor: config.palette.surface,
              boxShadow: config.shadows.md,
              borderRadius: `${config.radius.medium}px`,
            }}
          >
            <CardContent>
              <Avatar
                sx={{
                  bgcolor: config.palette.primary,
                  mb: 2,
                }}
              >
                <CheckCircle />
              </Avatar>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontFamily: config.typography.headingFont, color: config.palette.textPrimary }}
              >
                Accessible
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: config.typography.bodyFont, color: config.palette.textSecondary }}>
                Built with WCAG compliance in mind, ensuring your interfaces work for everyone.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                sx={{
                  color: config.palette.primary,
                }}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 4 }}>
          <Card
            sx={{
              height: '100%',
              bgcolor: config.palette.surface,
              boxShadow: config.shadows.md,
              borderRadius: `${config.radius.medium}px`,
            }}
          >
            <CardContent>
              <Avatar
                sx={{
                  bgcolor: config.palette.secondary,
                  mb: 2,
                }}
              >
                <Info />
              </Avatar>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontFamily: config.typography.headingFont, color: config.palette.textPrimary }}
              >
                Customizable
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: config.typography.bodyFont, color: config.palette.textSecondary }}>
                Tailor every aspect of your design system to match your brand perfectly.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                sx={{
                  color: config.palette.primary,
                }}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 4 }}>
          <Card
            sx={{
              height: '100%',
              bgcolor: config.palette.surface,
              boxShadow: config.shadows.md,
              borderRadius: `${config.radius.medium}px`,
            }}
          >
            <CardContent>
              <Avatar
                sx={{
                  bgcolor: config.palette.success,
                  mb: 2,
                }}
              >
                <CheckCircle />
              </Avatar>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontFamily: config.typography.headingFont, color: config.palette.textPrimary }}
              >
                Exportable
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: config.typography.bodyFont, color: config.palette.textSecondary }}>
                Export your design tokens for MUI, Tailwind, CSS variables, and more.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                sx={{
                  color: config.palette.primary,
                }}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid2>

        {/* Form Elements */}
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Paper variant="outlined" sx={{ p: 3, bgcolor: config.palette.surface, borderRadius: `${config.radius.medium}px` }}>
            <Typography variant="h6" gutterBottom sx={{ fontFamily: config.typography.headingFont, color: config.palette.textPrimary }}>
              Contact Form
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Name"
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: `${config.radius.small}px`,
                  },
                }}
              />
              <TextField
                label="Email"
                type="email"
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: `${config.radius.small}px`,
                  },
                }}
              />
              <TextField
                label="Message"
                multiline
                rows={3}
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: `${config.radius.small}px`,
                  },
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="I agree to the terms and conditions"
                sx={{ '& .MuiFormControlLabel-label': { color: config.palette.textPrimary } }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: config.palette.primary,
                  color: config.palette.surface,
                  borderRadius: `${config.radius.medium}px`,
                }}
              >
                Submit
              </Button>
            </Box>
          </Paper>
        </Grid2>

        {/* Alerts & Chips */}
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Paper variant="outlined" sx={{ p: 3, bgcolor: config.palette.surface, borderRadius: `${config.radius.medium}px` }}>
            <Typography variant="h6" gutterBottom sx={{ fontFamily: config.typography.headingFont, color: config.palette.textPrimary }}>
              Alerts & Status
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Alert
                severity="success"
                icon={<CheckCircle />}
                sx={{ borderRadius: `${config.radius.small}px` }}
              >
                Your changes have been saved successfully
              </Alert>
              <Alert
                severity="info"
                icon={<Info />}
                sx={{ borderRadius: `${config.radius.small}px` }}
              >
                This is an informational message
              </Alert>
              <Alert
                severity="warning"
                icon={<Warning />}
                sx={{ borderRadius: `${config.radius.small}px` }}
              >
                Please review your input
              </Alert>
              <Alert
                severity="error"
                icon={<ErrorIcon />}
                sx={{ borderRadius: `${config.radius.small}px` }}
              >
                An error occurred while processing
              </Alert>

              <Box sx={{ mt: 2 }}>
                <Typography variant="caption" gutterBottom display="block" sx={{ color: config.palette.textSecondary }}>
                  Status Tags
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1 }}>
                  <Chip
                    label="Active"
                    color="success"
                    size="small"
                    sx={{ borderRadius: `${config.radius.small}px` }}
                  />
                  <Chip
                    label="Pending"
                    color="warning"
                    size="small"
                    sx={{ borderRadius: `${config.radius.small}px` }}
                  />
                  <Chip
                    label="Draft"
                    color="default"
                    size="small"
                    sx={{ borderRadius: `${config.radius.small}px` }}
                  />
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid2>
        </Grid2>
      </Box>
    </ThemeProvider>
    </Box>
  )
}
