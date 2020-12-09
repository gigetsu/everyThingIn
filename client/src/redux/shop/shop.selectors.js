import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectItems = createSelector(
  [selectCollectionsForPreview],
  collections => 
  collections.map(collection => collection.items)
);

export const selectSliderItems = createSelector(
  [selectItems],
  selectItems => selectItems.sort((a, b) => {
    if (a['price'] < b['price']) return -1;
    if (a['price'] > b['price']) return 1;
    return 0;
  })
);


export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);
