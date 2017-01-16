import React from 'react';
import { Link } from 'react-router';

const Settings = () => (
  <div id="settings">
    <div>Settings!</div>

    <Link to="/">
      <button className="btn btn-default">back to main</button>
    </Link>
  </div>
);
Settings.propTypes = {};

export default Settings;
