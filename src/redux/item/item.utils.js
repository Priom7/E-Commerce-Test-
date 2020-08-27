export const updateShopItem = (
  shopItems,
  shopItemToUpdate
) => {
  return shopItems.map((shopItem) =>
    shopItem.id === shopItemToUpdate.id
      ? {
          ...shopItem,
          isAvailable: !shopItem.isAvailable,
        }
      : shopItem
  );
};
