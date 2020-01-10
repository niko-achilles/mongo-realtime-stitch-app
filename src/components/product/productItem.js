import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context";
import "./productItem.css";

const ProductItem = ({ item }) => {
  const { removeProductItem } = useContext(Context);

  return (
    <article className="product-item">
      {/* <div
        className="product-item__image"
        style={{ backgroundImage: "url('" + item.imageUrl + "')" }}
      /> */}
      <div className="product-item__content">
        <h1>{item.name}</h1>
        <h2>${item.price}</h2>
        <p>{item.description}</p>
        <div className="product-item__controls">
          <Link to={`products/${item.id}`}>Details</Link>
          <Link to={`products/edit/${item.id}`}>Edit</Link>
          <button onClick={() => removeProductItem(item.id)}>Delete</button>
        </div>
      </div>
    </article>
  );
};

export default ProductItem;
