import React, { Component } from 'react';
import Recommendation_list from './Recommendation_list/Recommendation_list';
import './Main_right.scss';

class Main_right extends Component {
  render() {
    return (
      <div className="main_right">
        <div className="my_profile">
          <div className="my_profile_image">
            <img alt="프로필" src="/images/jaesangChoi/profile2.jpeg" />
          </div>
          <div className="my_profile_name">
            <span>adcey_tek_gercek</span>
            <br />
            <span className="grey_comment">Adnan_Ceyda</span>
          </div>
          <div className="my_profile_change">
            <a href="">전환</a>
          </div>
        </div>

        <div className="recommendation">
          <div className="recommendation_for_you">
            <p className="grey_comment">회원님을 위한 추천</p>
            <p className="bold_comment">모두 보기</p>
          </div>

          <Recommendation_list
            src="/images/jaesangChoi/profile3.jpeg"
            main_name="musttafa_dgn"
            sub_name="adnankizlitas님 외 6명이 팔로우합니다"
          />

          <Recommendation_list
            src="/images/jaesangChoi/profile4.jpeg"
            main_name="rah6590"
            sub_name="회원님을 팔로우합니다"
          />

          <Recommendation_list
            src="https://images.unsplash.com/photo-1547656807-9733c2b738c2?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            main_name="sym.ysl"
            sub_name="gizoo_님 외 1명이 팔로우합니다"
          />

          <Recommendation_list
            src="https://images.unsplash.com/photo-1623720274043-841b674a1a52?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            main_name="serdarakyol67"
            sub_name="buse.19987님 외 1명이 팔로우함"
          />
        </div>

        <p className="etc">
          소개·도움말·홍보 센터·API·채용정보·개인정보처리방침·
          <br />
          약관·위치·인기 계정·해시태그·언어
          <br />
          <br />© 2021 WESTAGRAM FROM FACEBOOK
        </p>
      </div>
    );
  }
}

export default Main_right;
