import React, { Component } from 'react';

class App extends Component {

  constructor(){
    super();
    this.state = {
      names: [],
      name: "",
      lastNames: [],
      lastName: "",
      tasks:[],
      newTask: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
  this.setState({
    name: event.target.value,
  });
  event.preventDefault();
  }

  handleChange1(event) {
  this.setState({
    lastName: event.target.value
  });
  event.preventDefault();
  }

  handleSubmit(event) {
    let oldTasks = this.state.tasks
    let newTask = {
      name: this.state.name,
      lastName: this.state.lastName
    }
    this.setState({
      tasks: [...oldTasks, newTask],
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
                {this.state.tasks.map((task, index) =>
                  <tr key={task.name}>
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
