import React from 'react';
import Draggable from 'react-draggable';

const Stickie = ({content, id}) => {
  let trueOrFalse = false;

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    trueOrFalse = true;
  }

  return(
    <Draggable
        bounds='div'
        disabled={trueOrFalse}>
          <div className="bg-light-yellow mid-gray dib pa3 ma3 shadow-3 br4 br--right br--bottom">
              <p>{content}</p>
          </div>
    </Draggable>

  );




};

export default Stickie;
