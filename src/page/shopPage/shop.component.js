import React from "react";
import "./shop.style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopItems } from "../../redux/item/item.selector";

import PreviewCollection from "../../components/preview-collection/preview-collection.component";
const Shop = ({ items }) => {
  const { id } = items;
  return (
    <div className='shop'>
      <PreviewCollection
        key={id}
        items={items}
      ></PreviewCollection>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectShopItems,
});

export default connect(mapStateToProps)(Shop);
