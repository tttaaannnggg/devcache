import React from 'react';

const Registration = props => {

  return (
    <React.Fragment>
      <h1>devCache</h1>
      <p>A personalized cache of code snippets for developers</p>
      // <h3>devCache Registration</h3>
      <div className='login-box'>
        <input
          id='fullname'
          type='text'
          name='fullname'
          value={ props.fullName }
          placeholder='full name'
          onChange={ props.enterFullName }
        />
        <input
          id='email'
          type='email'
          name='email'
          value={ props.email }
          placeholder='email address'
          onChange={ props.enterEmail }
        />
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
          onClick={ props.userSignup }
        >
          Submit
        </button>
      </div>
    </React.Fragment>
  );
};

export default Registration;