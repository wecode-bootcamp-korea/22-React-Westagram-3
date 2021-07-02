import React, { Component } from 'react';
import Nav from '../../../components/Nav';
import Feeds from './Feeds/Feeds';
import Main_right from './Main_right/Main_right';
import './Main.scss';

class Mainjaesang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedslist: [],
    };
  }

  callApi = () => {
    fetch('http://localhost:3000/data/JaesangChoi/FeedsData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedslist: data,
        });
      });
  };

  componentDidMount = () => {
    this.callApi();
  };

  render() {
    const { feedslist } = this.state;

    return (
      <div>
        <Nav />
        <div className="main">
          <div>
            {feedslist.map(flist => {
              return (
                <Feeds
                  key={flist.id}
                  profilesrc={flist.profilesrc}
                  mainfeedsrc={flist.mainfeedsrc}
                  comments={flist.comments}
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
