import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/adminTheme.css";

const AdminTarif = () => {
  const [tarifs, setTarifs] = useState([]);
  const [message, setMessage] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const navigate = useNavigate();

  // Vérifie la présence du token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/connexion");
      return;
    } else {
      fetch("http://127.0.0.1:8000/api/tarifs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const memberTarifs = data["member"] || [];
          setTarifs(memberTarifs);
          if (memberTarifs.length > 0 && memberTarifs[0].image) {
            setBackgroundImage(memberTarifs[0].image);
          }
        })
        .catch(() =>
          setMessage("Erreur lors du chargement des informations.")
        );
    }
  }, [navigate]);

  const handleChange = (idx, field, value) => {
    setTarifs((prev) =>
      prev.map((item, i) => (i === idx ? { ...item, [field]: value } : item))
    );
  };

  const handleSubmit = async (e, idx, id) => {
    e.preventDefault();
    const tarif = tarifs[idx];
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/tarifs/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/merge-patch+json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            service: tarif.service,
            prix: tarif.prix,
            unite: tarif.unite,
            categorie: tarif.categorie,
            image: tarif.image,
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

  const handleBackgroundUpdate = async () => {
    if (tarifs.length === 0) return;
    const token = localStorage.getItem("token");
    const firstTarifId = tarifs[0].id;
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/tarifs/${firstTarifId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/merge-patch+json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            image: backgroundImage,
          }),
        }
      );
      if (response.ok) {
        setMessage("✅ Image de fond mise à jour !");
        setTimeout(() => setMessage(""), 2000);
        setTarifs((prev) =>
          prev.map((item, i) =>
            i === 0 ? { ...item, image: backgroundImage } : item
          )
        );
      } else {
        const errorText = await response.text();
        console.error("Erreur lors de la mise à jour de l'image :", response.status, errorText);
        setMessage("❌ Erreur lors de la mise à jour de l'image !");
        setTimeout(() => setMessage(""), 3000);
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'image :", error);
    }
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary">Administration – Tarifs</h2>
        <button type="button" className="btn btn-secondary" onClick={() => navigate("/admin")}>
          Retour
        </button>
      </div>

      {message && (
        <div className="alert alert-info text-center" role="alert">
          {message}
        </div>
      )}

      {/* Background Image Section */}
      <div className="mb-4 admin-card">
        <h5 className="text-primary mb-3">Image de fond globale</h5>
        <div className="mb-3">
          <label className="form-label fw-bold">Image</label>
          <input
            type="text"
            className="form-control"
            value={backgroundImage}
            onChange={(e) => setBackgroundImage(e.target.value)}
          />
        </div>
        {backgroundImage && (
          <img
            src={`/images/${backgroundImage}`}
            alt="Image de fond"
            className="img-fluid rounded mb-3"
            style={{ maxHeight: "150px", objectFit: "cover" }}
          />
        )}
        <button className="admin-btn ms-5" onClick={handleBackgroundUpdate}>
          Mettre à jour
        </button>
      </div>

      <div className="row">
        {tarifs.length > 0 ? (
          tarifs.map((tarif, idx) => (
            <div key={tarif.id} className="col-md-6 mb-4">
              <form
                onSubmit={(e) => handleSubmit(e, idx, tarif.id)}
                className="admin-card"
              >
                <h5 className="text-primary mb-3">
                  {tarif.categorie || "Catégorie non définie"}
                </h5>

                <div className="mb-3">
                  <label className="form-label fw-bold">Service</label>
                  <input
                    type="text"
                    className="form-control"
                    value={tarif.service || ""}
                    onChange={(e) =>
                      handleChange(idx, "service", e.target.value)
                    }
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Prix</label>
                  <input
                    type="text"
                    className="form-control"
                    value={tarif.prix || ""}
                    onChange={(e) =>
                      handleChange(idx, "prix", e.target.value)
                    }
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Unité</label>
                  <input
                    type="text"
                    className="form-control"
                    value={tarif.unite || ""}
                    onChange={(e) =>
                      handleChange(idx, "unite", e.target.value)
                    }
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Catégorie</label>
                  <input
                    type="text"
                    className="form-control"
                    value={tarif.categorie || ""}
                    onChange={(e) =>
                      handleChange(idx, "categorie", e.target.value)
                    }
                  />
                </div>

                <button type="submit" className="admin-btn w-100">
                  Enregistrer les modifications
                </button>
              </form>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">Aucun tarif trouvé.</p>
        )}
      </div>
    </div>
  );
};

export default AdminTarif;