import React, {Component} from 'react';

class Register extends Component {

  render() {
    return(
      <div className="flex flex-wrap">
        <img className="w-25 h-50 pa4 ma3" alt="horse" src={require ('./horse.png')}/>
        <div className="tc w-50">
          <h1>Register now</h1>
        </div>
      </div>
    );
  }

}

export default Register;
