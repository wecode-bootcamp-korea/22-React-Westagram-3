import React from 'react';
import Nav from '../../../components/Nav';
import Feed from './Feed/Feed';
import Story from './Story/Story';
import Recommend from './Recommend/Recommend';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <div class="main-wrapper">
        <Nav />
        <div class="we-main-wrapper">
          <main class="we-main">
            <section class="feed-box">
              <ul>
                <Feed />
              </ul>
            </section>
          </main>
          <div class="position">
            <aside class="aside-box">
              <section class="profiles-wrapper">
                <div class="profiles size">
                  <img alt="Profile" src="images/jisuOh/photo/profile3.jpeg" />
                </div>
                <div class="profile-info">
                  <span class="nickname">wecode_bootcamp</span>
                  <span class="sentence">WeCode | 위코드</span>
                </div>
              </section>
              <Story />
              <Recommend />
              <div class="etc-link">
                <ul class="links">
                  <li class="links-item">
                    <a href="#">Instagram 정보</a>
                  </li>
                  <li class="links-item">
                    <a href="#">지원</a>
                  </li>
                  <li class="links-item">
                    <a href="#">홍보 센터</a>
                  </li>
                  <li class="links-item">
                    <a href="#">API</a>
                  </li>
                  <li class="links-item">
                    <a href="#">채용 정보</a>
                  </li>
                  <li class="links-item">
                    <a href="#">개인정보처리방침</a>
                  </li>
                  <li class="links-item">
                    <a href="#">약관</a>
                  </li>
                  <li class="links-item">
                    <a href="#">디렉터리</a>
                  </li>
                  <li class="links-item">
                    <a href="#">프로필</a>
                  </li>
                  <li class="links-item">
                    <a href="#">해시 태그</a>
                  </li>
                  <li>
                    <a href="#">언어</a>
                  </li>
                </ul>
              </div>
              <p class="copyright">&copy; 2021 Westagram</p>
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
