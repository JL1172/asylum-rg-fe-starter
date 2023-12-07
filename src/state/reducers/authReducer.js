import { SET_USER_INFO } from '../actionTypes';

const initialState = {
  userInfo: '',
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
};
