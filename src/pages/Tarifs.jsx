import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

const Tarifs = () => {
  const [tarifs, setTarifs] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);
  const [background, setBackground] = useState("jardin9.webp"); // image de fond par défaut

useEffect(() => {
    fetch("http://127.0.0.1:8000/api/tarifs")
      .then((res) => {
        if (!res.ok) throw new Error("Erreur lors du chargement des tarifs");
        return res.json();
      })
      .then((data) => {
        const tarifsData = data["member"] || [];
        setTarifs(tarifsData);
        const firstImage = tarifsData.find((t) => t.image)?.image;
        if (firstImage) setBackground(firstImage);
      })
      .catch((err) => console.error("❌ Erreur de fetch :", err));
  }, []);

  // Regrouper les tarifs par catégorie
  const categories = tarifs.reduce((acc, t) => {
    if (!acc[t.categorie]) acc[t.categorie] = [];
    acc[t.categorie].push(t);
    return acc;
  }, {});

  return (
    <>
      {/* Title section */}
      <section className="container py-5">
          <h1 className="text-center mb-3 bg-primary text-white p-2 rounded">Tarifs</h1>
  
      </section>
      {/* White divider */}
      <div style={{ backgroundColor: "#fff", height: "30px" }}></div>
      {/* Main background section */}
      <div
        className="tarifs-page"
        style={{
          backgroundImage: `url(/images/${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            minHeight: "100vh",
            padding: "50px 20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <div className="container mt-5 p-4 rounded">
          {/* === Boutons des catégories === */}
          <div className="text-center">
            <h2
              className="text-white text-shadow"
              style={{
                textShadow: "3px 2px 4px rgba(0, 0, 0, 0.8), 0 4px 16px #333",
                color: "#fff",
                fontSize: "2.8rem",
                fontWeight: "bold",
              }}
            >
              Tarifs 2025
            </h2>
            <div className="d-flex flex-wrap justify-content-center gap-4 mt-5 mt-md-7">
              {Object.keys(categories).map((cat, index) => (
                <button
                  key={index}
                  className="btn bg-secondary bg-opacity-75 text-white border-white px-4 py-2"
                  onClick={() => setSelectedCat(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
        </div>
        {/* === Modale affichant la catégorie sélectionnée === */}
        <Modal
          show={!!selectedCat}
          onHide={() => setSelectedCat(null)}
          centered
          size="lg"
        >
          {selectedCat && (
            <div className="p-4">
              <h4 className="text-success mb-4 text-center fw-bold">
                {selectedCat}
              </h4>
              <table className="table mb-0">
                <thead>
                  <tr className="table-light">
                    <th>Prestations</th>
                    <th>Tarifs à partir de</th>
                  </tr>
                </thead>
                <tbody>
                  {categories[selectedCat].map((t, index) => (
                    <tr key={index}>
                      <td>{t.service}</td>
                      <td>
                        {t.prix} {t.unite ? t.unite : ""}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-end mt-4">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => setSelectedCat(null)}
                >
                  Fermer
                </button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </>
  );
};

export default Tarifs;
