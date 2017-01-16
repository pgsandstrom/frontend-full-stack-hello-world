import React from 'react';
import { Link } from 'react-router';

import './banner.scss';

const Banner = props => (
  <header className="banner">
    <Link to="/">
      <img id="banner-image" src="/img/banner.png" alt="Hello" />
    </Link>
    {props.children && Array.isArray(props.children) && props.children.map(child =>
      <div key={child.props.id} className="child">{child}</div>,
    )}
    {props.children && !Array.isArray(props.children) && <div className="child">{props.children}</div>}
  </header>
);
Banner.propTypes = { children: React.PropTypes.any };


export default Banner;
