// src/components/NavBar.tsx
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor:'transparent'}}>
      <Toolbar>
        <Typography variant="h5" style={{ flexGrow: 1 }}>
          Mundo Valorant
        </Typography>
        <Button color="inherit" component={Link} href="/">
          Inicio
        </Button>
        <Button color="inherit" component={Link} href="/mapa">
          Mapas
        </Button>
        <Button color="inherit" component={Link} href="/personajes">
          Personajes
        </Button>
        <Button color="inherit" component={Link} href="/tutoriales">
          Tutoriales
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
