import React from "react";
import Login from './pages/unseoJang/Login/Login';
import Main from './pages/unseoJang/Main/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
