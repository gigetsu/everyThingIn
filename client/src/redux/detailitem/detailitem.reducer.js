import DetailitemActionTypes from './detailitem.types';

const INITIAL_STATE = {
};

const detailitemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DetailitemActionTypes.CHANGE_BCK_IMG:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default detailitemReducer;
