import React from "react";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./cart.style.scss";

const Cart = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className='cart' onClick={toggleCartHidden}>
      <ShoppingBasketIcon></ShoppingBasketIcon>
      <span className='cart_itemNumber'>{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
