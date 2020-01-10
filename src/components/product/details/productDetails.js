import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Context } from "../../../Context";

function ProductDetails() {
  const { productId } = useParams();
  const { productItems } = useContext(Context);
  const history = useHistory();



  const productDetail = productItems.find(item => item.id === productId);

  function handleClick() {
    history.push("/products");
  }

  return (
    <div>
      <h1>{productDetail.name}</h1>
      <h2>${productDetail.price}</h2>
      <p>{productDetail.description}</p>
      <button onClick={handleClick}>Go back to Products</button>
    </div>
  );
}

export default ProductDetails;
