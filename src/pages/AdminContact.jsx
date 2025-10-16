

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminContact = () => {
  const navigate = useNavigate();
  const [contact, setContact] = useState({ telephone: "", email: "", adresse: "" });
  const [message, setMessage] = useState("");

  // Vérifie la présence du token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/connexion");
    } else {
      fetch("http://127.0.0.1:8000/api/contact_infos/1", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setContact(data))
        .catch(() => setMessage("Erreur lors du chargement des informations."));
    }
  }, [navigate]);

  // Gestion du changement des champs
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  // Envoi des modifications
  const handleSave = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://127.0.0.1:8000/api/contact_infos/1", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/merge-patch+json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setMessage("✅ Informations mises à jour avec succès !");
      } else {
        setMessage("❌ Erreur lors de la sauvegarde des modifications.");
      }
    } catch (error) {
      setMessage("❌ Erreur de connexion à l’API.");
    }
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary">Gestion des informations de contact</h2>
        <button className="btn btn-secondary" onClick={() => navigate("/admin")}>
          Retour
        </button>
      </div>

      {message && <div className="alert alert-info">{message}</div>}

      <div
        className="border rounded p-4 mb-4 shadow-sm"
        style={{
          backgroundColor: "#f5f0ff",
          borderColor: "#d1b3ff",
          borderStyle: "solid",
          borderWidth: "1px",
        }}
      >
        <div className="mb-3">
          <label className="form-label">Téléphone</label>
          <input
            type="text"
            className="form-control"
            name="telephone"
            value={contact.telephone || ""}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={contact.email || ""}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Adresse</label>
          <input
            type="text"
            className="form-control"
            name="adresse"
            value={contact.adresse || ""}
            onChange={handleChange}
          />
        </div>

        <button
          style={{
            backgroundColor: "#6f42c1",
            border: "none",
            color: "#fff",
            padding: "8px 16px",
            borderRadius: "5px",
            transition: "background-color 0.3s",
            marginTop: "12px",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff8800")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#6f42c1")}
          onClick={handleSave}
        >
          Enregistrer les modifications
        </button>
      </div>
    </div>
  );
};

export default AdminContact;