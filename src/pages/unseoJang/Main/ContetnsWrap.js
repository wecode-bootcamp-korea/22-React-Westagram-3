import React, { Component } from 'react';

import Comment from './Comment';
import CommenList from './CommentList';

class ContetnsWrap extends Component {
  constructor() {
    super();
    //state 생성
    this.state = {
      commentValue: '',
      commentList: [],
      value: '', //this.state를 다시 빈 분자열로
    };
  }

  //state 상태 핸들러
  handleCommentInput = e => {
    this.setState({
      commentValue: e.target.value,
      value: e.target.value,
    });
    console.log(e.target.value);
  };
  //버튼 클릭 이벤트와 함수 생성
  addComment = e => {
    const { commentValue, commentList } = this.state; //구조분해할당
    this.setState({
      commentList: commentList.concat({ comment: this.state.commentValue }),
      commentValue: '',
      value: '',
    });
    {
      console.log('버튼 클릭 이벤트와 함수 생성');
    }
    e.preventDefault();
  };
  //엔터쳤을때
  addCommEnter = e => {
    if (e.key === 'enter') {
      this.comment();
    }
    {
      console.log('엔터쳤을때');
    }
  };
  //목데이터
  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({
          commentList: res,
        });
      });
  }

  render() {
    console.log(this.state);
    return (
      <section className="contetns-wrap">
        <article>
          <header>
            <div className="profile-wrap">
              <div className="profile-img-box">
                <div>
                  <a href="#" className="profile-img-wrap">
                    <img
                      src="/images/unseoJang/94196291_334483640847841_8993817347827433472_n.jpg"
                      alt="프로필 사진"
                      className="profile-img"
                    />
                  </a>
                </div>
              </div>
              <div className="profile-name">
                <div className="profile-name-wrap">
                  <span className="name-wrap">
                    <a href="#" className="name">
                      seeeeeeo.un
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="option">
              <button className="wpO6b" type="button">
                <svg
                  aria-label="옵션 더 보기"
                  className="_8-yf5 "
                  fill="#262626"
                  height="16"
                  viewBox="0 0 48 48"
                  width="16"
                >
                  <circle
                    clipRule="evenodd"
                    cx="8"
                    cy="24"
                    fillRule="evenodd"
                    r="4.5"
                  ></circle>
                  <circle
                    clipRule="evenodd"
                    cx="24"
                    cy="24"
                    fillRule="evenodd"
                    r="4.5"
                  ></circle>
                  <circle
                    clipRule="evenodd"
                    cx="40"
                    cy="24"
                    fillRule="evenodd"
                    r="4.5"
                  ></circle>
                </svg>
              </button>
            </div>
          </header>
          <div className="img-wrap">
            <div>
              <div>
                <img
                  src="/images/unseoJang/contents_01.jpg"
                  alt="Photo by 장서운 in 교토리. May be an image of text that says '토 구 리 Ira'."
                />
              </div>
            </div>
          </div>
          <div className="insta-contents-wrap">
            <section className="icon-wrap">
              <ul>
                <li>
                  <button className="  " type="button">
                    <div className=" ">
                      <span className="">
                        <svg
                          aria-label="좋아요"
                          className=""
                          fill="#262626"
                          height="24"
                          viewBox="0 0 48 48"
                          width="24"
                        >
                          <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                        </svg>
                        {/* <svg aria-label="좋아요 취소" className="" fill="#ed4956" height="24" viewBox="0 0 48 48" width="24">
                                                            <path
                                                                d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
                                                            </path>
                                                        </svg> */}
                      </span>
                    </div>
                  </button>
                </li>
                <li>
                  <button className="" type="button">
                    <div className="">
                      <svg
                        aria-label="댓글 달기"
                        className=" "
                        fill="#262626"
                        height="24"
                        viewBox="0 0 48 48"
                        width="24"
                      >
                        <path
                          clipRule="evenodd"
                          d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </li>
                <li>
                  <button>
                    <div className="" type="button">
                      <svg
                        aria-label="게시물 공유"
                        className=" "
                        fill="#262626"
                        height="24"
                        viewBox="0 0 48 48"
                        width="24"
                      >
                        <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                      </svg>
                    </div>
                  </button>
                </li>
                <li>
                  <div>
                    <div aria-disabled="false" role="button" tabIndex="0">
                      <button className="wpO6b  " type="button">
                        <div className="QBdPU ">
                          <svg
                            aria-label="저장"
                            className="_8-yf5 "
                            fill="#262626"
                            height="24"
                            viewBox="0 0 48 48"
                            width="24"
                          >
                            <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </section>
            <section className="view-num-wrap">
              <div>
                <span>
                  조회 <span>25,895</span> 회
                </span>
              </div>
            </section>
            <section className="comment-wrap">
              <div className="comment-list">
                <ul className="list">
                  {/* {this.state.commentList.map(el => {
                    return (
                      <CommenList
                        commentList={el}
                        key={el.key}
                        userId={el.userId}
                        comment={el.comment}
                      />
                    );
                  })} */}
                  {this.state.commentList.map(el => {
                    return <Comment key={el.key} comment={el.comment} />;
                  })}
                  {/* {this.state.commentList.map((commentElement, idx) => {
                    return (
                      <li key={idx}>
                        <span className="id-wrap">
                          <a href="#" tabIndex="0" className="comment-id">
                            kimdaebeom
                          </a>
                        </span>
                        <span>{commentElement}</span>
                      </li>
                    );
                  })} */}
                </ul>
              </div>
              <div className="time-wrap">
                <a href="#">
                  <time datatime="2021-06-15T07:11:27.000Z">2시간 전</time>
                </a>
              </div>
            </section>
            <section className="comment-input-wrap">
              <div className="comment-box-wrap">
                <form onSubmit={this.addComment}>
                  <div className="commnet-input">
                    <button className="btn-emoticon" type="button">
                      <div>
                        <svg
                          aria-label="이모티콘"
                          className="_8-yf5 "
                          fill="#262626"
                          height="24"
                          viewBox="0 0 48 48"
                          width="24"
                        >
                          <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path>
                          <path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path>
                        </svg>
                      </div>
                    </button>
                    <label>
                      <input
                        type="text"
                        placeholder="댓글 달기"
                        id="commentInput"
                        onChange={this.handleCommentInput}
                        value={this.state.value}
                      />
                    </label>
                    <button
                      type="type"
                      className="btn-comment"
                      onClick={this.addComment}
                    >
                      게시
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </article>
      </section>
    );
  }
}

export default ContetnsWrap;
