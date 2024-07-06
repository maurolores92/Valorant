// src/pages/Mapas.tsx
import { Typography, Container, Grid } from '@mui/material';
import MapCard from 'src/components/MapCard';
import data from 'public/mapas.json'; 

const Mapas = () => {
  const mapas = data.mapas;

  return (
    <Container maxWidth="xl">
      <Typography variant="h2" gutterBottom margin={5}>
        Selecciona el mapa con el que jugaras
      </Typography>
      <Grid container spacing={4} margin={4}>
        {mapas.map((mapa) => (
          <Grid item xs={12} sm={6} md={4} key={mapa.name}>
            <MapCard mapa={mapa} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Mapas;
