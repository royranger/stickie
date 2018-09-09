import React, {Component} from 'react';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signinUsername: "",
      signinPassword: ""
    }
  }

  onUsernameChange = (event) => {
    this.setState({
      signinUsername: event.target.value
    });
  }

  onPasswordChange = (event) => {
    this.setState({
      signinPassword: event.target.value
    });
  }

  onSubmitSignin = () => {
    const {loadUser, getUserNotes, routeBoard} = this.props;
    // fetch user from server
    // loadUser
    // getUserNotes
    // routeBoard
  }

  render() {
    return(
      <div className="tc">
        <label>Username</label><br/>
        <input type="text"
               onChange={this.onUsernameChange}/><br/><br/>
        <label>Password</label><br/>
        <input type="Password"
               onChange={this.onPasswordChange}/><br/><br/>
        <div className="pointer f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib hot-pink"
                        >Sign in</div>
      </div>
    )
  }
}

export default Signin;
