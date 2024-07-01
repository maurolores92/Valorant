// src/pages/tutoriales.tsx
import { Typography, Box, Container, Grid } from '@mui/material';
import TutorialCard from 'src/components/TutorialCard';

const tutoriales = [
  { id: 1, title: 'Cómo jugar en Bind', videoSrc: '/images/tutoriales/bind.mp4' },
  { id: 2, title: 'Guía de Phoenix', videoSrc: '/images/tutoriales/phoenix.mp4' },
];

const Tutoriales = () => (
  <Container>
    <Typography variant="h2" gutterBottom align="center">
      Tutoriales de Valorant
    </Typography>
    <Grid container spacing={4}>
      {tutoriales.map((tutorial) => (
        <Grid item xs={12} sm={6} md={4} key={tutorial.id}>
          <TutorialCard tutorial={tutorial} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Tutoriales;
