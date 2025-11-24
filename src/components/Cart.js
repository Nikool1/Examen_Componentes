import React from "react";

const Cart = ({ items, onRemoveItem }) => {
  const total = items.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div>
      <h2 className="mb-3">Carrito</h2>

      {items.length === 0 ? (
        <p>No hay productos en carrito</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {items.map((item, index) => (
              <li 
                key={index} 
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>
                  {item.nombre} - ${item.precio.toLocaleString()}
                </span>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onRemoveItem(index)}
                >
                  Quitar
                </button>
              </li>
            ))}
          </ul>

          <p><strong>Total:</strong> ${total.toLocaleString()}</p>
        </>
      )}
    </div>
  );
};

export default Cart;
