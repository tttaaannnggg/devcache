import React, { Component } from 'react';
import * as actions from "./actions/actions";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
// Import Children
import Login from './components/Login.jsx';
import Registration from './components/Registration.jsx';
import Home from './components/Home.jsx';
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
  userSignup: (fullName, email, password) => { dispatch(actions.userSignup(fullName, email, password)) },
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
          <Route exact path="/" render={ () =>
              // <h1>devCache</h1>
              // <p>A personalized cache of code snippets for developers.</p>
              <Login 
                userLogin={userLogin} 
                enterUsername={enterUsername} 
                enterPassword={enterPassword} 
                username={username} 
                password={password} 
              />
          } />
        </Switch>
      </Router>
    </div>
    )
    // if (isLoggedIn) {
    //   return <Home />
    // } else {
    //   if (true) {
    //     return (
    //       <React.Fragment>
    //         <Registration
    //           enterEmail={enterEmail}
    //           email={email}
    //           enterFullName={enterFullName}
    //           fullName={fullName}
    //           enterUsername={enterUsername}
    //           username={username}
    //           enterPassword={enterPassword}
    //           password={password}
    //           // create user
    //         />
    //       </React.Fragment>
    //     );
      // } else {
      //   return (
      //     <React.Fragment>
            // <h1>devCache</h1>
            // <p>A personalized cache of code snippets for developers.</p>
      //       <Login userLogin={userLogin} enterUsername={enterUsername} enterPassword={enterPassword} username={username} password={password} />)}/>
      //     </React.Fragment>
      //   );
      // }
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(App);
