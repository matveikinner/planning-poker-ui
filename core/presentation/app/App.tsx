import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  Container,
  unstable_createMuiStrictModeTheme as createMuiTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core';
import { v4 as uuid } from 'uuid';
import routes from './App.routes';
import useStyles from './App.styles';
import lightTheme from '../theme/light/light.theme';
import NavBar from './components/navBar/NavBar';
import store from '../frameworks/redux.config';
import SocketProvider from '../contexts/socket.context';

const App: FunctionComponent = () => {
  const classes = useStyles();

  let theme = createMuiTheme({
    ...lightTheme,
    // For example to later replace theme type ('dark' | 'light) to one from global state management
    // palette: { ...lightTheme.palette, type: 'light' },
  });
  theme = responsiveFontSizes(theme);

  return (
    <>
      <Provider store={store}>
        <SocketProvider>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <NavBar />
            <Container maxWidth='lg' className={classes.container}>
              <Router>
                <Switch>
                  {routes.map((route) => (
                    <Route key={uuid()} {...route} />
                  ))}
                </Switch>
                <Redirect to='/' />
              </Router>
            </Container>
          </ThemeProvider>
        </SocketProvider>
      </Provider>
    </>
  );
};

export default App;
