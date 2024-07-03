
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../styles/theme';
import NavBar from 'src/components/navBar';
import '../styles/global.css'
import Footer from 'src/components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Component {...pageProps} />
      <Footer/>
    </ThemeProvider>
  );
}

export default MyApp;
