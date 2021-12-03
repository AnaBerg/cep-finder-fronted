import { FC } from 'react';

import { Paper, Grid, Typography, makeStyles, Button } from '@material-ui/core';

import { ILocation } from '../../types';

const useStyles = makeStyles({
  item: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    marginRight: 10,
  },
  button: {
    marginTop: 10,
  },
});

type TableProps = {
  location: ILocation;
  setLocation: (location: ILocation | undefined) => void;
};

const Table: FC<TableProps> = ({ location, setLocation }) => {
  const classes = useStyles();
  const { bairro, cep, cidade, logradouro, uf } = location;

  return (
    <>
      <Paper>
        <Grid container>
          <Grid item xs={12} className={classes.item}>
            <Typography variant="h6" className={classes.title}>
              City
            </Typography>
            <Typography>
              {cidade} - {uf}
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.item}>
            <Typography variant="h6" className={classes.title}>
              District
            </Typography>
            <Typography>{bairro}</Typography>
          </Grid>
          <Grid item xs={12} className={classes.item}>
            <Typography variant="h6" className={classes.title}>
              Street
            </Typography>
            <Typography>
              {logradouro} | {cep}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => setLocation(undefined)}
      >
        BACK TO HOME SCREEN
      </Button>
    </>
  );
};

export default Table;
