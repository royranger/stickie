import React from 'react';
import Stickie from './Stickie/Stickie';

const StickieList = ({notes, deleteNote, getNote, editNote}) => {

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
                deleteNote={deleteNote}
                getNote={getNote}
                editNote={editNote}/>
          )

       })
      }
    </div>
  );

};

export default StickieList;
