import './Main.css';
import React from 'react';

import { Header } from './Header';

export const Main = (props) =>
  // React.Fragment não gera um elemento HTML na hora de renderizar a página
  /*Na prática, o Header e o Main, não serão involtos em uma tag*/
  // props.children irá renderizar elementos filhos
  <React.Fragment>
    <Header {...props} />
    <main className="content container-fluid">
      <div className="p-3 mt-3">
        {props.children}
      </div>
    </main>
  </React.Fragment>