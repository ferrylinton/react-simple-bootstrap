import { combineReducers } from 'redux';

import loggedUserReducer from './logged-user/logged-user.reducer';

export default combineReducers({
  loggedUser: loggedUserReducer
});
