import {combineReducers} from 'redux';
import historyReducer from '../../history/history.reducer';

export default combineReducers ({
  history: historyReducer,
});