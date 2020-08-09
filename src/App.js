import React from 'react';
import GlobalStyles from './styles/GlobalStyles';

import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';

import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import User from './pages/User/User';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path={routes.home} exact component={Home} />
          <Route path={routes.user()} component={User} />
          <Route path={routes.notFound} component={NotFound} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
