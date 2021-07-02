import './Main.scss';

import React, { Component } from 'react';

import Nav from '../../../components/Nav';
import ContetnsWrap from './ContetnsWrap.js';
import Aside from './Aside.js';

class Main extends Component {
  render() {
    return (
      <section className="main-wrap other">
        <Nav></Nav>
        <Contents></Contents>
      </section>
    );
  }
}

class Contents extends Component {
  render() {
    return (
      <main>
        <ContetnsWrap></ContetnsWrap>
        <Aside></Aside>
      </main>
    );
  }
}

export default Main;
