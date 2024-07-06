import { Box, Typography, Button, Grid, Link, IconButton } from '@mui/material';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#0f0f0f', // Color de fondo oscuro
        color: '#ffffff', // Texto blanco
        padding: { xs: '2rem 1rem 0 1rem'}, // Espaciado adaptable
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderTop: '2px solid #ff4655', // Borde superior llamativo
      }}
    >
      <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
        🎯 ¡Síguenos y Mantente al Tanto de las Últimas Noticias de Valorant! 🎯
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Link href="/mapa" color="inherit" underline="none" sx={{ mb: 1 }}>
              Mapas
            </Link>
            <Link href="/personajes" color="inherit" underline="none" sx={{ mb: 1 }}>
              Personajes
            </Link>
            <Link href="/tutoriales" color="inherit" underline="none" sx={{ mb: 1 }}>
              Tutoriales
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
            Síguenos en Redes Sociales
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton color="inherit" href="https://tiktok.com" target="_blank" aria-label="Tiktok">
              <Icon icon="ic:baseline-tiktok" />
            </IconButton>
            <IconButton color="inherit" href="https://mauriciolores.com" target="_blank" aria-label="Pagina Web">
              <Icon icon="mdi:web" />
            </IconButton>
            <IconButton color="inherit" href="https://youtube.com" target="_blank" aria-label="Youtube">
              <Icon icon="mdi:youtube" />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Link href="/privacy" color="inherit" underline="none" sx={{ mb: 1 }}>
              Política de Privacidad
            </Link>
            <Link href="/terms" color="inherit" underline="none" sx={{ mb: 1 }}>
              Términos y Condiciones
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
            Sobre Nosotros
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            Somos un sitio dedicado a brindarte la mejor guía y estrategias para Valorant. ¡Gracias por visitarnos!
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="body2" sx={{ textAlign: 'center', fontSize:'12px' }}>
        © {new Date().getFullYear()} Este sitio web no está afiliado ni patrocinado por Riot Games. Valorant y todas las imágenes y contenido relacionados son propiedad de Riot Games. Este sitio es solo para fines informativos y educativos. Para más información, visite el sitio oficial de Riot Games.
      </Typography>
    </Box>
  );
};

export default Footer;
