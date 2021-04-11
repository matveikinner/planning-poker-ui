import { ThemeOptions } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const muiTabsOverrides: ThemeOptions['overrides'] = {
  MuiTabs: {
    root: {
      backgroundColor: grey[100],
      borderRadius: '8px',
      marginBottom: '4px',
    },
    indicator: {
      backgroundColor: 'transparent',
    },
  },
};

export default muiTabsOverrides;
