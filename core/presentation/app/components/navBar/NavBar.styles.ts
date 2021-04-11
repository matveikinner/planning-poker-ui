import { createStyles } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) =>
  createStyles({
    typography: {
      flexGrow: 1,
    },
  })
);

export default useStyles;
