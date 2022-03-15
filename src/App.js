import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NotFoundPage from "./pages/FileNotFound";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import NavFooter from "./components/NavFooter";
import NotYourMaid from "./pages/projects/NotYourMaid";
import UnBurden from "./pages/projects/UnBurden";

class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Nav/>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/projects/NotYourMaid" component={NotYourMaid} />
              <Route path="/projects/UnBurden" component={UnBurden} />
              <Route component={NotFoundPage} />
            </Switch>
            <NavFooter/>
          </div>
      </Router>
    );
  }
}

export default App;
