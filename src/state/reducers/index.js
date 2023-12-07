import { combineReducers } from 'redux';
import vizReducer from './vizReducer';
import { loginReducer } from './authReducer';

export default combineReducers({
  vizReducer,
  loginReducer: loginReducer,
});
