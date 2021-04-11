import React, { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import { v4 as uuid } from 'uuid';
import useStyles from './Points.style';
import { setEventPoints } from '@poker/presentation/adapters/redux/event/event.actions';

enum Sequence {
  FIBONACCI = 'FIBONACCI',
  COMMERCIAL = 'COMMERCIAL',
}

const SEQUENCES = {
  COMMERCIAL: [0.5, 1, 2, 3, 5, 8, 13, 20, 40, 100],
  FIBONACCI: [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
};

const COMMERCIAL_SEQUENCE = [0.5, 1, 2, 3, 5, 8, 13, 20, 40, 100];
const FIBONACCI_SEQUENCE = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

const Points: FunctionComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [points, setPoints] = useState<Sequence>(Sequence.FIBONACCI);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as Sequence;
    setPoints(event.target.value as Sequence);
    dispatch(setEventPoints(SEQUENCES[value]));
  };

  return (
    <>
      <Typography variant='h4' align='center' gutterBottom>
        Choose your point sequence
      </Typography>
      <Typography variant='body1' align='center' gutterBottom className={classes.typography}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolores quos, debitis fugit suscipit adipisci,
        velit molestias blanditiis dignissimos eos explicabo quibusdam temporibus, fuga quod?
      </Typography>
      <Grid container justify='center' spacing={2}>
        <Grid item xs={12} className={classes.gridItem}>
          <FormControl required variant='outlined' className={classes.formControl}>
            <InputLabel id='sequence'>Points</InputLabel>
            <Select
              labelId='sequence'
              id='sequence-select'
              value={points}
              onChange={(e) => handleChange(e)}
              displayEmpty
              label='sequence'
            >
              {Object.values(Sequence).map((sequence) => (
                <MenuItem key={uuid()} value={sequence}>
                  {sequence}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default Points;
