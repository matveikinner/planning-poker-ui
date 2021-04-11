import { styled, withTheme, Typography, Grid, Button } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) =>
  createStyles({
    grid: {
      height: '100%',
    },
    gridItem: {
      flexBasis: 'auto',
    },
    mr2: {
      marginRight: theme.spacing(2),
    },
  })
);

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'transparent',
  border: '2px solid white',
  borderRadius: theme.spacing(4),
  '&:hover': {
    backgroundColor: 'transparent',
  },
}));

// export const StyledTypography = styled(withTheme(Typography))(({ theme }) => ({
//   color: theme.palette.text.primary,
// }));

export const Row = styled(withTheme(Grid))(({ theme }) => ({}));

// const MyButton = styled(Grid)(theme => ({
//   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//   border: 0,
//   borderRadius: 3,
//   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//   color: 'white',
//   height: 48,
//   padding: '0 30px',
// }));

// const StyledMenu = styled(({ className, ...props }) => (
//   <Grid {...props} classes={{ paper: className }} />
// ))`
//   box-shadow: none;
//   border: 1px solid #d3d4d5;

//   li {
//     padding-top: 8px;
//     padding-bottom: 8px;
//   }
// `;

export default useStyles;
