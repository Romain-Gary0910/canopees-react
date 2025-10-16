import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

const Prestations = () => {
  const [prestations, setPrestations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/prestations")
      .then((res) => res.json())
      .then((data) => {
        setPrestations(data.member || data["hydra:member"] || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Erreur lors du chargement des prestations.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center my-5">Chargement des prestations...</p>;
  if (error) return <p className="text-danger text-center my-5">{error}</p>;

  const getGalleryImages = (imageName) => {
    if (!imageName) return [];
    const baseName = imageName.replace(/\.\w+$/, ""); // retire .webp ou autre extension
    return Array.from({ length: 5 }, (_, i) => `/images/${baseName}-${i + 1}.webp`);
  };

  return (
    <section className="container py-5">
      <h1 className="text-center mb-3 bg-primary text-white p-2 rounded">Nos Prestations</h1>

      <div className="row g-4">
        {prestations.map((prestation) => (
          <div key={prestation.id} className="col-12 col-md-6">
            <div
              className="card border-0 shadow prestation-card position-relative overflow-hidden"
              onClick={() => setSelected(prestation)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={`/images/${prestation.image}`}
                className="card-img"
                alt={prestation.titre}
                style={{
                  height: "300px",
                  width: "100%",
                  objectFit: "cover",
                  transition: "transform 0.4s ease",
                }}
              />
              <div className="overlay d-flex flex-column justify-content-center align-items-center text-center">
                <h3 className="text-white fw-bold mb-3" style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.5)" }}>
                  {prestation.titre}
                </h3>
                <button className="btn btn-sm btn-prestation" style={{ color: "#fff" }}>Voir plus</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modale Galerie */}
      <Modal show={!!selected} onHide={() => setSelected(null)} centered size="lg">
        {selected && (
          <div className="p-4">
            <h4 className="text-success mb-4 text-center">{selected.titre}</h4>
            <div className="row g-3">
              {getGalleryImages(selected.image).map((img, index) => (
                <div key={index} className="col-6 col-md-4">
                  <img
                    src={img}
                    alt={`${selected.titre} ${index + 1}`}
                    className="img-fluid rounded shadow-sm"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                </div>
              ))}
            </div>
            <div className="text-end mt-4">
              <button className="btn btn-outline-secondary" onClick={() => setSelected(null)}>
                Fermer
              </button>
            </div>
          </div>
        )}
      </Modal>

      
    </section>
  );
};

export default Prestations;