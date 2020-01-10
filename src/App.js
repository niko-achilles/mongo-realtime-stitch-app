import React from "react";
import ProductsPage from "./pages/ProductsPage";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductDetails from "./components/product/details/productDetails";
import EditProductPage from "./pages/EditProductPage";
import AddProductPage from "./pages/AddProductPage";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products" exact>
          <ProductsPage />
        </Route>
        <Route path="/products/add" exact>
          <AddProductPage />
        </Route>
        <Route path="/products/edit/:productId" exact>
          <EditProductPage />
        </Route>
        <Route path="/products/:productId">
          <ProductDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
