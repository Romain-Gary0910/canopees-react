import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/adminTheme.css";
import { API_URL } from "../config/api";

const AdminPrestation = () => {
  const navigate = useNavigate();
  const [prestations, setPrestations] = useState([]);
  const [message, setMessage] = useState("");

  const fetchPrestations = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/connexion");
      return;
    }
    const url = `${API_URL}/api/prestations`;
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Erreur lors du chargement des prestations.");
      }
      const data = await response.json();
      const prestationsData = data["hydra:member"] || data.member || data || [];
      const prestationsFormatted = prestationsData.map((p) => ({
        ...p,
        images:
          typeof p.images === "string" && p.images.trim() !== ""
            ? JSON.parse(p.images)
            : Array.isArray(p.images)
            ? p.images
            : [],
      }));
      setPrestations(prestationsFormatted);
    } catch (error) {
      setMessage("❌ Erreur lors du chargement des prestations.");
    }
  };

  useEffect(() => {
    fetchPrestations();
  }, [navigate]);

  const handleChange = (id, field, value) => {
    setPrestations((prev) =>
      prev.map((prestation) =>
        prestation.id === id ? { ...prestation, [field]: value } : prestation
      )
    );
  };

  const handleSave = async (prestation) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `${API_URL}/api/prestations/${prestation.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/merge-patch+json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            titre: prestation.titre,
            description: prestation.description,
            image: prestation.image,
            images: prestation.images,
          }),
        }
      );

      if (response.ok) {
        setMessage(
          `✅ Prestation "${prestation.titre}" mise à jour avec succès !`
        );
      } else {
        setMessage(
          `❌ Erreur lors de la mise à jour de "${prestation.titre}".`
        );
      }
    } catch (error) {
      setMessage("❌ Erreur de connexion à l’API.");
    }
  };

  const handleAdd = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${API_URL}/api/prestations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          titre: "Nouvelle prestation",
          description: "Description à compléter...",
          image: "",
        }),
      });

      if (response.ok) {
        await fetchPrestations();
        setMessage("✅ Nouvelle prestation ajoutée !");
      } else {
        setMessage("❌ Erreur lors de l’ajout d’une prestation.");
      }
    } catch (error) {
      setMessage("❌ Erreur de connexion à l’API.");
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    if (!window.confirm("Supprimer cette prestation ?")) return;

    try {
      const response = await fetch(`${API_URL}/api/prestations/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setPrestations((prev) => prev.filter((p) => p.id !== id));
        setMessage("✅ Prestation supprimée !");
      } else {
        setMessage("❌ Erreur lors de la suppression.");
      }
    } catch (error) {
      setMessage("❌ Erreur de connexion à l’API.");
    }
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="admin-title">Gestion des prestations</h2>
        <div>
          <button className="admin-btn" onClick={() => navigate("/admin")}>
            Retour
          </button>
          <button className="admin-btn ms-2" onClick={handleAdd}>
            ➕ Ajouter une prestation
          </button>
        </div>
      </div>

      {message && <div className="alert alert-info">{message}</div>}

      {prestations.length === 0 ? (
        <p>Aucune prestation trouvée.</p>
      ) : (
        prestations.map((prestation) => (
          <div key={prestation.id} className="admin-card mb-4">
            <h5 className="mb-3 fw-bold">{prestation.titre}</h5>

            <div className="mb-3">
              <label className="form-label">Titre</label>
              <input
                type="text"
                className="form-control"
                value={prestation.titre}
                onChange={(e) =>
                  handleChange(prestation.id, "titre", e.target.value)
                }
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                rows="3"
                value={prestation.description}
                onChange={(e) =>
                  handleChange(prestation.id, "description", e.target.value)
                }
              ></textarea>
            </div>

            <div className="mb-3">
              <label className="form-label">Image (URL)</label>
              <input
                type="text"
                className="form-control"
                value={prestation.image || ""}
                onChange={(e) =>
                  handleChange(prestation.id, "image", e.target.value)
                }
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Images des modales</label>

              {Array.isArray(prestation.images) &&
              prestation.images.length > 0 ? (
                prestation.images.map((img, index) => (
                  <div key={index} className="d-flex align-items-center mb-2">
                    <input
                      type="text"
                      className="form-control"
                      value={img}
                      onChange={(e) => {
                        const newImages = [...prestation.images];
                        newImages[index] = e.target.value.trim();
                        setPrestations((prev) =>
                          prev.map((p) =>
                            p.id === prestation.id
                              ? { ...p, images: newImages }
                              : p
                          )
                        );
                      }}
                    />
                    <img
                      src={img ? `/images/${img}` : ""}
                      alt=""
                      className="ms-2"
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                      }}
                    />
                    <button
                      className="btn btn-sm btn-danger ms-2"
                      onClick={() => {
                        const newImages = prestation.images.filter(
                          (_, i) => i !== index
                        );
                        setPrestations((prev) =>
                          prev.map((p) =>
                            p.id === prestation.id
                              ? { ...p, images: newImages }
                              : p
                          )
                        );
                      }}
                    >
                      ✕
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-muted">
                  Aucune image de modale pour cette prestation.
                </p>
              )}

              <button
                className="btn btn-sm btn-secondary mt-2"
                onClick={() => {
                  const newImages = [...(prestation.images || []), ""];
                  setPrestations((prev) =>
                    prev.map((p) =>
                      p.id === prestation.id ? { ...p, images: newImages } : p
                    )
                  );
                }}
              >
                ➕ Ajouter une image
              </button>
            </div>

            <button
              className="admin-btn"
              onClick={() => handleSave(prestation)}
            >
              Enregistrer
            </button>
            <button
              className="btn btn-danger ms-2"
              onClick={() => handleDelete(prestation.id)}
            >
              Supprimer
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminPrestation;
