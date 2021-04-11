import React, { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { v4 as uuid } from 'uuid';
import useStyles from './Role.style';
import {
  SetSubscriberRole,
  SetSubscriberUsername,
} from '@poker/presentation/adapters/redux/subscriber/subscriber.actions';

const Role: FunctionComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');

  const roles = ['Developer', 'Designer', 'Scrum Master', 'Product Owner'];

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRole(event.target.value as string);
    dispatch(SetSubscriberRole(event.target.value as string));
  };

  const handleUsernameChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setUsername(event.target.value as string);
    dispatch(SetSubscriberUsername(event.target.value as string));
  };

  return (
    <>
      <Typography variant='h4' align='center' gutterBottom>
        Choose your role
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
            label='Username'
            variant='outlined'
            onChange={(e) => handleUsernameChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.textField}>
          <FormControl required variant='outlined' className={classes.formControl}>
            <InputLabel id='role'>Role</InputLabel>
            <Select
              labelId='role'
              id='role-select'
              value={role}
              onChange={(e) => handleChange(e)}
              displayEmpty
              label='Role'
            >
              {roles.map((role) => (
                <MenuItem key={uuid()} value={role}>
                  {role}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default Role;
