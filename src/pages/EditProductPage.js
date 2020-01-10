import React, { useContext, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Context } from "../Context";

function EditProductPage() {
  const { productId } = useParams();
  const { productItems, updateProductItem } = useContext(Context);

  const findProductToEdit = () =>
    productItems.find(item => item.id === productId);

  const [productEdited, setProductEdited] = useState(findProductToEdit());

  function handleChange(event) {
    const { name, value } = event.target;
    setProductEdited(prevProduct => ({ ...prevProduct, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    updateProductItem(productEdited);
  }

  const history = useHistory();
  function handleClick() {
    history.push("/products");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          name="name"
          value={productEdited.name}
          onChange={handleChange}
        />
        <input
          placeholder="Price"
          name="price"
          value={productEdited.price}
          onChange={handleChange}
        />
        <input
          placeholder="Description"
          name="description"
          value={productEdited.description}
          onChange={handleChange}
        />
        <button>Save</button>
      </form>

      <button onClick={handleClick}>Go back to Products</button>
    </>
  );
}

export default EditProductPage;
