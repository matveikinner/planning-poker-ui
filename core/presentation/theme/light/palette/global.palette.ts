import { ThemeOptions } from '@material-ui/core';
import { blue, grey } from '@material-ui/core/colors';

const globalPalette: ThemeOptions['palette'] = {
  primary: {
    light: grey[400],
    main: blue[500],
    // dark: '#002884',
    // contrastText: '#fff',
  },
  secondary: {
    light: '#ff7961',
    main: '#f44336',
    // dark: '#ba000d',
    // contrastText: '#000',
  },
  text: {
    primary: grey[400],
  },
  background: {
    default: '#1d1d1f',
    // paper: ''
  },
};

export default globalPalette;
