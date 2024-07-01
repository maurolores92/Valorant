// src/pages/index.tsx
import { Button, Typography, Box, Grid } from '@mui/material';
import Link from 'next/link';
import MapCard from 'src/components/MapCard';

const mapas = [
  { id: 1, name: 'Bind', description: 'Mapa con múltiples rutas y teletransportes.', image: '/images/maps/bind.webp' },
  { id: 2, name: 'Haven', description: 'Mapa con tres sitios de bomba.', image: '/images/maps/haven.webp' },
  { id: 3, name: 'Split', description: 'Mapa con dos sitios de bomba y áreas verticales.', image: '/images/maps/split.jpg' }
];

const Home = () => (
  <Box
    sx={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh', // Asegura que el contenedor ocupe al menos toda la altura de la ventana
      overflow: 'hidden',
      
    }}
  >
    <video
      autoPlay
      loop
      muted
      playsInline
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1, // Coloca el video detrás de todos los demás contenidos
      }}
    >
      <source src="/images/valorant.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Oscurecer el video
        zIndex: 0, // Asegúrate de que el overlay esté encima del video pero debajo del contenido
      }}
    />
    <Box
      sx={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '40vh',
        textAlign: 'center',
        color: '#FFFFFF',
        p: 2,
        '@media (max-width: 600px)': {
          p: 1,
        },
      }}
    >
      <Typography
        variant="h1"
        component="h2"
        gutterBottom
      >
         🎯 ¡Tu guía definitiva para Valorant está aquí! 🎯
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          fontSize: { xs: '0.875rem', md: '1.25rem' },
        }}
      >
        Escoge tu mapa, conoce a los personajes ideales para cada mapa y aprende las mejores estrategias con nuestros tutoriales. <br />
        ¡Prepárate para llevar tu juego al siguiente nivel!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        href="/mapa"
        sx={{
          mt: 2,
          px: 3,
          py: 1.5,
          fontSize: { xs: '0.875rem', md: '1rem' },
        }}
      >
        Ver Mapas
      </Button>
    </Box>
    <Box
      sx={{
        position: 'relative',
        zIndex: 1,
        mt: 40,
        p: 7,
        backgroundColor: 'background.default',
      }}
    >
      <Box sx={{textAlign:'center', margin:2}}>
      <Typography variant="h2" gutterBottom align="center">
        Mapas Destacados
      </Typography>
      <Button component={Link} href="/mapa"> Ver mas </Button>
      </Box>
      <Grid container spacing={4}>
        {mapas.map((mapa) => (
          <Grid item xs={12} sm={6} md={4} key={mapa.id}>
            <MapCard mapa={mapa} />
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
);

export default Home;
