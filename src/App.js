import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProjectListPage from "./pages/ProjectListPage";
import ProjectPage from "./pages/ProjectPage";
import NotFoundPage from "./pages/FileNotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="fixed w-full bg-white z-30">
          <NavBar />
        </div>
        <div className="m-0">
          <NavBar />
          <div id="page-body" className="">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/project-list" component={ProjectListPage} />
              <Route path="/project/:name" component={ProjectPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
