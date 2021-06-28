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

  // handleIdInput = e => {
  //   this.setState({ id: e.target.value }, () => {
  //     let idValue = String(this.state.id);

  //     idValue.indexOf('@') === -1
  //       ? this.setState({ idpass: 'failed' })
  //       : this.setState({ idpass: 'passed' });
  //   });
  // };

  // handleIdInput2 = e => {
  //   this.setState({ id: e.target.value });
  //   let idValue = String(this.state.id);

  //   idValue.indexOf('@') === -1
  //   ? this.setState({ idpass: 'failed' })
  //   : this.setState({ idpass: 'passed' });

  // };

  handleIdInput = e => {
    const value = e.target.value;

    this.setState({
      id: value,
      idpass: value.indexOf('@') === -1 ? 'failed' : 'passed',
    });
  };

  handlePwInput = e => {
    this.setState({ pw: e.target.value }, () => {
      let pwValue = String(this.state.pw);

      pwValue.length >= 5
        ? this.setState({ pwpass: 'nice' })
        : this.setState({ pwpass: 'shit' });
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="log_in_box">
        <div className="title">westagram</div>
        <div className="log_in">
          <div className="id">
            <input
              onChange={this.handleIdInput}
              className="id_input"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
          </div>
          <div className="password">
            <input
              onChange={this.handlePwInput}
              className="password_input"
              type="password"
              placeholder="비밀번호"
            />
          </div>
        </div>

        <Login_Button
          idfunc={this.state.idpass}
          pwfunc={this.state.pwpass}
          colorfunc={
            this.state.idpass === 'passed' && this.state.pwpass === 'nice'
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
