import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    fetch("http://127.0.0.1:8000/api/presentations", {
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
  `http://127.0.0.1:8000/api/presentations/${id}`,
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
        <h2 className="text-primary">Administration – Qui sommes-nous</h2>
        <button type="button" className="btn btn-secondary" onClick={() => navigate("/admin")}>
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
          className="border rounded p-4 mb-4 shadow-sm"
          style={{
            backgroundColor: "#f5f0ff",
            borderColor: "#d1b3ff",
            borderStyle: "solid",
            borderWidth: "1px",
          }}
          onSubmit={(e) => handleSubmit(e, idx, item.id)}
        >
          <h4 className="mb-3" style={{ color: "#333", fontWeight: "bold" }}>
            {item.titre}
          </h4>

          <div className="mb-3">
            <label className="form-label fw-bold" style={{ color: "#333" }}>
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
            <label className="form-label fw-bold" style={{ color: "#333" }}>
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
            className="btn"
            style={{
              backgroundColor: "#6f42c1",
              color: "#fff",
              border: "none",
              transition: "background-color 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#ffc107";
              e.currentTarget.style.color = "#6f42c1";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(255, 193, 7, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#6f42c1";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
          Enregistrer
          </button>
        </form>
      ))}
    </div>
  );
};

export default AdminPresentation;