'use client'

import {
  Box,
  Typography,
  Paper,
  Button,
  TextField,
  Card,
  CardContent,
  Chip,
  Alert,
} from '@mui/material'
import { CheckCircle, Info, Warning, Error as ErrorIcon } from '@mui/icons-material'
import { CuratedTheme } from '@/data/curatedThemes'

interface ThemePreviewProps {
  theme: CuratedTheme
}

export default function ThemePreview({ theme }: ThemePreviewProps) {
  return (
    <Box
      sx={{
        bgcolor: theme.palette.background,
        minHeight: '100%',
        p: 3,
      }}
    >
      {/* Hero Section */}
      <Paper
        sx={{
          p: 4,
          bgcolor: theme.palette.surface,
          borderRadius: 2,
          mb: 3,
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          fontWeight={700}
          sx={{ color: theme.palette.text }}
        >
          {theme.name}
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ color: theme.palette.textSecondary, mb: 3 }}
        >
          {theme.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: theme.palette.primary,
              color: theme.palette.surface,
              '&:hover': {
                bgcolor: theme.palette.primary,
                opacity: 0.9,
              },
            }}
          >
            Primary Button
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderColor: theme.palette.secondary,
              color: theme.palette.text,
              '&:hover': {
                borderColor: theme.palette.secondary,
                bgcolor: `${theme.palette.secondary}20`,
              },
            }}
          >
            Secondary Button
          </Button>
        </Box>
      </Paper>

      {/* Cards Section */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2, mb: 3 }}>
        <Card sx={{ bgcolor: theme.palette.surface }}>
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{ color: theme.palette.text }}>
              Feature Card
            </Typography>
            <Typography variant="body2" sx={{ color: theme.palette.textSecondary, mb: 2 }}>
              This is a sample card component demonstrating the surface color and text hierarchy.
            </Typography>
            <Chip
              label={`WCAG ${theme.wcagLevel}`}
              size="small"
              sx={{
                bgcolor: theme.palette.primary,
                color: theme.palette.surface,
              }}
            />
          </CardContent>
        </Card>

        <Card sx={{ bgcolor: theme.palette.surface }}>
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{ color: theme.palette.text }}>
              Another Card
            </Typography>
            <Typography variant="body2" sx={{ color: theme.palette.textSecondary, mb: 2 }}>
              Cards use the surface color from your theme palette for better visual hierarchy.
            </Typography>
            <Chip
              label="Accessible"
              size="small"
              sx={{
                bgcolor: theme.palette.secondary,
                color: theme.palette.surface,
              }}
            />
          </CardContent>
        </Card>
      </Box>

      {/* Form Section */}
      <Paper sx={{ p: 3, bgcolor: theme.palette.surface, mb: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ color: theme.palette.text }}>
          Form Example
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: theme.palette.textSecondary,
                },
                '&:hover fieldset': {
                  borderColor: theme.palette.primary,
                },
                '&.Mui-focused fieldset': {
                  borderColor: theme.palette.primary,
                },
              },
              '& .MuiInputLabel-root': {
                color: theme.palette.textSecondary,
              },
              '& .MuiInputBase-input': {
                color: theme.palette.text,
              },
            }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: theme.palette.textSecondary,
                },
                '&:hover fieldset': {
                  borderColor: theme.palette.primary,
                },
                '&.Mui-focused fieldset': {
                  borderColor: theme.palette.primary,
                },
              },
              '& .MuiInputLabel-root': {
                color: theme.palette.textSecondary,
              },
              '& .MuiInputBase-input': {
                color: theme.palette.text,
              },
            }}
          />
        </Box>
      </Paper>

      {/* Alerts */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Alert
          icon={<CheckCircle />}
          sx={{
            bgcolor: theme.palette.surface,
            color: theme.palette.text,
            border: `1px solid ${theme.palette.primary}`,
          }}
        >
          Success message using theme colors
        </Alert>
        <Alert
          icon={<Info />}
          severity="info"
          sx={{
            bgcolor: theme.palette.surface,
            color: theme.palette.text,
            border: `1px solid ${theme.palette.secondary}`,
          }}
        >
          Info message with secondary accent
        </Alert>
      </Box>
    </Box>
  )
}
