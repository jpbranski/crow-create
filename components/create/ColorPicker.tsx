'use client'

import { Box, TextField, InputAdornment } from '@mui/material'

interface ColorPickerProps {
  label: string
  value: string
  onChange: (value: string) => void
}

export default function ColorPicker({ label, value, onChange }: ColorPickerProps) {
  // Normalize hex value (ensure it starts with #)
  const normalizeHex = (val: string): string => {
    const cleaned = val.replace(/^#+/, '') // Remove all leading #
    return cleaned ? `#${cleaned}` : '#'
  }

  // Display value without # since we have it as startAdornment
  const displayValue = value.startsWith('#') ? value.slice(1) : value

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
        value={displayValue}
        onChange={(e) => {
          const val = e.target.value
          // Allow only valid hex characters (without requiring #)
          if (/^[0-9A-Fa-f]{0,6}$/.test(val) || val === '') {
            onChange(normalizeHex(val))
          }
        }}
        size="small"
        fullWidth
        InputProps={{
          startAdornment: <InputAdornment position="start">#</InputAdornment>,
        }}
        inputProps={{
          maxLength: 6,
          style: { textTransform: 'uppercase' },
        }}
      />
    </Box>
  )
}
