import { createTheme, Theme, ThemeOptions } from '@mui/material/styles'

// Crow Create brand colors
export const brandColors = {
  primary: {
    main: '#3361CC',
    dark: '#274A99',
    light: '#5E82D9',
  },
  secondary: {
    main: '#6E6BA8',
    dark: '#545186',
    light: '#8B88BA',
  },
}

// Light theme configuration
const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: brandColors.primary,
    secondary: brandColors.secondary,
    background: {
      default: '#F7F9FC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#111827',
      secondary: '#374151',
    },
    divider: '#E5E7EB',
    grey: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
  },
  typography: {
    fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: 14,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#FFFFFF',
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: ({ theme }) => ({
          backgroundColor:
            theme.palette.mode === "dark" ? "#1A1C1F" : "#F5F5F5",
          color:
            theme.palette.mode === "dark" ? "#FFFFFF" : "#111111",
          fontSize: "0.875rem",
          fontWeight: 500,
          padding: "10px 12px",
          borderRadius: 8,
          boxShadow:
            theme.palette.mode === "dark"
              ? "0 4px 12px rgba(0,0,0,0.6)"
              : "0 4px 10px rgba(0,0,0,0.15)",
          maxWidth: 300,
          lineHeight: 1.4,
        }),
        arrow: ({ theme }) => ({
          color:
            theme.palette.mode === "dark" ? "#1A1C1F" : "#F5F5F5",
        }),
      },
      defaultProps: {
        arrow: true,
        enterTouchDelay: 0,
        enterDelay: 200,
        leaveDelay: 100,
        disableInteractive: false,
      },
    }

  },
}

// Dark theme configuration
const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: brandColors.primary,
    secondary: brandColors.secondary,
    background: {
      default: '#0E1116',
      paper: '#161B22',
    },
    text: {
      primary: '#F3F4F6',
      secondary: '#D1D5DB',
    },
    divider: '#374151',
    grey: {
      50: '#111827',
      100: '#1F2937',
      200: '#374151',
      300: '#4B5563',
      400: '#6B7280',
      500: '#9CA3AF',
      600: '#D1D5DB',
      700: '#E5E7EB',
      800: '#F3F4F6',
      900: '#F9FAFB',
    },
  },
  typography: lightThemeOptions.typography,
  shape: lightThemeOptions.shape,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#161B22',
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.4), 0 1px 2px -1px rgb(0 0 0 / 0.3)',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: ({ theme }) => ({
          backgroundColor:
            theme.palette.mode === "dark" ? "#1A1C1F" : "#F5F5F5",
          color:
            theme.palette.mode === "dark" ? "#FFFFFF" : "#111111",
          fontSize: "0.875rem",
          fontWeight: 500,
          padding: "10px 12px",
          borderRadius: 8,
          boxShadow:
            theme.palette.mode === "dark"
              ? "0 4px 12px rgba(0,0,0,0.6)"
              : "0 4px 10px rgba(0,0,0,0.15)",
          maxWidth: 300,
          lineHeight: 1.4,
        }),
        arrow: ({ theme }) => ({
          color:
            theme.palette.mode === "dark" ? "#1A1C1F" : "#F5F5F5",
        }),
      },
      defaultProps: {
        arrow: true,
        enterTouchDelay: 0,
        enterDelay: 200,
        leaveDelay: 100,
        disableInteractive: false,
      },
    },
  },
}

export const lightTheme = createTheme(lightThemeOptions)
export const darkTheme = createTheme(darkThemeOptions)
