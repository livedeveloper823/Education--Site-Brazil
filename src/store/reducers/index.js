// third-party
import { combineReducers } from 'redux';

// project import
import auth from './auth';
import menu from './menu';
import snackbar from './snackbar';
import questiondata from './questiondata';
import schooldata from './schooldata';
import subjectsdata from './subjectsdata';
import userdata from './userdata'
import rankingdata from './rankingdata';
import notificationdata from './notificationdata';
// import userWorkingTime from './workingtime';
// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  auth,
  menu,
  snackbar,
  questiondata,
  schooldata,
  subjectsdata,
  userdata,
  rankingdata,
  notificationdata,
  // userWorkingTime,
});

export default reducers;
