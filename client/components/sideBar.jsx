import React from 'react';

const sideBar = props => {
  
  const tagSet = new Set(props.userTags);
  const tagArray = Array.from(tagSet);
  const displayArray = [];

  for (let i = 0; i < tagArray.length; i++) {
    displayArray.push(
      <p 
        onClick={ (event) => props.grabSnippetsFromDB(event) }
        id={ tagArray[i] }
        key={ i }
      >
        { tagArray[i] }
      </p>
    );
  };

  return (
    <div className='side-bar'>
      <div className='search-bar'>
        <input 
          id='search-field'
          type='text'
          name='search-bar'
          placeholder='search by tag'
          value={ props.search }
          onChange={ props.enterSearch }
        />
        <i className='fas fa-search' 
        />
      </div>
      { displayArray }
    </div>
  );
};

export default sideBar;