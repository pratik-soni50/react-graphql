import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { Switch, Route, Redirect } from "react-router-dom";
import HeaderBar from './DashboardComponent/Header/index';
import Sidebar from './DashboardComponent/Sidebar';
import NewsFeed from './NewsFeed';
import Products from './Products';
import { getCurrentUser } from '../../utils/AuthHelper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
  },
  scrollBox: {
    height: `calc(100vh - ${theme.spacing(8)}px)`,
    padding: theme.spacing(0, 1),
    overflowY: 'auto',
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div>
      <HeaderBar />
      <div className={classes.root}>
        <Sidebar />
        <main className={classes.content}>
          <Toolbar />
          <div id="scrollBox" className={classes.scrollBox}>
            <Switch>
              <Route path="/dashboard"><NewsFeed /></Route>
              <Route path="/products"><Products /></Route>
              <Route path="/documents">Documents</Route>
              <Route exact path={`/`}><Redirect to="/dashboard" /></Route>
              <Route exact path={`/login`}><Redirect to="/dashboard" /></Route>
              <Route path={`*`}>404</Route>
            </Switch>
          </div>
        </main>
      </div>
    </div>
  )
}
