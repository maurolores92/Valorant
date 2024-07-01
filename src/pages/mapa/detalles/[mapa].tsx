// src/pages/mapa/detalles/[mapa].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import { Typography, Box, Container, Card, CardMedia, CardContent, Button, List, ListItem, ListItemText } from '@mui/material';
import data from 'public/valorant.json'; 
import React from 'react';

interface Props {
  mapa: {
    name: string;
    description: string;
    image: string;
    details?: {
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
    };
    personajes: {
      name: string;
      role: string;
      image: string;
      tutorials: { title: string; url: string }[];
    }[];
  };
}

const MapaDetalles = ({ mapa }: Props) => {
  const [selectedPersonaje, setSelectedPersonaje] = React.useState<{ name: string; role: string; image: string; tutorials: { title: string; url: string }[] } | null>(null);

  const handlePersonajeClick = (personaje: { name: string; role: string; image: string; tutorials: { title: string; url: string }[] }) => {
    setSelectedPersonaje(personaje);
  };

  return (
    <Container>
      <Box sx={{margin:'2rem 0'}}>
      <Card>
  <CardMedia
    component="img"
    height="300"
    image={mapa.image}
    alt={mapa.name}
    sx={{ objectFit: 'cover' }}
  />
  <CardContent>
    <Typography variant="h4" gutterBottom color="primary">
      {mapa.name}
    </Typography>
    <Typography variant="h6" gutterBottom color="secondary">
      {mapa.description}
    </Typography>
    {mapa.details && (
      <>
        {mapa.details.teletransportes && (
          <Typography variant="body2" color="textSecondary" gutterBottom>
            <strong>Teletransportes:</strong> {mapa.details.teletransportes}
          </Typography>
        )}
        {mapa.details.rutas && (
          <Typography variant="body2" color="textSecondary" gutterBottom>
            <strong>Rutas:</strong> {mapa.details.rutas}
          </Typography>
        )}
        {mapa.details.tres_sitios && (
          <Typography variant="body2" color="textSecondary" gutterBottom>
            <strong>Tres sitios:</strong> {mapa.details.tres_sitios}
          </Typography>
        )}
        {mapa.details.areas_abiertas_estrechas && (
          <Typography variant="body2" color="textSecondary" gutterBottom>
            <strong>Áreas abiertas y estrechas:</strong> {mapa.details.areas_abiertas_estrechas}
          </Typography>
        )}
        {mapa.details.zonas_elevadas && (
          <Typography variant="body2" color="textSecondary" gutterBottom>
            <strong>Zonas elevadas:</strong> {mapa.details.zonas_elevadas}
          </Typography>
        )}
        {mapa.details.medio_estrecho && (
          <Typography variant="body2" color="textSecondary" gutterBottom>
            <strong>Medio estrecho:</strong> {mapa.details.medio_estrecho}
          </Typography>
        )}
        {mapa.details.centro_abierto && (
          <Typography variant="body2" color="textSecondary" gutterBottom>
            <strong>Centro abierto:</strong> {mapa.details.centro_abierto}
          </Typography>
        )}
        {mapa.details.puertas_destructibles && (
          <Typography variant="body2" color="textSecondary" gutterBottom>
            <strong>Puertas destructibles:</strong> {mapa.details.puertas_destructibles}
          </Typography>
        )}
        {mapa.details.sitios_grandes && (
          <Typography variant="body2" color="textSecondary" gutterBottom>
            <strong>Sitios grandes:</strong> {mapa.details.sitios_grandes}
          </Typography>
        )}
        {mapa.details.cubiertas_y_lineas_de_vision && (
          <Typography variant="body2" color="textSecondary" gutterBottom>
            <strong>Cubiertas y líneas de visión:</strong> {mapa.details.cubiertas_y_lineas_de_vision}
          </Typography>
        )}
        {mapa.details.ataques_divididos && (
          <Typography variant="body2" color="textSecondary" gutterBottom>
            <strong>Ataques divididos:</strong> {mapa.details.ataques_divididos}
          </Typography>
        )}
        {mapa.details.rutas_variadas && (
          <Typography variant="body2" color="textSecondary" gutterBottom>
            <strong>Rutas variadas:</strong> {mapa.details.rutas_variadas}
          </Typography>
        )}
        {mapa.details.rutas_subterraneas && (
          <Typography variant="body2" color="textSecondary" gutterBottom>
            <strong>Rutas subterráneas:</strong> {mapa.details.rutas_subterraneas}
          </Typography>
        )}
        {mapa.details.angulos_complicados && (
          <Typography variant="body2" color="textSecondary" gutterBottom>
            <strong>Ángulos complicados:</strong> {mapa.details.angulos_complicados}
          </Typography>
        )}
        {mapa.details.diseno_abierto && (
          <Typography variant="body2" color="textSecondary" gutterBottom>
            <strong>Diseño abierto:</strong> {mapa.details.diseno_abierto}
          </Typography>
        )}
        {mapa.details.multiples_rutas && (
          <Typography variant="body2" color="textSecondary" gutterBottom>
            <strong>Múltiples rutas:</strong> {mapa.details.multiples_rutas}
          </Typography>
        )}
        {mapa.details.espacios_abiertos && (
          <Typography variant="body2" color="textSecondary" gutterBottom>
            <strong>Espacios abiertos:</strong> {mapa.details.espacios_abiertos}
          </Typography>
        )}
        {mapa.details.rutas_largas && (
          <Typography variant="body2" color="textSecondary" gutterBottom>
            <strong>Rutas largas:</strong> {mapa.details.rutas_largas}
          </Typography>
        )}
      </>
    )}
  </CardContent>
</Card>
      </Box>
      <Typography variant="body1" gutterBottom fontWeight={800} m={4}>
        Elige el personaje con el que jugaras
      </Typography>
      
      <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
        {mapa.personajes.map((personaje, index) => (
          <Button
            key={index}
            onClick={() => handlePersonajeClick(personaje)}
            sx={{
              width: 100,
              height: 200,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: 2,
              boxShadow: 2,
              padding: 0,
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <CardMedia
              component="img"
              height="150"
              image={personaje.image}
              alt={personaje.name}
              sx={{ width: '100%', objectFit: 'cover', flexShrink: 0, borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
            />
            <Typography variant="h6" sx={{ textAlign: 'center' }}>{personaje.name}</Typography>
            <Typography variant="body2" sx={{ textAlign: 'center' }}>{personaje.role}</Typography>
          </Button>
        ))}
      </Box>
      {selectedPersonaje && (
        <Box>
          <Typography variant="h5" gutterBottom align="center">
            Tutoriales para {selectedPersonaje.name}
          </Typography>
          <List>
            {selectedPersonaje.tutorials.map((tutorial, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={tutorial.title}
                  secondary={<a href={tutorial.url} target="_blank" rel="noopener noreferrer">Ver Tutorial</a>}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Lista de mapas disponibles desde el JSON
  const mapas = data.mapas.map((mapa) => mapa.name.toLowerCase());

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
  const mapa = data.mapas.find((mapa) => mapa.name.toLowerCase() === mapaName);

  if (!mapa) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      mapa,
    },
  };
};

export default MapaDetalles;
