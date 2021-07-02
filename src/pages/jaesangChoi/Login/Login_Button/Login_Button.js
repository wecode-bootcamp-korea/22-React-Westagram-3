import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login_Button.scss';

class Login_Button extends Component {
  goTomain = () => {
    fetch('http://10.58.0.103:8000/user/login', {
      //로그인 api
      method: 'POST',
      body: JSON.stringify({
        email: this.props.idvalue,
        password: this.props.pwvalue,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          this.props.history.push('/main-jaesang');
          window.localStorage.setItem('token', result.token); //토큰 로컬스토리지에 저장
        } else {
          alert('잘못된 회원정보입니다.');
        }
      });
  };

  render() {
    const { idvalue, pwvalue } = this.props;

    return (
      <div className="button_box">
        <button
          className={
            idvalue.indexOf('@') !== -1 && pwvalue.length >= 8
              ? 'blue'
              : 'sky_blue'
          }
          onClick={this.goTomain}
        >
          로그인
        </button>
      </div>
    );
  }
}

export default withRouter(Login_Button);
