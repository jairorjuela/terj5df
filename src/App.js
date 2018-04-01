import React, { Component } from 'react';

class App extends Component {

  constructor(){
    super();
    this.state = {
      newGuest:[],
      name: "",
      lastName: ""
    };
    this.newName = this.newName.bind(this);
    this.newLastname = this.newLastname.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  newName(event) {
    this.setState({
      name: event.target.value
    })
  }

  newLastname(event) {
    this.setState({
      lastName: event.target.value
    })
  }


  createUser(event) {
    const order = this.state.newGuest.length === 0 ? 1 : this.state.newGuest.length + 1

      let oldTasks = this.state.newGuest
      let newTask = {
        id: order,
        name: this.state.name,
        lastName: this.state.lastName
      }
      this.setState({
        newGuest: [...oldTasks, newTask],
        newTask: '',
        name: "",
        lastName: ""
      })
      event.preventDefault()

  }

  renderTasks() {
    const guest = this.state.newGuest.map(name => {
      return (
        <tr key={name.id}>
          <td>{name.name}</td>
          <td>{name.lastName}</td>
        </tr>
      )
    })
    return guest
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">

            <form onSubmit={this.createUser}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className="form-control" name="first-name" onChange={this.newName}/>
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" name="last-name" onChange={this.newLastname}/>
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                {this.renderTasks()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App
