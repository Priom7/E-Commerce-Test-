import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { addItemToCart } from "../../redux/cart/cart.action";
import {
  clearItemFromShop,
  toggleItemHidden,
} from "../../redux/item/item.action";
import { selectCurrentUser } from "../../redux/user/user.selector";
import "./collection-item.style.scss";
import CustomButton from "../button/customButton.component";

const CollectionItem = ({
  item,
  addItemToCart,
  currentUser,
  clearItemFromShop,
  toggleItemHidden,
}) => {
  const { name, price, imageUrl, isAvailable } = item;
  return (
    <div className='collection'>
      <div
        className='collection__image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className='collection__footer'>
        <span className='collection__name'>{name}</span>
        <span className='collection__price'>{price}</span>
      </div>
      <div className='custom__button'>
        {(isAvailable && (
          <CustomButton
            onClick={() => addItemToCart(item)}
            inverted
          >
            Add to Cart
          </CustomButton>
        )) || (
          <CustomButton inverted>
            Item Not Available
          </CustomButton>
        )}

        {currentUser?.isAdmin && (
          <>
            <CustomButton
              onClick={() => clearItemFromShop(item)}
              inverted
            >
              Delete Item
            </CustomButton>

            <CustomButton
              onClick={() => toggleItemHidden(item)}
              inverted
            >
              {isAvailable ? `Disable` : `Enable`} Item
            </CustomButton>
          </>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  clearItemFromShop: (item) =>
    dispatch(clearItemFromShop(item)),
  toggleItemHidden: (item) =>
    dispatch(toggleItemHidden(item)),
});

// using createStructuredSelector() from 'reselect' library for reducing the number of re-rendering
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionItem);
