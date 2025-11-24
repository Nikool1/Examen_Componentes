import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthPanel = () => {
  const [email, setEmail] = useState("");
  const [clave, setClave] = useState("");
  const [usuario, setUsuario] = useState(null);
  const [mensaje, setMensaje] = useState("");

  const registrar = async (e) => {
    e.preventDefault();
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, clave);
      setUsuario(cred.user);
      setMensaje("Usuario registrado");
    } catch (err) {
      console.error(err);
      setMensaje("Error al registrar: " + err.message);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const cred = await signInWithEmailAndPassword(auth, email, clave);
      setUsuario(cred.user);
      setMensaje("Inicio de sesion exitoso");
    } catch (err) {
      console.error(err);
      setMensaje("Error al iniciar sesion: " + err.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUsuario(null);
      setMensaje("Sesion cerrada");
    } catch (err) {
      console.error(err);
      setMensaje("Error al cerrar sesio");
    }
  };

  return (
    <div className="card p-3 mb-3">
      <h3 className="mb-3">Autenticacion</h3>

      <form className="mb-2">
        <div className="mb-2">
          <label className="form-label">Correo</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="correo@ejemplo.com"
          />
        </div>

        <div className="mb-2">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
          />
        </div>

        <div className="d-flex gap-2 mt-2">
          <button className="btn btn-primary" onClick={registrar}>
            Registrarse
          </button>
          <button className="btn btn-success" onClick={login}>
            Iniciar sesion
          </button>
          {usuario && (
            <button className="btn btn-danger" type="button" onClick={logout}>
              Cerrar sesion
            </button>
          )}
        </div>
      </form>

      {usuario && (
        <p className="text-success mb-0">
          Usuario actual: <strong>{usuario.email}</strong>
        </p>
      )}

      {mensaje && <p className="mt-2">{mensaje}</p>}
    </div>
  );
};

export default AuthPanel;
