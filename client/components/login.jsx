import React from 'react';
import { Link } from 'react-router-dom';
const Login = props => {
  
  return (
    <div>
      <h1>devCache</h1>
      <p>A personalized cache of code snippets for developers</p>
      <div className='login-box'>
        <input
          id='user'
          type='text'
          name='user'
          value={props.username}
          placeholder='username'
          onChange={ props.enterUsername }
        />
        <input
          id='pass'
          type='password'
          name='pass'
          value={props.password}
          placeholder='password'
          onChange={ props.enterPassword }
        />
        <button
          onClick={() => props.userLogin(props.username, props.password) }
        >Login</button>
        {/* This redirects to register */}
        <Link to="/signup"> <button>Register</button> </Link>
      </div>
    </div>
  );
};

export default Login;