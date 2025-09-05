import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#8257e6' },
    secondary: { main: '#00d4ff' },
    background: { default: '#0b0f19', paper: '#0f1526' },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: 'InterVariable, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    h5: { fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } },
    MuiDrawer: { styleOverrides: { paper: { backgroundColor: '#0f1526' } } },
  },
})

export default theme
