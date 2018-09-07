import React, {Component} from 'react';
import Stickie from '../Stickie';
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

  render() {
    const height = window.innerHeight-124;
    const {routeRegister} = this.props;

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
                <textarea onChange={this.getNote}></textarea>
                <br/><br/>
                <div className="pointer f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib hot-pink"
                      >Stick it up!</div>

              </span>
          </Popup>
          <div className="f6 link dim br1 ph3 pv2 mb2 dib white bg-hot-pink pointer ma2"
                onClick={routeRegister}>Sign out</div>
        </div>
        <div>
          <Stickie/>
          <Stickie/>
          <Stickie/>
        </div>

      </div>
    );
  }
}


export default Board;
