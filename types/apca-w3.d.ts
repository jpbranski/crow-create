declare module 'apca-w3' {
  /**
   * Calculate APCA contrast between text and background colors
   * @param textColor - Text color as rgb() string or numeric array
   * @param bgColor - Background color as rgb() string or numeric array
   * @returns Lc value (lightness contrast)
   */
  export function APCAcontrast(
    textColor: string | number[],
    bgColor: string | number[]
  ): number | string

  /**
   * Convert sRGB to Y (luminance)
   */
  export function sRGBtoY(color: string | number[]): number

  /**
   * Convert Display P3 to Y (luminance)
   */
  export function displayP3toY(color: string | number[]): number

  /**
   * Convert Adobe RGB to Y (luminance)
   */
  export function adobeRGBtoY(color: string | number[]): number
}
