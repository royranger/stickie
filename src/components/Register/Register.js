import React, {Component} from 'react';

class Register extends Component {

  render() {
    return(
      <div className="flex flex-wrap">
        <div className="tc w-100 w-50-ns">
          <h1>Register now</h1>
        </div>
        <div className="w-100 w-50-ns h-50 pa3">
          <img  alt="horse" src={require ('./horse.png')}/>
        </div>
      </div>
    );
  }

}

export default Register;
