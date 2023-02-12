import React from 'react';
import logo from '../assets/holberton_logo.jpg';
import { StyleSheet, css} from 'aphrodite';

function Header() {
  return (
    <div className={css(header.Header)}>
      <img src={logo} alt="logo" className={css(header.Logo)} />
      <h1 className={css(header.H1)}>School dashboard</h1>
    </div>
  )
}

const header = ({
  H1: {
    marginLeft: '3rem'
  },
  Header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: 'E11D3F',
    borderBottom: '1px solid #E11D3F'
  },
  Logo: {
    height: '200px',
    width: '200px'
  }
});

export default Header;
