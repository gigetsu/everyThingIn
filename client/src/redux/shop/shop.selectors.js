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

export const sortSliderItems = createSelector(
  [selectItems],
  selectItems => {
    var sortedItems = [];
    var tempItems = [];
    selectItems.map(
      items => {
        tempItems = items.sort(
          function (a, b) {
            return b.price - a.price;
          }
        ).slice(0, 3)
        sortedItems.push(...tempItems)
      }
    )
    return sortedItems;
  }
);

export const selectItemById = idParam =>
  createSelector(
    [sortSliderItems],
    sortSliderItems => sortSliderItems.filter(item => item.id == idParam)
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
