import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Card, CardContent, Typography, CardMedia, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

// Define los tipos de datos para tutoriales y mapas
interface Tutorial {
  title: string;
  url: string;
}

interface RecommendedMap {
  map: string;
  reason: string;
}

interface Character {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string;
  recommendedMaps: RecommendedMap[];
}

interface Map {
  id: number;
  name: string;
  description: string;
  image: string;
  details: {
    teletransportes: string;
    rutas: string;
  };
  personajes: {
    name: string;
    role: string;
    image: string;
    tutorials: Tutorial[];
  }[];
}

interface CharacterDetailProps {
  personajes: Character[];
  mapas: Map[];
}

const CharacterDetail = ({ personajes, mapas }: CharacterDetailProps) => {
  const router = useRouter();
  const { id } = router.query;
  const [character, setCharacter] = useState<Character | null>(null);
  const [selectedMap, setSelectedMap] = useState<string | null>(null);
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);

  useEffect(() => {
    if (id) {
      const selectedCharacter = personajes.find(personaje => personaje.id === id);
      setCharacter(selectedCharacter || null);
      setSelectedMap(null); // Reset map selection when character changes
    }
  }, [id, personajes]);

  useEffect(() => {
    if (selectedMap && character) {
      const map = mapas.find(map => map.name === selectedMap);
      if (map) {
        const characterOnMap = map.personajes.find(p => p.name === character.name);
        setTutorials(characterOnMap?.tutorials || []);
      }
    }
  }, [selectedMap, character, mapas]);

  if (!character) {
    return <Typography variant="h6">Cargando...</Typography>;
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
        <CardMedia
          component="img"
          height="400"
          image={character.image}
          alt={character.name}
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
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" sx={{ marginBottom: '0.5rem' }}>
            {character.name}
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: '0.5rem' }}>
            <strong>Rol:</strong> {character.role}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
            {character.description}
          </Typography>
          <FormControl fullWidth variant="outlined" sx={{ marginBottom: '2rem' }}>
            <InputLabel>Selecciona un Mapa</InputLabel>
            <Select
              value={selectedMap || ''}
              onChange={(e) => setSelectedMap(e.target.value as string)}
              label="Selecciona un Mapa"
            >
              {character.recommendedMaps.map((map: RecommendedMap, index: number) => (
                <MenuItem key={index} value={map.map}>{map.map}</MenuItem>
              ))}
            </Select>
          </FormControl>
          {selectedMap && (
            <>
              <Typography variant="h5" sx={{ marginBottom: '1rem' }}>
                <strong>Videos para {selectedMap}:</strong>
              </Typography>
              {tutorials.length === 0 ? (
                <Typography variant="body2">No hay videos disponibles para este mapa.</Typography>
              ) : (
                <ul>
                  {tutorials.map((tutorial, index) => (
                    <li key={index}>
                      <a href={tutorial.url} target="_blank" rel="noopener noreferrer">
                        {tutorial.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CharacterDetail;
