import React, { FunctionComponent, useState } from 'react';
import { AppBar, IconButton, Switch, Toolbar, Typography } from '@material-ui/core';
import useStyles from './NavBar.styles';

const NavBar: FunctionComponent = () => {
  const classes = useStyles();
  const [value, setValue] = useState(true);
  return (
    <AppBar position='fixed'>
      <Toolbar>
        <IconButton edge='start' color='inherit' aria-label='menu'>
          Icon
        </IconButton>
        <Typography variant='h6' className={classes.typography}>
          Planning Poker
        </Typography>
        <Switch
          checked={value}
          onChange={(e) => setValue(e.target.checked)}
          name='checkedA'
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
