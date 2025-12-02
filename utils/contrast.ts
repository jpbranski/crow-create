/**
 * Contrast calculation utilities for WCAG 2.2 and APCA (WCAG 3 preview)
 */

import { APCAcontrast } from 'apca-w3'

/**
 * Convert hex color to RGB object
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

/**
 * Convert RGB object to hex string
 */
export function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map((x) => Math.round(x).toString(16).padStart(2, '0')).join('')
}

/**
 * Parse color string (hex or rgb) to RGB object
 */
export function parseColor(color: string): { r: number; g: number; b: number } | null {
  // Handle hex colors
  if (color.startsWith('#')) {
    return hexToRgb(color)
  }

  // Handle rgb(r, g, b) format
  const rgbMatch = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/)
  if (rgbMatch) {
    return {
      r: parseInt(rgbMatch[1]),
      g: parseInt(rgbMatch[2]),
      b: parseInt(rgbMatch[3]),
    }
  }

  return null
}

/**
 * Calculate relative luminance for WCAG 2.2 contrast
 */
function getRelativeLuminance(r: number, g: number, b: number): number {
  const rsRGB = r / 255
  const gsRGB = g / 255
  const bsRGB = b / 255

  const r2 = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4)
  const g2 = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4)
  const b2 = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4)

  return 0.2126 * r2 + 0.7152 * g2 + 0.0722 * b2
}

/**
 * Calculate WCAG 2.2 contrast ratio between two colors
 * @param textColor - Foreground/text color (hex string)
 * @param backgroundColor - Background color (hex string)
 * @returns Contrast ratio (e.g., 4.5, 7.0, etc.)
 */
export function getWcagContrast(textColor: string, backgroundColor: string): number {
  const text = parseColor(textColor)
  const bg = parseColor(backgroundColor)

  if (!text || !bg) return 0

  const l1 = getRelativeLuminance(text.r, text.g, text.b)
  const l2 = getRelativeLuminance(bg.r, bg.g, bg.b)

  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)

  return (lighter + 0.05) / (darker + 0.05)
}

/**
 * Get WCAG 2.2 compliance level for a contrast ratio
 * @param ratio - Contrast ratio value
 * @param isLargeText - Whether text is large (18pt+ or 14pt+ bold)
 * @returns Compliance level: 'AAA', 'AA', or 'Fail'
 */
export function getWcagLevel(
  ratio: number,
  isLargeText: boolean = false
): 'AAA' | 'AA' | 'Fail' {
  if (isLargeText) {
    if (ratio >= 4.5) return 'AAA'
    if (ratio >= 3) return 'AA'
  } else {
    if (ratio >= 7) return 'AAA'
    if (ratio >= 4.5) return 'AA'
  }
  return 'Fail'
}

/**
 * Calculate APCA (WCAG 3 preview) contrast between two colors
 * @param textColor - Foreground/text color (hex string)
 * @param backgroundColor - Background color (hex string)
 * @returns APCA Lc value (lightness contrast, can be positive or negative)
 */
export function getApcaContrast(textColor: string, backgroundColor: string): number {
  const text = parseColor(textColor)
  const bg = parseColor(backgroundColor)

  if (!text || !bg) return 0

  // Convert RGB to sRGB string format expected by APCA
  const textRgb = `rgb(${text.r}, ${text.g}, ${text.b})`
  const bgRgb = `rgb(${bg.r}, ${bg.g}, ${bg.b})`

  // Calculate APCA contrast - returns Lc value
  const contrast = APCAcontrast(textRgb, bgRgb)

  return typeof contrast === 'number' ? contrast : 0
}

/**
 * Get APCA compliance level based on Lc value
 * Note: APCA uses different thresholds than WCAG 2.2
 * These are based on current APCA guidelines (subject to change)
 *
 * @param lcValue - APCA Lc value (absolute value used)
 * @param isLargeText - Whether text is large/headings
 * @returns Pass/fail status and minimum Lc requirement
 */
export function getApcaLevel(
  lcValue: number,
  isLargeText: boolean = false
): {
  passes: boolean
  level: 'Pass' | 'Fail'
  minLc: number
} {
  const absLc = Math.abs(lcValue)

  // APCA thresholds (simplified):
  // Body text (normal): Lc 75+ recommended, Lc 60+ minimum
  // Large text/headings: Lc 60+ recommended, Lc 45+ minimum
  const minLc = isLargeText ? 45 : 60
  const passes = absLc >= minLc

  return {
    passes,
    level: passes ? 'Pass' : 'Fail',
    minLc,
  }
}

/**
 * Format APCA Lc value for display
 * @param lcValue - Raw Lc value
 * @returns Formatted string (e.g., "Lc 75.3")
 */
export function formatApcaValue(lcValue: number): string {
  return `Lc ${Math.abs(lcValue).toFixed(1)}`
}
