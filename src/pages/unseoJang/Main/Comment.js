import React from 'react';

class Comment extends React.Component {
  render() {
    const { comment } = this.props;
    return (
      <li key="{el.key}">
        <span className="id-wrap">
          <a href="#" tabIndex="0" className="comment-id">
            kimdaebeom
          </a>
        </span>
        <span>{comment}</span>
      </li>
    );
  }
}

export default Comment;
