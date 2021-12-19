import React, { useState } from 'react';

import { LOGIN_ROUTER } from "../utils/consts";
import { auth } from "../utils/firebase-config";

import { AppBar, Button, Grid, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { onAuthStateChanged, signOut } from 'firebase/auth';


const Navbar = () => {
  const [ user, setUser ] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Grid>
          { user?.email }
        </Grid>
        <Grid container justifyContent="flex-end">
          { user ?
            <Button variant="outlined" onClick={ logout }>Logout</Button>
            :
            <NavLink to={ LOGIN_ROUTER }>
              <Button variant="contained">Login</Button>
            </NavLink>
          }
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;