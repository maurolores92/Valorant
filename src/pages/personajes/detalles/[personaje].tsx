// pages/personajes/[id].tsx
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Container, Typography, Box, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';
import data from 'public/personajes.json';
import mapasData from 'public/mapas.json'; // Importa mapas.json
import tutorialesData from 'public/tutoriales.json'; // Importa tutoriales.json
import { useRouter } from 'next/router';
import { useState } from 'react';

interface RecommendedMap {
  map: string;
  reason: string;
}

interface Personaje {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string;
  recommendedMaps: RecommendedMap[];
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
  personaje: Personaje;
}

const PersonajeDetalles: NextPage<Props> = ({ personaje }) => {
  const router = useRouter();
  const [selectedMap, setSelectedMap] = useState<string | null>(null);

  // Crea un mapa de mapas para acceder a la imagen y el ID
  const mapas = mapasData.mapas.reduce((acc: { [key: string]: { image: string, id: number } }, mapa) => {
    acc[mapa.name] = { image: mapa.image, id: mapa.id };
    return acc;
  }, {});

  // Función para obtener el ID de YouTube a partir de una URL
  const getYouTubeVideoId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Filtra los tutoriales para el personaje y el mapa seleccionado
  const filteredTutorials = selectedMap ? tutorialesData.filter((tutorial: Tutorial) =>
    tutorial.characterId === Number(personaje.id) &&
    (tutorial.mapId === mapas[selectedMap]?.id || tutorial.rmapId === mapas[selectedMap]?.id || tutorial.rrmapId === mapas[selectedMap]?.id)
  ) : [];

  return (
    <Container maxWidth="xl">
      <Button
          variant="contained"
          onClick={() => router.push('/personajes')}
          sx={{ marginTop: 4, }}
        >
          Volver a Personajes
        </Button>
      <Box sx={{ margin: '2rem 0' }}>
        <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, borderRadius: '16px', overflow: 'hidden', maxWidth:'1000px', margin:'0 auto' }}>
          <CardMedia
            component="img"
            image={personaje.image}
            alt={personaje.name}
            sx={{ objectFit: 'cover', width: { xs: '100%', md: '40%' } }}  // Imagen ocupa el 40% en pantallas grandes y 100% en pantallas pequeñas
          />
          <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem' }}>
            <Typography variant="h2" gutterBottom align="center" color={"primary"} marginY={2}>
              {personaje.name}
            </Typography>
            <Typography variant="h5" align="center" color={"secondary"} marginY={2}>
              {personaje.role}
            </Typography>
            <Typography variant="body1" align="center" marginY={2}>
              {personaje.description}
            </Typography>
            <Typography variant="h6" gutterBottom align="center" margin={2}>
              Mapas Recomendados
            </Typography>
            <Grid container spacing={2}>
              {personaje.recommendedMaps.map((map) => (
                <Grid item xs={12} sm={12} key={map.map}>
                  <Box sx={{  border: '1px solid ', borderRadius: 1, display: 'flex', alignItems: 'center' }}>
                    {mapas[map.map] && (
                      <CardMedia
                        component="img"
                        image={mapas[map.map].image}
                        alt={map.map}
                        sx={{ width: "180px", height: 100, objectFit: 'cover', marginRight: 2 }}  
                      />
                    )}
                    <Box>
                      <Typography variant="h6">{map.map}</Typography>
                      <Typography variant="body2">{map.reason}</Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>

        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h6" gutterBottom align="center" marginY={2}>
            Selecciona el mapa que jugaras
          </Typography>
          <Grid container spacing={2}>
  {mapasData.mapas.map((mapa) => (
    <Grid item xs={12} sm={6} md={2} key={mapa.name}>
      <Button
        variant="contained"
        onClick={() => setSelectedMap(mapa.name)}
        sx={{
          padding: 0, // Elimina el padding del botón
          boxShadow: 'none', // Elimina el shadow del botón
          borderRadius: '16px', // Asegura que el borde sea redondeado
          overflow: 'hidden',
          '&:hover': {
            boxShadow: '0 6px 18px rgba(0, 0, 0, 0.3)',
          },
        }}
      >
        <CardMedia
          component="img"
          image={mapa.image}
          alt={mapa.name}
          sx={{
            objectFit: 'cover',
            width: '100%', // Asegura que la imagen ocupe todo el botón
            height: 'auto',
          }}
        />
      </Button>
    </Grid>
  ))}
</Grid>
        </Box>

        {selectedMap && (
          <Box sx={{ marginTop: 4 }}>
            <Typography variant="h6" gutterBottom align="center" marginY={2}>
              Tutoriales para {personaje.name} en {selectedMap}
            </Typography>
            <Grid container spacing={2}>
              {filteredTutorials.flatMap((tutorialItem, index) =>
                tutorialItem.tutorials.map((tutorial, subIndex) => {
                  const videoId = getYouTubeVideoId(tutorial.url);
                  return (
                    videoId && (
                      <Grid item key={`${index}-${subIndex}`} xs={12} md={6} lg={6}>
                        <Card>
                          <CardContent>
                            <Typography variant="body1" gutterBottom color={"secondary"} fontWeight={600}>{tutorial.title}</Typography>
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
              )}
            </Grid>
          </Box>
        )}

        
      </Box>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Lista de personajes disponibles desde el JSON
  const personajes = data.personajes.map((personaje) => personaje.name.toLowerCase());

  // Crear rutas dinámicas para cada personaje
  const paths = personajes.map((personaje) => ({
    params: { personaje },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const personajeName = params?.personaje as string;

  // Encontrar el personaje correspondiente en los datos JSON
  const personaje = data.personajes.find((personaje) => personaje.name.toLowerCase() === personajeName);

  if (!personaje) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      personaje: {
        ...personaje
      },
    },
  };
};

export default PersonajeDetalles;
