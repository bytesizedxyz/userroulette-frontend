import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Landing_Page} />
            {/* <Route exact path="/username" component={Profile_Page} />
            <Route exact path="/signup" component={Signup_Page} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
