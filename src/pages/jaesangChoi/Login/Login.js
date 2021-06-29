import React, { Component } from 'react';
import './Login.scss';
import Login_Button from './Login_Button/Login_Button';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 'a',
      pw: 0,
    };
  }

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { handleInput } = this;

    return (
      <div className="log_in_box">
        <div className="title">westagram</div>
        <div className="log_in">
          <div className="id">
            <input
              onChange={handleInput}
              className="id_input"
              name="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
          </div>
          <div className="password">
            <input
              onChange={handleInput}
              className="password_input"
              name="pw"
              type="password"
              placeholder="비밀번호"
            />
          </div>
        </div>

        <Login_Button
          idfunc={this.state.id.indexOf('@') === -1 ? 'failed' : 'passed'}
          pwfunc={this.state.pw.length >= 5 ? 'nice' : 'shit'}
          colorfunc={
            this.state.id.indexOf('@') !== -1 && this.state.pw.length >= 5
              ? 'blue'
              : 'sky_blue'
          }
        />

        <p> 비밀번호를 잊으셨나요? </p>
      </div>
    );
  }
}

export default Login;
