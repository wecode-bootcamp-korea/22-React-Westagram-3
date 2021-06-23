import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="upper_bar">
          <div className="upper_logo">
            <img
              alt="로고"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
            />
          </div>

          <div className="upper_search">
            <input type="text" placeholder="검색" />
          </div>

          <div className="upper_icons">
            <img alt="탐색아이콘" src="/images/explore.png" />
            <img alt="하트아이콘" src="/images/heart.png" />
            <img alt="프로필아이콘" src="/images/profile.png" />
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
