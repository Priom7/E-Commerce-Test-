import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selector";
import "./cartDropDown.style.scss";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import CustomButton from "../button/customButton.component";
import CartItem from "../cart-item/cartItem.component";

const CartDropDown = ({ cartItems, history, dispatch }) => {
  return (
    <div className='cartDropDown'>
      <div className='cartDropDown__items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              item={cartItem}
            ></CartItem>
          ))
        ) : (
          <span className='cartDropDown__empty'>
            Your cart is Empty
          </span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        Go To Checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(
  connect(mapStateToProps)(CartDropDown)
);
