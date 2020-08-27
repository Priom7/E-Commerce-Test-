import ItemActionTypes from "./item.types";
import { updateShopItem } from "./item.utils";

const INITIAL_STATE = {
  shopItems: [
    {
      id: 2,
      name: "Food Item 1",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/04/23/09/44/smoothies-2253423_1280.jpg",
      price: 25,
      isAvailable: true,
    },
    {
      id: 3,
      name: "Food Item 2",
      imageUrl:
        "https://cdn.pixabay.com/photo/2010/12/13/10/05/background-2277_1280.jpg",
      price: 25,
      isAvailable: false,
    },
    {
      id: 4,
      name: "Food Item 3",
      imageUrl:
        "https://cdn.pixabay.com/photo/2010/12/13/10/05/background-2277_1280.jpg",
      price: 2500,
      isAvailable: true,
    },
  ],
};

const itemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ItemActionTypes.TOGGLE_ITEM_HIDDEN:
      return {
        ...state,
        shopItems: updateShopItem(
          state.shopItems,
          action.payload
        ),
      };

    case ItemActionTypes.ADD_ITEM:
      return {
        ...state,
        shopItems: state.shopItems.push(action.payload),
      };

    case ItemActionTypes.CLEAR_ITEM_FROM_SHOP:
      return {
        ...state,
        shopItems: state.shopItems.filter(
          (shopItem) => shopItem.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};
export default itemReducer;
