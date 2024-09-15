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
    fontFamily: 'var(--font-nanum-gothic)',
  },
});

export default theme;