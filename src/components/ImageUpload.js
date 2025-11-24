import React, { useState } from "react";
import { storage } from "../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const ImageUpload = () => {
  const [archivo, setArchivo] = useState(null);
  const [urlDescarga, setUrlDescarga] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleFileChange = (e) => {
    setArchivo(e.target.files[0]);
    setUrlDescarga("");
    setMensaje("");
  };

  const subirArchivo = async () => {
    if (!archivo) {
      setMensaje("Selecciona un archivo");
      return;
    }

    try {
      const fileRef = ref(storage, `imagenes/${archivo.name}`);
      await uploadBytes(fileRef, archivo);
      const url = await getDownloadURL(fileRef);
      setUrlDescarga(url);
      setMensaje("Archivo subido correctamente");
    } catch (err) {
      console.error(err);
      setMensaje("Error al subir archivo: " + err.message);
    }
  };

  return (
    <div className="card p-3">
      <h3 className="mb-3">Subir archivo</h3>

      <div className="mb-3">
        <input type="file" className="form-control" onChange={handleFileChange} />
      </div>

      <button className="btn btn-primary mb-2" type="button" onClick={subirArchivo}>
        Subir
      </button>

      {mensaje && <p>{mensaje}</p>}

      {urlDescarga && (
        <div>
          <p>Link de descarga:</p>
          <a href={urlDescarga} target="_blank" rel="noreferrer">
            {urlDescarga}
          </a>
          <div className="mt-2">
            <img
              src={urlDescarga}
              alt="Subida"
              style={{ maxWidth: "200px", border: "1px solid #ccc" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
