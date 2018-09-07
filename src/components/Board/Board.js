import React from 'react';
import Stickie from '../Stickie';
import './Board.css';

const Board = () => {

  const height = window.innerHeight-124;

  return(
    <div id="board" style = {{minHeight: `${height}px`}}>
      <Stickie/>
      <Stickie/>
      <Stickie/>
    </div>
  );

};

export default Board;
