import { combineReducers } from 'redux';

import counter from './counter';
import doc from './doc';
import user from './user';

export default combineReducers({
  counter,
  doc,
  user
});
