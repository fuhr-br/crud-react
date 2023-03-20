import React from "react";
import { Routes, Route } from 'react-router-dom';

import { Home } from '../components/home/Home';
import User from '../components/user/User';

/*Para utilizar uma Rota no React você precisa de fato usar a tag <Link>, ela irá de fato chamar acionar o router
O Exemplo de implementação esta no componente <Nav>
*/
export const Rotas = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/users" element={<User />} />
    <Route path="*" element={<Home />} />
  </Routes>
);
