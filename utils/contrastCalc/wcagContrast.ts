/**
 * WCAG 2.2 Contrast Calculation
 * Based on WCAG 2.1 specification
 * https://www.w3.org/TR/WCAG21/#contrast-minimum
 */

export interface WCAGResult {
  ratio: number
  level: {
    normal: 'AAA' | 'AA' | 'Fail'
    large: 'AAA' | 'AA' | 'Fail'
  }
}

/**
 * Parse hex color to RGB values
 */
function hexToRgb(hex: string): [number, number, number] {
  const cleaned = hex.replace('#', '')
  const r = parseInt(cleaned.substring(0, 2), 16)
  const g = parseInt(cleaned.substring(2, 4), 16)
  const b = parseInt(cleaned.substring(4, 6), 16)
  return [r, g, b]
}

/**
 * Calculate relative luminance according to WCAG specification
 */
function getRelativeLuminance(r: number, g: number, b: number): number {
  // Convert to 0-1 range
  const rsRGB = r / 255
  const gsRGB = g / 255
  const bsRGB = b / 255

  // Apply gamma correction
  const rLinear = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4)
  const gLinear = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4)
  const bLinear = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4)

  // Calculate luminance
  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear
}

/**
 * Calculate WCAG 2.2 contrast ratio
 */
export function calculateWCAGContrast(foreground: string, background: string): WCAGResult {
  try {
    const [r1, g1, b1] = hexToRgb(foreground)
    const [r2, g2, b2] = hexToRgb(background)

    const l1 = getRelativeLuminance(r1, g1, b1)
    const l2 = getRelativeLuminance(r2, g2, b2)

    const lighter = Math.max(l1, l2)
    const darker = Math.min(l1, l2)

    const ratio = (lighter + 0.05) / (darker + 0.05)

    // Determine compliance levels
    const normal: 'AAA' | 'AA' | 'Fail' = ratio >= 7 ? 'AAA' : ratio >= 4.5 ? 'AA' : 'Fail'
    const large: 'AAA' | 'AA' | 'Fail' = ratio >= 4.5 ? 'AAA' : ratio >= 3 ? 'AA' : 'Fail'

    return {
      ratio,
      level: {
        normal,
        large,
      },
    }
  } catch (error) {
    console.error('WCAG contrast calculation error:', error)
    return {
      ratio: 0,
      level: {
        normal: 'Fail',
        large: 'Fail',
      },
    }
  }
}
