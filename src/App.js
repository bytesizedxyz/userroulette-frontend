import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//Component
import Header from "./components/Header";

//Pages
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import SignupPage from "./pages/SignupPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={SignupPage} />
            <Route
              exact
              path="/:username"
              component={props => <Profile {...props} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
