import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Landing from './components/Landing'
import About from './components/about'
import Menu from './components/Navbar'

export default function BasicExample() {
    return (
      <Router>
                <Menu />
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/sobre">
              <About />
            </Route>
          </Switch>

      </Router>
    );
  }