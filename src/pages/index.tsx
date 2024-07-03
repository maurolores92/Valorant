// src/pages/index.tsx
import { Button, Typography, Box, Grid, CardContent, CardMedia, Card } from '@mui/material';
import Link from 'next/link';
import MapCard from 'src/components/MapCard';

const mapas = [
  { id: 1, name: 'Bind', description: 'Mapa con múltiples rutas y teletransportes.', "image": '/images/maps/bind.webp' },
  { id: 2, name: 'Haven', description: 'Mapa con tres sitios de bomba.', image: '/images/maps/haven.webp' },
  { id: 3, name: 'Split', description: 'Mapa con dos sitios de bomba y áreas verticales.', image: '/images/maps/split.jpg' }
];

const personajes = [
  { "id": "1", "name": "Astra", "role": "Controlador", "description": "Astra es una controladora que manipula el espacio con sus estrellas.", "image": "/images/characters/astra.jpeg", "recommendedMaps": [
    {"map": "Haven", "reason": "Astra puede usar sus estrellas para controlar y bloquear las líneas de visión en los tres sitios de bombas en Haven."},
    {"map": "Icebox", "reason": "La capacidad de Astra para crear bloqueos y áreas de control le permite aprovechar el diseño vertical de Icebox."}] 
  },
  {"id": "5", "name": "Cypher", "role": "Centinela","image": "/images/characters/cypher.jpg", "description": "Cypher es una centinela que usa trampas y cámaras para vigilar.","recommendedMaps": 
    [{"map": "Bind", "reason": "Las trampas y cámaras de Cypher son excelentes para monitorear los teletransportadores y entradas en Bind."},
      {"map": "Split","reason": "Las habilidades de Cypher pueden controlar los corredores estrechos y puntos de estrangulamiento en Split."}]
  },
  {    "id": "13",    "name": "Raze",    "role": "Duelista",    "image": "/images/characters/raze.png",    "description": "Raze es una duelista con habilidades explosivas.",
    "recommendedMaps": [ { "map": "Bind", "reason": "Las habilidades explosivas de Raze pueden ser devastadoras en los estrechos corredores y espacios reducidos de Bind."},
      {"map": "Split","reason": "Las habilidades de Raze son efectivas para despejar áreas y atacar a los enemigos en los puntos de estrangulamiento de Split."}]
  },
  {    "id": "14",    "name": "Sova",    "role": "Centinela",    "image": "/images/characters/sova.jpg",    "description": "Sova es un iniciador que sobresale en la recopilación de información.",
    "recommendedMaps": [ {"map": "Ascent",        "reason": "Las habilidades de reconocimiento de Sova pueden recopilar información crucial sobre las posiciones enemigas en las áreas abiertas de Ascent."},
      {"map": "Icebox", "reason": "Las habilidades de Sova pueden explorar enemigos ocultos en el complejo diseño vertical de Icebox."}]
  },
];

const Home = () => (
  <Box
    sx={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh', 
      overflow: 'hidden',
      
    }}
  >
    <video
      autoPlay
      loop
      muted
      playsInline
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: '100%',
        objectFit: 'cover',
        maxHeight: '700px',
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
        Escoge tu mapa, al personaje con el que jugaras y aprende las mejores estrategias con nuestros tutoriales. <br />
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
      <Box sx={{textAlign:'center', marginTop:10}}>
      <Typography variant="h2" gutterBottom align="center">
        Personajes Destacados
      </Typography>
      <Button component={Link} href="/personajes"> Ver mas </Button>
      </Box>


      <Grid container spacing={10} justifyContent={"center"} >
        {personajes.map((personaje) => (
          <Grid item xs={12} sm={6} md={2} key={personaje.id}>
            <Card
              component={Link}
              href={`/personajes/detalles/${personaje.id}`}
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                '&:hover': {
                  boxShadow: '0 6px 18px rgba(0, 0, 0, 0.3)',
                },
                borderRadius: '2rem',
              }}
            >
              <CardMedia
                component="img"
                height="350"
                image={personaje.image}
                alt={personaje.name}
                sx={{
                  objectFit: 'cover',
                  objectPosition: 'top',
                  borderRadius: '2rem 2rem 0 0',
                }}
              />
              <CardContent
                sx={{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  color: '#FFFFFF',
                  borderRadius: '0 0 2rem 2rem',
                  padding: '1rem',
                }}
              >
                <Typography variant="h6" color="primary" sx={{ marginBottom: '0.5rem' }}>
                  {personaje.name}
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: '0.5rem' }}>
                  <strong>Rol: </strong>
                  {personaje.role}
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: '1rem' }}>
                  {personaje.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    
  </Box>
);

export default Home;
