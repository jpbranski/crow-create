'use client'

import { useTheme as useMuiTheme } from '@mui/material/styles'
import Image from 'next/image'

interface LogoProps {
  width?: number
  height?: number
}

export default function Logo({ width = 40, height = 40 }: LogoProps) {
  const theme = useMuiTheme()

  return (
    <Image
      src="/images/logo.webp"
      alt="Crow Create Logo"
      width={width}
      height={height}
      priority
      style={{
        display: 'inline-block',
        objectFit: 'contain',
      }}
    />
  )
}
