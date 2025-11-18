'use client'

import { Card, CardContent, Typography, Button, Chip, Box, Stack } from '@mui/material'
import { Visibility, GetApp } from '@mui/icons-material'
import { CuratedTheme } from '@/data/curatedThemes'
import Link from 'next/link'

interface ThemeCardProps {
  theme: CuratedTheme
  onApply: (theme: CuratedTheme) => void
}

export default function ThemeCard({ theme, onApply }: ThemeCardProps) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: 1,
        borderColor: 'divider',
        bgcolor: 'background.paper',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: 6,
        },
      }}
    >
      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {/* Header with WCAG badge */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" component="h3" fontWeight={600}>
            {theme.name}
          </Typography>
          <Chip
            label={`WCAG ${theme.wcagLevel}`}
            size="small"
            color={theme.wcagLevel === 'AAA' ? 'success' : 'primary'}
            sx={{ fontWeight: 600 }}
          />
        </Box>

        {/* Description */}
        <Typography variant="body2" color="text.secondary">
          {theme.description}
        </Typography>

        {/* Color palette strip */}
        <Box
          sx={{
            display: 'flex',
            gap: 0.5,
            height: 40,
            borderRadius: 1,
            overflow: 'hidden',
            border: 1,
            borderColor: 'divider',
          }}
        >
          <Box sx={{ flex: 1, bgcolor: theme.palette.primary }} title="Primary" />
          <Box sx={{ flex: 1, bgcolor: theme.palette.secondary }} title="Secondary" />
          <Box sx={{ flex: 1, bgcolor: theme.palette.background }} title="Background" />
          <Box sx={{ flex: 1, bgcolor: theme.palette.surface }} title="Surface" />
          <Box sx={{ flex: 1, bgcolor: theme.palette.text }} title="Text" />
        </Box>

        {/* Mini preview block */}
        <Box
          sx={{
            bgcolor: theme.palette.background,
            p: 2,
            borderRadius: 1,
            border: 1,
            borderColor: 'divider',
          }}
        >
          <Box
            sx={{
              bgcolor: theme.palette.surface,
              p: 1.5,
              borderRadius: 0.5,
            }}
          >
            <Box
              sx={{
                bgcolor: theme.palette.primary,
                color: theme.palette.surface,
                px: 1.5,
                py: 0.5,
                borderRadius: 0.5,
                fontSize: '0.75rem',
                fontWeight: 600,
                display: 'inline-block',
                mb: 0.5,
              }}
            >
              Button
            </Box>
            <Box sx={{ height: 4, bgcolor: theme.palette.text, borderRadius: 0.5, mb: 0.25 }} />
            <Box
              sx={{
                height: 4,
                bgcolor: theme.palette.textSecondary,
                borderRadius: 0.5,
                width: '70%',
              }}
            />
          </Box>
        </Box>

        {/* Action buttons */}
        <Stack direction="row" spacing={1} sx={{ mt: 'auto' }}>
          <Button
            component={Link}
            href={`/compare?theme=${theme.id}`}
            variant="outlined"
            size="small"
            startIcon={<Visibility />}
            fullWidth
          >
            Preview
          </Button>
          <Button
            variant="contained"
            size="small"
            startIcon={<GetApp />}
            onClick={() => onApply(theme)}
            fullWidth
          >
            Apply
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}
