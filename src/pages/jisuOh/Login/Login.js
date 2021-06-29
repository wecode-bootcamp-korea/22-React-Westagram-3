import React from 'react';
import './Login.scss';

class Login extends React.Component {
  state = {
    id: '',
    pw: '',
  };

  checkIdAndPassword = e => {
    const { id, pw } = this.state;

    e.preventDefault();

    if (!id.includes('@')) {
      alert('@를 포함시켜 주세요!');
    } else if (pw < 5) {
      alert('비밀번호는 5글자 이상이여야 합니다!');
    } else {
      this.props.goToMain();
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  goToMain = () => {
    this.props.history.push('./main-jisu');
  };

  render() {
    const { id, pw } = this.state;
    const { handleChange, checkIdAndPassword } = this;
    return (
      <div className="westagram-wrapper">
        <main className="weatagram__main">
          <article className="banner">
            <img alt="iPhone" src="images/jisuOh/iphone.png" />
          </article>
          <article className="sign-and-login">
            <section className="login-box">
              <section className="logo">
                <h1 className="logo__h1">Westagram</h1>
              </section>
              <form className="login-form">
                <div className="id-box">
                  <input
                    type="text"
                    name="id"
                    className="text-id"
                    value={id}
                    onChange={handleChange}
                    placeholder="전화번호, 사용자 이름 또는 이메일"
                  />
                </div>
                <div className="pw-box">
                  <input
                    type="password"
                    name="pw"
                    className="pw"
                    value={pw}
                    onChange={handleChange}
                    placeholder="비밀번호"
                  />
                </div>
                <div className="btn-box">
                  <button
                    className="btn-login"
                    onClick={checkIdAndPassword}
                    disabled={!id || !pw}
                  >
                    로그인
                  </button>
                </div>
                <div className="line-or-box">
                  <div></div>
                  <span>또는</span>
                  <div></div>
                </div>
                <button className="facebook-btn">
                  <img
                    alt="Facebook"
                    className="facebook-icon"
                    src="images/facebook.png"
                  />
                  <span className="facebook__span">Facebook으로 로그인</span>
                </button>
              </form>
              <section className="forget-password">
                <a href="https://www.instagram.com/accounts/password/reset/">
                  비밀번호를 잊으셨나요?
                </a>
              </section>
            </section>
            <section className="sign-up-box">
              <p className="noaccount">
                계정이 없으신가요?
                <a
                  href="https://www.instagram.com/accounts/emailsignup/"
                  className="signup-link"
                >
                  가입하기
                </a>
              </p>
            </section>
            <section className="download-box">
              <p className="description">앱을 다운로드하세요.</p>
              <div className="badge-box">
                <a href="" className="badge">
                  <img alt="AppStore" src="images/jisuOh/appstore.png" />
                </a>
                <a href="" className="badge">
                  <img
                    alt="GooglePlay"
                    src="images/jisuOh/google-play-badge.png"
                  />
                </a>
              </div>
            </section>
          </article>
        </main>
        <footer className="westagram__footer">
          <div className="meta-link">
            <a href="#">소개</a>
            <a href="#">블로그</a>
            <a href="#">채용 정보</a>
            <a href="#">도움말</a>
            <a href="#">API</a>
            <a href="#">개인정보처리방침</a>
            <a href="#">약관</a>
            <a href="#">인기 계정</a>
            <a href="#">해시태그</a>
            <a href="#">위치</a>
          </div>
          <div className="lan-copyright">
            <span className="copyright">
              &copy; 2021 Westagram from Jisu.Oh
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default Login;
