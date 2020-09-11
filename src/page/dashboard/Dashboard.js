import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopItems } from "../../redux/item/item.selector";
import DashboardIcon from "@material-ui/icons/Dashboard";
import "./Dashboard.scss";
const Dashboard = ({ items }) => {
  return (
    <div className='dashboard'>
      <div className='dashboard__header'>
        <DashboardIcon></DashboardIcon>
        <h1> Dashboard</h1>
      </div>
      <div className='dashboard__items'>
        <div className='dashboard__totals'>
          <h1>Total Items :</h1>
          <span>{items.length}</span>
        </div>
        <div className='dashboard__totals'>
          <h1>Total Customers :</h1>
          <span>{items.length}</span>
        </div>
        <div className='dashboard__totals'>
          <h1>Total Visitors :</h1>
          <span>{items.length}</span>
        </div>
        <div className='dashboard__totals'>
          <h1>Total Transactions :</h1>
          <span>{items.length}</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectShopItems
});

export default connect(mapStateToProps)(Dashboard);
