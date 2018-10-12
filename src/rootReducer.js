import { combineReducers } from 'redux';
import { reducer as IssuesReducer } from './features/Issues';

export default combineReducers({
  issues: IssuesReducer,
});
