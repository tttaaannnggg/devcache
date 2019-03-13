import * as types from '../constants/actionTypes';

const initialState = {
	snippet: '',
	comments: '',
	project: '',
	tags: [],
	search: '',
	recievedTags: [],
	recievedSnippet: '',

}

const snipReducer = (state = initialState, action) => {
  switch (action.type) {

  	case types.GET_SNIPPETS:
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

    default:
      return state;
  }
}

export default snipReducer;