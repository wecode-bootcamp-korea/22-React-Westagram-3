import '../../../styles/common.scss';
import '../../../styles/reset.scss';
import './Main.scss';

import React, { Component } from 'react';

import Nav from '../../../components/Nav';

class Main extends Component {
    render() {
        return (
            <section className="main-wrap">
                <Nav></Nav>
            </section>
        );
    }
}





export default Main;