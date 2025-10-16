import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPrestation = () => {
  const navigate = useNavigate();
  const [prestations, setPrestations] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/connexion");
      return;
    }
    const fetchPrestations = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/prestations", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des prestations.");
        }
        const data = await response.json();
        setPrestations(data.member || data["hydra:member"] || []);
      } catch (error) {
        setMessage("❌ Erreur lors du chargement des prestations.");
      }
    };
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
        `http://127.0.0.1:8000/api/prestations/${prestation.id}`,
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
          }),
        }
      );

      if (response.ok) {
        setMessage(`✅ Prestation "${prestation.titre}" mise à jour avec succès !`);
      } else {
        setMessage(`❌ Erreur lors de la mise à jour de "${prestation.titre}".`);
      }
    } catch (error) {
      setMessage("❌ Erreur de connexion à l’API.");
    }
  };

  const handleAdd = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://127.0.0.1:8000/api/prestations", {
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
        const newPrestation = await response.json();
        setPrestations((prev) => [...prev, newPrestation]);
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
      const response = await fetch(
        `http://127.0.0.1:8000/api/prestations/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

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
        <h2 className="text-primary">Gestion des prestations</h2>
        <div>
          <button className="btn btn-secondary" onClick={() => navigate("/admin")}>
          Retour
          </button>
          <button className="btn btn-success ms-2" onClick={handleAdd}>
            ➕ Ajouter une prestation
          </button>
        </div>
      </div>

      {message && <div className="alert alert-info">{message}</div>}

      {prestations.length === 0 ? (
        <p>Aucune prestation trouvée.</p>
      ) : (
        prestations.map((prestation) => (
          <div
            key={prestation.id}
            className="border rounded p-4 mb-4 shadow-sm"
            style={{
              backgroundColor: "#f5f0ff",
              borderColor: "#d1b3ff",
              borderStyle: "solid",
              borderWidth: "1px",
            }}
          >
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

            <button
              style={{
                backgroundColor: "#6f42c1",
                border: "none",
                color: "#fff",
                padding: "8px 16px",
                borderRadius: "5px",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff8800")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#6f42c1")}
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