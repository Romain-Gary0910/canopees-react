import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/adminTheme.css";
import { API_URL } from "../config/api";

const AdminPresentation = () => {
  const [presentations, setPresentations] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Vérifie la présence du token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/connexion");
    } else {
      fetch(`${API_URL}/api/presentations`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setPresentations(data["member"] || []))
        .catch(() =>
          setMessage("Erreur lors du chargement des informations.")
        );
    }
  }, [navigate]);

  const handleChange = (idx, field, value) => {
    setPresentations((prev) =>
      prev.map((item, i) => (i === idx ? { ...item, [field]: value } : item))
    );
  };

  const handleSubmit = async (e, idx, id) => {
    e.preventDefault();
    const presentation = presentations[idx];
    try {
      const response = await fetch(
        `${API_URL}/presentations/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/merge-patch+json",
          },
          body: JSON.stringify({
            titre: presentation.titre,
            description: presentation.description,
            image: presentation.image,
          }),
        }
      );
      if (response.ok) {
        setMessage("✅ Modifications enregistrées !");
        setTimeout(() => setMessage(""), 2000);
      } else {
        const errorText = await response.text();
        console.error("Erreur lors du PUT :", response.status, errorText);
        setMessage("❌ Erreur lors de la sauvegarde !");
        setTimeout(() => setMessage(""), 3000);
      }
    } catch (error) {
      console.error("Erreur lors de la sauvegarde :", error);
    }
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="admin-title">Administration – Qui sommes-nous</h2>
        <button type="button" className="admin-btn" onClick={() => navigate("/admin")}>
          Retour
        </button>
      </div>

      {message && (
        <div className="alert alert-success text-center" role="alert">
          {message}
        </div>
      )}

      {presentations.map((item, idx) => (
        <form
          key={item.id}
          className="admin-card mb-4"
          onSubmit={(e) => handleSubmit(e, idx, item.id)}
        >
          <h4 className="mb-3">
            {item.titre}
          </h4>

          <div className="mb-3">
            <label className="form-label fw-bold">
              Description
            </label>
            <textarea
              className="form-control"
              rows="4"
              value={item.description || ""}
              onChange={(e) =>
                handleChange(idx, "description", e.target.value)
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">
              Nom de l’image
            </label>
            <input
              type="text"
              className="form-control"
              value={item.image || ""}
              onChange={(e) => handleChange(idx, "image", e.target.value)}
            />
            {item.image && (
              <img
                src={`/images/${item.image}`}
                alt={item.titre}
                className="mt-3 img-fluid rounded shadow-sm"
                style={{ maxHeight: "180px" }}
              />
            )}
          </div>

          <button
            type="submit"
            className="admin-btn"
          >
            Enregistrer
          </button>
        </form>
      ))}
    </div>
  );
};

export default AdminPresentation;