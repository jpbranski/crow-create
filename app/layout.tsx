import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Crow Create - Design System Helper',
  description: 'Build beautiful, accessible design systems with Crow Create. A complete front-end design system helper for creating color palettes, typography scales, and more.',
  keywords: ['design system', 'color palette', 'typography', 'accessibility', 'WCAG', 'UI design'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
