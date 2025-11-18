'use client'

import { useState } from 'react'
import {
  Container,
  Box,
  Typography,
  Tabs,
  Tab,
  Paper,
  useMediaQuery,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import {
  Palette as PaletteIcon,
  TextFields,
  ViewInAr,
  Visibility,
  Code,
  ExpandMore,
} from '@mui/icons-material'
import PaletteSection from '@/components/create/PaletteSection'
import TypographySection from '@/components/create/TypographySection'
import LayoutSection from '@/components/create/LayoutSection'
import PreviewSection from '@/components/create/PreviewSection'
import ExportsSection from '@/components/create/ExportsSection'
import ProjectManager from '@/components/ProjectManager'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`create-tabpanel-${index}`}
      aria-labelledby={`create-tab-${index}`}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  )
}

export default function CreatePage() {
  const [tabValue, setTabValue] = useState(0)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="xl">
        {/* Hero Section */}
        <Box sx={{ mb: 4 }} id="overview">
          <Typography variant="h2" component="h1" gutterBottom fontWeight={700}>
            Crow Create
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Design System Helper
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '800px', mb: 3 }}>
            Build beautiful, accessible design systems with ease. Create color palettes, check WCAG
            compliance, configure typography, and generate exportable design tokens for MUI,
            Tailwind, and more.
          </Typography>

          {/* Project Manager */}
          <ProjectManager />

          {/* How It Works Accordion */}
          <Accordion
            sx={{
              bgcolor: 'background.paper',
              mt: 3,
              borderRadius: 1,
              '&:before': { display: 'none' },
              boxShadow: 1,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="how-it-works-content"
              id="how-it-works-header"
            >
              <Typography variant="h6" fontWeight={600}>
                How It Works
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary" paragraph>
                Crow Create is a front-end design system helper that runs entirely in your browser.
                Configure your design tokens across five sections:
              </Typography>
              <Box component="ul" sx={{ color: 'text.secondary', mt: 1 }}>
                <li>
                  <strong>Palette & Accessibility:</strong> Build color palettes, check WCAG contrast
                  ratios, and simulate colorblind modes
                </li>
                <li>
                  <strong>Typography:</strong> Select fonts, configure scales, and get intelligent
                  pairing suggestions
                </li>
                <li>
                  <strong>Layout & Style:</strong> Define spacing, border radius, shadows, and motion
                  systems
                </li>
                <li>
                  <strong>Preview:</strong> See your design system in action with live component
                  examples
                </li>
                <li>
                  <strong>Exports:</strong> Copy ready-to-use code for MUI, Tailwind, CSS variables,
                  and design tokens
                </li>
              </Box>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                Save your projects locally, or share them with others using shareable URLs. No account
                or backend required.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        {/* Main Playground */}
        <Paper elevation={0} sx={{ borderRadius: 2, border: 1, borderColor: 'divider' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              aria-label="create sections"
              variant={isMobile ? 'scrollable' : 'standard'}
              scrollButtons={isMobile ? 'auto' : false}
            >
              <Tab
                icon={<PaletteIcon />}
                label="Palette & Accessibility"
                iconPosition="start"
                id="create-tab-0"
                aria-controls="create-tabpanel-0"
              />
              <Tab
                icon={<TextFields />}
                label="Typography"
                iconPosition="start"
                id="create-tab-1"
                aria-controls="create-tabpanel-1"
              />
              <Tab
                icon={<ViewInAr />}
                label="Layout & Style"
                iconPosition="start"
                id="create-tab-2"
                aria-controls="create-tabpanel-2"
              />
              <Tab
                icon={<Visibility />}
                label="Preview"
                iconPosition="start"
                id="create-tab-3"
                aria-controls="create-tabpanel-3"
              />
              <Tab
                icon={<Code />}
                label="Exports"
                iconPosition="start"
                id="create-tab-4"
                aria-controls="create-tabpanel-4"
              />
            </Tabs>
          </Box>

          <Box sx={{ p: { xs: 2, md: 3 } }}>
            <TabPanel value={tabValue} index={0}>
              <PaletteSection />
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <TypographySection />
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
              <LayoutSection />
            </TabPanel>
            <TabPanel value={tabValue} index={3}>
              <PreviewSection />
            </TabPanel>
            <TabPanel value={tabValue} index={4}>
              <ExportsSection />
            </TabPanel>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}
