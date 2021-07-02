import React from 'react';
import { Link } from 'react-router-dom';
import { INFO } from '../../data/footerData';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="westagram__footer">
        <div className="meta-link">
          {INFO.map(el => {
            return (
              <Link to="#!" key={el.id}>
                {el.content}
              </Link>
            );
          })}
        </div>
        <div className="lan-copyright">
          <span className="copyright">&copy; 2021 Westagram from Jisu.Oh</span>
        </div>
      </footer>
    );
  }
}

export default Footer;