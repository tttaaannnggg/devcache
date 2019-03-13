import React, { Component } from 'react';
import * as actions from "./actions/actions";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
// Import Children
import Login from './components/Login.jsx';
import Registration from './components/Registration.jsx';
import HomeContainer from './containers/HomeContainer.jsx';
// import Header from '../components/Header.jsx';

const mapStateToProps = (store) => ({
  isLoggedIn: store.user.isLoggedIn,
  userInfo: store.user.userInfo,
  email: store.user.email,
  fullName: store.user.fullName,
  password: store.user.password,
  username: store.user.username,
})

const mapDispatchToProps = dispatch => ({
  userLogin: (username, password) => { dispatch(actions.userLogin(username, password)) },
  userSignup: (fullName, username, email, password) => { dispatch(actions.userSignup(fullName, username, email, password)) },
  inSession: () => { dispatch(actions.inSession()) },
  enterEmail: (event) => { dispatch(actions.enterEmail(event.target.value)) },
  enterFullName: (event) => { dispatch(actions.enterFullName(event.target.value)) },
  enterPassword: (event) => { dispatch(actions.enterPassword(event.target.value)) },
  enterUsername: (event) => { dispatch(actions.enterUsername(event.target.value)) },
  userLogout: (id) => { dispatch(actions.userLogout(id)) },
})

class App extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    const { userLogin, userSignup, userLogout, enterEmail, email, enterPassword, password, enterFullName, fullName, userInfo, username, enterUsername, isLoggedIn } = this.props;
    return(
    <div>
      <Router>
        <Switch>
        <Route path="/" render={ () => !isLoggedIn ? <Redirect to="/login" />
              : <HomeContainer 
                userInfo={userInfo}
                userLogout={userLogout}
              />
          } />
          <Route exact path="/login" render={ () => isLoggedIn ? <Redirect to="/" />
              : <Login 
                userLogin={userLogin} 
                enterUsername={enterUsername} 
                enterPassword={enterPassword} 
                username={username} 
                password={password} 
              />
          } />
          <Route path="/signup" render={ () => isLoggedIn ? <Redirect to="/" />
              : <Registration 
                userSignup={userSignup}
                enterEmail={enterEmail}
                email={email}
                enterFullName={enterFullName}
                fullName={fullName}
                enterUsername={enterUsername}
                username={username}
                enterPassword={enterPassword}
                password={password}
              />
          } />
        </Switch>
      </Router>
    </div>
    )
  }
}
  export default connect(mapStateToProps, mapDispatchToProps)(App);
