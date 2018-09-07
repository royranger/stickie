import React, { Component } from 'react';
import './App.css';
import Board from './components/Board/Board';
import Register from './components/Register/Register';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'board',

    }
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
            <Register routeSignIn = {this.routeSignIn}/>
          </div>) : route === 'signin' ?
          (<div>
            <h1>Signin here</h1>
           </div>) :
          (<div>
            <Board routeRegister = {this.routeRegister}/>
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
