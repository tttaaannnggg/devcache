import React from 'react';
import { Image, Navbar, Form, Dropdown, FormControl, Button, Nav, InputGroup } from 'react-bootstrap';

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
        <FormControl
          aria-describedby="basic-addon1"
          id='search-field'
          type='text'
          name='search-bar'
          placeholder='Search my snippets'
          value={props.search}
          onChange={props.enterSearch}
        />
      </div>
      { displayArray }
    </div>
  );
};

export default sideBar;