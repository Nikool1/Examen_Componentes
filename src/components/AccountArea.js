import React, { useState } from "react";
import AuthPanel from "./AuthPanel";
import ImageUpload from "./ImageUpload";

const AccountArea = () => {
  const [view, setView] = useState("auth");

  return (
    <div className="container mt-4">
      <h2 className="mb-4"></h2>

      {/* BOTONES*/}
      <div className="text-center mb-4">
        <button
          className={`btn me-2 ${view === "auth" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setView("auth")}
        >
          Autenticacion
        </button>

        <button
          className={`btn ${view === "upload" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setView("upload")}
        >
          Subir archivo
        </button>
      </div>

      <div className="row">
        <div className="col-md-12">
          {view === "auth" && <AuthPanel />}
          {view === "upload" && <ImageUpload />}
        </div>
      </div>
    </div>
  );
};

export default AccountArea;
