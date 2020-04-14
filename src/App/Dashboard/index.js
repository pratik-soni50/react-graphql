import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HeaderBar from './DashboardComponent/Header/index';
import Sidebar from './DashboardComponent/Sidebar';
import NewsFeed from './NewsFeed';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    paddingTop: theme.spacing(9),
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
          <NewsFeed />
        </main>
      </div>
    </div>
  )
}
