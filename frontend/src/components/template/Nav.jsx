import './Nav.css';
import React from 'react';  
import { Link } from 'react-router-dom';


//Para utilizar uma Rota no React você precisa de fato usar a tag <Link>, ela irá de fato chamar acionar o router

export const Nav = () => 
<aside className="menu-area">
<nav className="menu">
    {/* Refatorar em casa! */}
    <Link to="/">
        <i className="fa fa-home"></i> Início
    </Link>
    <Link to="/users">
        <i className="fa fa-users"></i> Usuários
    </Link>
</nav>
</aside>