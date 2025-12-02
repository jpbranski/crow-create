/**
 * APCA (Accessible Perceptual Contrast Algorithm) Implementation
 * SAPC/APCA 0.1.0G-4g - WCAG 3 Preview
 * Based on: https://github.com/Myndex/SAPC-APCA
 *
 * This is the official perceptual contrast algorithm being developed for WCAG 3.0
 */

export interface APCAResult {
  lc: number
  level: {
    normal: 'Pass' | 'Fail'
    large: 'Pass' | 'Fail'
  }
}

// APCA Constants (SAPC/APCA 0.1.0G-4g)
const mainTRC = 2.4 // Transfer Curve (gamma) for sRGB linearization
const normBG = 0.56 // Background luminance normalization
const normTXT = 0.57 // Text luminance normalization
const revTXT = 0.62 // Reverse text luminance normalization
const revBG = 0.65 // Reverse background luminance normalization

// Clamp and scale constants
const blkThrs = 0.022 // Level that triggers soft black clamp
const blkClmp = 1.414 // Exponent for soft black clamp
const scaleBoW = 1.14 // Scale for dark text on light backgrounds
const scaleWoB = 1.14 // Scale for light text on dark backgrounds
const loConThresh = 0.1 // Threshold for minimum contrast
const loConFactor = 27.0 // Factor for low contrast
const loConOffset = 0.027 // Offset for low contrast
const deltaYmin = 0.0005 // Minimum luminance difference

/**
 * Parse hex color to RGB array
 */
function hexToRgb(hex: string): [number, number, number] {
  const cleaned = hex.replace('#', '')
  const r = parseInt(cleaned.substring(0, 2), 16)
  const g = parseInt(cleaned.substring(2, 4), 16)
  const b = parseInt(cleaned.substring(4, 6), 16)
  return [r, g, b]
}

/**
 * Convert sRGB 8-bit color to Y (luminance)
 * Applies proper sRGB transfer curve
 */
function sRGBtoY(r: number, g: number, b: number): number {
  // Normalize to 0-1
  let rLinear = r / 255
  let gLinear = g / 255
  let bLinear = b / 255

  // Apply sRGB transfer curve (gamma decompression)
  rLinear = rLinear <= 0.04045 ? rLinear / 12.92 : Math.pow((rLinear + 0.055) / 1.055, mainTRC)
  gLinear = gLinear <= 0.04045 ? gLinear / 12.92 : Math.pow((gLinear + 0.055) / 1.055, mainTRC)
  bLinear = bLinear <= 0.04045 ? bLinear / 12.92 : Math.pow((bLinear + 0.055) / 1.055, mainTRC)

  // Calculate luminance
  return 0.2126729 * rLinear + 0.7151522 * gLinear + 0.0721750 * bLinear
}

/**
 * APCA contrast calculation
 * Returns Lc (Lightness Contrast) value
 * Positive values: dark text on light background
 * Negative values: light text on dark background
 */
export function calculateAPCAContrast(foreground: string, background: string): APCAResult {
  try {
    const [txtR, txtG, txtB] = hexToRgb(foreground)
    const [bgR, bgG, bgB] = hexToRgb(background)

    // Calculate Y (relative luminance) for both colors
    let txtY = sRGBtoY(txtR, txtG, txtB)
    let bgY = sRGBtoY(bgR, bgG, bgB)

    // Soft clamp black luminance to prevent divide-by-zero
    txtY = txtY > blkThrs ? txtY : txtY + Math.pow(blkThrs - txtY, blkClmp)
    bgY = bgY > blkThrs ? bgY : bgY + Math.pow(blkThrs - bgY, blkClmp)

    // Calculate absolute luminance difference
    let deltaYmin_local = deltaYmin
    let SAPC = 0

    // Determine polarity (light text on dark bg vs dark text on light bg)
    if (Math.abs(bgY - txtY) < deltaYmin_local) {
      // Very low contrast - return 0
      return {
        lc: 0,
        level: {
          normal: 'Fail',
          large: 'Fail',
        },
      }
    }

    // Calculate SAPC (Simple Accessible Perceptual Contrast)
    if (bgY > txtY) {
      // Dark text on light background (positive Lc)
      SAPC = (Math.pow(bgY, normBG) - Math.pow(txtY, normTXT)) * scaleBoW
    } else {
      // Light text on dark background (negative Lc)
      SAPC = (Math.pow(bgY, revBG) - Math.pow(txtY, revTXT)) * scaleWoB
    }

    // Low contrast soft clamp
    if (Math.abs(SAPC) < loConThresh) {
      return {
        lc: 0,
        level: {
          normal: 'Fail',
          large: 'Fail',
        },
      }
    }

    // Calculate final Lc value
    let lc: number
    if (SAPC > 0) {
      lc = SAPC - loConOffset
    } else {
      lc = SAPC + loConOffset
    }

    // Scale to final Lc value
    lc = lc * 100

    // Determine pass/fail based on thresholds
    const absLc = Math.abs(lc)
    const normal = absLc >= 60 ? 'Pass' : 'Fail'
    const large = absLc >= 45 ? 'Pass' : 'Fail'

    return {
      lc,
      level: {
        normal,
        large,
      },
    }
  } catch (error) {
    console.error('APCA contrast calculation error:', error)
    return {
      lc: 0,
      level: {
        normal: 'Fail',
        large: 'Fail',
      },
    }
  }
}
