import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import useStyles from './NavbarStyle'

type Props = {
  name: string;
}


const Navbar: React.FC<Props>= (props) => {
    const classes = useStyles();
    const [login, setLogin] = useState("Login")

    return (
        <div className={classes.root}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {props.name}
            </Typography>
            <Button color="inherit">{login}</Button>
          </Toolbar>
        </AppBar>
      </div>
    )

}

export default Navbar