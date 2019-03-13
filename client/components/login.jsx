import React from 'react';

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
        {/* <a onClick={ props.registerUser }>Register</a>  */}
      </div>
    </div>
  );
};

export default Login;