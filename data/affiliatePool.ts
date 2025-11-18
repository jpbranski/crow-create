export interface AffiliateItem {
  title: string
  url: string
}

export const affiliatePool: AffiliateItem[] = [
  { title: "Color and Light — James Gurney", url: "https://amzn.to/3K58jKS" },
  { title: "Dell 27\" Curved Monitor", url: "https://amzn.to/48kWz04" },
  { title: "J-Tech Vertical Mouse", url: "https://amzn.to/3XEhtRG" },
  { title: "Logitech ERGO K860", url: "https://amzn.to/3XEhtRG" },
  { title: "HUION Inspiroy H640P", url: "https://amzn.to/4a0l43X" },
  { title: "Interaction of Color — Josef Albers", url: "https://amzn.to/4pgsCEe" },
  { title: "FITUEYES Desk Riser", url: "https://amzn.to/3LDc76P" },
  { title: "HUION KAMVAS Pro 16", url: "https://amzn.to/4peQYOH" }
]

/**
 * Shuffles the affiliate pool using Fisher-Yates algorithm
 */
export function shuffleAffiliates(pool: AffiliateItem[]): AffiliateItem[] {
  const shuffled = [...pool]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

/**
 * Gets affiliate items to inject between theme cards
 * Randomly places them every 3-7 cards, never consecutively
 * @param totalItems - Total number of theme cards
 * @returns Map of positions to affiliate items
 */
export function getAffiliateInjectionMap(totalItems: number): Map<number, AffiliateItem> {
  const shuffled = shuffleAffiliates(affiliatePool)
  const injectionMap = new Map<number, AffiliateItem>()

  let currentPosition = 0
  let affiliateIndex = 0

  while (currentPosition < totalItems && affiliateIndex < shuffled.length) {
    // Random interval between 3-7 cards
    const interval = Math.floor(Math.random() * 5) + 3 // 3-7 inclusive
    currentPosition += interval

    if (currentPosition < totalItems) {
      injectionMap.set(currentPosition, shuffled[affiliateIndex])
      affiliateIndex++
    }
  }

  return injectionMap
}
