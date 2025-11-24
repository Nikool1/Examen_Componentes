import React from "react";

const ProductItem = ({ product, onAddToCart }) => {
  const { nombre, precio } = product;

  return (
    <div className="card p-3 shadow-sm">
      <p><strong>{nombre}</strong></p>
      <p>Precio: ${precio.toLocaleString()}</p>

      <button 
        onClick={() => onAddToCart(product)}
        className="btn btn-primary"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductItem;
