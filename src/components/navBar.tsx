// src/components/NavBar.tsx
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton, Box } from '@mui/material';
import { useState } from 'react';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMobileMenuOpen(false);
  };

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', borderBottom: '2px solid #ff4655' }}>
      <Toolbar>
      <Button color="inherit" component={Link} href="/">
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          ValorantGuide
        </Typography>
        </Button>
        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
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
          <Button color="inherit" component={Link} href="/colaboraciones">
            Colaboraciones
          </Button>
        </Box>
        {/* Botón del menú para pantallas pequeñas */}
        <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMobileMenuOpen}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
      {/* Menú desplegable para móviles */}
      <Menu
        anchorEl={anchorEl}
        open={mobileMenuOpen}
        onClose={handleMobileMenuClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleMobileMenuClose} component={Link} href="/">
          Inicio
        </MenuItem>
        <MenuItem onClick={handleMobileMenuClose} component={Link} href="/mapa">
          Mapas
        </MenuItem>
        <MenuItem onClick={handleMobileMenuClose} component={Link} href="/personajes">
          Personajes
        </MenuItem>
        <MenuItem onClick={handleMobileMenuClose} component={Link} href="/tutoriales">
          Tutoriales
        </MenuItem>
        <MenuItem onClick={handleMobileMenuClose} component={Link} href="/colaboraciones">
          Colaboraciones
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
