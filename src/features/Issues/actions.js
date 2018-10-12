import {
  GET_ISSUES,
  GET_ISSUES_SUCCESS,
  GET_ISSUES_FAILURE,
  FILTER_ISSUES
} from '../../constants';

import axios from 'axios';
import config from '../../config';

export const filterIssues = by => {
  console.log(by)
  return dispatch => dispatch({
    type: FILTER_ISSUES,
    payload: {
      by: by,
    }
  })
}



export const getIssues = ({owner, repo, page}) => {
  const newUrl = `https://api.github.com/repos/${owner}/${repo}/issues?access_token=${config.access_token}&state=all&page=${page}`
  console.log(newUrl)
  return dispatch => {
    dispatch(getIssuesStarted({owner, repo}));

    axios
      .get(newUrl)
      .then(res => {
        dispatch(getIssuesSuccess(res.data));
      })
      .catch(err => {
        dispatch(getIssuesFailure(err.message));
      });
  };
};

const getIssuesStarted = payload => ({
  type: GET_ISSUES,
  payload: {
    owner: payload.owner,
    repo: payload.repo
  }
});
const getIssuesSuccess = issues => ({
  type: GET_ISSUES_SUCCESS,
  payload: {
    ...issues
  }
});

const getIssuesFailure = error => ({
  type: GET_ISSUES_FAILURE,
  payload: {
    error
  }
});
