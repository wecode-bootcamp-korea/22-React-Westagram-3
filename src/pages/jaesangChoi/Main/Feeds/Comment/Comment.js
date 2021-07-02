import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return <li>{this.props.text}</li>;
  }
}

export default Comment;
