import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../styles/theme';
import NavBar from 'src/components/navBar';
import Footer from 'src/components/Footer';
import Head from 'next/head';
import Script from 'next/script';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>ValorantGuide - Estrategias, Mapas y Videos de Lineups para Valorant</title>
        <meta name="description" content="ValorantGuide es tu recurso definitivo para estrategias, mapas, y videos tutoriales de lineups en Valorant. Aprende a jugar mejor con nuestras guías y tutoriales." />
        <meta name="keywords" content="estrategias Valorant, mapas Valorant, videos lineups Valorant, guías de personajes Valorant, setup Valorant, consejos de Valorant" />
        <meta name="author" content="ValorantGuide" />
        <meta property="og:title" content="ValorantGuide - Estrategias, Mapas y Videos de Lineups para Valorant" />
        <meta property="og:description" content="ValorantGuide es tu recurso definitivo para estrategias, mapas, y videos tutoriales de lineups en Valorant. Aprende a jugar mejor con nuestras guías y tutoriales." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://www.valorantguide.com" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="google-adsense-account" content="ca-pub-4341786812153148"></meta>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon_io/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon_io/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon_io/favicon-16x16.png"/>
        <link rel="manifest" href="/images/favicon_io/site.webmanifest"/>
        <link rel="canonical" href="https://www.valorantguide.com" />
      </Head>
      <div className="app-container">
        <NavBar />
        <main className="main-content">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-DDR7PSRE82" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-DDR7PSRE82');
        `}
      </Script>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4341786812153148"
     crossOrigin='anonymous'></Script>
    </ThemeProvider>
  );
}

export default MyApp;