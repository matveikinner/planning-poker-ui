import React, { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { v4 as uuid } from 'uuid';
import { setEventMaxPlayers, setEventName } from '@poker/presentation/adapters/redux/event/event.actions';
import useStyles from './Name.style';

const Name: FunctionComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [stateEventName, setStateEventName] = useState('');
  const [stateMaxPlayers, setStateMaxPlayers] = useState<number>(7);

  const maxPlayers = Array.from({ length: 7 }, (v, k) => k + 1);

  const handleChangeEventName = (event: React.ChangeEvent<{ value: unknown }>) => {
    setStateEventName(event.target.value as string);
    dispatch(setEventName(event.target.value as string));
  };

  const handleChangePoints = (event: React.ChangeEvent<{ value: unknown }>) => {
    setStateMaxPlayers(event.target.value as number);
    dispatch(setEventMaxPlayers(event.target.value as number));
  };

  return (
    <>
      <Typography variant='h4' align='center' gutterBottom>
        Choose your session
      </Typography>
      <Typography variant='body1' align='center' gutterBottom className={classes.typography}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, dignissimos libero facilis sint autem
        voluptatem et officia dolore totam blanditiis deleniti. Placeat in quia minima?
      </Typography>
      <Grid container justify='center' spacing={2}>
        <Grid item xs={12} sm={6} className={classes.textField}>
          <TextField
            required
            fullWidth
            id='filled-required'
            label='Event Name'
            variant='outlined'
            value={stateEventName}
            onChange={(e) => handleChangeEventName(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.textField}>
          <FormControl required variant='outlined' className={classes.formControl}>
            <InputLabel id='maxPlayers'>Max Players</InputLabel>
            <Select
              labelId='maxPlayers'
              id='maxPlayers-select'
              value={stateMaxPlayers}
              onChange={(e) => handleChangePoints(e)}
              displayEmpty
              label='maxPlayers'
            >
              {maxPlayers.map((value) => (
                <MenuItem key={uuid()} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default Name;
