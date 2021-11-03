import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/home/home';
import SignIn from './pages/sign-in/sign-in';

import './app.scss';


class App extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
            exact
            path='/signin'
            render={() =>
              this.props.loggedUser ? (
                <Redirect to='/' />
              ) : (
                <SignIn />
              )
            }
          />
      </Switch>
    )
  }
}

const mapStateToProps = state => ({
  loggedUser: state.loggedUser.loggedUser
});

export default connect(
  mapStateToProps
)(App);