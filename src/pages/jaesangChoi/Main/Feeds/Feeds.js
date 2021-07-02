import React, { Component } from 'react';
import Comment from './Comment/Comment';
import './Feeds.scss';

class Feeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      comments: [],
      idnumber: 1,
    };
  }

  componentDidMount = () => {
    this.setState({ comments: this.props.comments });
  };

  handleComment = e => {
    this.setState({
      comment: e.target.value,
    });
  };

  addComment = e => {
    e.preventDefault();

    this.setState({
      comments: this.state.comments.concat({
        id: this.state.idnumber + 3,
        text: this.state.comment,
      }),
      comment: '',
      idnumber: this.state.idnumber + 1,
    });
  };

  render() {
    const { comments, comment } = this.state;
    const { handleComment, addComment } = this;
    // console.log(this.state);

    return (
      <div className="feeds">
        <article>
          <div className="feeds_profile">
            <div className="feeds_profile_image">
              <img alt="profile" src={this.props.profilesrc} />
            </div>
            <p className="feeds_profile_name">
              <span className="feeds_profile_main_name">
                ecemakdgnn
                <br />
              </span>
              <span className="feeds_profile_sub_name">Bursa Province</span>
            </p>
            <div className="feeds_profile_extension">···</div>
          </div>
          <div>
            <img
              alt="sunset"
              className="main_feed_img"
              src={this.props.mainfeedsrc}
            />
          </div>

          <div className="comment_icon_box">
            <div className="left_icon">
              <img alt="heart_icon" src="/images/jaesangChoi/heart2.png" />
              <img
                alt="comment_icon"
                src="/images/jaesangChoi/commentary.png"
              />
              <img alt="share_icon" src="/images/jaesangChoi/send.png" />
            </div>
            <div className="right_icon">
              <img alt="bookmark_icon" src="/images/jaesangChoi/bookmark.png" />
            </div>
          </div>

          <div className="comment_profile">
            <div className="comment_profile_icon">
              <img
                alt="profile"
                src="/images/jaesangChoi/comment_profile.jpeg"
              />
            </div>
            <div className="commnet_profile_text">
              <span>
                <span className="bold_comment">aineworld</span>님 외{' '}
                <span className="bold_comment">10명</span>이 좋아합니다
              </span>
            </div>
          </div>

          <div className="first_comment">
            <span className="bold_comment">canon_mj</span> 위워크에서 진행한
            베이킹 클래스... <span className="grey_comment">더 보기</span>
          </div>

          <div className="second_comment">
            <div className="second_comment_text">
              <span className="bold_comment">neceosecius</span> 거봐
              좋았잖아~~~~~
            </div>
            <div className="second_comment_icon">
              <img alt="heart_icon" src="/images/jaesangChoi/heart2.png" />
            </div>
          </div>

          <div className="third_comment">42분 전</div>

          <ul className="comment_list">
            {comments.map(comment => {
              return <Comment key={comment.id} text={comment.text} />;
            })}
          </ul>

          <div className="push_comment">
            <div className="push_comment_icon">
              <img alt="smile_icon" src="/images/jaesangChoi/smile.png" />
            </div>
            <form className="push_comment_text" onSubmit={addComment}>
              <input
                onChange={handleComment}
                value={comment}
                className="input_comment"
                type="text"
                placeholder="댓글달기..."
              />
            </form>
            <div className="push_comment_button">
              <button onClick={addComment}>게시</button>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Feeds;
