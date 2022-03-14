import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProjectListPage from "./pages/ProjectListPage";
import ProjectPage from "./pages/ProjectPage";
import NotFoundPage from "./pages/FileNotFound";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import NavFooter from "./components/NavFooter";
import NotYourMaid from "./pages/projects/NotYourMaid";

class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Nav/>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/project-list" component={ProjectListPage} />
              <Route path="/projects/NotYourMaid" component={NotYourMaid} />
              <Route path="/project/:name" component={ProjectPage} />
              <Route component={NotFoundPage} />
            </Switch>
            <NavFooter/>
          </div>
      </Router>
    );
  }
}

export default App;
