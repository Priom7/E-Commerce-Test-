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
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import DashboardIcon from "@material-ui/icons/Dashboard";
import "./Sidebar.scss";
import Cart from "../cart/cart.component";
import CartDropDown from "../cart-dropdown/cartDropDown.component";

const Sidebar = ({ currentUser, hidden }) => {
  return (
    <div className='sidebar'>
      <Link className='sidebar__logoContainer' to='/'>
        <div className='sidebar__logo'>
          <BusinessIcon></BusinessIcon>{" "}
          <span>My Brand</span>
        </div>
      </Link>

      <div className='sidebar__options'>
        <Link className='sidebar__option' to='/profile'>
          <VerifiedUserIcon></VerifiedUserIcon>{" "}
          <h1>Admin</h1>
        </Link>

        <hr></hr>

        <Link className='sidebar__option' to='/'>
          <StoreIcon></StoreIcon> <span>Shop</span>
        </Link>

        <Link className='sidebar__option' to='/add'>
          <AddCircleIcon></AddCircleIcon>
          <span>Add Items</span>
        </Link>

        <Link className='sidebar__option' to='/dashboard'>
          <DashboardIcon></DashboardIcon>{" "}
          <span>Dashboard</span>
        </Link>

        {currentUser ? (
          <div
            className='sidebar__option'
            onClick={() => auth.signOut()}
          >
            <ExitToAppIcon></ExitToAppIcon>
            <span>SignOut</span>
          </div>
        ) : (
          <Link className='sidebar__option' to='/auth'>
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

export default connect(mapStateToProps)(Sidebar);
