import React, { useContext } from "react";

import { Context } from "../../Context";

import ProductItem from "./productItem";

function Products() {
  const { productItems } = useContext(Context);

  

  const productElements = productItems.map(product => {
    const item = {
      ...product
    };

    return <ProductItem key={item.id} item={item}></ProductItem>;
  });

  return <section className="products">{productElements}</section>;
}

export default Products;
