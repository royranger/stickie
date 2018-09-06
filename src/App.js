import React, { Component } from 'react';
import './App.css';
import Stickie from './components/Stickie';
import Register from './components/Register/Register';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'register',

    }
  }

  render() {

    const {route} = this.state;

    return (
      <div className="App">
        <div id="head" className="flex">
          <h1 className="f1 w-100 fl w-third-ns">Stickie</h1>
          <h1 className="f3 w-100 fl w-two-thirds-ns pt4">A board for all your sticky notes!</h1>
        </div>

        {route === 'register' ?
          (<div>
            <Register/>
          </div>) : route === 'signin' ?
          (<div>
            <h1>Signin here</h1>
        </div>) :
          (<div>
            <Stickie/>
        </div>)
          }
      </div>
    );
  }
}

export default App;
