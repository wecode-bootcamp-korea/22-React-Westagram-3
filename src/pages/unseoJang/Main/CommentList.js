import React from 'react';

class CommentList extends React.Component {
  render() {
    const { commentList } = this.props;
    return (
      <li key="{el.key}">
        <span className="id-wrap">
          <a href="#" tabIndex="0" className="comment-id">
            {commentList.userId}
          </a>
        </span>
        <span>{commentList.comment}</span>
      </li>
    );
  }
}

export default CommentList;
