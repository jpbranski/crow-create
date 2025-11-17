'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

// Types for design system configuration
export interface ColorPalette {
  primary: string
  primaryDark: string
  primaryLight: string
  secondary: string
  secondaryDark: string
  secondaryLight: string
  success: string
  warning: string
  error: string
  info: string
  background: string
  surface: string
  textPrimary: string
  textSecondary: string
}

export interface TypographyConfig {
  headingFont: string
  bodyFont: string
  baseFontSize: number
  scale: number
}

export interface SpacingConfig {
  baseUnit: number
}

export interface RadiusConfig {
  style: 'sharp' | 'subtle' | 'rounded' | 'pill'
  small: number
  medium: number
  large: number
}

export interface ShadowConfig {
  sm: string
  md: string
  lg: string
  xl: string
}

export interface MotionConfig {
  duration: {
    fast: number
    normal: number
    slow: number
  }
  easing: string
}

export interface DesignSystemConfig {
  palette: ColorPalette
  typography: TypographyConfig
  spacing: SpacingConfig
  radius: RadiusConfig
  shadows: ShadowConfig
  motion: MotionConfig
}

// Default configuration
const defaultConfig: DesignSystemConfig = {
  palette: {
    primary: '#3361CC',
    primaryDark: '#274A99',
    primaryLight: '#5E82D9',
    secondary: '#6E6BA8',
    secondaryDark: '#545186',
    secondaryLight: '#8B88BA',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    background: '#FFFFFF',
    surface: '#F9FAFB',
    textPrimary: '#111827',
    textSecondary: '#6B7280',
  },
  typography: {
    headingFont: 'Inter',
    bodyFont: 'Inter',
    baseFontSize: 16,
    scale: 1.25,
  },
  spacing: {
    baseUnit: 8,
  },
  radius: {
    style: 'subtle',
    small: 4,
    medium: 8,
    large: 12,
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
  motion: {
    duration: {
      fast: 150,
      normal: 300,
      slow: 500,
    },
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
}

interface DesignSystemContextType {
  config: DesignSystemConfig
  updatePalette: (palette: Partial<ColorPalette>) => void
  updateTypography: (typography: Partial<TypographyConfig>) => void
  updateSpacing: (spacing: Partial<SpacingConfig>) => void
  updateRadius: (radius: Partial<RadiusConfig>) => void
  updateShadows: (shadows: Partial<ShadowConfig>) => void
  updateMotion: (motion: Partial<MotionConfig>) => void
  resetConfig: () => void
  loadConfig: (config: DesignSystemConfig) => void
  saveProject: (name: string) => void
  loadProject: (name: string) => void
  getSavedProjects: () => string[]
  deleteProject: (name: string) => void
}

const DesignSystemContext = createContext<DesignSystemContextType | undefined>(undefined)

export function useDesignSystem() {
  const context = useContext(DesignSystemContext)
  if (!context) {
    throw new Error('useDesignSystem must be used within DesignSystemProvider')
  }
  return context
}

interface DesignSystemProviderProps {
  children: ReactNode
}

export function DesignSystemProvider({ children }: DesignSystemProviderProps) {
  const [config, setConfig] = useState<DesignSystemConfig>(defaultConfig)

  // Load config from URL on mount
  useEffect(() => {
    if (typeof window === 'undefined') return

    const params = new URLSearchParams(window.location.search)
    const themeParam = params.get('theme')

    if (themeParam) {
      try {
        const decoded = JSON.parse(atob(themeParam))
        setConfig(decoded)
      } catch (error) {
        console.error('Failed to decode theme from URL:', error)
      }
    }
  }, [])

  const updatePalette = (palette: Partial<ColorPalette>) => {
    setConfig((prev) => ({
      ...prev,
      palette: { ...prev.palette, ...palette },
    }))
  }

  const updateTypography = (typography: Partial<TypographyConfig>) => {
    setConfig((prev) => ({
      ...prev,
      typography: { ...prev.typography, ...typography },
    }))
  }

  const updateSpacing = (spacing: Partial<SpacingConfig>) => {
    setConfig((prev) => ({
      ...prev,
      spacing: { ...prev.spacing, ...spacing },
    }))
  }

  const updateRadius = (radius: Partial<RadiusConfig>) => {
    setConfig((prev) => ({
      ...prev,
      radius: { ...prev.radius, ...radius },
    }))
  }

  const updateShadows = (shadows: Partial<ShadowConfig>) => {
    setConfig((prev) => ({
      ...prev,
      shadows: { ...prev.shadows, ...shadows },
    }))
  }

  const updateMotion = (motion: Partial<MotionConfig>) => {
    setConfig((prev) => ({
      ...prev,
      motion: { ...prev.motion, ...motion },
    }))
  }

  const resetConfig = () => {
    setConfig(defaultConfig)
  }

  const loadConfig = (newConfig: DesignSystemConfig) => {
    setConfig(newConfig)
  }

  const saveProject = (name: string) => {
    const projects = JSON.parse(localStorage.getItem('design-projects') || '{}')
    projects[name] = config
    localStorage.setItem('design-projects', JSON.stringify(projects))
  }

  const loadProject = (name: string) => {
    const projects = JSON.parse(localStorage.getItem('design-projects') || '{}')
    if (projects[name]) {
      setConfig(projects[name])
    }
  }

  const getSavedProjects = (): string[] => {
    const projects = JSON.parse(localStorage.getItem('design-projects') || '{}')
    return Object.keys(projects)
  }

  const deleteProject = (name: string) => {
    const projects = JSON.parse(localStorage.getItem('design-projects') || '{}')
    delete projects[name]
    localStorage.setItem('design-projects', JSON.stringify(projects))
  }

  const contextValue: DesignSystemContextType = {
    config,
    updatePalette,
    updateTypography,
    updateSpacing,
    updateRadius,
    updateShadows,
    updateMotion,
    resetConfig,
    loadConfig,
    saveProject,
    loadProject,
    getSavedProjects,
    deleteProject,
  }

  return (
    <DesignSystemContext.Provider value={contextValue}>
      {children}
    </DesignSystemContext.Provider>
  )
}
