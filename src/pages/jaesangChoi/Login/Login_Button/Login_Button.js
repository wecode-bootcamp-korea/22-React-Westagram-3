import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login_Button.scss';

class Login_Button extends Component {
  goTomain = () => {
    const { idfunc, pwfunc } = this.props;

    return idfunc === 'passed' && pwfunc === 'nice'
      ? this.props.history.push('/main-jaesang')
      : alert('잘못된 접근입니다.');
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
