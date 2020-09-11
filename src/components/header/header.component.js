import React from "react";
import { auth } from "../../firebase/firebase";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import BusinessIcon from "@material-ui/icons/Business";
import StoreIcon from "@material-ui/icons/Store";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import "./header.style.scss";
import Cart from "../cart/cart.component";
import CartDropDown from "../cart-dropdown/cartDropDown.component";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <Link className='header__logoContainer' to='/'>
        <div className='header__logo'>
          <BusinessIcon></BusinessIcon>{" "}
          <span>My Brand</span>
          <img
            src='https://hitcounter.pythonanywhere.com/count/tag.svg?url=https%3A%2F%2Fawesome-poincare-9606e1.netlify.app%2F'
            alt='Hits'
          ></img>
        </div>
      </Link>
      <div className='header__options'>
        <Link className='header__option' to='/'>
          <StoreIcon></StoreIcon> <span>Shop</span>
        </Link>

        {currentUser?.isAdmin ? (
          <Link className='header__option' to='/add'>
            <AddCircleIcon></AddCircleIcon>
            <span>Add Items</span>
          </Link>
        ) : (
          <span></span>
        )}

        {currentUser ? (
          <div
            className='header__option'
            onClick={() => auth.signOut()}
          >
            <ExitToAppIcon></ExitToAppIcon>
            <span>SignOut</span>
          </div>
        ) : (
          <Link className='header__option' to='/auth'>
            <ContactMailIcon></ContactMailIcon>{" "}
            <span>SignUp</span>
          </Link>
        )}
        <Cart></Cart>
      </div>
      {hidden ? null : <CartDropDown></CartDropDown>}
    </div>
  );
};

// using createStructuredSelector() from 'reselect' library for reducing the number of re-rendering
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
