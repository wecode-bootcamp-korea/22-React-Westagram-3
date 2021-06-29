import React, { Component } from 'react';
import Nav from '../../../components/Nav';
import Feeds from './Feeds/Feeds';
import Main_right from './Main_right/Main_right';
import FeedsData from './Feeds/FeedsData';
import './Main.scss';

class Mainjaesang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedslist: [],
    };
  }

  componentDidMount() {
    this.setState({ feedslist: FeedsData });
  }

  render() {
    return (
      <div>
        <Nav />

        <div className="main">
          <div>
            {this.state.feedslist.map(flist => {
              return (
                <Feeds
                  key={flist.id}
                  fetch={flist.fetch}
                  profilesrc={flist.profilesrc}
                  mainfeedsrc={flist.mainfeedsrc}
                />
              );
            })}
          </div>

          <Main_right />
        </div>
      </div>
    );
  }
}

export default Mainjaesang;
