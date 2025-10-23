import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/adminTheme.css";
import { API_URL } from "../config/api";

const AdminRealisation = () => {
  const navigate = useNavigate();
  const [realisations, setRealisations] = useState([]);
  const [message, setMessage] = useState("");

  
  useEffect(() => {
       const token = localStorage.getItem("token");
    if (!token) {
      navigate("/connexion");
      return;
    } else {
      fetch(`${API_URL}/api/realisations`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.json())
      .then((data) => {
     
        setRealisations(
          (data.member || []).sort((a, b) => {
            const isAccueilA = a.titre?.toLowerCase().includes("accueil") || a.titre?.toLowerCase().includes("bienvenue");
            const isAccueilB = b.titre?.toLowerCase().includes("accueil") || b.titre?.toLowerCase().includes("bienvenue");
            return isAccueilB - isAccueilA;
          })
        ); 
      })
      .catch((err) => console.error("Erreur lors du chargement .", err));
    }
  }, []);

  // Fonction pour mettre à jour une réalisation
 const handleSave = async (id, updatedData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/api/realisations/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/merge-patch+json",
        Accept: "application/ld+json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        titre: updatedData.titre,
        images: updatedData.images,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Erreur serveur :", errorText);
      throw new Error("❌ Erreur lors de la mise à jour !");
    }

    setMessage("✅ Modifications enregistrées avec succès !");
    setTimeout(() => setMessage(""), 3000);
  } catch (err) {
    console.error("Erreur :", err);
    setMessage(`❌ ${err.message}`);
    setTimeout(() => setMessage(""), 5000);
  }
};

  // Fonction pour gérer les changements dans les inputs
  const handleChange = (id, field, value) => {
    setRealisations((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: value } : r))
    );
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="admin-title">Gestion de la page d'accueil</h2>
        <button type="button" className="admin-btn" onClick={() => navigate("/admin")}>
          Retour
        </button>
      </div>

      {message && <div className="alert alert-success text-center">{message}</div>}

      {realisations.map((real) => (
        <div
          key={real.id}
          className="admin-card mb-4"
        >
          <div className="card-body">
            <h5 className="card-title my-3 fw-bold">Bloc : {real.titre}</h5>

            {/* Champ titre */}
            <div className="mb-3">
              <label className="form-label fw-bold">Titre</label>
              <input
                type="text"
                className="form-control"
                value={real.titre || ""}
                onChange={(e) => handleChange(real.id, "titre", e.target.value)}
              />
            </div>

            {/* Champ image */}
            <div className="mb-3">
              <label className="form-label fw-bold">Image (nom de fichier)</label>
              <input
                type="text"
                className="form-control"
                value={real.images || ""}
                onChange={(e) => handleChange(real.id, "images", e.target.value)}
              />
              {real.images && (
                <img
                  src={`/images/${real.images}`}
                  alt={real.titre}
                  className="img-fluid rounded mt-2"
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                />
              )}
            </div>

            <button
              className="admin-btn"
              onClick={() =>
                handleSave(real.id, {
                  titre: real.titre,
                  images: real.images,
                })
              }
            >
              Enregistrer
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminRealisation;