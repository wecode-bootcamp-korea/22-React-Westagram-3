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
        <main>
          <div>
            {feedslist.map(feed => {
              return (
                <Feeds
                  key={feed.id}
                  profilesrc={feed.profilesrc}
                  mainfeedsrc={feed.mainfeedsrc}
                  comments={feed.comments}
                />
              );
            })}
          </div>

          <Main_right />
        </main>
      </div>
    );
  }
}

export default Mainjaesang;
