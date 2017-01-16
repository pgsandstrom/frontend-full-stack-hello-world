import React from 'react';
import { connect } from 'react-redux';
import { Link, Router, Route, browserHistory } from 'react-router';
import Cookies from 'js-cookie';

import ErrorDialog from './global/errorDialog';
import Banner from './banner/banner';
import Login from './login';
import Settings from './settings/settings';
import SettingsMenu from './banner/settingsMenu';
import Thing from './thing/thing';

import './main.scss';

const mapStateToProps = state =>
  ({
    error: state.globalReducer.error,
  });

const mapDispatchToProps = {
};

class LoggedIn extends React.Component {
  componentWillMount() {
    // if we would have wanted to maybe fetch some constants from the backend, this would be the place
  }

  render() {
    return (
      <div className="react-root">
        <div className="main-banner">
          <Banner >
            <SettingsMenu id={1} />
          </Banner>
        </div>
        <div className="main-body">
          {this.props.children}
          {!this.props.children &&
          <div>
            <Link className="normalize-link" to="/thing/123">
              Click here
            </Link>
          </div>}
        </div>
        <ErrorDialog error={this.props.error} />
      </div>
    );
  }
}
LoggedIn.propTypes = {
  children: React.PropTypes.object,
  error: React.PropTypes.object,
};
const ConnectedLoggedIn = connect(mapStateToProps, mapDispatchToProps)(LoggedIn);

const requireAuth = (nextState, replace) => {
  if (Cookies.get('login') !== undefined) { // temporarily inverted login check to skip it
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

const Main = () => (
  <Router history={browserHistory}>
    <Route path="/" component={ConnectedLoggedIn} onEnter={requireAuth}>
      <Route path="/thing/:thingId" component={Thing} />
    </Route>
    <Route path="/login" component={Login} />
    <Route path="/settings" component={Settings} onEnter={requireAuth} />
  </Router>
);

export default Main;
