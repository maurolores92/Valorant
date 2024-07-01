// src/styles/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF4655',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#0078D4',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#101823',
      paper: '#1F2326',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0BEC5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#FFFFFF',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#FFFFFF',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 700,
      color: '#FFFFFF',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#FFFFFF',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 700,
      color: '#FFFFFF',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 700,
      color: '#FFFFFF',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
      color: '#B0BEC5',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      color: '#B0BEC5',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      color: '#B0BEC5',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      color: '#B0BEC5',
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '8px 16px',
          textTransform: 'none',
        },
        containedPrimary: {
          backgroundColor: '#FF4655',
          '&:hover': {
            backgroundColor: '#E53E4C',
          },
        },
        containedSecondary: {
          backgroundColor: '#0078D4',
          '&:hover': {
            backgroundColor: '#005BA1',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1F2326',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          backgroundColor: '#1F2326',
        },
      },
    },
  },
});

export default theme;
