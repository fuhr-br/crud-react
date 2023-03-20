import './App.css';
import React from 'react';
/* import para poder usar o CSS que foi inserido nas dependencias quando adicionei o bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import { Logo } from '../components/template/Logo';
import { Nav } from '../components/template/Nav';
import { Footer } from '../components/template/Footer';

import { BrowserRouter } from 'react-router-dom';
import { Rotas } from './Routes';

export const App = () =>
<BrowserRouter>
  <div className='app'>
    <Logo />
    <Rotas />
    <Nav />
    <Footer />
  </div>
  </BrowserRouter>