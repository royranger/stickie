import React, {Component} from 'react';
import './Register.css';

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      registerName: '',
      registerUsername: '',
      registerPassword: ''
    }
  }

  onNameChange = (event) => {
    this.setState({
      registerName: event.target.value
    });
  }

  onUsernameChange = (event) => {
    this.setState({
      registerUsername: event.target.value
    });
  }

  onPasswordChange = (event) => {
    this.setState({
      registerPassword: event.target.value
    });
  }

  onSubmitRegister = () => {
    const {loadUser, routeBoard} = this.props;
    const {registerName, registerUsername, registerPassword} = this.state;

    fetch('http://localhost:3001/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: registerName,
        username: registerUsername,
        password: registerPassword
      })
    })
    .then(response=> response.json())
    .then(data => {
      if(data.id) {
        loadUser(data);
        routeBoard();
      }
    })

  }


  render() {
    const {routeSignIn} = this.props;

    return(
      <div className="flex flex-wrap items-center">
        <div className="tc w-100 w-50-ns">
          <h1>Create your board now!</h1>
          <div id="registerbox" className="ma3 pa3 ba b--yellow shadow-4">
            <div className="tc">
              <label>Name </label><br/>
              <input type="text" onChange={this.onNameChange}/><br/><br/>
              <label>Username</label><br/>
              <input type="text" onChange={this.onUsernameChange}/><br/><br/>
              <label>Password</label><br/>
              <input type="password" onChange={this.onPasswordChange} /><br/><br/>
                <div className="pointer f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib hot-pink"
                                onClick={this.onSubmitRegister}>Create board</div>
                <p>Already have a board? <span className="hot-pink underline pointer"
                                                onClick={routeSignIn}>Sign in here</span></p>
            </div>
          </div>
        </div>
        <div className="w-100 w-50-ns h-50 pa3">
          <img  alt="horse" src={require ('./horse.png')}/>
        </div>
      </div>
    );
  }

}

export default Register;
