'use client'

import { useState } from 'react'
import { Box, IconButton, Tooltip, Snackbar, Alert } from '@mui/material'
import { ContentCopy, Check } from '@mui/icons-material'

interface CodeBlockProps {
  code: string
  language?: string
}

export default function CodeBlock({ code, language = 'typescript' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [snackbarOpen, setSnackbarOpen] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setSnackbarOpen(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          zIndex: 1,
        }}
      >
        <Tooltip title={copied ? 'Copied!' : 'Copy to clipboard'}>
          <IconButton
            size="small"
            onClick={handleCopy}
            sx={(theme) => ({
              bgcolor: theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, 0.1)'
                : 'rgba(0, 0, 0, 0.04)',
              color: theme.palette.mode === 'dark'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
              '&:hover': {
                bgcolor: theme.palette.mode === 'dark'
                  ? 'rgba(255, 255, 255, 0.2)'
                  : 'rgba(0, 0, 0, 0.08)',
              },
            })}
          >
            {copied ? <Check fontSize="small" /> : <ContentCopy fontSize="small" />}
          </IconButton>
        </Tooltip>
      </Box>

      <Box
        component="pre"
        sx={(theme) => ({
          p: 2,
          m: 0,
          overflow: 'auto',
          bgcolor: theme.palette.mode === 'dark'
            ? theme.palette.grey[900]
            : theme.palette.grey[100],
          color: theme.palette.mode === 'dark'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
          borderRadius: 1,
          fontFamily: 'var(--font-jetbrains-mono), monospace',
          fontSize: '0.875rem',
          lineHeight: 1.6,
          maxHeight: '600px',
          '& code': {
            fontFamily: 'inherit',
          },
        })}
      >
        <code>{code}</code>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Code copied to clipboard
        </Alert>
      </Snackbar>
    </Box>
  )
}
