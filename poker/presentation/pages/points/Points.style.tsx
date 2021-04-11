import { createStyles } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) =>
  createStyles({
    typography: {
      color: theme.palette.text.primary,
    },
    gridItem: {
      maxWidth: '256px',
      marginTop: theme.spacing(2),
    },
    formControl: {
      width: '100%',
    },
  })
);

export default useStyles;
