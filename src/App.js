import React, { useState } from "react";
import ProductPage from "./components/ProductPage";
import ContactForm from "./components/ContactForm";
import AccountArea from "./components/AccountArea";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [view, setView] = useState("home");

  return (
    <div className="App">

      {/* TÍTULO */}
      <h1 className="text-center my-4">Examen</h1>

      {/* BOTONES */}
      <div className="text-center mb-4">
        <button 
          className="btn btn-primary mx-2"
          onClick={() => setView("productos")}
        >
          Ejercicio 1
        </button>

        <button 
          className="btn btn-success mx-2"
          onClick={() => setView("contacto")}
        >
          Ejercicio 2
        </button>

        <button 
          className="btn btn-warning mx-2"
          onClick={() => setView("cuenta")}
        >
          Ejercicio 3
        </button>
      </div>

      {/* CONTENIDO */}
      <div className="container">
        {view === "productos" && <ProductPage />}
        {view === "contacto" && <ContactForm />}
        {view === "cuenta" && <AccountArea />}
      </div>

    </div>
  );
}

export default App;
