import { CssBaseline } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import { LandingPage } from '../pages';

import 'react-toastify/dist/ReactToastify.css';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#0071CE',
    },
    secondary: {
      main: '#000000',
    },
    background: {
      default: '#F2FFE3',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline>
        <LandingPage />
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
