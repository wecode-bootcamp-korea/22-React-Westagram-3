import React, { Component } from 'react';
import Recommendation_list from './Recommendation_list/Recommendation_list';
import RecommendationData from './RecommendationData';
import './Main_right.scss';

class Main_right extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Recommendationlist: [],
    };
  }

  componentDidMount() {
    this.setState({
      Recommendationlist: RecommendationData,
    });
  }

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

          <ul>
            {this.state.Recommendationlist.map(list => {
              return (
                <Recommendation_list
                  key={list.id}
                  src={list.src}
                  main_name={list.main_name}
                  sub_name={list.sub_name}
                />
              );
            })}
          </ul>
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
