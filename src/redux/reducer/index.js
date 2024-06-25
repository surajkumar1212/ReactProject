import { combineReducers } from 'redux';
import dataSlice from '../slices/postsslice';

const rootReducer = combineReducers({
  data: dataSlice
  // Add other reducers here
});

export default rootReducer;