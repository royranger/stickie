import React from 'react';
import Draggable from 'react-draggable';
import Popup from "reactjs-popup";
import './Stickie.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash, faEdit);

const Stickie = ({content, id, userid, deleteNote}) => {
  let trueOrFalse = false;


  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    trueOrFalse = true;
  }



  return(
      // <Draggable
      //     bounds='body'
      //     disabled={trueOrFalse}>
            <div className="relative bg-light-yellow mid-gray dib pa3 ma3 shadow-3 br4 br--right br--bottom"
                  id="stickie">
                  <FontAwesomeIcon icon="trash"
                                     id="delete"
                                     className="grow"
                                     onClick={()=> deleteNote(id, userid)}/>
                  <p id="content"
                      >{content}</p>
                      <Popup
                        trigger={<FontAwesomeIcon icon="edit"
                                           id="edit"
                                           className="grow"
                                           />}
                        modal
                        closeOnDocumentClick
                        >
                          <textarea>{content}</textarea>
                        </Popup>

            </div>
       // </Draggable>
  );




};

export default Stickie;
