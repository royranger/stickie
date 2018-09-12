import React from 'react';
import './Profile.css';

const Profile = ({user, routeBoard, onSignOut}) => {
  return(
    <div id="profile">
      <div className="flex justify-between">
        <div className="f6 link dim br1 ph3 pv2 mb2 dib white bg-hot-pink pointer ma2"
              onClick={routeBoard}>Board</div>

        <div className="f6 link dim br1 ph3 pv2 mb2 dib white bg-hot-pink pointer ma2"
              onClick={onSignOut}>Sign out</div>
      </div>

      <div className="flex flex-wrap items-center">
        <div className="tc w-100 w-50-ns pa3">
          <img alt="horsehead" src={require ('./horsehead.png')}/>
          <h1>Hello, {user.name}!</h1>
        </div>
        <div className="tl w-100 w-50-ns h-50 pa3">
          <div className="ma3 pa3 ba b--yellow shadow-4">
            <p>Username: {user.username} </p>
            <p>Id: {user.id}</p>
            <p>Notes on board: {user.notes.length}  </p>
            <p>Total notes created: {user.totalnotes} </p>
            <p>Joined: {user.joined}</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Profile;
