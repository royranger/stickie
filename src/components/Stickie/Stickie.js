import React from 'react';
import Popup from "reactjs-popup";
import './Stickie.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash, faEdit);

const Stickie = ({content, id, userid, deleteNote, getNote, editNote}) => {

  return(
            <div className="relative bg-light-yellow mid-gray dib pa3 ma3 shadow-3 br4 br--right br--bottom"
                  id="stickie">
                  <FontAwesomeIcon icon="trash"
                                     id="delete"
                                     className="grow"
                                     onClick={()=> deleteNote(id, userid)}/>

                  <Popup
                        trigger={<FontAwesomeIcon icon="edit"
                                           id="edit"
                                           className="grow"
                                           />}
                        modal
                        closeOnDocumentClick
                        >
                          <span>
                            <textarea onChange={getNote}
                                      defaultValue={content}
                                      ></textarea>
                            <br/><br/>
                            <div className="pointer f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib hot-pink"
                                  onClick={()=> editNote(id, userid)}>Edit</div>

                          </span>
                  </Popup>
                        <p id="content">{content}</p>

            </div>
  );




};

export default Stickie;
