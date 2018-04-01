import React, { Component } from 'react';

class App extends Component {

  constructor(){
    super();
    this.state = {
      newGuest:[],
      lastName: "",
      name: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {

    if(event.target.name === "last-name"){
      this.setState({
        lastName: event.target.value
      });
    }else{
      this.setState({
        name: event.target.value
      });
    }
  }


  handleSubmit(event) {
    let oldTasks = this.state.newGuest
    let newTask = {
      lastName: this.state.lastName,
      name: this.state.name
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
    const tasks = this.state.newGuest.map(name => {
      return (
        <tr>
          <td>{name.name}</td>
          <td>{name.lastName}</td>
        </tr>
      )
    })
    return tasks
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">

            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className="form-control" name="first-name" value={this.state.name} onChange={this.handleChange}/>
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" name="last-name" value={this.state.lastName} onChange={this.handleChange}/>
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
