import * as types from '../constants/actionTypes';

const initialState = {
	snippet: '',
	comments: '',
	project: '',
	tags: '',
	search: '',
	recievedTags: [],
	recievedSnippet: '',

}

const snipReducer = (state = initialState, action) => {
  switch (action.type) {

<<<<<<< HEAD
  	case types.GET_SNIPPETS:
=======
  	case types.GET_SNIPPET_BY_TAG:
>>>>>>> 4fb54fe6cf3fdce4de56e23b66942594e17137d4
  	  return {
  	  	...state,
  	    recievedSnippet: action.payload,
  	  }

    case types.GET_SNIPPET_BY_USER:
      return {
        ...state,
        recievedSnippet: action.payload,
      }

  	case types.GET_TAGS:
  	  return {
  	  	...state,
  	    recievedTags: action.payload,
  	  }

  	case types.ENTER_SNIPPET:
      return {
        ...state,
        snippet: action.payload,
      }

    case types.ENTER_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      }

    case types.ENTER_PROJECT:
      return {
        ...state,
        project: action.payload,
      }

    case types.ENTER_TAGS:

      return {
        ...state,
        tags: action.payload,
      }

    case types.ENTER_SEARCH:
      return {
        ...state,
        search: action.payload,
      }

    case types.DELETE_SNIPPET:
      return {
        ...state,
      }

    default:
      return state;
  }

}

export default snipReducer;