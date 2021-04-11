import { createStyles } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      height: '100vh',
      /**
       * Required to account for app bar height
       * Height is 56px below breakpoint 'sm' or <= 600px
       * Height is 64px above breakpoint 'sm' or <= 600px
       * @see https://material-ui.com/customization/breakpoints/
       */
      padding: `${theme.spacing(7)}px ${theme.spacing(2)}px`,
      [theme.breakpoints.up('sm')]: {
        padding: `${theme.spacing(8)}px ${theme.spacing(4)}px`,
      },
    },
  })
);

export default useStyles;
