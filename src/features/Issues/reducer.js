import {
  GET_ISSUES,
  GET_ISSUES_SUCCESS,
  GET_ISSUES_FAILURE,
  FILTER_ISSUES,
} from '../../constants';

const INITIAL_STATE = {
  issues: {},
  filteredIssues: {}
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ISSUES:
      return {
        ...state,
        fetched: false,
        isLoading: true,
      };
    case GET_ISSUES_SUCCESS:
      return {
        ...state,
        issues: action.payload, // Used to store the original api request data
        filteredIssues: action.payload, // Actually used in view to handle filtering
        fetched: true,
        isLoading: false,
      };
    case GET_ISSUES_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetched: false,
        isLoading: false
      };
    case FILTER_ISSUES:
      let by = action.payload.by;
      if (by === "all") {
        return {
          ...state,
          filterBy: action.payload.by,
          filteredIssues: state.issues
        }
      } else {
        return {
          ...state,
          filterBy: action.payload.by,
          filteredIssues: Object.values(state.issues).filter(issue => issue.state === by)
        }
      }
    default:
      return state;
  }
}
