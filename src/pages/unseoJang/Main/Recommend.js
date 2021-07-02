import React from 'react';

class Recommend extends React.Component {
  render() {
    const recommendMember = this.props;
    return (
      <li key="{el.key}">
        <div className="member-profile-img-wrap">
          <a href="#!" className="profile-img">
            <img
              src={recommendMember.memberProfileImg}
              alt="member profile images"
            />
          </a>
        </div>
        <div className="member-profile-contetns">
          <div className="member-id-wrap">
            <a href="#!">
              <span>{recommendMember.memberId}</span>
            </a>
          </div>
          <div>
            <span>{recommendMember.follwNum}</span>
          </div>
        </div>
        <div className="btn-follow-wrap">
          <button type="button">
            <span>팔로우</span>
          </button>
        </div>
      </li>
    );
  }
}

export default Recommend;
