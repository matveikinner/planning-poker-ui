import { createStyles } from '@material-ui/core/styles';
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
