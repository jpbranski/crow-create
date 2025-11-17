import { ThemeProvider } from '@/context/ThemeContext'
import { DesignSystemProvider } from '@/context/DesignSystemContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import Analytics from '@/components/Analytics'
import { Box } from '@mui/material'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <DesignSystemProvider>
        <Analytics />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Header />
          <Box component="main" sx={{ flexGrow: 1 }}>
            {children}
          </Box>
          <Footer />
          <CookieConsent />
        </Box>
      </DesignSystemProvider>
    </ThemeProvider>
  )
}
