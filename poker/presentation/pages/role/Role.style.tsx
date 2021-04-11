import { styled, withTheme, Typography, Grid, Button } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) =>
  createStyles({
    typography: {
      color: theme.palette.text.primary,
    },
    formControl: {
      width: '100%',
    },
    textField: {
      maxWidth: '256px',
    },
  })
);

export default useStyles;
