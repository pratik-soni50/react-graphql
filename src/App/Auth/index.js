import React from 'react';
import { makeStyles, Paper, Grid } from '@material-ui/core';
import { Switch, Route, Redirect } from "react-router-dom";

import Login from './Login';

const useStyle = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

export default function Auth({ onAuthUpdate }) {
  const classes = useStyle();
  return (
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <Grid item md={4} sm={5}>
        <Paper className={classes.paper}>
          <Switch>
            <Route path={`/login`}><Login onAuthUpdate={onAuthUpdate} /></Route>
            <Route path={`/signup`}>Signup</Route>
            <Route path={`/forget-password`}>Forget Password</Route>
            <Route path={`/reset-password`}>Reset Password</Route>
            <Route path={`/`}><Redirect to="/login" /></Route>
            <Route path={`*`}>404</Route>
          </Switch>
        </Paper>
      </Grid>
    </Grid>
  )
}
