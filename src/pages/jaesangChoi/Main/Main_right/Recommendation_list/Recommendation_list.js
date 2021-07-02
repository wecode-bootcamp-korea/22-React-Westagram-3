import React, { Component } from 'react';

class RecommendationList extends Component {
  render() {
    return (
      <div className="recommendation_list">
        <div className="recommendation_profile_image">
          <img alt="프로필" src={this.props.src} />
        </div>
        <div className="recommendation_profile_name">
          <span className="recommendation_profile_name_main">
            {this.props.main_name}
          </span>
          <br />
          <span className="recommendation_profile_name_sub">
            {this.props.sub_name}
          </span>
        </div>
      </div>
    );
  }
}

export default RecommendationList;
