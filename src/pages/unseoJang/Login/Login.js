import './Login.scss';
import React, { Component } from 'react';

class Login extends Component {
  //login handle
  constructor() {
    super();
    this.state = {
      //state 말 그대로 컴포넌트의 상태를 수정
      idInputValue: '',
      pwInputValue: '',
    };
  }
  handleIdInput = e => {
    //IdInout은 event의 약자 e를 인자로 받음
    this.setState({
      idInputValue: e.target.value,
    });
  };

  handlePwInput = e => {
    this.setState({
      pwInputValue: e.target.value,
    });
  };

  //link handle
  goMain = () => {
    this.props.history.push('/main-unseo');
  };

  render() {
    let title = 'westagram';
    return (
      <section className="westagram-login-wrap other">
        <main className="main-wrap">
          <div className="contetns-wrap">
            <div className="box-wrap">
              <div className="login-wrap">
                <h1> {title}</h1>
                <div className="input-wrap">
                  <form>
                    <div className="login-box">
                      <div className="id-wrap">
                        <label>
                          <input
                            type="text"
                            name="ID"
                            id="userId"
                            placeholder="전호번호, 사용자 이름 또는 이메일"
                            onChange={this.handleIdInput}
                          />
                        </label>
                      </div>
                      <div>
                        <label>
                          <input
                            type="password"
                            name="Password"
                            id="userPassWord"
                            placeholder="비밀번호"
                            onChange={this.handlePwInput}
                          />
                        </label>
                      </div>
                      <div className="login-button-wrap">
                        <button
                          type="button"
                          className="btn-login"
                          disabled={
                            this.state.idInputValue.indexOf('@') !== -1 &&
                            this.state.pwInputValue.length > 5
                              ? false
                              : true
                          }
                          onClick={this.goMain}
                        >
                          <span>로그인</span>
                        </button>
                      </div>
                      <a href="." className="find-pw">
                        비밀번호를 잊으셨나요?
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    );
  }
}

export default Login;
