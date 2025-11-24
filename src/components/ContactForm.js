import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      email: "",
      mensaje: "",
      enviado: false,
      error: "",
    };

    this.validator = new SimpleReactValidator({
      autoForceUpdate: this,
      messages: {
        required: "Este campo es obligatorio",
        email: "El correo no es valido",
      },
    });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, enviado: false, error: "" });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    if (this.validator.allValid()) {
      try {
        await addDoc(collection(db, "contactos"), {
          nombre: this.state.nombre,
          email: this.state.email,
          mensaje: this.state.mensaje,
          creadoEn: serverTimestamp(),
        });

        this.setState({
          nombre: "",
          email: "",
          mensaje: "",
          enviado: true,
          error: "",
        });
        this.validator.hideMessages();
      } catch (err) {
        console.error(err);
        this.setState({
          error: "Ocurrio un error al guardar los datos",
          enviado: false,
        });
      }
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  render() {
    const { nombre, email, mensaje, enviado, error } = this.state;

    return (
      <div className="card p-4 shadow-sm" style={{ maxWidth: "600px", margin: "2rem auto" }}>
        <h2 className="mb-4 text-center">Formulario</h2>

        <form onSubmit={this.handleSubmit} noValidate>

          {/* Nombre */}
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={nombre}
              onChange={this.handleChange}
              className="form-control"
            />
            <div className="text-danger small">
              {this.validator.message("nombre", nombre, "required")}
            </div>
          </div>

          {/* Correo */}
          <div className="mb-3">
            <label className="form-label">Correo</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className="form-control"
            />
            <div className="text-danger small">
              {this.validator.message("email", email, "required|email")}
            </div>
          </div>

          {/* Mensaje */}
          <div className="mb-3">
            <label className="form-label">Mensaje</label>
            <textarea
              name="mensaje"
              value={mensaje}
              onChange={this.handleChange}
              className="form-control"
              rows="4"
            />
            <div className="text-danger small">
              {this.validator.message("mensaje", mensaje, "required|min:10")}
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Enviar
          </button>
        </form>

        {enviado && (
          <p className="text-success mt-3 text-center">
            Datos enviados y guardados
          </p>
        )}

        {error && (
          <p className="text-danger mt-3 text-center">
            {error}
          </p>
        )}
      </div>
    );
  }
}

export default ContactForm;
