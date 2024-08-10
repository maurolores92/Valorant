import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import {
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  Grid,
  Box,
  Link,
  Alert,
  IconButton
} from '@mui/material';
import { Icon } from '@iconify/react';

const personajes = [
  'Astra', 'Breach', 'Brimstone', 'Chamber', 'Cypher', 'Deadlock', 'Fade', 'Gekko',
  'Harbor', 'Jett', 'KAY/O', 'Killjoy', 'Neon', 'Omen', 'Phoenix', 'Raze', 'Reyna',
  'Sage', 'Skye', 'Sova', 'Viper', 'Yoru'
];

const mapas = [
  'Ascent', 'Bind', 'Breeze', 'Fracture', 'Haven', 'Icebox', 'Lotus', 'Pearl', 'Split', 'Sunset'
];

const ContactoColaboraciones = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    enlaceVideo: '',
    descripcionVideo: '',
    personaje: '',
    mapa: '',
    mensajeAdicional: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send(
      'service_pjkjt84',
      'template_ji4a656',
      {
        from_name: formData.nombre,
        from_email: formData.email,
        video_link: formData.enlaceVideo,
        video_description: formData.descripcionVideo,
        character: formData.personaje,
        map: formData.mapa,
        additional_message: formData.mensajeAdicional,
        site_name: 'Nombre de tu Sitio Web'
      },
      'KFILfWDYSkUZMtPXZ'
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSuccessMessage('¡Tu mensaje ha sido enviado exitosamente!');
      setErrorMessage('');
      setFormData({
        nombre: '',
        email: '',
        enlaceVideo: '',
        descripcionVideo: '',
        personaje: '',
        mapa: '',
        mensajeAdicional: ''
      });
    }).catch((err) => {
      console.error('FAILED...', err);
      setErrorMessage('Ocurrió un error al enviar tu mensaje. Por favor, intenta nuevamente.');
      setSuccessMessage('');
    });
  };

  return (
    <Container sx={{margin:'4rem auto'}}>
      <Typography variant="h4" gutterBottom >
        Contacto y Colaboraciones
      </Typography>
      <Typography variant="body1" paragraph>
        ¡Gracias por visitar nuestra sección de Contacto y Colaboraciones! Estamos buscando creadores de contenido que quieran compartir sus tutoriales y lineups de Valorant con nuestra comunidad. Si tienes videos útiles, nos encantaría publicarlos en nuestro sitio web.
      </Typography>
      {successMessage && <Alert severity="success">{successMessage}</Alert>}
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="nombre"
              name="nombre"
              label="Nombre"
              fullWidth
              value={formData.nombre}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="email"
              name="email"
              label="Correo Electrónico"
              fullWidth
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="enlaceVideo"
              name="enlaceVideo"
              label="Enlace al Video"
              fullWidth
              value={formData.enlaceVideo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="descripcionVideo"
              name="descripcionVideo"
              label="Descripción del Video"
              multiline
              rows={4}
              fullWidth
              value={formData.descripcionVideo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              select
              id="personaje"
              name="personaje"
              label="Personaje"
              fullWidth
              value={formData.personaje}
              onChange={handleChange}
            >
              {personajes.map((personaje) => (
                <MenuItem key={personaje} value={personaje}>
                  {personaje}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              select
              id="mapa"
              name="mapa"
              label="Mapa"
              fullWidth
              value={formData.mapa}
              onChange={handleChange}
            >
              {mapas.map((mapa) => (
                <MenuItem key={mapa} value={mapa}>
                  {mapa}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="mensajeAdicional"
              name="mensajeAdicional"
              label="Mensaje Adicional"
              multiline
              rows={4}
              fullWidth
              value={formData.mensajeAdicional}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Enviar
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Typography variant="body1" paragraph>
        Para consultas directas, puedes enviarnos un correo electrónico a{' '}
        <Link href="mailto:tuemail@example.com">tuemail@example.com</Link>.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Síguenos en nuestras redes sociales
      </Typography>
      <Box sx={{ display: 'flex', }}>
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
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Directrices para la Colaboración
      </Typography>
      <Typography variant="body1" paragraph>
        Asegúrate de que tus videos sean claros, con buena calidad de audio y video, y que proporcionen información útil y detallada sobre los lineups y setups de personajes en los mapas específicos de Valorant. Revisaremos todas las propuestas de video y nos pondremos en contacto contigo en un plazo de 1-2 semanas. Nos reservamos el derecho de editar o rechazar contenido que no cumpla con nuestros estándares de calidad.
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Ejemplo de Colaboración Exitosa
      </Typography>
      <Typography variant="body1" paragraph>
        Recientemente publicamos un video de{' '}
        <Link href="https://ejemplo.com" target="_blank" rel="noopener">
          Nombre del Colaborador
        </Link>{' '}
        sobre setups de Cypher en Bind. Puedes ver el resultado{' '}
        <Link href="https://enlace-a-colaboracion.com" target="_blank" rel="noopener">
          aquí
        </Link>.
      </Typography>
    </Container>
  );
};

export default ContactoColaboraciones;
