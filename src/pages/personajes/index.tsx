import { Typography, Container, Grid } from '@mui/material';
import data from 'public/personajes.json'; 
import CharacterCard from 'src/components/CharacterCard';

const Personajes = () => {
  const personajes = data.personajes;

  return (
    <Container maxWidth="xl">
      <Typography variant="h2" gutterBottom align="center" margin={5}>
        Personajes de Valorant
      </Typography>
      <Grid container spacing={4}>
        {personajes.map((personaje) => (
          <Grid item xs={4} sm={3} md={2} key={personaje.id}>
            <CharacterCard personaje={personaje} />
          </Grid>
        ))}
      </Grid>
    </Container>
  ); 
};

export default Personajes;
