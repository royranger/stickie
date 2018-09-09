import React, {Component} from 'react';
import App from '../../App';
import StickieList from '../StickieList';
import './Board.css';
import Popup from "reactjs-popup";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNote: ""
    }
  }

  getNote = (event) => {
    this.setState({
      newNote: event.target.value
    });
  }

  stickNote = () => {
    const {newNote} = this.state;
    const {username, id} = this.props.user;
    const {getUserNotes} = this.props;

    fetch('http://localhost:3001/boardnewstickie', {
      'method': 'post',
      'headers': {'Content-Type': 'application/json'},
      'body': JSON.stringify({
        userid: id,
        username: username,
        newnote: newNote
      })
    })
    .then(response => response.json())
    .then(note => {
      if (note.id) {
        getUserNotes(note.userid);
        window.alert('Your stickie was created successfully!');
        this.clearNewNote();
      } else {
        window.alert('Oops, something went wrong. Please try again.');
      }
    })

  }

  clearNewNote = () => {
    this.setState({
      newNote: ""
    });
  }

  onSignOut = () => {
    const {clearUser, routeRegister} = this.props;
    routeRegister();
    clearUser();
  }


  render() {
    const height = window.innerHeight-124;
    const {routeRegister, user} = this.props;

    return(
      <div id="board" style = {{minHeight: `${height}px`}}>
        <div className="flex justify-between">
          <Popup
            trigger={<div className="ma2 pointer f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-hot-pink"
                      >Create new stickie!</div>}
            modal
            closeOnDocumentClick
            >
              <span>
                <textarea onChange={this.getNote}
                          value={this.state.newNote}></textarea>
                <br/><br/>
                <div className="pointer f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib hot-pink"
                      onClick={this.stickNote}>Stick it up!</div>

              </span>
          </Popup>
          <div className="f6 link dim br1 ph3 pv2 mb2 dib white bg-hot-pink pointer ma2"
                onClick={this.onSignOut}>Sign out</div>
        </div>
        <div>
          <StickieList notes={user.notes}/>
        </div>

      </div>
    );
  }
}


export default Board;
