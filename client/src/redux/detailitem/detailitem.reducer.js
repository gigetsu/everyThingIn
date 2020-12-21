import DetailActionTypes from './detailitem.types';

const INITIAL_STATE = {
};

const detailitemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DetailActionTypes.CHANGE_BCK_IMG:
      return {
        ...state,
        detailitem: action.payload
      };
    case DetailActionTypes.SET_IMG:
      return {
        ...state,
        detailitem: action.payload
      };
    default:
      return state;
  }
};

export default detailitemReducer;
