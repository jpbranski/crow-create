/**
 * Contrast Calculation Utilities
 * Exports WCAG 2.2 and APCA (WCAG 3 preview) contrast calculators
 */

export { calculateWCAGContrast } from './wcagContrast'
export type { WCAGResult } from './wcagContrast'

export { calculateAPCAContrast } from './apcaContrast'
export type { APCAResult } from './apcaContrast'

/**
 * Validate and normalize hex color
 */
export function normalizeHex(hex: string): string {
  let cleaned = hex.replace(/^#+/, '')

  // Handle 3-character shorthand
  if (cleaned.length === 3) {
    cleaned = cleaned
      .split('')
      .map((char) => char + char)
      .join('')
  }

  // Pad if necessary
  while (cleaned.length < 6) {
    cleaned += '0'
  }

  return '#' + cleaned.substring(0, 6).toUpperCase()
}

/**
 * Check if a string is a valid hex color
 */
export function isValidHex(hex: string): boolean {
  const cleaned = hex.replace('#', '')
  return /^[0-9A-Fa-f]{6}$/.test(cleaned)
}

/**
 * Format APCA Lc value for display
 */
export function formatLc(lc: number): string {
  return `Lc ${Math.abs(lc).toFixed(1)}`
}

/**
 * Format WCAG ratio for display
 */
export function formatRatio(ratio: number): string {
  return `${ratio.toFixed(2)}:1`
}
