import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const PrivacyPolicy: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Política de Privacidad
        </Typography>
        <Typography variant="body1" gutterBottom>
          1. Introducción
        </Typography>
        <Typography variant="body2" paragraph>
          Bienvenido a ValorantGuide. ValorantGuide nosotros nos comprometemos a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos sus datos personales cuando visita nuestro sitio web valorantguide.com.
        </Typography>
        <Typography variant="body1" gutterBottom>
          2. Qué datos recopilamos
        </Typography>
        <Typography variant="body2" paragraph>
          Recopilamos los siguientes tipos de datos personales:
          </Typography>
          <Box component="ul" sx={{ paddingLeft: '1.5rem' }}>
          <Typography component="li" variant="body2">Información de contacto: dirección de correo electrónico, nombre (cuando se proporciona).</Typography>
          <Typography component="li" variant="body2">Datos de uso: información sobre cómo accede y utiliza nuestro sitio web.</Typography>
          <Typography component="li" variant="body2">Cookies y tecnologías de seguimiento: para mejorar su experiencia en nuestro sitio.</Typography>
          </Box>
        <Typography variant="body1" gutterBottom>
          3. Cómo utilizamos sus datos
        </Typography>
        <Typography variant="body2" paragraph>
          Utilizamos los datos recopilados para:
          </Typography>
          <Box component="ul" sx={{ paddingLeft: '1.5rem' }}>
          <Typography component="li" variant="body2">Proporcionar y mantener nuestro sitio web.</Typography>
          <Typography component="li" variant="body2">Mejorar y personalizar su experiencia en nuestro sitio.</Typography>
          <Typography component="li" variant="body2">Enviar boletines informativos, información sobre actualizaciones y promociones (si ha optado por recibirlos).</Typography>
          <Typography component="li" variant="body2">Analizar el tráfico y uso del sitio para mejorar nuestros servicios.</Typography>
          
          </Box>
        
        <Typography variant="body1" gutterBottom>
          4. Con quién compartimos sus datos
        </Typography>
        <Typography variant="body2" paragraph>
          No compartimos sus datos personales con terceros, excepto en las siguientes circunstancias:
          </Typography>
          <Typography component="li" variant="body2">Proveedores de servicios: como plataformas de análisis y servicios de correo electrónico, para facilitar nuestras operaciones.</Typography>
          <Typography component="li" variant="body2">Cumplimiento legal: si es requerido por ley o para proteger nuestros derechos legales.</Typography>
        <Typography variant="body1" gutterBottom>
          5. Cómo pueden los usuarios controlar el uso de sus datos
        </Typography>
        <Typography variant="body2" paragraph>
          Usted tiene el derecho de:
          </Typography>
          <Typography component="li" variant="body2">Acceder a sus datos personales que hemos recopilado.</Typography>
          <Typography component="li" variant="body2">Solicitar la corrección o eliminación de sus datos personales.</Typography>
          <Typography component="li" variant="body2">Optar por no recibir comunicaciones de marketing en cualquier momento.</Typography>
          
        
        <Typography variant="body1" gutterBottom>
          6. Seguridad de los datos
        </Typography>
        <Typography variant="body2" paragraph>
          Implementamos medidas de seguridad razonables para proteger sus datos personales contra accesos no autorizados, alteraciones, divulgaciones o destrucciones.
        </Typography>
        <Typography variant="body1" gutterBottom>
          7. Cambios en esta Política de Privacidad
        </Typography>
        <Typography variant="body2" paragraph>
          Podemos actualizar nuestra Política de Privacidad ocasionalmente. Le notificaremos de cualquier cambio publicando la nueva política en esta página.
        </Typography>
        <Typography variant="body1" gutterBottom>
          8. Contacto
        </Typography>
        <Typography variant="body2" paragraph>
          Si tiene alguna pregunta sobre esta Política de Privacidad, contáctenos en maurolores1992@gmail.com.
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
