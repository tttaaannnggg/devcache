import React from 'react';
import { Row, Col } from 'react-bootstrap';

const DisplaySnippets = props => {

  const snippetsArray = [];
  for (let i = 0; i < props.userSnippets.length; i++) {
    let temp = <h5>{props.userSnippets[i].snippet}</h5>
    snippetsArray.push(temp);
  }
  return (
        <div>
          {snippetsArray}
        </div>
      );
}
//   const snippetsArray = [];
//   for (let i = 0; i < props.userSnippets.length; i++) {
//     snippetsArray.push(
//       <div 
//         className='tagged-snippet' 
//         key={'snippet' + i}
//         id={ snippetsArray[i].id }
//       >
//         <div className='tagged-content-box'>
//           <p className='tagged-snippet-content'>
//             { snippetsArray[i].snippet }
//           </p>
//           <i 
//             className="fas fa-trash" 
//             onClick={ () => props.deleteSnippet(snippetsArray[i].id, i) }
//           />
//         </div>
//         <div className='tagged-details-box'>
//           <p className='tagged-snippet-date'>
//             { snippetsArray[i].date }
//           </p>
//           <p className='tagged-snippet-project'>
//             { snippetsArray[i].project }
//           </p>
//           <p className='tagged-snippet-comments'>
//             { snippetsArray[i].comments }
//           </p>
//         </div>
//       </div>
//     );
//   };
// };

export default DisplaySnippets;