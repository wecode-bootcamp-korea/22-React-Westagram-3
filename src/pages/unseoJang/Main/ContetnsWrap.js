import React, { Component } from 'react';

//import Comment from './Comment';
import Feed from './Feed';
// import CommenList from './CommentList';

class ContetnsWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedList: [],
    };
  }
  //feed mockdata
  componentDidMount() {
    fetch('http://localhost:3000/data/feedData.json', {
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
