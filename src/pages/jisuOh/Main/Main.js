import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../../components/Nav';
import Feed from './Feed/Feed';
import Story from './Story/Story';
import Recommend from './Recommend/Recommend';
import { MAININFO } from '../data/footerData.js';
import './Main.scss';

class Main extends React.Component {
  state = {
    feeds: [],
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/jisuOh/feedData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          feeds: data,
        });
      });
  }

  setComment = (comments, feedId) => {
    this.setState({
      feeds: this.state.feeds.map(feed => {
        return feed.feedId === feedId ? { ...feed, comments } : feed;
      }),
    });
  };

  render() {
    const { feeds } = this.state;
    return (
      <div className="main-wrapper">
        <Nav />
        <div className="we-main-wrapper">
          <main className="we-main">
            <section className="feed-box">
              <ul>
                {feeds.map(feed => (
                  <Feed
                    feedData={feed}
                    key={feed.feedId}
                    setComment={this.setComment}
                    deleteComment={this.deleteComment}
                  />
                ))}
              </ul>
            </section>
          </main>
          <div className="position">
            <aside className="aside-box">
              <section className="profiles-wrapper">
                <div className="profiles size">
                  <img alt="Profile" src="images/jisuOh/photo/profile3.jpeg" />
                </div>
                <div className="profile-info">
                  <span className="nickname">wecode_bootcamp</span>
                  <span className="sentence">WeCode | 위코드</span>
                </div>
              </section>
              <Story />
              <Recommend />
              <div className="etc-link">
                <ul className="links">
                  {MAININFO.map(info => {
                    return (
                      <li className="links-item" key={info.id}>
                        <Link to="#!">{info.content}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <p className="copyright">&copy; 2021 Westagram</p>
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
