import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';

import ProductList from './ProductList';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1),
    width: '100%',
  },
  fullHeight: {
    height: `calc(100vh - ${theme.spacing(8.5)}px)`,
    overflowY: 'auto',
  }
}));

export default function Products() {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item sm={8}>
        <Paper className={`${classes.paper} ${classes.fullHeight}`}>
          <Typography variant="h5" gutterBottom >Products:</Typography>
          <ProductList />
        </Paper>
      </Grid>
      <Grid item sm={4}>
        <Paper className={`${classes.paper} ${classes.fullHeight}`}></Paper>
      </Grid>
    </Grid>
  );
}
