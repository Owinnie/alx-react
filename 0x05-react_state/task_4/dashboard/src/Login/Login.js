import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <React.Fragment>
      <div className={css(body.App)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" className={css(body.input)} />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" className={css(body.input)} />
        <button>OK</button>
      </div>
    </React.Fragment>
  )
}

const body = StyleSheet.create({
  App: {
    padding: '36px 24px',
    '@media (max-with: 900px)': {
      display: 'flex',
      flexDirection: 'column'
    }
  },
  input: {
    margin: '0 16px 0 8px'
  }
});

export default Login;
