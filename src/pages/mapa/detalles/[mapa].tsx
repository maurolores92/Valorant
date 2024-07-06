import { GetStaticPaths, GetStaticProps } from 'next';
import { Typography, Box, Container, Card, CardMedia, CardContent, Button, Grid } from '@mui/material';
import mapsData from 'public/mapas.json'; 
import data from 'public/personajes.json';
import tutorialsData from 'public/tutoriales.json'; 
import React, { useState } from 'react';
import { useRouter } from 'next/router';

interface DetalleMapa {
  id: number;
  name: string;
  description: string;
  map: string;
  image: string;
  details: {
    teletransportes?: string;
    rutas?: string;
    tres_sitios?: string;
    areas_abiertas_estrechas?: string;
    zonas_elevadas?: string;
    medio_estrecho?: string;
    centro_abierto?: string;
    puertas_destructibles?: string;
    sitios_grandes?: string;
    cubiertas_y_lineas_de_vision?: string;
    ataques_divididos?: string;
    rutas_variadas?: string;
    rutas_subterraneas?: string;
    angulos_complicados?: string;
    diseno_abierto?: string;
    multiples_rutas?: string;
    espacios_abiertos?: string;
    rutas_largas?: string;
    niveles_multiples?: string;
    rutas_estrechas?: string;
  };
}

interface Personaje {
  id: string;
  name: string;
  face: string;
}

interface TutorialDetail {
  title: string;
  url: string;
}

interface Tutorial {
  characterId: number;
  mapId?: number;
  rmapId?: number;
  rrmapId?: number;
  tutorials: TutorialDetail[];
}

interface Props {
  mapa: DetalleMapa;
}

const MapaDetalles = ({ mapa }: Props) => {
  const router = useRouter();
  const [selectedPersonaje, setSelectedPersonaje] = useState<Personaje | null>(null);

  // Lista de personajes disponibles desde el JSON
  const personajes = data.personajes;

  // Función para manejar la selección de un personaje
  const handlePersonajeSelection = (personaje: Personaje) => {
    setSelectedPersonaje(personaje);
  };

  // Filtrar tutoriales basados en el personaje y el mapa seleccionado
  const filteredTutorials = tutorialsData.filter((tutorial: Tutorial) => 
    tutorial.characterId === Number(selectedPersonaje?.id) && // Convertimos a número aquí
    (tutorial.mapId === mapa.id || tutorial.rmapId === mapa.id || tutorial.rrmapId === mapa.id)
  );

  const getYouTubeVideoId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <Container>
      <Button
          variant="contained"
          onClick={() => router.push('/mapa')}
          sx={{ marginTop: 4, }}
        >
          Volver a Mapas
        </Button>
      <Box sx={{ margin: '2rem 0' }}>
        <Card>
          <CardMedia
            component="img"
            height="300"
            image={mapa.image}
            alt={mapa.name}
            sx={{ objectFit: 'cover' }}
          />
          <CardContent sx={{display:'flex'}}>
          <Grid container spacing={10}>
          <Grid item xs={8} key={mapa.id}>
            <Typography variant="h3" gutterBottom color="primary">
              {mapa.name}
            </Typography>
            <Typography variant="h4" gutterBottom color="secondary">
              {mapa.description}
            </Typography>
            {mapa.details && (
              <>
                {mapa.details.teletransportes && (
                  <Typography variant="body1" color="textSecondary" gutterBottom>
                    <strong>Teletransportes:</strong> {mapa.details.teletransportes}
                  </Typography>
                )}
                {mapa.details.rutas && (
                  <Typography variant="body1" color="textSecondary" gutterBottom>
                    <strong>Rutas:</strong> {mapa.details.rutas}
                  </Typography>
                )}
                {mapa.details.tres_sitios && (
                  <Typography variant="body1" color="textSecondary" gutterBottom>
                    <strong>Tres sitios:</strong> {mapa.details.tres_sitios}
                  </Typography>
                )}
                {mapa.details.areas_abiertas_estrechas && (
                  <Typography variant="body1" color="textSecondary" gutterBottom>
                    <strong>Áreas abiertas y estrechas:</strong> {mapa.details.areas_abiertas_estrechas}
                  </Typography>
                )}
                {mapa.details.zonas_elevadas && (
                  <Typography variant="body1" color="textSecondary" gutterBottom>
                    <strong>Zonas elevadas:</strong> {mapa.details.zonas_elevadas}
                  </Typography>
                )}
                {mapa.details.medio_estrecho && (
                  <Typography variant="body1" color="textSecondary" gutterBottom>
                    <strong>Medio estrecho:</strong> {mapa.details.medio_estrecho}
                  </Typography>
                )}
                {mapa.details.centro_abierto && (
                  <Typography variant="body1" color="textSecondary" gutterBottom>
                    <strong>Centro abierto:</strong> {mapa.details.centro_abierto}
                  </Typography>
                )}
                {mapa.details.puertas_destructibles && (
                  <Typography variant="body1" color="textSecondary" gutterBottom>
                    <strong>Puertas destructibles:</strong> {mapa.details.puertas_destructibles}
                  </Typography>
                )}
                {mapa.details.sitios_grandes && (
                  <Typography variant="body1" color="textSecondary" gutterBottom>
                    <strong>Sitios grandes:</strong> {mapa.details.sitios_grandes}
                  </Typography>
                )}
                {mapa.details.cubiertas_y_lineas_de_vision && (
                  <Typography variant="body1" color="textSecondary" gutterBottom>
                    <strong>Cubiertas y líneas de visión:</strong> {mapa.details.cubiertas_y_lineas_de_vision}
                  </Typography>
                )}
                {mapa.details.ataques_divididos && (
                  <Typography variant="body1" color="textSecondary" gutterBottom>
                    <strong>Ataques divididos:</strong> {mapa.details.ataques_divididos}
                  </Typography>
                )}
                {mapa.details.rutas_variadas && (
                  <Typography variant="body1" color="textSecondary" gutterBottom>
                    <strong>Rutas variadas:</strong> {mapa.details.rutas_variadas}
                  </Typography>
                )}
                {mapa.details.rutas_subterraneas && (
                  <Typography variant="body1" color="textSecondary" gutterBottom>
                    <strong>Rutas subterráneas:</strong> {mapa.details.rutas_subterraneas}
                  </Typography>
                )}
                {mapa.details.angulos_complicados && (
                  <Typography variant="body1" color="textSecondary" gutterBottom>
                    <strong>Ángulos complicados:</strong> {mapa.details.angulos_complicados}
                  </Typography>
                )}
                {mapa.details.diseno_abierto && (
                  <Typography variant="body1" color="textSecondary" gutterBottom>
                    <strong>Diseño abierto:</strong> {mapa.details.diseno_abierto}
                  </Typography>
                )}
                {mapa.details.multiples_rutas && (
                  <Typography variant="body1" color="textSecondary" gutterBottom>
                    <strong>Múltiples rutas:</strong> {mapa.details.multiples_rutas}
                  </Typography>
                )}
                {mapa.details.espacios_abiertos && (
                  <Typography variant="body1" color="textSecondary" gutterBottom>
                    <strong>Espacios abiertos:</strong> {mapa.details.espacios_abiertos}
                  </Typography>
                )}
                {mapa.details.rutas_largas && (
                  <Typography variant="body1" color="textSecondary" gutterBottom>
                    <strong>Rutas largas:</strong> {mapa.details.rutas_largas}
                  </Typography>
                )}
                {mapa.details.niveles_multiples && (
                  <Typography variant="body1" color="textSecondary" gutterBottom>
                    <strong>Niveles Multiples:</strong> {mapa.details.niveles_multiples}
                  </Typography>
                )}
                {mapa.details.rutas_estrechas && (
                  <Typography variant="body1" color="textSecondary" gutterBottom>
                    <strong>Rutas estrechas:</strong> {mapa.details.rutas_estrechas}
                  </Typography>
                )}
              </>
            )}
            </Grid>
            <Grid item xs={4} key={mapa.id}>
            <CardMedia
            component="img"            
            image={mapa.map}
            alt={mapa.name}
            sx={{ objectFit: 'cover', width:"300px", height:'300px' }}
          />
          </Grid>
          </Grid>
          </CardContent>
        </Card>
      </Box>
      <Typography variant="h6" gutterBottom marginY={2}>
        Selecciona el personaje con el que jugarás
      </Typography>

      <Grid container spacing={2} sx={{ maxWidth: '1200px', margin: '2rem 0' }}>
  {personajes.map((personaje) => (
    <Grid item key={personaje.id}>
      <Card 
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          '&:hover': {
            boxShadow: '0 6px 18px rgba(0, 0, 0, 0.3)',
            transform: 'scale(1.1)',  // Escala al 105% al pasar el mouse
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',  // Añadir transición suave
          },
          borderRadius: '8px',
          cursor: 'pointer',
        }}
        onClick={() => handlePersonajeSelection(personaje)}
      >
        <CardMedia
          component="img"
          image={personaje.face}
          alt={personaje.name}
          sx={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
        />
      </Card>
    </Grid>
  ))}
</Grid>


      {selectedPersonaje && filteredTutorials.length > 0 && (
  <Box sx={{ margin: '2rem 0' }}>
    <Typography variant="h6" gutterBottom>
      Tutoriales para {selectedPersonaje.name} en {mapa.name}
    </Typography>
    <Grid container spacing={2}>
      {filteredTutorials.map((tutorialItem, index) => (
        tutorialItem.tutorials.map((tutorial, subIndex) => {
          const videoId = getYouTubeVideoId(tutorial.url);
          return (
            videoId && (
              <Grid item key={`${index}-${subIndex}`} xs={12} md={6} lg={6}>
                <Card>
                  <CardContent>
                    <iframe
                      width="100%"
                      height="315"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </CardContent>
                </Card>
              </Grid>
            )
          );
        })
      ))}
    </Grid>
  </Box>
)}
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Lista de mapas disponibles desde el JSON
  const mapas = mapsData.mapas.map((mapa) => mapa.name.toLowerCase());

  // Crear rutas dinámicas para cada mapa
  const paths = mapas.map((mapa) => ({
    params: { mapa },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const mapaName = params?.mapa as string;

  // Encontrar el mapa correspondiente en los datos JSON
  const mapa = mapsData.mapas.find((mapa) => mapa.name.toLowerCase() === mapaName);

  if (!mapa) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      mapa: {
        ...mapa
      },
    },
  };
};

export default MapaDetalles;
