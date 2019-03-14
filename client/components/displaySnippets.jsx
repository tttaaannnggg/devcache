import React from 'react';
import { Row, Col } from 'react-bootstrap';

const DisplaySnippets = props => {
  const snippetsArray = props.userSnippets;
  const snippetsDisplayArray = [];

  if(snippetsArray) {
    for (let i = 0; i < snippetsArray.length; i++) {
      snippetsDisplayArray.push(
        <div 
          className='tagged-snippet' 
          key={'snippet' + i}
          id={ snippetsArray[i].id }
        >
          <div className='tagged-content-box'>
            <p className='tagged-snippet-content'>
              { snippetsArray[i].snippet }
            </p>
          </div>

        </div>
      );
    };
  }
  return (
    <div>
      {snippetsDisplayArray}
    </div>
  );
}

export default DisplaySnippets;