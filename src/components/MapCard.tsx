// src/components/MapCard.tsx
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import Link from 'next/link';

interface MapCardProps {
  mapa: {
    id: number;
    name: string;
    description: string;
    image: string;
  };
}

const MapCard = ({ mapa }: MapCardProps) => {
  if (!mapa) {
    return null;
  }

  return (
    <Card
      component={Link}
      href={`/mapa/detalles/${mapa.name.toLowerCase()}`}
      sx={{
        position: 'relative',
        textDecoration: 'none',
        color: 'inherit',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          boxShadow: '0 6px 18px rgba(0, 0, 0, 0.3)',
        },
      }}
    >
      <CardMedia
        component="img"
        height="100%"
        image={mapa.image}
        alt={mapa.name}
        sx={{
          objectFit: 'cover',
        borderRadius:'2rem',
        }}
      />
      <CardContent
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          m: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.)',
          color: '#FFFFFF',
          borderRadius: '4px',
          padding: '0.5rem',
        }}
      >
        <Typography variant="h6">{mapa.name}</Typography>
        <Typography variant="body2">{mapa.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default MapCard;
