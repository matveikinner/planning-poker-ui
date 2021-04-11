import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Tab, Tabs, Button } from '@material-ui/core';
import { v4 as uuid } from 'uuid';
import { useWebsocket } from '@core/presentation/contexts/socket.context';
import useStyles from './Create.style';
import Name from '../name/Name';
import Role from '../role/Role';
import Points from '../points/Points';
import { createEventRequest } from '@poker/presentation/adapters/redux/event/event.actions';
import { SetSubscriberId } from '@poker/presentation/adapters/redux/subscriber/subscriber.actions';

const Create: FunctionComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const socket = useWebsocket();

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (socket) {
      dispatch(SetSubscriberId(socket.id));
    }
  }, [socket]);

  const steps = [{ subtitle: 'Role' }, { subtitle: 'Session' }, { subtitle: 'Points' }];

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setActiveTab(newValue);
  };

  // TODO: Update Redux state about session
  const handleNext = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (activeTab === 2) {
      dispatch(createEventRequest());
    } else setActiveTab(activeTab + 1);
  };

  const renderTab = (value: number) => {
    switch (value) {
      case 0:
        return <Role />;
      case 1:
        return <Name />;
      case 2:
        return <Points />;
      default:
        return <p>Something went wrong</p>;
    }
  };

  return (
    <Grid container direction='column' justify='center' alignItems='center' className={classes.gridContainer}>
      <Grid item xs={12} className={classes.gridItem}>
        <Tabs variant='fullWidth' value={activeTab} onChange={(ev, value) => handleChange(ev, value)}>
          {steps.map((step, index) => (
            <Tab
              key={uuid()}
              label={
                <>
                  <span className={classes.tabTitle}>Step 0{index + 1}</span>
                  <span>{step.subtitle}</span>
                </>
              }
            />
          ))}
        </Tabs>
      </Grid>
      <Grid item xs={12}>
        {renderTab(activeTab)}
      </Grid>
      <Grid item xs={12} className={classes.gridItemBottom}>
        <Button variant='contained' onClick={(e) => handleNext(e)} className={classes.button}>
          {activeTab === 2 ? 'Create' : 'Continue'}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Create;
