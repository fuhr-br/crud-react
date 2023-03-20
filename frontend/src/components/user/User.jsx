import React, { Component } from "react";
import { Main } from '../template/Main';
import axios from 'axios';

const headerProps = {
  icon: 'fa fa-users',
  title: 'Usuários',
  subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}


const baseUrl = 'http://localhost:3001/users';
const initialState = {
  user: { name: '', email: '' },
  list: []
}

export default class User extends Component {
  state = { ...initialState };

  componentWillMount() {
    axios(baseUrl).then(response => {
      this.setState({ list: response.data })
    });
  }

  constructor(props) {
    super(props);
    this.clear = this.clear.bind(this);

  }

  clear() {
    this.setState({ user: initialState.user });
  }

  save() {
    const user = this.state.user;
    //verifica se o user tem um id, se tiver coloca como método PUT, se não, POST. no JS só o ZERO significa falso, o restante da verdadeiro
    const method = user.id ? 'put' : 'post';
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;

    //usando axios para fazer a chamada http
    axios[method](url, user).then(response => {
      const list = this.getUpdatedList(response.data);
      this.setState({ user: initialState.user, list });
    })

  }

  updateField(event) {
    //Criamos uma nova referencia para user
    const user = { ...this.state.user };

    //Iremos ler o evento que deve ser do tipo input, colocando seu valor para o campo name
    user[event.target.name] = event.target.value;

    //setamos essa nova referencia, pois não é boa prática mudar a que ja existe no react e sim mudar 
    this.setState({ user });

  }

  renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Nome</label>
              <input type="text" className="form-control"
                name="name"
                value={this.state.user.name}
                //Aqui iremos chamar o updatedFiel a toda troca do valor do input  
                onChange={e => this.updateField(e)}
                placeholder="Digite o nome..." />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>E-mail</label>
              <input type="email" className="form-control"
                name="email"
                value={this.state.user.email}
                onChange={e => this.updateField(e)}
                placeholder="Digite o e-mail..."
                required />
            </div>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-primary"
              onClick={e => this.save(e)}>
              Salvar
            </button>

            <button className="btn btn-secondary ml-2"
              onClick={this.clear}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    )
  }

  getUpdatedList(user, shouldAddList = true) {
    const list = this.state.list.filter(u => u.id !== user.id);
    // método unshift adiciona na primeira posição da lista
    if (shouldAddList) list.unshift(user);
    return list;
  }

  load(user) {
    this.setState({ user })
  }

  remove(user) {
    axios.delete(`${baseUrl}/${user.id}`).then(resp => {
      const list = this.getUpdatedList(user, false)
      this.setState({ list })
    })
  }

  renderTable() {
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }

  renderRows() {
    return this.state.list.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <button className="btn btn-warning"
              onClick={() => this.load(user)}>
              <i className="fa fa-pencil"></i>
            </button>
            <button className="btn btn-danger ml-2"
              onClick={() => this.remove(user)}>
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <Main {...headerProps}>
        {this.renderForm()}
        {this.renderTable()}
      </Main>
    )
  }
}
