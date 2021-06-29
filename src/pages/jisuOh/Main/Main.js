import React from 'react';
import Nav from '../../../components/Nav';
import Feed from './Feed/Feed';
import Story from './Story/Story';
import Recommend from './Recommend/Recommend';
import './Main.scss';

class Main extends React.Component {
  state = {
    feeds: [],
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/jisuOh/feedData.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feeds: data,
        });
      });
  }

  render() {
    return (
      <div className="main-wrapper">
        <Nav />
        <div className="we-main-wrapper">
          <main className="we-main">
            <section className="feed-box">
              <ul>
                {this.state.feeds.map(el => (
                  <Feed feedData={el} key={el.feedId} />
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
                  <li className="links-item">
                    <a href="#!">Instagram 정보</a>
                  </li>
                  <li className="links-item">
                    <a href="#!">지원</a>
                  </li>
                  <li className="links-item">
                    <a href="#!">홍보 센터</a>
                  </li>
                  <li className="links-item">
                    <a href="#!">API</a>
                  </li>
                  <li className="links-item">
                    <a href="#!">채용 정보</a>
                  </li>
                  <li className="links-item">
                    <a href="#!">개인정보처리방침</a>
                  </li>
                  <li className="links-item">
                    <a href="#!">약관</a>
                  </li>
                  <li className="links-item">
                    <a href="#!">디렉터리</a>
                  </li>
                  <li className="links-item">
                    <a href="#!">프로필</a>
                  </li>
                  <li className="links-item">
                    <a href="#!">해시 태그</a>
                  </li>
                  <li>
                    <a href="#!">언어</a>
                  </li>
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
