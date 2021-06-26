import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login_Button.scss';

class Login_Button extends Component {
  goTomain = () => {
    if (this.props.idfunc === 'passed' && this.props.pwfunc === 'nice') {
      this.props.history.push('/main-jaesang');
      return;
    }
  };

  render() {
    return (
      <div className="button_box">
        <button className={this.props.colorfunc} onClick={this.goTomain}>
          로그인
        </button>
      </div>
    );
  }
}

export default withRouter(Login_Button);
