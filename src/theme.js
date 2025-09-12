import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2563EB', // Tailwind blue-600
      dark: '#1D4ED8', // Tailwind blue-700 (hover)
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#6B7280', // Tailwind gray-500
    },
    background: {
      default: '#FFFFFF', // Page background
      paper: '#FFFFFF',   // Card background
    },
    text: {
      primary: '#111827',   // Sidebar main text + section headers
      secondary: '#6B7280', // Descriptions / subtext
    },
    divider: '#E5E7EB', // Input and card borders
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily:
      'InterVariable, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    h6: {
      fontWeight: 600, // Section headers bold
      color: '#111827',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid #E5E7EB', // Card border
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#F9FAFB', // Sidebar background (gray-50)
          color: '#111827',           // Sidebar text
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '&.Mui-disabled': {
            backgroundColor: '#D1D5DB', // Disabled gray-300
            color: '#FFFFFF',
          },
        },
        containedPrimary: {
          backgroundColor: '#2563EB',
          '&:hover': {
            backgroundColor: '#1D4ED8',
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#D1D5DB', // Unchecked outline (gray-300)
          '&.Mui-checked': {
            color: '#2563EB', // Checked = primary blue
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: '#374151', // Consent label (gray-700)
        },
      },
    },
  },
})

export default theme
