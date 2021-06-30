import React, { Component } from 'react';

import Feed from './Feed';

class ContetnsWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedList: [],
    };
  }
  //feed mockdata
  componentDidMount() {
    fetch('http://localhost:3000/data/unseoJang/feedData.json', {
      method: 'GET',
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({
          feedList: res.data,
        });
      });
  }
  render() {
    const { feedList } = this.state;
    return (
      <section className="contetns-wrap">
        {feedList.map(el => {
          return (
            <Feed
              userProfileImg={el.userProfileImg}
              userId={el.userId}
              userFeedImg={el.userFeedImg}
              userImgAlt={el.userImgAlt}
            />
          );
        })}
      </section>
    );
  }
}

export default ContetnsWrap;
