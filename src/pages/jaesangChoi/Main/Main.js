import React, { Component } from 'react';
import Nav from '../../../components/Nav';
import Feeds from './Feeds/Feeds';
import Main_right from './Main_right/Main_right';
import './Main.scss';

class Mainjaesang extends Component {
  render() {
    return (
      <div>
        <Nav />

        <div className="main">
          <Feeds />
          <Main_right />
        </div>
      </div>
    );
  }
}

export default Mainjaesang;
