import { ThemeOptions } from '@material-ui/core';
import { blue, green, grey, lightGreen } from '@material-ui/core/colors';

/**
 * @see https://material-ui.com/customization/color/
 */
const muiTabOverrides: ThemeOptions['overrides'] = {
  MuiTab: {
    root: {
      margin: '2px',
      '&$selected': {
        boxShadow: '2px 2px 2px #d5d5d5',
        borderRadius: '8px',
        backgroundColor: blue[200],
        '&:hover': {
          backgroundColor: blue[500],
        },
      },
    },
    wrapper: {
      alignItems: 'flex-start',
    },
  },
};

export default muiTabOverrides;
