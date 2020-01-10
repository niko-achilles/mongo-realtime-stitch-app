import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/products">Products</Link>
      {" | "}
      <Link to="/products/add">Add Product</Link>
    </nav>
  );
};

export default Header;
