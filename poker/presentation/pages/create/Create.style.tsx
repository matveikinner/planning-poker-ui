import { styled, withTheme, Typography, Grid, Button } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) =>
  createStyles({
    gridContainer: {
      flexWrap: 'nowrap',
      height: '100%',
    },
    gridItem: {
      width: '100%',
      marginTop: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        marginTop: theme.spacing(4),
      },
    },
    gridItemBottom: {
      display: 'flex',
      '& button': {
        marginTop: 'auto',
        marginBottom: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
          marginBottom: theme.spacing(4),
        },
      },
    },
    paper: {
      backgroundColor: '#F6F7FB',
    },
    tabPanel: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    tabTitle: {
      textTransform: 'capitalize',
    },
    button: {
      backgroundColor: 'transparent',
      border: '2px solid white',
      borderRadius: theme.spacing(4),
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  })
);

export default useStyles;

{
  /* <Tab classes={{
          root: classes.customButtonBaseRoot,
          wrapper: classes.tabWrapper,
          selected: classes.tabSelected,
          labelIcon: classes.tabLabelIcon
        }}
      /> */
}
