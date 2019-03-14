import React, { Component } from 'react';
import * as actions from "../actions/actions";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

// Import Children

import AddSnip from '../components/addSnip.jsx';
import DisplaySnippets from '../components/displaySnippets.jsx';
import SideBar from '../components/sideBar.jsx';

const mapStateToProps = (store) => ({
  userInfo: store.user.userInfo,
  snippet: store.snip.snippet,
  comments: store.snip.comments,
  project: store.snip.project,
  tags: store.snip.tags,
  search: store.snip.search,
  // recievedTags: store.snip.recievedTags,
  recievedSnippets: store.snip.recievedSnippets,
})

const mapDispatchToProps = dispatch => ({
  userLogout: (id) => { dispatch(actions.userLogout(id)) },

  enterSnippet: (event) => { dispatch(actions.enterSnippet(event.target.value)) },
  enterComments: (event) => { dispatch(actions.enterComments(event.target.value)) },
  enterProject: (event) => { dispatch(actions.enterProject(event.target.value)) },
  enterTags: (event) => { dispatch(actions.enterTags(event.target.value)) },
  enterSearch: (event) => { dispatch(actions.enterSearch(event.target.value)) },

  createSnippet: () => { dispatch(actions.createSnippet()) },
  deleteSnippet: () => { dispatch(actions.deleteSnippet()) },

  getSnippetsByUser: (username) => { dispatch(actions.getSnippetsByUser(username)) },
  getSnippetsByTag: (tag) => { dispatch(actions.getSnippetsByTag(tag)) },

  // getTagsFromDB: () => { dispatch(actions.getTagsFromDB()) },

})

// Component Body

class HomeContainer extends Component {

  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.getTagsFromDB();
  // };

  // Render Logic

  render() {

    const { userInfo, snippet, comments, project, tags, search, recievedSnippets, userLogout, enterSnippet, enterComments, enterProject, enterTags, enterSearch, deleteSnippet, getSnippetsByUser, getSnippetsByTag, createSnippet } = this.props;

    return (
      <React.Fragment>
        <div className='container'>
          <div className='main'>
            <AddSnip

              enterSnippet={enterSnippet}
              enterComments={enterComments}
              enterProject={enterProject}
              enterTags={enterTags}
              
              snippet={snippet}
              comments={comments}
              project={project}
              tags={tags}

              createSnippet={createSnippet}

            />
          </div>
          <SideBar
            enterSearch={enterSearch}
            serach={search}
            getSnippetsByUser={getSnippetsByUser}
          />
        </div>

      </React.Fragment>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);