import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";
import "./checkOutPage.style.scss";
import CheckOutItem from "../../components/checkOutItem/checkOutItem.component";
const CheckOutPage = ({ cartItems, total }) => {
  return (
    <div className='checkOutPage'>
      <div className='checkOutPage__header'>
        <div className='checkOutPage__headerBlocks'>
          <span>Product</span>
        </div>
        <div className='checkOutPage__headerBlocks'>
          <span>Description</span>
        </div>
        <div className='checkOutPage__headerBlocks'>
          <span>Quantity</span>
        </div>
        <div className='checkOutPage__headerBlocks'>
          <span>Price</span>
        </div>
        <div className='checkOutPage__headerBlocks'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem
          key={cartItem.id}
          cartItem={cartItem}
        ></CheckOutItem>
      ))}

      <div className='checkOutPage__total'>
        Total : Tk. {total}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOutPage);
