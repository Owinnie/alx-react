import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [enableSubmit, setenableSubmit] = useState(false)

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    setIsLoggedIn(true)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  useEffect(() => {
    if (email != '' && password != '') {
      setEnableSubmit(true);
    } else {
      if (enableSubmit != false) {
        setEnableSubmit(false);
      }
    }
  }, [email, password]);

  return (
    <React.Fragment>
      <div className={css(body.App)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="email">Email: </label>
          <input type="email"
            id="email" name="email"
            className={css(body.input)}
            value={email} onChange={handleChangeEmail} />
          <label htmlFor="password">Password: </label>
          <input type="password"
            id="password" name="password"
            className={css(body.input)}
            value={password} onChange={handleChangePassword} />
          <input type="submit" value="Ok" disabled={!enableSubmit} />
        </form>
      </div>
    </React.Fragment>
  )
}

const body = StyleSheet.create({
  App: {
    padding: '36px 24px'
  },
  input: {
    margin: '0 16px 0 8px'
  }
});

export default Login;
