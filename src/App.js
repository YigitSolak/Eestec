import "./styles.css";
import { MemoryRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./pages/home";
import LinkPage from "./pages/linkPage";
import Login from "./pages/login";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/">Home</Link>
          <Link to="/linkPage">Link</Link>
          <Link to="/login">Login</Link>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/linkPage" component={LinkPage} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
