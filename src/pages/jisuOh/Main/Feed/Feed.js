import React from 'react';
import CommentList from '../CommentList/CommentList';
import './Feed.scss';

class Feed extends React.Component {
  state = {
    comment: '',
    comments: [],
  };

  addComment = e => {
    e.preventDefault();
    this.setState({
      comments: this.state.comments.concat({
        id: this.state.comments.length + 1,
        nickname: 'love8080',
        comment: this.state.comment,
      }),
    });
    this.setState({ comment: '' });
  };

  deleteComment = id => {
    this.setState({
      comments: this.state.comments.filter(content => content.id !== id),
    });
  };

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  render() {
    return (
      <li className="feed">
        <header className="feed__header">
          <div className="profile-box">
            <div className="profiles">
              <img alt="Profile" src="images/jisuOh/photo/profile1.jpeg" />
            </div>
            <span className="name">love8080</span>
          </div>
          <span className="menu-icon">
            <img alt="Menu" src="images/jisuOh/menu.png" className="menu" />
          </span>
        </header>
        <section className="feed__photo">
          <img alt="Feed" src="images/jisuOh/photo/profile1.jpeg" />
        </section>
        <div className="comment-wrapper">
          <section className="feed__like">
            <section className="like__section">
              <section className="icons">
                <button className="icon-btn">
                  <img alt="Heart" src="images/jisuOh/heart.png" />
                </button>
                <button className="icon-btn">
                  <img alt="Comment" src="images/jisuOh/speech-bubble.png" />
                </button>
                <button className="icon-btn">
                  <img alt="Share" src="images/jisuOh/send.png" />
                </button>
              </section>
              <button className="icon-btn bookmark">
                <img alt="Bookmark" src="images/jisuOh/bookmark.png" />
              </button>
            </section>
          </section>
          <section className="profiles-wrapper">
            <div className="profiles">
              <img alt="Profile" src="images/jisuOh/photo/profile1.jpeg" />
            </div>
            <span>
              <span className="weight">anuisje</span>님 외{' '}
              <span className="weight">10명</span>이 좋아합니다
            </span>
          </section>
          <section className="feed__comment">
            <ul className="comment__ul">
              <CommentList
                comments={this.state.comments}
                deleteComment={this.deleteComment}
              />
            </ul>
            <p className="time">42분 전</p>
          </section>
          <section className="comment-input">
            <form className="comment__form" onSubmit={this.addComment}>
              <input
                type="text"
                className="comment-area"
                placeholder="댓글 달기..."
                value={this.state.comment}
                onChange={this.handleChange}
              />
            </form>
            <button className="post-btn" onClick={this.addComment}>
              게시
            </button>
          </section>
        </div>
      </li>
    );
  }
}

export default Feed;
