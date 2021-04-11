import { ThemeOptions } from '@material-ui/core';
import muiTabOverrides from './overrides/muiTab.overrides';
import muiTabsOverrides from './overrides/muiTabs.overrides';
import globalPalette from './palette/global.palette';
import globalTypography from './typography/global.typography';

const lightTheme: ThemeOptions = {
  palette: globalPalette,
  overrides: { ...muiTabOverrides, ...muiTabsOverrides },
  typography: globalTypography,
};

export default lightTheme;
