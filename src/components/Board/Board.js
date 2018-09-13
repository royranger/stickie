import React, {Component} from 'react';
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
    const {id} = this.props.user;
    const {getUserNotes, updateNoteCount} = this.props;

    fetch('https://stickie-api.herokuapp.com/boardnewstickie', {
      'method': 'post',
      'headers': {'Content-Type': 'application/json'},
      'body': JSON.stringify({
        userid: id,
        newnote: newNote
      })
    })
    .then(response => response.json())
    .then(note => {
      if (note.id) {
        getUserNotes(note.userid);
        window.alert('Your stickie was created successfully!');
        this.clearNewNote();
        updateNoteCount();
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

  deleteNote = (noteid, userid) => {
    const {getUserNotes} = this.props;
    const confirmDelete = window.confirm("Are you sure you want to delete this stickie?");

    if (confirmDelete) {
      fetch('https://stickie-api.herokuapp.com/boarddelete', {
        'method': 'put',
        'headers': {'Content-Type': 'application/json'},
        'body' : JSON.stringify({
          noteid: noteid
        })
      })
      .then(response=> response.json())
      .then(data=> {
        if(data) {
          getUserNotes(userid);
        }
      })

    } else {
      return;
    }
  }

  editNote = (noteid, userid) => {
    const {getUserNotes} = this.props;
    const {newNote} = this.state;

    if(newNote) {
      fetch('https://stickie-api.herokuapp.com/boardedit', {
        'method': 'put',
        'headers': {'Content-Type': 'application/json'},
        'body': JSON.stringify({
          noteid: noteid,
          newnote: newNote
        })
      })
      .then(response=> response.json())
      .then(note=> {
        if(note.id) {
          getUserNotes(userid);
          window.alert("Your stickie was updated successfully!");
          this.clearNewNote();
        } else {
          window.alert('Oops, something went wrong.');
        }
      })
    }
  }


  render() {
    const height = window.innerHeight-199;
    const {user, routeProfile, onSignOut} = this.props;

    return(
      <div id="board" style = {{minHeight: `${height}px`}}>
        <div className="flex justify-between" id="boardtabs">
          <div className="f6 link dim br1 ph3 pv2 mb2 dib white bg-hot-pink pointer ma2"
                onClick={routeProfile}>User Profile</div>
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
                onClick={onSignOut}>Sign out</div>
        </div>
        <div>
          <StickieList notes={user.notes}
                       deleteNote={this.deleteNote}
                       getNote={this.getNote}
                       newNote={this.state.newNote}
                       editNote={this.editNote}/>
        </div>

      </div>
    );
  }
}


export default Board;
