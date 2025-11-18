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
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              color: '#F3F4F6',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            {copied ? <Check fontSize="small" /> : <ContentCopy fontSize="small" />}
          </IconButton>
        </Tooltip>
      </Box>

      <Box
        component="pre"
        sx={{
          p: 2,
          m: 0,
          overflow: 'auto',
          bgcolor: '#0D1117',
          color: '#F3F4F6',
          borderRadius: 1,
          fontFamily: 'var(--font-jetbrains-mono), monospace',
          fontSize: '0.875rem',
          lineHeight: 1.6,
          maxHeight: '600px',
          '& code': {
            fontFamily: 'inherit',
          },
        }}
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
