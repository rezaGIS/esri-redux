/* @flow */
import {viewCreated} from 'js/reducers/mapReducers';
import {combineReducers} from 'redux';

// This is my state model and each reducer maps to each store property
export default combineReducers({
  viewReady: viewCreated
});
