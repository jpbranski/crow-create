'use client'

import { Box, TextField, InputAdornment } from '@mui/material'

interface ColorPickerProps {
  label: string
  value: string
  onChange: (value: string) => void
}

export default function ColorPicker({ label, value, onChange }: ColorPickerProps) {
  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
      <Box
        component="input"
        type="color"
        value={value}
        onChange={(e) => onChange((e.target as HTMLInputElement).value)}
        sx={{
          width: 56,
          height: 56,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 1,
          cursor: 'pointer',
          '&::-webkit-color-swatch-wrapper': {
            padding: 0,
          },
          '&::-webkit-color-swatch': {
            border: 'none',
            borderRadius: '4px',
          },
        }}
        aria-label={`Pick ${label} color`}
      />
      <TextField
        label={label}
        value={value}
        onChange={(e) => {
          const val = e.target.value
          if (/^#[0-9A-Fa-f]{0,6}$/.test(val) || val === '') {
            onChange(val)
          }
        }}
        size="small"
        fullWidth
        InputProps={{
          startAdornment: <InputAdornment position="start">#</InputAdornment>,
        }}
        inputProps={{
          maxLength: 7,
          style: { textTransform: 'uppercase' },
        }}
      />
    </Box>
  )
}
