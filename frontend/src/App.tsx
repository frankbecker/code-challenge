import "./App.scss";
import React from 'react';
import Notifications from "./components/notifications/notification";
import { RootStateOrAny, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Container, IconButton, Menu, MenuItem, Paper } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import TodoPageComp from "./pages/todos-page";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const notes = useSelector((state: RootStateOrAny) => state.ui.notifications);
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Container maxWidth="sm">
      <Router>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                TodoApp
          </Typography>
            </Toolbar>
            <Menu
              color="inherit"
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem component={Link} to="/" onClick={handleClose}>Home</MenuItem>
              <MenuItem component={Link} to="/todos" onClick={handleClose}>Todos</MenuItem>
              <MenuItem component={Link} to="/about" onClick={handleClose}>About</MenuItem>
            </Menu>
          </AppBar>
        </div>
        <div className="App">
          <Switch>
            <Route path="/about">This is about</Route>
            <Route path="/todos">
              <TodoPageComp />
            </Route>
            <Route path="/">
              <p>Welcome to home!</p>
            </Route>
          </Switch>

          <Notifications
            title={notes.title}
            message={notes.message}
            status={notes.status}
          />
        </div>
      </Router>
    </Container>
  );
}

export default App;
