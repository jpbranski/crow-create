'use client'

import { useTheme as useMuiTheme } from '@mui/material/styles'

interface LogoProps {
  width?: number
  height?: number
}

export default function Logo({ width = 40, height = 40 }: LogoProps) {
  const theme = useMuiTheme()
  const primaryColor = theme.palette.primary.main

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Crow Create Logo"
    >
      {/* Dual crow silhouette design */}
      <g>
        {/* Left crow */}
        <path
          d="M25 35 C25 35, 20 30, 15 32 C10 34, 12 40, 15 42 C18 44, 22 43, 25 40 Z"
          fill={primaryColor}
        />
        <circle cx="20" cy="36" r="2" fill={theme.palette.background.paper} />
        <path
          d="M25 40 L22 50 L20 52 L18 50 L15 42 Z"
          fill={primaryColor}
          opacity="0.9"
        />
        <path
          d="M22 50 L25 65 L23 68 L20 52 Z"
          fill={primaryColor}
          opacity="0.8"
        />
        <path
          d="M20 52 L15 65 L17 68 L20 52 Z"
          fill={primaryColor}
          opacity="0.8"
        />

        {/* Right crow (mirrored) */}
        <path
          d="M75 35 C75 35, 80 30, 85 32 C90 34, 88 40, 85 42 C82 44, 78 43, 75 40 Z"
          fill={primaryColor}
        />
        <circle cx="80" cy="36" r="2" fill={theme.palette.background.paper} />
        <path
          d="M75 40 L78 50 L80 52 L82 50 L85 42 Z"
          fill={primaryColor}
          opacity="0.9"
        />
        <path
          d="M78 50 L75 65 L77 68 L80 52 Z"
          fill={primaryColor}
          opacity="0.8"
        />
        <path
          d="M80 52 L85 65 L83 68 L80 52 Z"
          fill={primaryColor}
          opacity="0.8"
        />
      </g>
    </svg>
  )
}
