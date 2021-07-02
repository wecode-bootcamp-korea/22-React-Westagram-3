import React, { Component } from 'react';
import Recommend from './Recommend';

class Aside extends Component {
  constructor(props) {
    super(props);
    //this.state생성
    this.state = {
      recomendMember: [],
    };
  }
  //목데이터
  componentDidMount() {
    fetch('http://localhost:3000/data/unseoJang/member.json', {
      method: 'GET',
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({
          recomendMember: res.data,
        });
      });
  }
  render() {
    console.log(this.state);
    const { recomendMember } = this.state;
    return (
      <aside className="side-list other">
        <div className="my-profile">
          <div className="my-profile-img">
            <a href="#!">
              <img
                src="/images/unseoJang/94196291_334483640847841_8993817347827433472_n.jpg"
                alt="seeeeeeo.un님의 프로필 사진"
              />
            </a>
          </div>
          <div className="my-profile-contetns">
            <div className="contents-box">
              <div className="id-wrap">
                <a href="#!">seeeeeeo.un</a>
              </div>
              <div className="name-wrap">
                <span>장서운</span>
              </div>
            </div>
          </div>
          <div className="btn-change">
            <button typy="button">
              <span>전환</span>
            </button>
          </div>
        </div>
        <div className="member-wrap">
          <div className="member-recommend">
            <div className="ment">회원을 위한 추천</div>
            <div className="btn-all-wrap">
              <a href="#!" className="btn-all">
                모두보기
              </a>
            </div>
          </div>
          <div className="other-member-wrap">
            <ul>
              {recomendMember.map(el => {
                return (
                  <Recommend
                    key={el.key}
                    memberProfileImg={el.memberProfileImg}
                    memberId={el.memberId}
                    follwNum={el.follwNum}
                  />
                );
              })}
            </ul>
          </div>
        </div>
        <div className="copyright-wrap">
          <div className="link-wrap">
            <ul>
              <li className="link">
                <a
                  className="link-btn"
                  href="https://about.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  소개
                </a>
              </li>
              <li className="link">
                <a className="link-btn" href="https://help.instagram.com/">
                  도움말
                </a>
              </li>
              <li className="link">
                <a
                  className="link-btn"
                  href="https://about.instagram.com/blog/"
                >
                  홍보 센터
                </a>
              </li>
              <li className="link">
                <a
                  className="link-btn"
                  href="https://developers.facebook.com/docs/instagram"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  API
                </a>
              </li>
              <li className="link">
                <a
                  className="link-btn"
                  href="https://www.instagram.com//about/jobs/"
                >
                  채용 정보
                </a>
              </li>
              <li className="link">
                <a
                  className="link-btn"
                  href="https://www.instagram.com//legal/privacy/"
                >
                  개인정보처리방침
                </a>
              </li>
              <li className="link">
                <a
                  className="link-btn _vfM2"
                  href="https://www.instagram.com//legal/terms/"
                >
                  약관
                </a>
              </li>
              <li className="link">
                <a
                  className="link-btn"
                  href="https://www.instagram.com//explore/locations/"
                >
                  위치
                </a>
              </li>
              <li className="link">
                <a
                  className="link-btn"
                  href="https://www.instagram.com//directory/profiles/"
                >
                  인기 계정
                </a>
              </li>
              <li className="link">
                <a
                  className="link-btn"
                  href="https://www.instagram.com//directory/hashtags/"
                >
                  해시태그
                </a>
              </li>
              <li className="link">
                <span className="lang-btn link-btn">
                  언어
                  <select aria-label="표시 언어 변경" className="">
                    <option value="af">Afrikaans</option>
                    <option value="cs">Čeština</option>
                    <option value="da">Dansk</option>
                    <option value="de">Deutsch</option>
                    <option value="el">Ελληνικά</option>
                    <option value="en">English</option>
                    <option value="en-gb">English (UK)</option>
                    <option value="es">Español (España)</option>
                    <option value="es-la">Español</option>
                    <option value="fi">Suomi</option>
                    <option value="fr">Français</option>
                    <option value="id">Bahasa Indonesia</option>
                    <option value="it">Italiano</option>
                    <option value="ja">日本語</option>
                    <option value="ko">한국어</option>
                    <option value="ms">Bahasa Melayu</option>
                    <option value="nb">Norsk</option>
                    <option value="nl">Nederlands</option>
                    <option value="pl">Polski</option>
                    <option value="pt-br">Português (Brasil)</option>
                    <option value="pt">Português (Portugal)</option>
                    <option value="ru">Русский</option>
                    <option value="sv">Svenska</option>
                    <option value="th">ภาษาไทย</option>
                    <option value="tl">Filipino</option>
                    <option value="tr">Türkçe</option>
                    <option value="zh-cn">中文(简体)</option>
                    <option value="zh-tw">中文(台灣)</option>
                    <option value="bn">বাংলা</option>
                    <option value="gu">ગુજરાતી</option>
                    <option value="hi">हिन्दी</option>
                    <option value="hr">Hrvatski</option>
                    <option value="hu">Magyar</option>
                    <option value="kn">ಕನ್ನಡ</option>
                    <option value="ml">മലയാളം</option>
                    <option value="mr">मराठी</option>
                    <option value="ne">नेपाली</option>
                    <option value="pa">ਪੰਜਾਬੀ</option>
                    <option value="si">සිංහල</option>
                    <option value="sk">Slovenčina</option>
                    <option value="ta">தமிழ்</option>
                    <option value="te">తెలుగు</option>
                    <option value="vi">Tiếng Việt</option>
                    <option value="zh-hk">中文(香港)</option>
                    <option value="bg">Български</option>
                    <option value="fr-ca">Français (Canada)</option>
                    <option value="ro">Română</option>
                    <option value="sr">Српски</option>
                    <option value="uk">Українська</option>
                  </select>
                </span>
              </li>
            </ul>
          </div>
          <p>© 2021 Instagram from Facebook</p>
        </div>
      </aside>
    );
  }
}

export default Aside;
