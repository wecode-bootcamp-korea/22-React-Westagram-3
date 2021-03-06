import React from 'react';
import Nav from '../../../components/Nav';
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
                <li class="feed">
                  <header class="feed__header">
                    <div class="profile-box">
                      <div class="profiles">
                        <img
                          alt="Profile"
                          src="images/jisuOh/photo/profile1.jpeg"
                        />
                      </div>
                      <span class="name">silvia.oh.135</span>
                    </div>
                    <span class="menu-icon">
                      <img
                        alt="Menu"
                        src="images/jisuOh/menu.png"
                        class="menu"
                      />
                    </span>
                  </header>
                  <section class="feed__photo">
                    <img
                      alt="Feed"
                      src="images/jisuOh/ice-cream-2934210_1280.jpg"
                    />
                  </section>
                  <div class="comment-wrapper">
                    <section class="feed__like">
                      <section class="like__section">
                        <section class="icons">
                          <button class="icon-btn">
                            <img alt="Heart" src="images/jisuOh/heart.png" />
                          </button>
                          <button class="icon-btn">
                            <img
                              alt="Comment"
                              src="images/jisuOh/speech-bubble.png"
                            />
                          </button>
                          <button class="icon-btn">
                            <img alt="Share" src="images/jisuOh/send.png" />
                          </button>
                        </section>
                        <button class="icon-btn bookmark">
                          <img
                            alt="Bookmark"
                            src="images/jisuOh/bookmark.png"
                          />
                        </button>
                      </section>
                    </section>
                    <section class="profiles-wrapper">
                      <div class="profiles">
                        <img
                          alt="Profile"
                          src="images/jisuOh/photo/profile2.jpeg"
                        />
                      </div>
                      <span>
                        <b>aineworld</b>??? ??? <b>10???</b>??? ???????????????
                      </span>
                    </section>
                    <section class="feed__comment">
                      <ul class="comment__ul"></ul>
                      <p class="time">42??? ???</p>
                    </section>
                    <section class="comment-input">
                      <form class="comment__form" onsubmit="return false;">
                        <input
                          type="text"
                          class="comment-area"
                          placeholder="?????? ??????..."
                        />
                      </form>
                      <button class="post-btn">??????</button>
                    </section>
                  </div>
                </li>
              </ul>
            </section>
          </main>
          <div class="position">
            <aside class="aside-box">
              <section class="profiles-wrapper">
                <div class="profiles">
                  <img alt="Profile" src="images/jisuOh/photo/profile3.jpeg" />
                </div>
                <div class="profile-info">
                  <span class="nickname">wecode_bootcamp</span>
                  <span class="sentence">WeCode | ?????????</span>
                </div>
              </section>
              <article class="aside-in-list">
                <header class="aside__header">
                  <span class="title">?????????</span>
                  <button class="all-btn">?????? ??????</button>
                </header>
                <ul>
                  <li class="aside-list">
                    <div class="profiles-wrapper">
                      <div class="profiles">
                        <img
                          alt="Profile"
                          src="images/jisuOh/photo/profile1.jpeg"
                          class="img-in"
                        />
                      </div>
                      <div class="profile-info">
                        <span class="nickname">_yum_s</span>
                        <span class="sentence">16??? ???</span>
                      </div>
                    </div>
                  </li>
                  <li class="aside-list">
                    <div class="profiles-wrapper">
                      <div class="profiles">
                        <img
                          alt="Profile"
                          src="images/jisuOh/photo/profile2.jpeg"
                          class="img-in"
                        />
                      </div>
                      <div class="profile-info">
                        <span class="nickname">drink_eat_drink</span>
                        <span class="sentence">3?????? ???</span>
                      </div>
                    </div>
                  </li>
                  <li class="aside-list">
                    <div class="profiles-wrapper">
                      <div class="profiles">
                        <img
                          alt="Profile"
                          src="images/jisuOh/photo/profile3.jpeg"
                          class="img-in"
                        />
                      </div>
                      <div class="profile-info">
                        <span class="nickname">hynkis</span>
                        <span class="sentence">20??? ???</span>
                      </div>
                    </div>
                  </li>
                  <li class="aside-list">
                    <div class="profiles-wrapper">
                      <div class="profiles">
                        <img
                          alt="Profile"
                          src="images/jisuOh/photo/profile4.jpeg"
                          class="img-in"
                        />
                      </div>
                      <div class="profile-info">
                        <span class="nickname">jminkim</span>
                        <span class="sentence">2?????? ???</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </article>
              <article class="aside-in-list">
                <header class="aside__header">
                  <span class="title">???????????? ?????? ??????</span>
                  <button class="all-btn">?????? ??????</button>
                </header>
                <ul>
                  <li class="aside-follow-list">
                    <div class="profiles-wrapper">
                      <div class="profiles">
                        <img
                          alt="Profile"
                          src="images/jisuOh/photo/profile1.jpeg"
                          class="img-in"
                        />
                      </div>
                      <div class="profile-info">
                        <span class="nickname">joaaaaneu</span>
                        <span class="sentence">legend??? ??? 2?????? ????????????</span>
                      </div>
                    </div>
                    <button class="follow-btn">?????????</button>
                  </li>
                  <li class="aside-follow-list">
                    <div class="profiles-wrapper">
                      <div class="profiles">
                        <img
                          alt="Profile"
                          src="images/jisuOh/photo/profile2.jpeg"
                          class="img-in"
                        />
                      </div>
                      <div class="profile-info">
                        <span class="nickname">ramp12</span>
                        <span class="sentence">youa??? ??? 5?????? ????????????</span>
                      </div>
                    </div>
                    <button class="follow-btn">?????????</button>
                  </li>
                </ul>
              </article>
              <nav class="etc-link">
                <ul class="links">
                  <li class="links-item">
                    <a href="#">Instagram ??????</a>
                  </li>
                  <li class="links-item">
                    <a href="#">??????</a>
                  </li>
                  <li class="links-item">
                    <a href="#">?????? ??????</a>
                  </li>
                  <li class="links-item">
                    <a href="#">API</a>
                  </li>
                  <li class="links-item">
                    <a href="#">?????? ??????</a>
                  </li>
                  <li class="links-item">
                    <a href="#">????????????????????????</a>
                  </li>
                  <li class="links-item">
                    <a href="#">??????</a>
                  </li>
                  <li class="links-item">
                    <a href="#">????????????</a>
                  </li>
                  <li class="links-item">
                    <a href="#">?????????</a>
                  </li>
                  <li class="links-item">
                    <a href="#">?????? ??????</a>
                  </li>
                  <li>
                    <a href="#">??????</a>
                  </li>
                </ul>
              </nav>
              <p class="copyright">&copy; 2021 Westagram</p>
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
