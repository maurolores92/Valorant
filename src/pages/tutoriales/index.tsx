import { useEffect, useState } from 'react';
import { Typography, Container, Grid, Card, CardMedia, CardContent, Link } from '@mui/material';

// Define los tipos de datos para tutoriales y mapas
interface Tutorial {
  title: string;
  url: string;
}

interface Map {
  id: number;
  name: string;
  // Otras propiedades de mapa si es necesario
}

interface TutorialesItem {
  characterId: number;
  mapId: number;
  tutorials: Tutorial[];
}

interface TutorialesMap {
  mapName: string;
  tutorials: Tutorial[];
}

const Tutoriales = () => {
  const [tutorialesData, setTutorialesData] = useState<TutorialesMap[]>([]);
  const [mapas, setMapas] = useState<{ [key: number]: string }>({}); // Guarda la relación entre mapId y mapName

  // Función para obtener los datos de tutoriales y mapas
  const fetchData = async () => {
    // Lee los datos de tutoriales desde el archivo JSON
    const tutorialesResponse = await fetch('/tutoriales.json');
    const tutoriales: TutorialesItem[] = await tutorialesResponse.json();

    // Lee los datos de mapas desde el archivo JSON
    const mapasResponse = await fetch('/mapas.json');
    const mapas = await mapasResponse.json();
    
    // Define el tipo para la respuesta de mapas
    interface MapasResponse {
      mapas: Map[];
    }
    const mapaMap = (mapas as MapasResponse).mapas.reduce((acc: { [key: number]: string }, mapa: Map) => {
      acc[mapa.id] = mapa.name;
      return acc;
    }, {});

    setMapas(mapaMap);

    // Organiza los tutoriales por mapa
    const tutorialesPorMapa: { [key: string]: Tutorial[] } = {};
    tutoriales.forEach((item) => {
      const mapName = mapaMap[item.mapId];
      if (mapName) {
        if (!tutorialesPorMapa[mapName]) {
          tutorialesPorMapa[mapName] = [];
        }
        // Filtrar tutoriales para incluir solo aquellos con URL no vacía
        const filteredTutorials = item.tutorials.filter(tutorial => tutorial.url.trim() !== '');
        tutorialesPorMapa[mapName].push(...filteredTutorials);
      }
    });

    // Convierte el objeto en un array para la representación en el UI
    const tutorialesArray = Object.entries(tutorialesPorMapa).map(([mapName, tutorials]) => ({
      mapName,
      tutorials,
    }));

    setTutorialesData(tutorialesArray);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" gutterBottom align="center" sx={{ margin: '2rem 0' }}>
        Tutoriales de Valorant
      </Typography>
      <Grid container spacing={4}>
        {tutorialesData.map(({ mapName, tutorials }) => (
          <Grid item xs={12} key={mapName}>
            <Typography variant="h4" gutterBottom>
              {mapName.charAt(0).toUpperCase() + mapName.slice(1)} {/* Capitaliza el nombre del mapa */}
            </Typography>
            <Grid container spacing={2}>
              {tutorials.map((tutorial, index) => (
                <Grid item xs={12} md={3} key={index}>
                  {tutorial.url ? (
                    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                      <CardMedia
                        component="iframe"
                        src={`https://www.youtube.com/embed/${new URL(tutorial.url).searchParams.get('v')}`}
                        title={tutorial.title}
                        sx={{
                          height: 200,
                          borderRadius: '8px',
                          overflow: 'hidden',
                        }}
                      />
                      <CardContent>
                        <Typography variant="h6">
                          <Link href={tutorial.url} target="_blank" rel="noopener" color="inherit">
                            {tutorial.title}
                          </Link>
                        </Typography>
                      </CardContent>
                    </Card>
                  ) : null}
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Tutoriales;
