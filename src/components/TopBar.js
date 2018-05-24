import React from 'react';

import Actions from '../actions';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';

const TopBar = (props) => {
  let title = 'Vaulty';
  if (props.store.auth && props.store.auth.metadata.username) {
    title += " (" + props.store.auth.metadata.username + ")";
  }
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="title" color="inherit" style={{flex: 1}}>
          {title}
        </Typography>
        {props.store.auth &&
        <Button color="inherit" onClick={() => Actions.logout(props.store)}>Logout</Button>
        }
        <IconButton
          color="inherit"
          onClick={() => Actions.themeToggle(props.store)}
        >
          <Icon>invert_colors</Icon>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
