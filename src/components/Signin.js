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
    const {loadUser, getUserNotes, routeBoard, setLoadingTrue, setLoadingFalse} = this.props;
    const {signinUsername, signinPassword} = this.state;

    setLoadingTrue();

    fetch('https://stickie-api.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: signinUsername,
        password: signinPassword
      })
    })
      .then(response=> response.json())
      .then(user=> {
        if(user.id) {
          loadUser(user);
          getUserNotes(user.id);
          routeBoard();
        } else {
          setLoadingFalse();
          window.alert('Your credentials are incorrect. Please try again.');
        }
      })
  }

  handleEnter = (event) => {
    if (event.key === "Enter") {
      this.onSubmitSignin();
    }
  }


  render() {
    return(
      <div className="tc">
        <label>Username</label><br/>
        <input type="text"
               onChange={this.onUsernameChange}
               onKeyPress={this.handleEnter}/><br/><br/>
        <label>Password</label><br/>
        <input type="Password"
               onChange={this.onPasswordChange}
               onKeyPress={this.handleEnter}/><br/><br/>
        <div className="pointer f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib hot-pink"
              onClick={this.onSubmitSignin}>Sign in</div>
      </div>
    )
  }
}

export default Signin;
