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
          <ul className="AppHeader">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/linkPage">Link</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
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
