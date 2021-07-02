import React from 'react';
import './Comment.scss';

class Comment extends React.Component {
  state = {
    isClicked: false,
  };

  toggleImage = e => {
    const { isClicked } = this.state;
    this.setState({ isClicked: !isClicked });
  };

  render() {
    const { comments, deleteComment } = this.props;
    const { isClicked } = this.state;
    return (
      <li className="comment">
        <div className="comment__div">
          <span className="nickname">{comments.nickname}</span>
          <p>{comments.comment}</p>
          <button className="more">더 보기</button>
        </div>
        <div className="like-delete">
          <button className="mini-like-btn" onClick={this.toggleImage}>
            <img
              alt="Heart"
              className="mini-heart"
              src={isClicked ? imagePaths.clickHeart : imagePaths.clickRed}
            />
          </button>
          <button
            className="delete-btn"
            onClick={() => deleteComment(comments.id)}
          >
            X
          </button>
        </div>
      </li>
    );
  }
}

const imagePaths = {
  clickHeart: 'images/jisuOh/heart-red.png',
  clickRed: 'images/jisuOh/heart.png',
};

export default Comment;
