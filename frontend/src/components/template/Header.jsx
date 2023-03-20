import './Header.css';
import React from 'react';

export const Header = (props) =>
  <header className='header d-none d-sm-flex  flex-comun'>
    <p className='lead text-muted'>{props.subtitle}</p>
    <h1 className="mt-2">
      <i className={props.icon}></i> {props.title}
    </h1>
  </header>
