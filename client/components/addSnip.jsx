import React from 'react';

const addSnip = props => {
    
  return (
    <React.Fragment>
      <textarea 
        placeholder='...add Snippet'
        onChange={ props.enterSnippet }
      />
      <div className="details">
        <span className="detailsLeft">
          <div className="details-box">
            <h4>description:</h4>
            <input 
              id='comment'
              type='text'
              name='comment'
              value={props.comments}
              onChange={ props.enterComments }
            />
          </div>
          <div className='details-box'>
              <h4>project:</h4>
              <input 
                id='project-tag'
                type='text'
                name='projectTag'
                value={props.project}
                onChange={ props.enterProject }
              />
          </div>
          <div className='details-box'>
              <h4>tags:</h4>
              <input 
                id='project-tag'
                type='text'
                name='projectTag'
                value={ props.tags }
                onChange={ props.enterTags }
              />
          </div>
        </span>

        <span className="detailsRight">
          <button onClick= { props.createSnippet }>Submit Snippet</button> 
        </span>

      </div>
    </React.Fragment>
  );
};

export default addSnip;