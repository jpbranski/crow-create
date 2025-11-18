'use client'

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
  Grid,
} from '@mui/material'
import {
  Favorite,
  Share,
  MoreVert,
  CheckCircle,
  Info,
  Warning,
  Error as ErrorIcon,
  Compare,
} from '@mui/icons-material'
import { useDesignSystem } from '@/context/DesignSystemContext'
import { useRouter } from 'next/navigation'

export default function PreviewSection() {
  const { config } = useDesignSystem()
  const router = useRouter()

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

  return (
    <Box sx={previewStyle}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
        <Box>
          <Typography variant="h5" gutterBottom fontWeight={600}>
            Component Preview
          </Typography>
          <Typography variant="body2" color="text.secondary">
            See your design system in action with live component examples
          </Typography>
        </Box>
        <Button
          variant="outlined"
          startIcon={<Compare />}
          onClick={handleCompareWithMidnightPurple}
          sx={{ flexShrink: 0, ml: 2 }}
        >
          Compare With Midnight Purple
        </Button>
      </Box>

      <Grid container spacing={3}>
        {/* Hero Section */}
        <Grid item xs={12}>
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
        </Grid>

        {/* Feature Cards */}
        <Grid item xs={12} md={4}>
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
                sx={{ fontFamily: config.typography.headingFont }}
              >
                Accessible
              </Typography>
              <Typography variant="body2" color="text.secondary">
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
        </Grid>

        <Grid item xs={12} md={4}>
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
                sx={{ fontFamily: config.typography.headingFont }}
              >
                Customizable
              </Typography>
              <Typography variant="body2" color="text.secondary">
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
        </Grid>

        <Grid item xs={12} md={4}>
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
                sx={{ fontFamily: config.typography.headingFont }}
              >
                Exportable
              </Typography>
              <Typography variant="body2" color="text.secondary">
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
        </Grid>

        {/* Form Elements */}
        <Grid item xs={12} md={6}>
          <Paper variant="outlined" sx={{ p: 3, bgcolor: config.palette.surface, borderRadius: `${config.radius.medium}px` }}>
            <Typography variant="h6" gutterBottom sx={{ fontFamily: config.typography.headingFont }}>
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
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: config.palette.primary,
                  borderRadius: `${config.radius.medium}px`,
                }}
              >
                Submit
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Alerts & Chips */}
        <Grid item xs={12} md={6}>
          <Paper variant="outlined" sx={{ p: 3, bgcolor: config.palette.surface, borderRadius: `${config.radius.medium}px` }}>
            <Typography variant="h6" gutterBottom sx={{ fontFamily: config.typography.headingFont }}>
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
                <Typography variant="caption" color="text.secondary" gutterBottom display="block">
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
        </Grid>
      </Grid>
    </Box>
  )
}
