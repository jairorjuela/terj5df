import React, { Component } from 'react';

class App extends Component {

  constructor(){
    super();
    this.state = {
      name: "",
      lastName: "",
      newGuest:[],
      id: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let oldTasks = this.state.id
  this.setState({
    name: event.target.value,
    id: Math.max(oldTasks) + 1
  });
  }

  handleChange1(event) {
  this.setState({
    lastName: event.target.value,
  });
  }

  handleSubmit(event) {
    let oldTasks = this.state.newGuest
    let newTask = {
      id: this.state.id,
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


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">

            <form>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className="form-control" name="first-name" value={this.state.name} onChange={this.handleChange}/>
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" name="last-name" value={this.state.lastName} onChange={this.handleChange1}/>
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Agregar Invitado</button>
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
                {this.state.newGuest.map((task, index) =>
                  <tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.lastName}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App
