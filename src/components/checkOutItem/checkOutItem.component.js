import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/cart/cart.action";
import "./checkOutItem.style.scss";

const CheckOutItem = ({ cartItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkOutItem'>
      <div className='checkOutItem__image'>
        <img src={imageUrl} alt='item'></img>
      </div>
      <span className='checkOutItem__name'>{name}</span>
      <span className='checkOutItem__quantity'>
        {quantity}
      </span>
      <span className='checkOutItem__price'>{price}</span>
      <div
        className='checkOutItem__remove'
        onClick={() => clearItem(cartItem)}
      >
        &#10006;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(
  null,
  mapDispatchToProps
)(CheckOutItem);
