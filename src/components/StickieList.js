import React from 'react';
import Stickie from './Stickie';

const StickieList = ({notes, deleteNote}) => {

  return(
    <div>
      {
        notes.map(note => {
          return(
            <Stickie
                content={note.content}
                id={note.id}
                userid={note.userid}
                key={note.id}
                deleteNote={deleteNote}/>
          )

       })
      }
    </div>
  );

};

export default StickieList;
