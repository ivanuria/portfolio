'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: 'hsl(280, 45%, 50%)'
    },
    secondary: {
      main: 'hsl(73, 45%, 50%)'
    }
  },
  typography: {
    fontFamily: 'var(--font-primary)',
    h1: {
      fontFamily: 'var(--font-secondary)'
    },
    h2: {
      fontFamily: 'var(--font-secondary)'
    },
    h3: {
      fontFamily: 'var(--font-secondary)'
    },
    h4: {
      fontFamily: 'var(--font-secondary)'
    },
    h5: {
      fontFamily: 'var(--font-secondary)'
    },
    h6: {
      fontFamily: 'var(--font-secondary)'
    },
  },
  components: {

  }
});

export default theme;