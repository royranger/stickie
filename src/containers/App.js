import React, { Component } from 'react';
import './App.css';
import Board from '../components/Board/Board';
import Register from '../components/Register/Register';
import Profile from '../components/Profile/Profile';
import Loadable from 'react-loading-overlay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'register',
      loading: false,
      user: {
        id: "",
        name: "",
        username: "",
        notes: [],
        totalnotes: 0,
        joined: ""
      }
    }
  }

  loadUser = (user) => {
    this.setState({
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        notes: [],
        totalnotes: user.totalnotes,
        joined: user.joined
      }
    });
  }

  clearUser = () => {
    this.setState({
      route: 'register',
      loading: false,
      user: {
        id: "",
        name: "",
        username: "",
        notes: [],
        totalnotes: 0,
        joined: ""
      }
    });
  }

  updateNoteCount = () => {
    const {id} = this.state.user;

    fetch('https://stickie-api.herokuapp.com/boardnotecount', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: id
      })
    })
    .then(response=> response.json())
    .then(notecount=> {
      this.setState({
        user: Object.assign(this.state.user, {totalnotes: notecount})
      })
    })
  }

  getUserNotes = (userid) => {
    fetch('https://stickie-api.herokuapp.com/board', {
      method: 'post',
      headers: {'Content-Type': 'Application/json'},
      body: JSON.stringify({
        userid: userid
      })
    })
    .then(response=> response.json())
    .then(notesArray => {
      this.setState({
        user: Object.assign(this.state.user, {notes: notesArray})
      });
    })
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

  routeProfile = () => {
    this.setState({
      route: 'profile'
    });
  }

  onSignOut = () => {
    this.routeRegister();
    this.clearUser();
  }

  setLoadingTrue = () => {
    this.setState({
      loading: true
    });
  }

  setLoadingFalse = () => {
    this.setState({
      loading: false
    });
  }


  render() {

    const {route, user, loading} = this.state;

    return (
      <div id="app">
        <div id="head" className="flex flex-wrap">
          <h1 className="f1 w-100 fl w-third-ns tc" id="title">Stickie</h1>
          <h1 className="f3 w-100 fl w-two-thirds-ns pt4 tc" id="slogan">A board for all your sticky notes!</h1>
        </div>


        {route === 'register' ?
          (
            <Loadable active={loading}
                      text='Registering...'
                      spinner>
              <Register routeSignIn = {this.routeSignIn}
                        routeBoard={this.routeBoard}
                        loadUser={this.loadUser}
                        getUserNotes={this.getUserNotes}
                        setLoadingTrue={this.setLoadingTrue}
                        setLoadingFalse={this.setLoadingFalse}
                        loading={loading}/>
            </Loadable>

          ) : route === 'board' ?
          (
            <Board user={user}
                   routeProfile={this.routeProfile}
                   getUserNotes={this.getUserNotes}
                   updateNoteCount={this.updateNoteCount}
                   onSignOut={this.onSignOut}
                   setLoadingFalse={this.setLoadingFalse}/>
          ) : route === 'profile' ?
          (
            <Profile user={user}
                     routeBoard={this.routeBoard}
                     onSignOut={this.onSignOut}/>
          ) :
          (
            <h1>Oops, something went wrong</h1>
          )
          }

        <div id="foot">
          <p>made by royranger
            <a className="link silver hover-light-gray dib h2 w2 mr3" href="https://github.com/royranger" title="GitHub" target="_blank" rel="noopener noreferrer">
              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
