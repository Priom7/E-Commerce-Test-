import { createSelector } from "reselect";

const selectItem = (state) => state.item;

export const selectShopItems = createSelector(
  [selectItem],
  (shop) => shop.shopItems
);
