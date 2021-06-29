import React, { Component } from 'react';
import './Login.scss';
import Login_Button from './Login_Button/Login_Button';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 'a',
      pw: 0,
      idpass: 'failed',
      pwpass: 'shit',
    };
  }

  handleIdInput = e => {
    const idvalue = e.target.value;

    this.setState({
      id: idvalue,
      idpass: idvalue.indexOf('@') === -1 ? 'failed' : 'passed',
    });
  };

  handlePwInput = e => {
    const pwvalue = e.target.value;

    this.setState({
      pw: String(pwvalue),
      pwpass: pwvalue.length >= 5 ? 'nice' : 'shit',
    });
  };

  render() {
    const { idpass, pwpass } = this.state;
    const { handleIdInput, handlePwInput } = this;

    return (
      <div className="log_in_box">
        <div className="title">westagram</div>
        <div className="log_in">
          <div className="id">
            <input
              onChange={handleIdInput}
              className="id_input"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
          </div>
          <div className="password">
            <input
              onChange={handlePwInput}
              className="password_input"
              type="password"
              placeholder="비밀번호"
            />
          </div>
        </div>

        <Login_Button
          idfunc={idpass}
          pwfunc={pwpass}
          colorfunc={
            idpass === 'passed' && pwpass === 'nice' ? 'blue' : 'sky_blue'
          }
        />

        <p> 비밀번호를 잊으셨나요? </p>
      </div>
    );
  }
}

export default Login;
