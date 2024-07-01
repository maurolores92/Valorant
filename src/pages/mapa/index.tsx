// src/pages/Mapas.tsx
import { Typography, Container, Grid } from '@mui/material';
import MapCard from 'src/components/MapCard';
import data from 'public/valorant.json'; 

const Mapas = () => {
  const mapas = data.mapas; // Obtener los mapas del JSON

  return (
    <Container maxWidth="xl">
      <Typography variant="h2" gutterBottom align="center" margin={5}>
        Mapas de Valorant
      </Typography>
      <Grid container spacing={4}>
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
