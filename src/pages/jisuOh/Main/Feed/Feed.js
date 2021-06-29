import React from 'react';
import CommentList from '../CommentList/CommentList';
import './Feed.scss';

class Feed extends React.Component {
  state = {
    comment: '',
    comments: [],
  };

  componentDidMount() {
    const { feedData } = this.props;
    this.setState({
      comments: feedData.comments,
    });
  }

  addComment = e => {
    const { comments, comment } = this.state;
    e.preventDefault();
    this.setState({
      comments: comments.concat({
        id: comments.length + 1,
        nickname: 'love8080',
        comment: comment,
      }),
    });
    this.setState({ comment: '' });
  };

  deleteComment = id => {
    const { comments } = this.state;
    this.setState({
      comments: comments.filter(content => content.id !== id),
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { feedData } = this.props;
    const { comments, comment } = this.state;
    const { addComment, handleChange, deleteComment } = this;
    return (
      <li className="feed">
        <header className="feed__header">
          <div className="profile-box">
            <div className="profiles">
              <img alt="Profile" src={feedData.profileSrc} />
            </div>
            <span className="name">{feedData.nickname}</span>
          </div>
          <span className="menu-icon">
            <img alt="Menu" src="images/jisuOh/menu.png" className="menu" />
          </span>
        </header>
        <section className="feed__photo">
          <img alt="Feed" src={feedData.feedSrc} />
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
              <img alt="Profile" src={feedData.likeSrc} />
            </div>
            <span>
              <span className="weight">{feedData.likeNickname}</span>님 외{' '}
              <span className="weight">10명</span>이 좋아합니다
            </span>
          </section>
          <section className="feed__comment">
            <ul className="comment__ul">
              <CommentList comments={comments} deleteComment={deleteComment} />
            </ul>
            <p className="time">42분 전</p>
          </section>
          <section className="comment-input">
            <form className="comment__form" onSubmit={addComment}>
              <input
                type="text"
                name="comment"
                className="comment-area"
                placeholder="댓글 달기..."
                value={comment}
                onChange={handleChange}
              />
            </form>
            <button className="post-btn" onClick={addComment}>
              게시
            </button>
          </section>
        </div>
      </li>
    );
  }
}

export default Feed;
