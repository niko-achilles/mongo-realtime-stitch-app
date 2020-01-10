import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../Context";

function AddProductPage() {
  const { addProductItem } = useContext(Context);
  const [productAdded, setProductAdded] = useState({
    name: "",
    price: "",
    description: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setProductAdded(prevProduct => ({ ...prevProduct, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    addProductItem(productAdded);
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
          value={productAdded.name}
          onChange={handleChange}
        />
        <input
          placeholder="Price"
          name="price"
          value={productAdded.price}
          onChange={handleChange}
        />
        <input
          placeholder="Description"
          name="description"
          value={productAdded.description}
          onChange={handleChange}
        />
        <button>Save</button>
      </form>

      <button onClick={handleClick}>Go back to Products</button>
    </>
  );
}

export default AddProductPage;
