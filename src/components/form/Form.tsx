import { useState, FC } from 'react';

import { TextField, Button, makeStyles } from '@material-ui/core';
import { toast } from 'react-toastify';
import ReactLoading from 'react-loading';

import { api, url } from '../../services/api';

import magnifyingGlassIcon from '../../assets/magnifyingGlassIcon.svg';

import { ILocation } from '../../types';

const useStyles = makeStyles({
  icon: {
    height: 30,
    width: 30,
  },
  button: {
    marginLeft: 10,
    height: 56,
  },
});

type FormProps = {
  setLocation: (location: ILocation | undefined) => void;
};

const Form: FC<FormProps> = ({ setLocation }) => {
  const classes = useStyles();
  const [cep, setCep] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const getCep = async (cep: number) => {
    try {
      console.log(`${url}/cep?cep=${cep}`);
      setLoading(true);
      const response = await api.get(`http://localhost:8080/cep?cep=${cep}`);
      setLocation(response.data);
      setCep(0);
      setLoading(false);
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong, sorry', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoading(false);
    }
  };

  const onSubmit = () => {
    if ((cep !== undefined && isNaN(cep)) || cep.toString().length !== 8) {
      toast.error('Sorry, it isnt a valid CEP', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      getCep(cep);
    }
  };

  return (
    <div>
      <TextField
        variant="outlined"
        placeholder="CEP"
        onChange={(data) => setCep(Number(data.target.value))}
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => onSubmit()}
        disabled={loading}
      >
        {!loading ? (
          <img src={magnifyingGlassIcon} alt="Lupa" className={classes.icon} />
        ) : (
          <ReactLoading type="spin" height={30} width={30} color="#F2FFE3" />
        )}
      </Button>
    </div>
  );
};

export default Form;
