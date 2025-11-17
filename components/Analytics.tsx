'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

export default function Analytics() {
  const [consent, setConsent] = useState<{
    analytics: boolean
    advertising: boolean
  } | null>(null)

  useEffect(() => {
    const checkConsent = () => {
      const stored = localStorage.getItem('cookie-consent')
      if (stored) {
        const parsed = JSON.parse(stored)
        setConsent({
          analytics: parsed.analytics || false,
          advertising: parsed.advertising || false,
        })
      }
    }

    checkConsent()

    // Listen for consent changes
    window.addEventListener('storage', checkConsent)
    return () => window.removeEventListener('storage', checkConsent)
  }, [])

  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID

  return (
    <>
      {/* Google Analytics */}
      {gaId && consent?.analytics && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      )}

      {/* Google AdSense */}
      {adsenseId && consent?.advertising && (
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      )}
    </>
  )
}
