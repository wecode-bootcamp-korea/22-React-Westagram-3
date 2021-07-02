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
  //login
  // login = () => {
  //   fetch('http://10.58.0.102:8000/user/signup', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: this.state.idInputValue,
  //       password: this.state.pwInputValue,
  //       nickname: '123456',
  //       name: '김정숙',
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(response => {
  //       if (response.token) {
  //         alert('통신성공');
  //       } else {
  //         alert('실패');
  //       }
  //     });
  // };
  login = () => {
    fetch('http://10.58.0.102:8000/user/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.idInputValue,
        password: this.state.pwInputValue,
      }),
    })
      .then(response => {
        response.json();
        console.log(response.status);
      })
      .then(response => {
        if (response.MESSAGE === 'SUCCESS') {
          alert('로그인성공');
          this.props.history.push('/main-unseo');
        } else {
          alert('로그인실패');
        }
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
                          onClick={this.login}
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
