import React from 'react';

const Login = props => {
  
  return (
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
  );
};

export default Login;