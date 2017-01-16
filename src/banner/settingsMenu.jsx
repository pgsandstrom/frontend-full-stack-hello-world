import React from 'react';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';

import { raiseError } from '../global/actions';
import { getServerUrl } from '../backend';

import '../../css/_util.scss';
import './settingsMenu.scss';

class SettingsMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = { dropdownVisible: false };
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true);
  }

  handleClickOutside(e) {
    // Check if click was outside of component
    if (!this.node || !this.node.contains(e.target)) {
      this.setState({ dropdownVisible: false });
    } else {
      this.setState({ dropdownVisible: true });
    }
  }

  render() {
    return (
      <div className="settings-menu" ref={node => (this.node = node)}>
        <div className="settings-icon">
          <div className="settings-circle">
            <span className="fa-stack fa-lg">
              <i className="fa fa-user fa-stack-2x" />
              <i className="fa fa-gear fa-stack-1x" />
            </span>
          </div>
        </div>

        <ReactCSSTransitionGroup transitionName="dropdown" transitionEnterTimeout={100} transitionLeaveTimeout={200} component="div">
          {this.state.dropdownVisible && <ConnectedDropdown />}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

class DropDown extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick() {
    fetch(`${getServerUrl()}/api/logout`,
      { credentials: 'same-origin' },
    ).then((response) => {
      if (response.ok) {
        Cookies.remove('login');
        Cookies.remove('username');
        Cookies.remove('phonenumber');
        location.reload();
      } else {
        this.showError(`Logout responded with error: ${response.error}`);
      }
    }).catch((error) => {
      this.showError(`Logout fetch caught error: ${error.message}`);
      throw error;
    });
  }

  showError(errorMessage) {
    this.props.raiseError('Ett fel har inträffat', 'Utloggningen misslyckades', errorMessage);
  }

  render() {
    return (
      <nav className="dropdown">
        <ul className="normalize-list">
          <li className="item">
            <span>
              <i className="fa fa-user" aria-hidden="true" />
              <span> {Cookies.get('name')} </span>
            </span>
          </li>
          <li className="item">
            <Link className="normalize-link" to="/settings">
              Inställningar
            </Link>
          </li>
          <li className="item">
            <button onClick={this.handleLogoutClick} className="normalize-button">Logga ut</button>
          </li>
        </ul>
      </nav>
    );
  }
}
DropDown.propTypes = {
  raiseError: React.PropTypes.func.isRequired,
};
const ConnectedDropdown = connect(null, { raiseError })(DropDown);


export default SettingsMenu;
