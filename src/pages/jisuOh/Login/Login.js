import React from 'react';
import LoginBox from './Loginbox/Loginbox';
import Footer from './Footer/Footer';
import './Login.scss';

class Login extends React.Component {
  goToMain = () => {
    this.props.history.push('./main-jisu');
  };

  render() {
    return (
      <div className="westagram-wrapper">
        <main className="weatagram__main">
          <article className="banner">
            <img alt="iPhone" src="images/jisuOh/iphone.png" />
          </article>
          <article className="sign-and-login">
            <LoginBox goToMain={this.goToMain} />
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
                <a href="#!" className="badge">
                  <img alt="AppStore" src="images/jisuOh/appstore.png" />
                </a>
                <a href="#!" className="badge">
                  <img
                    alt="GooglePlay"
                    src="images/jisuOh/google-play-badge.png"
                  />
                </a>
              </div>
            </section>
          </article>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Login;
