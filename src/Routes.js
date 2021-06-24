import React from 'react';
import LoginUnseo from './pages/unseoJang/Login/Login';
import MainUnseo from './pages/unseoJang/Main/Main';
import Loginjisu from './pages/jisuOh/Login/Login';
import Mainjisu from './pages/jisuOh/Main/Main';
import Loginjaesang from './pages/jaesangChoi/Login/Login';
import Mainjaesang from './pages/jaesangChoi/Main/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login-unseo" component={LoginUnseo} />
          <Route exact path="/main-unseo" component={MainUnseo} />
          <Route exact path="/login-jisu" component={Loginjisu} />
          <Route exact path="/main-jisu" component={Mainjisu} />
          <Route exact path="/login-jaesang" component={Loginjaesang} />
          <Route exact path="/main-jaesang" component={Mainjaesang} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
