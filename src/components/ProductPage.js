import React, { Component } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        { id: 1, nombre: "Producto 1", precio: 10000 },
        { id: 2, nombre: "Producto 2", precio: 20000 },
        { id: 3, nombre: "Producto 3", precio: 30000 },
      ],
      cart: [],
    };
  }

  handleAddToCart = (product) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, product],
    }));
  };

  handleRemoveFromCart = (id) => {
    this.setState((prevState) => ({
      cart: prevState.cart.filter((item, index) => index !== id),
    }));
  };

  render() {
    const { products, cart } = this.state;

    return (
      <div className="container">
        <div className="row justify-content-center">

          {/* LISTA DE PRODUCTOS */}
          <div className="col-md-6 mb-4">
            <div className="card p-3 shadow-sm">
              <ProductList
                products={products}
                onAddToCart={this.handleAddToCart}
              />
            </div>
          </div>

          {/* CARRITO */}
          <div className="col-md-4 mb-4">
            <div className="card p-3 shadow-sm">
              <Cart
                items={cart}
                onRemoveItem={this.handleRemoveFromCart}
              />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default ProductPage;
