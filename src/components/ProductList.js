import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div>
      <h2 className="mb-3">Productos</h2>

      <div className="list-group">
        {products.map((prod) => (
          <div key={prod.id} className="mb-3">
            <ProductItem
              product={prod}
              onAddToCart={onAddToCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
