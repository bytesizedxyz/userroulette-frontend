import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Signup_Page from "./pages/Signup_Page";


//Component
import Header from "./components/Header";

//Pages
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>

           
            <Route exact path="/signup" component={Signup_Page} />
            <Route exact path="/" component={Landing} />
            <Route exact path="/:username" component={props => <Profile {...props} />} />
            {/* <Route exact path="/signup" component={Signup} /> */}

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
