export interface CuratedTheme {
  id: string
  name: string
  description: string
  wcagLevel: 'AA' | 'AAA'
  palette: {
    primary: string
    secondary: string
    background: string
    surface: string
    text: string
    textSecondary: string
  }
  inspiration?: string
}

export const curatedThemes: CuratedTheme[] = [
  {
    id: 'midnight-purple',
    name: 'Midnight Purple',
    description: 'Deep purples with high contrast, perfect for creative portfolios',
    wcagLevel: 'AAA',
    palette: {
      primary: '#9333EA',
      secondary: '#C084FC',
      background: '#0F0A1E',
      surface: '#1A1326',
      text: '#F5F3FF',
      textSecondary: '#C4B5FD',
    },
    inspiration: 'JPBranski aesthetic',
  },
  {
    id: 'ocean-breeze',
    name: 'Ocean Breeze',
    description: 'Calming blues with excellent accessibility',
    wcagLevel: 'AAA',
    palette: {
      primary: '#0EA5E9',
      secondary: '#06B6D4',
      background: '#F0F9FF',
      surface: '#FFFFFF',
      text: '#0C4A6E',
      textSecondary: '#075985',
    },
  },
  {
    id: 'terminal-green',
    name: 'Terminal Green',
    description: 'Classic terminal aesthetic with modern accessibility',
    wcagLevel: 'AAA',
    palette: {
      primary: '#10B981',
      secondary: '#34D399',
      background: '#0C0F0A',
      surface: '#1A1F1A',
      text: '#D1FAE5',
      textSecondary: '#A7F3D0',
    },
    inspiration: 'Terminal/monochrome',
  },
  {
    id: 'sunset-coral',
    name: 'Sunset Coral',
    description: 'Warm, inviting colors with strong contrast',
    wcagLevel: 'AA',
    palette: {
      primary: '#F97316',
      secondary: '#FB923C',
      background: '#FFFBF5',
      surface: '#FFFFFF',
      text: '#7C2D12',
      textSecondary: '#9A3412',
    },
  },
  {
    id: 'sakura-dream',
    name: 'Sakura Dream',
    description: 'Soft pastels with kawaii charm and accessibility',
    wcagLevel: 'AA',
    palette: {
      primary: '#EC4899',
      secondary: '#F472B6',
      background: '#FFF5F7',
      surface: '#FFFFFF',
      text: '#831843',
      textSecondary: '#9F1239',
    },
    inspiration: 'Kawaii/pastel',
  },
  {
    id: 'carbon-elite',
    name: 'Carbon Elite',
    description: 'Sleek dark interface with professional polish',
    wcagLevel: 'AAA',
    palette: {
      primary: '#3B82F6',
      secondary: '#60A5FA',
      background: '#0A0A0A',
      surface: '#171717',
      text: '#FAFAFA',
      textSecondary: '#D4D4D4',
    },
    inspiration: 'MUI dark theme',
  },
  {
    id: 'forest-sage',
    name: 'Forest Sage',
    description: 'Natural greens with earthy undertones',
    wcagLevel: 'AAA',
    palette: {
      primary: '#059669',
      secondary: '#10B981',
      background: '#F0FDF4',
      surface: '#FFFFFF',
      text: '#064E3B',
      textSecondary: '#065F46',
    },
  },
  {
    id: 'crimson-night',
    name: 'Crimson Night',
    description: 'Bold reds on dark background for high impact',
    wcagLevel: 'AAA',
    palette: {
      primary: '#DC2626',
      secondary: '#EF4444',
      background: '#0F0505',
      surface: '#1C0A0A',
      text: '#FEE2E2',
      textSecondary: '#FECACA',
    },
    inspiration: 'Netflix-inspired',
  },
  {
    id: 'arctic-frost',
    name: 'Arctic Frost',
    description: 'Cool grays with icy blue accents',
    wcagLevel: 'AAA',
    palette: {
      primary: '#0891B2',
      secondary: '#06B6D4',
      background: '#F8FAFC',
      surface: '#FFFFFF',
      text: '#0F172A',
      textSecondary: '#334155',
    },
  },
  {
    id: 'amber-glow',
    name: 'Amber Glow',
    description: 'Warm amber tones with golden highlights',
    wcagLevel: 'AA',
    palette: {
      primary: '#D97706',
      secondary: '#F59E0B',
      background: '#FFFBEB',
      surface: '#FFFFFF',
      text: '#78350F',
      textSecondary: '#92400E',
    },
  },
  {
    id: 'royal-indigo',
    name: 'Royal Indigo',
    description: 'Deep indigo with regal sophistication',
    wcagLevel: 'AAA',
    palette: {
      primary: '#4F46E5',
      secondary: '#6366F1',
      background: '#EEF2FF',
      surface: '#FFFFFF',
      text: '#312E81',
      textSecondary: '#3730A3',
    },
  },
  {
    id: 'void-obsidian',
    name: 'Void Obsidian',
    description: 'Pure black with minimal color for maximum focus',
    wcagLevel: 'AAA',
    palette: {
      primary: '#A855F7',
      secondary: '#C084FC',
      background: '#000000',
      surface: '#0A0A0A',
      text: '#FAFAFA',
      textSecondary: '#D4D4D4',
    },
    inspiration: 'Terminal/monochrome',
  },
  {
    id: 'mint-fresh',
    name: 'Mint Fresh',
    description: 'Refreshing mint greens with crisp whites',
    wcagLevel: 'AA',
    palette: {
      primary: '#14B8A6',
      secondary: '#2DD4BF',
      background: '#F0FDFA',
      surface: '#FFFFFF',
      text: '#134E4A',
      textSecondary: '#115E59',
    },
  },
  {
    id: 'lavender-haze',
    name: 'Lavender Haze',
    description: 'Soft lavender with dreamy purple tints',
    wcagLevel: 'AA',
    palette: {
      primary: '#8B5CF6',
      secondary: '#A78BFA',
      background: '#FAF5FF',
      surface: '#FFFFFF',
      text: '#5B21B6',
      textSecondary: '#6D28D9',
    },
  },
  {
    id: 'slate-professional',
    name: 'Slate Professional',
    description: 'Neutral grays for clean, professional interfaces',
    wcagLevel: 'AAA',
    palette: {
      primary: '#475569',
      secondary: '#64748B',
      background: '#F8FAFC',
      surface: '#FFFFFF',
      text: '#0F172A',
      textSecondary: '#1E293B',
    },
    inspiration: 'Vercel-inspired',
  },
  {
    id: 'ruby-wine',
    name: 'Ruby Wine',
    description: 'Rich wine reds with luxurious feel',
    wcagLevel: 'AA',
    palette: {
      primary: '#BE123C',
      secondary: '#E11D48',
      background: '#FFF1F2',
      surface: '#FFFFFF',
      text: '#881337',
      textSecondary: '#9F1239',
    },
  },
  {
    id: 'cyber-neon',
    name: 'Cyber Neon',
    description: 'Vibrant cyan on dark for futuristic feel',
    wcagLevel: 'AAA',
    palette: {
      primary: '#06B6D4',
      secondary: '#22D3EE',
      background: '#0A0E14',
      surface: '#151B23',
      text: '#ECFEFF',
      textSecondary: '#CFFAFE',
    },
  },
  {
    id: 'honey-wheat',
    name: 'Honey Wheat',
    description: 'Warm yellows with natural organic feel',
    wcagLevel: 'AA',
    palette: {
      primary: '#CA8A04',
      secondary: '#EAB308',
      background: '#FEFCE8',
      surface: '#FFFFFF',
      text: '#713F12',
      textSecondary: '#854D0E',
    },
  },
  {
    id: 'plum-twilight',
    name: 'Plum Twilight',
    description: 'Deep plum with elegant purple accents',
    wcagLevel: 'AAA',
    palette: {
      primary: '#7C3AED',
      secondary: '#A78BFA',
      background: '#0D0416',
      surface: '#1A0E2E',
      text: '#F5F3FF',
      textSecondary: '#DDD6FE',
    },
    inspiration: 'Discord-inspired',
  },
  {
    id: 'steel-blue',
    name: 'Steel Blue',
    description: 'Industrial blues with modern edge',
    wcagLevel: 'AAA',
    palette: {
      primary: '#1E40AF',
      secondary: '#3B82F6',
      background: '#EFF6FF',
      surface: '#FFFFFF',
      text: '#1E3A8A',
      textSecondary: '#1E40AF',
    },
    inspiration: 'Stripe-inspired',
  },
]

/**
 * Get a theme by ID
 */
export function getThemeById(id: string): CuratedTheme | undefined {
  return curatedThemes.find((theme) => theme.id === id)
}

/**
 * Get random theme
 */
export function getRandomTheme(): CuratedTheme {
  return curatedThemes[Math.floor(Math.random() * curatedThemes.length)]
}
