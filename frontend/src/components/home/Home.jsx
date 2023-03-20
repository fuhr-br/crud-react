import React from "react";
import { Main } from "../template/Main";

export const Home = (props) =>

  <Main icon="fa fa-home" title="Início"
    subtitle="Projeto de um CRUD em React"
  >
    <div className='display-4'>Bem Vindo!</div>
    <hr />
    <p>Sistema para exemplificar a construção de um cadastro em React!</p>
  </Main>
