import './Logo.css';
import React from 'react';
import logo from '../../assets/imgs/logo.png';

export const Logo = (props) =>
  <aside className="logo">
    <a  href="https://github.com/fuhr-br" className="logo" target="_blank" rel="noopener noreferrer">
      <img src={logo} alt="logo"/>
    </a>
  </aside>