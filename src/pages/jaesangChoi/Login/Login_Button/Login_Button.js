import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Login_Button extends Component {
  goTomain = () => {
    this.props.history.push('/main-jaesang');
  };

  render() {
    return (
      <div className="button_box">
        <button onClick={this.goTomain}>로그인</button>
      </div>
    );
  }
}

export default withRouter(Login_Button);
