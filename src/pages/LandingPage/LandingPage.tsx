import { useState } from 'react';

import { Typography, Grid, makeStyles } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';

import { Form, Table } from '../../components';

import { ILocation } from '../../types';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    width: '100vw',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

const LandingPage = () => {
  const classes = useStyles();
  const [location, setLocation] = useState<ILocation | undefined>();

  return (
    <>
      <Grid
        container
        className={classes.root}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography variant="h1" align="center">
            CEP Finder
          </Typography>
          <Typography variant="h5" align="center">
            A way to find your CEP
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.item}>
          {location === undefined ? (
            <Form setLocation={setLocation} />
          ) : (
            <Table location={location} setLocation={setLocation} />
          )}
        </Grid>
      </Grid>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default LandingPage;
