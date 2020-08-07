import React from "react";

import GlobalStyles from "./styles/GlobalStyles";

import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import User from "./pages/User";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users/:user" component={User} />
          <Route path="/notFound" component={NotFound} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
