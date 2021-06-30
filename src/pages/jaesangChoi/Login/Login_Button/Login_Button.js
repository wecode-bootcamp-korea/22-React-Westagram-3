import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login_Button.scss';

class Login_Button extends Component {
  // goTomain = () => {
  //   const { idfunc, pwfunc } = this.props;

  //   return idfunc === 'passed' && pwfunc === 'nice'
  //     ? this.props.history.push('/main-jaesang')
  //     : alert('잘못된 접근입니다.');
  // };

  goTomain = () => {
    fetch('http://10.58.0.103:8000/user/login', {
      method: 'POST',
      body: JSON.stringify({
        email: this.props.idfunc,
        password: this.props.pwfunc,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          this.props.history.push('/main-jaesang');
          window.localStorage.setItem('token', result.token);
        } else {
          alert('잘못된 회원정보입니다.');
        }
      });
  };

  render() {
    const { colorfunc } = this.props;

    return (
      <div className="button_box">
        <button className={colorfunc} onClick={this.goTomain}>
          로그인
        </button>
      </div>
    );
  }
}

export default withRouter(Login_Button);
