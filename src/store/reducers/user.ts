import actionTypes from '../actionTypes';

const { USER } = actionTypes;

const defaultState: UserStateInterface = {};

export default function user(state = defaultState, action) {
  switch (action.type) {
    case USER.REFRESH_USER_INFO: {
      return {
        ...state,
        userInfo: action.playload.userInfo
      };
    }
    default: {
      return state;
    }
  }
}
