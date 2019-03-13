import React, { Component } from 'react';
import * as actions from "./actions/actions";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

// Import Children

import AddSnip from '../components/addSnip.jsx';
import CommentBox from '../components/commentBox.jsx';
import SnipDetails from '../components/snipDetails.jsx';
import DisplaySnippets from '../components/displaySnippets.jsx';
import SideBar from '../components/sideBar.jsx';

const mapStateToProps = (store) => ({
  userInfo: store.user.userInfo,

  // also here thx

})

const mapDispatchToProps = dispatch => ({
  userLogout: (id) => { dispatch(actions.userLogout(id)) },

  // add yo shit by which i mean actions which are pretty shitty, pls

})

// Component Body

class HomeContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      snippet: '',
      commments: '',
      project: '',
      tags: '',
      search: '',
      userTags: [],
      taggedSnippets: []
    }
  }

  // componentDidMount() {
  //   this.getTagsFromDB();
  // };

  // Render Logic

  render() {

    return (
      <React.Fragment>
        <div className='container'>
          <div className='main'>
            <h3>devCache</h3>
            <AddSnip
              updateSnippetContent={this.updateSnippetContent}
            />
            <CommentBox
              updateComment={this.updateComment}
            />
            <SnipDetails
              updateProjectTag={this.updateProjectTag}
              updateTags={this.updateTags}
              submitSnippet={this.submitSnippet}
            />
          </div>
          <SideBar
            updateSearch={this.updateSearch}
            submitSearch={this.submitSearch}
            userTags={this.state.userTags}
            grabSnippetsFromDB={this.grabSnippetsFromDB}
          />
        </div>
        <DisplaySnippets
          taggedSnippets={this.state.taggedSnippets}
          deleteSnippet={this.deleteSnippet}
        />
      </React.Fragment>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);