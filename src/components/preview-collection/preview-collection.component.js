import React from "react";

import "./preview-collection.style.scss";
import CollectionItem from "../collection-items/collection-item.component";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className='preview'>
      <div className='preview__collection'>
        {items.map((item) => (
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
