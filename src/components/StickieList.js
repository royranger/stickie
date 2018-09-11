import React from 'react';
import Stickie from './Stickie';

const StickieList = ({notes, deleteNote, getNote, newNote, editNote}) => {

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
                newNote={newNote}
                editNote={editNote}/>
          )

       })
      }
    </div>
  );

};

export default StickieList;
