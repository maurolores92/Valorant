import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const TermsAndConditions: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Términos y Condiciones
        </Typography>
        <Typography variant="body1" gutterBottom>
          1. Introducción
        </Typography>
        <Typography variant="body2" paragraph>
          Bienvenido a ValorantGuide. Al acceder y utilizar nuestro sitio web valorantguide.com, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones. Si no está de acuerdo con estos términos, no debe usar nuestro sitio.
        </Typography>
        <Typography variant="body1" gutterBottom>
          2. Uso del Sitio
        </Typography>
        <Typography variant="body2" paragraph>
        Usted se compromete a usar nuestro sitio web de manera legal y ética. No debe:
      </Typography>
      <Box component="ul" sx={{ paddingLeft: '1.5rem' }}>
        <Typography component="li" variant="body2">
          Usar nuestro sitio para cualquier propósito ilegal o no autorizado.
        </Typography>
        <Typography component="li" variant="body2">
          Intentar obtener acceso no autorizado a nuestro sitio o sistemas relacionados.
        </Typography>
        <Typography component="li" variant="body2">
          Utilizar nuestro sitio de manera que pueda dañar, deshabilitar, sobrecargar o deteriorar el funcionamiento del mismo.
        </Typography>
      </Box>
        <Typography variant="body1" gutterBottom>
          3. Propiedad Intelectual
        </Typography>
        <Typography variant="body2" paragraph>
          Todo el contenido relacionado con el juego Valorant es propiedad de Riot Games. ValorantGuide no reclama ningún derecho sobre dicho contenido. Todos los videos de YouTube presentados en nuestro sitio son propiedad de sus respectivos creadores y no reclamamos ningún derecho sobre ellos.
        </Typography>
        <Typography variant="body1" gutterBottom>
          4. Enlaces a Terceros
        </Typography>
        <Typography variant="body2" paragraph>
          Nuestro sitio puede contener enlaces a sitios web de terceros. No tenemos control sobre el contenido, las políticas de privacidad o las prácticas de estos sitios web y no asumimos ninguna responsabilidad por ellos. Le recomendamos leer los términos y condiciones y las políticas de privacidad de cualquier sitio web de terceros que visite.
        </Typography>
        <Typography variant="body1" gutterBottom>
          5. Limitación de Responsabilidad
        </Typography>
        <Typography variant="body2" paragraph>
          En la máxima medida permitida por la ley aplicable, ValorantGuide no será responsable de ningún daño indirecto, incidental, especial, consecuente o punitivo, ni de ninguna pérdida de ingresos, ganancias, datos o uso, que surja de o esté relacionado con su uso de nuestro sitio.
        </Typography>
        <Typography variant="body1" gutterBottom>
          6. Cambios a los Términos y Condiciones
        </Typography>
        <Typography variant="body2" paragraph>
          Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Publicaremos los términos actualizados en esta página y actualizaremos la fecha de vigencia. Su uso continuado de nuestro sitio después de cualquier cambio constituye su aceptación de los nuevos términos.
        </Typography>
        <Typography variant="body1" gutterBottom>
          7. Contacto
        </Typography>
        <Typography variant="body2" paragraph>
          Si tiene alguna pregunta sobre estos Términos y Condiciones, contáctenos en [tu_email@example.com].
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsAndConditions;
