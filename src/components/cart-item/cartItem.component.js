import React from "react";
import "./cartItem.style.scss";

const CartItem = ({
  item: { imageUrl, price, name, quantity },
}) => {
  return (
    <div className='cartItem'>
      <img src={imageUrl} alt='name'></img>
      <div className='cartItem__details'>
        <span className='cartItem__name'>{name}</span>
        <span className='cartItem__price'>
          {quantity} × tk.{price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
