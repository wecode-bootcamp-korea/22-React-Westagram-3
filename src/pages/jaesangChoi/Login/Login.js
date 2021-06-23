import React, { Component } from 'react';
import './Login.scss';
import Login_Button from './Login_Button/Login_Button';

class Login extends Component {
  render() {
    return (
      <div className="log_in_box">
        <div className="title">westagram</div>
        <div className="log_in">
          <div className="id">
            <input
              className="id_input"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
          </div>
          <div className="password">
            <input
              className="password_input"
              type="password"
              placeholder="비밀번호"
            />
          </div>
        </div>

        <Login_Button />

        <p> 비밀번호를 잊으셨나요? </p>
      </div>
    );
  }
}

export default Login;
