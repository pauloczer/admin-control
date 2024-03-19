import { createTheme } from '@mui/material';
import { cyan, yellow } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: yellow[700], // #f2c4
      dark: yellow[800],
      light: yellow[500],
      contrastText: '#ffffff', //  black || white
    },
        
    secondary: {
      main: cyan[500], // #f2c4
      dark: cyan[400],
      light: cyan[300],
      contrastText: '#ffffff', //  black || white
    },
    background: {
      default: '#f7f6f3',
      paper: '#ffffff',
    }
  }
});