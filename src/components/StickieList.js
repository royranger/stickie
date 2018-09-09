import React from 'react';
import Stickie from './Stickie';

const StickieList = ({notes}) => {

  return(
    <div>
      {
        notes.map(note => {
          return(
            <Stickie
                content={note.content}
                id={note.id}
                key={note.id}  />
          )

       })
      }
    </div>
  );

};

export default StickieList;
