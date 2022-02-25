import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProjectListPage from "./pages/ProjectListPage";
import ProjectPage from "./pages/ProjectPage";
import NotFoundPage from "./pages/FileNotFound";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import NavFooter from "./components/NavFooter";

class App extends Component {
  render() {
    return (
      <Router>
          <div  className="100vw m-0 p-0">
            <Nav/>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/project-list" component={ProjectListPage} />
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
