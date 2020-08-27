import ItemActionTypes from "./item.types";

export const toggleItemHidden = (item) => ({
  type: ItemActionTypes.TOGGLE_ITEM_HIDDEN,
  payload: item,
});

export const addItemToShop = (item) => ({
  type: ItemActionTypes.ADD_ITEM,
  payload: item,
});

export const clearItemFromShop = (item) => ({
  type: ItemActionTypes.CLEAR_ITEM_FROM_SHOP,
  payload: item,
});
