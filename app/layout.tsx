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
  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Analytics */}
        {GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `,
              }}
            />
          </>
        )}

        {/* Google AdSense - Auto Ads */}
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
