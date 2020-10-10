import React from "react";

import "./preview-collection.style.scss";
import CollectionItem from "../collection-items/collection-item.component";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className='preview'>
      <h1 className='preview__title'>Shop Items</h1>
      <h4>
        Please hover over the items to see actions available
        for you{" "}
      </h4>
      <div className='preview__collection'>
        {items.map(item => (
          <CollectionItem
            key={item.id}
            item={item}
          ></CollectionItem>
        ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
