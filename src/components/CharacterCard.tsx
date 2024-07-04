import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { FC } from 'react';
import Link from 'next/link';

interface CharacterCardProps {
  personaje: {
    id: string;
    name: string;
    role: string;
    image: string;
  };
}

const CharacterCard = ({ personaje }: CharacterCardProps) => {
  if (!personaje) {
    return null;
  }

  return (
    <Card
      component={Link}
      href={`/personajes/detalles/${personaje.name.toLowerCase()}`}
      sx={{
        cursor: 'pointer',
        margin: '2rem 0',
        textDecoration: 'none',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        borderRadius: '16px',
        overflow: 'hidden',
        '&:hover': {
          boxShadow: '0 6px 18px rgba(0, 0, 0, 0.3)',
        },
      }}
    >
      <CardMedia
        component="img"
        height="300"
        image={personaje.image}
        alt={personaje.name}
        sx={{
          objectFit: 'cover',
          objectPosition: 'top',
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
        }}
      />
      <CardContent
        sx={{
          borderTop: 'solid 2px #ff4655',
          backgroundColor: 'white',
          borderBottomLeftRadius: '16px',
          borderBottomRightRadius: '16px',
        }}
      >
        <Typography variant="h6" color={"primary"}>
          {personaje.name}
        </Typography>
        <Typography color="secondary" fontWeight={600}>
          {personaje.role}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
