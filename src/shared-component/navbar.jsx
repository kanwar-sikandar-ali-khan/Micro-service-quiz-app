import React, { useState, useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector, useDispatch } from "react-redux";
import {setCookie} from "../../src/Functions/cookieFunction"



export default function ButtonAppBar() {
  const appState = useSelector((state) => state);
  const appDispatch = useDispatch();

  const handleLogin = () => {
    var shop_url = window.location.href
    var auth_url = `${process.env.REACT_APP_AUTH_URL}`
    console.log(auth_url)
    window.location.replace(auth_url);
    setCookie(`redirect`, shop_url);

  };


  const handleLogout = () => {
    var shop_url = window.location.href
    var auth_url_logout = `${process.env.REACT_APP_AUTH_URL_LOGOUT}`
    console.log(auth_url_logout)
    window.location.replace(auth_url_logout);
    setCookie(`redirect`, shop_url);

  };
  useEffect(() => {
    var auth_url = `${process.env.REACT_APP_AUTH_URL}`
    console.log(auth_url)
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            IMPERIAL INSTITUTE
          </Typography>
          {appState.loggedIn ? <Button onClick={handleLogout} color="inherit">Logout</Button> : <Button onClick={handleLogin} color="inherit">Login</Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
