import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton, Box } from '@mui/material';
import { useState } from 'react';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { Icon } from '@iconify/react';

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
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Button color="inherit" component={Link} href="/">
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            ValorantGuide
          </Typography>
        </Button>
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, ml: 'auto' }}>
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
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton color="inherit" href="https://www.tiktok.com/@valorantguidetips" target="_blank" aria-label="Tiktok">
              <Icon icon="ic:baseline-tiktok" />
            </IconButton>
            <IconButton color="inherit" href="https://mauriciolores.com.ar" target="_blank" aria-label="Pagina Web">
              <Icon icon="mdi:web" />
            </IconButton>
            <IconButton color="inherit" href="https://www.youtube.com/channel/UCfJ03wdJcaJ6Rh84CGjIIiQ" target="_blank" aria-label="Youtube">
              <Icon icon="mdi:youtube" />
            </IconButton>
          </Box>
        </Box>
        {/* Botón del menú para pantallas pequeñas */}
        <Box sx={{ display: { xs: 'flex', sm: 'none' }, ml: 'auto' }}>
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
