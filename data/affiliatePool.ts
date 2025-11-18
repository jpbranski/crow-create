export interface AffiliateItem {
  id: string
  label: string
  description: string
  url: string
  category: 'hosting' | 'design' | 'hardware' | 'tools' | 'learning' | 'utilities'
  icon?: string
  color: string
}

export const affiliatePool: AffiliateItem[] = [
  {
    id: 'vercel',
    label: 'Vercel',
    description: 'Deploy lightning-fast applications effortlessly.',
    url: 'https://vercel.com',
    category: 'hosting',
    color: '#000000',
  },
  {
    id: 'amazon-mice',
    label: 'Top Design Mice',
    description: 'Ergonomic, precise, and productivity-focused.',
    url: 'https://amazon.com',
    category: 'hardware',
    color: '#232F3E',
  },
  {
    id: 'figma',
    label: 'Figma',
    description: 'Design collaboratively with industry-leading tools.',
    url: 'https://figma.com',
    category: 'design',
    color: '#F24E1E',
  },
  {
    id: 'netlify',
    label: 'Netlify',
    description: 'Build, deploy, and scale modern web projects.',
    url: 'https://netlify.com',
    category: 'hosting',
    color: '#00C7B7',
  },
  {
    id: 'amazon-keyboards',
    label: 'Mechanical Keyboards',
    description: 'Premium typing experience for developers and designers.',
    url: 'https://amazon.com',
    category: 'hardware',
    color: '#232F3E',
  },
  {
    id: 'adobe-creative-cloud',
    label: 'Adobe Creative Cloud',
    description: 'Professional design software suite.',
    url: 'https://adobe.com',
    category: 'design',
    color: '#FF0000',
  },
  {
    id: 'amazon-monitors',
    label: 'Designer Monitors',
    description: 'High-resolution displays for detailed work.',
    url: 'https://amazon.com',
    category: 'hardware',
    color: '#232F3E',
  },
  {
    id: 'sketch',
    label: 'Sketch',
    description: 'The digital design toolkit for Mac.',
    url: 'https://sketch.com',
    category: 'design',
    color: '#FDAD00',
  },
  {
    id: 'amazon-desks',
    label: 'Standing Desks',
    description: 'Ergonomic workstations for better health and productivity.',
    url: 'https://amazon.com',
    category: 'hardware',
    color: '#232F3E',
  },
  {
    id: 'framer',
    label: 'Framer',
    description: 'Design and publish stunning sites with no code.',
    url: 'https://framer.com',
    category: 'design',
    color: '#0055FF',
  },
  {
    id: 'notion',
    label: 'Notion',
    description: 'All-in-one workspace for notes, docs, and projects.',
    url: 'https://notion.so',
    category: 'tools',
    color: '#000000',
  },
  {
    id: 'amazon-chairs',
    label: 'Ergonomic Chairs',
    description: 'Comfortable seating for long design sessions.',
    url: 'https://amazon.com',
    category: 'hardware',
    color: '#232F3E',
  },
  {
    id: 'linear',
    label: 'Linear',
    description: 'Issue tracking built for high-performance teams.',
    url: 'https://linear.app',
    category: 'tools',
    color: '#5E6AD2',
  },
  {
    id: 'raycast',
    label: 'Raycast',
    description: 'Supercharge your productivity with a better launcher.',
    url: 'https://raycast.com',
    category: 'utilities',
    color: '#FF6363',
  },
  {
    id: 'amazon-webcams',
    label: 'HD Webcams',
    description: 'Crystal-clear video for remote collaboration.',
    url: 'https://amazon.com',
    category: 'hardware',
    color: '#232F3E',
  },
  {
    id: 'webflow',
    label: 'Webflow',
    description: 'Build professional, custom websites without code.',
    url: 'https://webflow.com',
    category: 'design',
    color: '#4353FF',
  },
  {
    id: 'cloudflare',
    label: 'Cloudflare',
    description: 'Fast, secure, and reliable web infrastructure.',
    url: 'https://cloudflare.com',
    category: 'hosting',
    color: '#F38020',
  },
  {
    id: 'amazon-headphones',
    label: 'Noise-Cancelling Headphones',
    description: 'Focus better with premium audio quality.',
    url: 'https://amazon.com',
    category: 'hardware',
    color: '#232F3E',
  },
  {
    id: 'coursera',
    label: 'Coursera',
    description: 'Learn design and development from top universities.',
    url: 'https://coursera.org',
    category: 'learning',
    color: '#0056D2',
  },
  {
    id: 'udemy',
    label: 'Udemy',
    description: 'Thousands of courses on design, coding, and more.',
    url: 'https://udemy.com',
    category: 'learning',
    color: '#A435F0',
  },
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
 * Gets affiliates to inject between items
 * @param totalItems - Total number of main items
 * @param interval - Number of items between each affiliate (default: 6)
 */
export function getAffiliatesForInjection(
  totalItems: number,
  interval: number = 6
): AffiliateItem[] {
  const shuffled = shuffleAffiliates(affiliatePool)
  const positions: number[] = []

  // Calculate injection positions (after every `interval` items)
  for (let i = interval; i < totalItems; i += interval) {
    positions.push(i)
  }

  // Return affiliates for each position (cycle through shuffled pool if needed)
  return positions.map((_, index) => shuffled[index % shuffled.length])
}
