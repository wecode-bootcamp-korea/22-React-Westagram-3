import React, { Component } from 'react';
import Comment from './Comment/Comment';
import './Feeds.scss';

class Feeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      comments: [],
      idvalue: 0,
    };
  }

  handleComment = e => {
    this.setState({
      comment: e.target.value,
    });
  };

  pressButton = () => {
    console.log('pressButton');

    this.setState({
      comments: this.state.comments.concat({
        id: this.state.idvalue,
        text: this.state.comment,
      }),
      idvalue: this.state.idvalue + 1,
    });

    return;
  };

  //한글 댓글은 엔터누르면 댓글이 두개달림...
  enterDown = e => {
    if (e.code === 'Enter') {
      this.setState({
        comments: this.state.comments.concat({
          id: this.state.idvalue,
          text: this.state.comment,
        }),
        idvalue: this.state.idvalue + 1,
      });
    }

    return;
  };

  render() {
    console.log(this.state);
    return (
      <div className="feeds">
        <article>
          <div className="feeds_profile">
            <div className="feeds_profile_image">
              <img alt="프로필" src="/images/jaesangChoi/profile1.jpeg" />
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
              src="https://images.unsplash.com/photo-1623659993428-0c5504a16ca5?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </div>

          <div className="comment_icon_box">
            <div className="left_icon">
              <img alt="하트아이콘" src="/images/jaesangChoi/heart2.png" />
              <img
                alt="코멘트아이콘"
                src="/images/jaesangChoi/commentary.png"
              />
              <img alt="공유아이콘" src="/images/jaesangChoi/send.png" />
            </div>
            <div className="right_icon">
              <img alt="북마크아이콘" src="/images/jaesangChoi/bookmark.png" />
            </div>
          </div>

          <div className="comment_profile">
            <div className="comment_profile_icon">
              <img
                alt="프로필"
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
              <img alt="하트아이콘" src="/images/jaesangChoi/heart2.png" />
            </div>
          </div>

          <div className="third_comment">42분 전</div>

          <ul className="comment_list">
            {this.state.comments.map(t => {
              return <Comment key={t.id} text={t.text} />;
            })}
          </ul>

          <div className="push_comment">
            <div className="push_comment_icon">
              <img alt="스마일아이콘" src="/images/jaesangChoi/smile.png" />
            </div>
            <div className="push_comment_text">
              <input
                onChange={this.handleComment}
                onKeyPress={this.enterDown}
                className="input_comment"
                type="text"
                placeholder="댓글달기..."
              />
            </div>
            <div className="push_comment_button">
              <button onClick={this.pressButton}>게시</button>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Feeds;
