import React, { Component } from 'react';
import './App.css';
import Board from './components/Board/Board';
import Register from './components/Register/Register';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'board',
      user: {
        id: "",
        name: "",
        username: "",
        notes: []
      }

    }
  }

  loadUser = (user) => {
    this.setState({
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        notes: []
      }
    })
  }

  clearUser = () => {
    this.setState({
      route: 'register',
      user: {
        id: "",
        name: "",
        username: "",
        notes: []
      }
    });
  }

  getUserNotes = (username) => {
    fetch('http://localhost:3001/board', {
      method: 'post',
      headers: {'Content-Type': 'Application/json'},
      body: JSON.stringify({
        username: username
      })
    })
    .then(response=> response.json())
    .then(notesArray => {
      this.setState({
        user: Object.assign(this.state.user, {notes: notesArray})
      });
    })
  }

  routeSignIn = () => {
    this.setState({
      route: 'signin'
    });
  }

  routeRegister = () => {
    this.setState({
      route: 'register'
    });
  }

  routeBoard = () => {
    this.setState({
      route: 'board'
    });
  }

  render() {

    const {route} = this.state;

    return (
      <div className="App">
        <div id="head" className="flex flex-wrap">
          <h1 className="f1 w-100 fl w-third-ns" id="title">Stickie</h1>
          <h1 className="f3 w-100 fl w-two-thirds-ns pt4" id="slogan">A board for all your sticky notes!</h1>
        </div>

        {route === 'register' ?
          (<div>
            <Register routeSignIn = {this.routeSignIn}
                      routeBoard={this.routeBoard}
                      loadUser={this.loadUser}
                      getUserNotes={this.getUserNotes}/>
          </div>) : route === 'signin' ?
          (<div>
            <h1>Signin here</h1>
          </div>) : route === 'board' ?
          (<div>
            <Board user={this.state.user}
                   routeRegister={this.routeRegister}
                   getUserNotes={this.getUserNotes}
                   clearUser={this.clearUser}/>
          </div>) :
          (<div>
            <h1>Error screen</h1>
          </div>)
          }

        <div id="foot">
          <p>made by royranger</p>
        </div>
      </div>
    );
  }
}

export default App;
