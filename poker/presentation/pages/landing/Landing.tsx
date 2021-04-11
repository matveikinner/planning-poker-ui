import React, { FunctionComponent } from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles, { StyledButton, StyledTypography } from './Landing.style';
import { Link } from 'react-router-dom';

const Landing: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Grid container direction='column' justify='center' alignItems='center' className={classes.grid}>
      <Grid item xs={12} className={classes.gridItem}>
        <Typography variant='h4' align='center' gutterBottom>
          Planning Poker
        </Typography>
        <StyledTypography variant='body1' align='center' gutterBottom>
          Planning poker, also called Scrum poker, is a consensus-based, gamified technique for estimating, mostly used
          to estimate effort or relative size of development goals in software development
        </StyledTypography>
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <StyledButton variant='contained' className={classes.mr2}>
          Join
        </StyledButton>
        <Link to='/start'>
          <StyledButton variant='contained'>Start</StyledButton>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Landing;
