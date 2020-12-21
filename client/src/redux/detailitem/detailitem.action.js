import DetailActionTypes from './detailitem.types';

export const changebckImg = imageUrl => ({
  type: DetailActionTypes.CHANGE_BCK_IMG,
  payload: imageUrl
});

export const setSelectedImg = item => ({
  type: DetailActionTypes.SET_IMG,
  payload: item? item.imageUrl: null
});