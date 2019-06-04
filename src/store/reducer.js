import {
  combineReducers
} from 'redux-immutable'
import {
  reducer as commonReducer
} from './module/common';
import {
  reducer as cardReducer
} from './module/card';

export default combineReducers({
  common: commonReducer,
  card: cardReducer,
})