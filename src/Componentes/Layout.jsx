import React, { useState } from "react";
import Menu from "./Menu"
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Layout = () => {
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => {
    setOpen(!open);
  };


  return (
    <div>
      <IconButton onClick={handleOpenMenu}>
        <MenuIcon />
      </IconButton>

      <h1 className="mi_formulario_titulo">Bienvenido a</h1>

      <Menu open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Layout;
