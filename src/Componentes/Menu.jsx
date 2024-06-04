import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importar Link desde react-router-dom
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';


function Menu({ open, onClose }) {
  const [menuItems, setMenuItems] = useState({
    home: {
      name: 'Inicio',
      link: '/'
    },
    token: {
      name: 'Doctor',
      link: '/doctor'
    },
    cv: {
      name: 'Dietas',
      link: '/dietas'
    },
    practices: {
      name: 'Paciente',
      link:'/paciente',
      showChildren: false,
      childs: [
        {
          name: 'Registro Paciente',
          link: '/RegistroPacientes'
        },
        {
          name: 'Registros de Pacientes',
          link: '/registrosPacientes'
        }
      ]
    }
  });

  const handleToggleChildren = (key) => {
    setMenuItems((prevMenuItems) => {
      const item = prevMenuItems[key];
      return {
        ...prevMenuItems,
        [key]: {
          ...item,
          showChildren: !item.showChildren
        }
      };
    });
  };

  const handleRedirect = () => {
    console.log('Redirecting...');
    onClose();
  };

  const renderMenuItems = (items) => {
    return (
      <List>
        {Object.keys(items).map((key) => {
          const item = items[key];
          if (item.childs) {
            return (
              <React.Fragment key={key}>
                <ListItemButton onClick={() => handleToggleChildren(key)}>
                  <ListItemText primary={item.name} />
                  {item.showChildren ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                </ListItemButton>
                {item.showChildren && (
                  <List sx={{ pl: 2, backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                    {renderMenuItems(item.childs)}
                  </List>
                )}
              </React.Fragment>
            );
          } else {
            return (
              <ListItemButton key={key} component={Link} to={item.link} onClick={handleRedirect}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            );
          }
        })}
      </List>
    );
  };
  

  return (
    <Drawer open={open} onClose={onClose} anchor="left">
      <Box sx={{ width: 250 }} role="presentation">
        {renderMenuItems(menuItems)}
      </Box>
    </Drawer>
  );
}

export default Menu;
