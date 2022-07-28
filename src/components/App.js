import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';

import useStyles from './styles';

// import { Actors, Movies, Movieinformation, NavBar, Profile } from '.';
import { Actors, Movies, Movieinformation, Profile } from '.';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <NavBar /> */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/">
            <h1> Home </h1>
          </Route>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route exact path="/movie/:id">
            <Movieinformation />
          </Route>
          <Route exact path="/actors/:movieId">
            <Actors />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
