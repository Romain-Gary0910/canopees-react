import React from "react";
import jardin9 from "../assets/images/jardin-9.webp";

const Tarifs = () => {
  return (
    <div className="container my-4">
      {/* Titre principal */}
      <div className="row">
        <div className="col-xl-12 col-lg-6">
          <h1 className="text-center bg-primary text-white p-2 rounded">
            Tarifs
          </h1>
        </div>
      </div>

      {/* Image + Boutons */}
      <div className="container-fluid px-0 my-4">
        <div className="position-relative">
          <img src={jardin9} className="w-100 my-2 rounded" alt="Jardin Canopées" />

          <h2 className="tarifs-title position-absolute top-0 start-50 translate-middle-x mt-3 d-none d-sm-block text-white text-center">
            Tarifs 2025
          </h2>

          <div className="position-absolute bottom-0 start-50 translate-middle-x w-100 px-3 pb-4">
            <div className="row row-cols-2 row-cols-lg-4 g-3 text-center justify-content-center">
              {[
                { label: "Conception et réalisation", target: "#modalConception" },
                { label: "Entretien d'espace vert", target: "#modalEntretien" },
                { label: "Taille des haies", target: "#modalTaille" },
                { label: "Élagage d'arbres", target: "#modalElagage" },
                { label: "Valorisation des déchets", target: "#modalValorisation" },
              ].map((item, index) => (
                <div className="col" key={index}>
                  <button
                    className="btn bg-secondary bg-opacity-75 text-white border-white w-100"
                    data-bs-toggle="modal"
                    data-bs-target={item.target}
                  >
                    {item.label}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modales Bootstrap */}
      <div>
        {/* Conception */}
        <Modal
          id="modalConception"
          title="Conception et réalisation"
          rows={[
            ["Aménagement complet de jardin (100 m²)", "2500 € TTC"],
            ["Pose de pelouse en rouleau (au m²)", "9 € / m² TTC"],
            ["Création de massifs avec paillage & bordure", "45 € / mètre linéaire"],
          ]}
        />

        {/* Entretien */}
        <Modal
          id="modalEntretien"
          title="Entretien d'espace vert"
          rows={[
            ["Tonte de pelouse (jusqu’à 500 m²)", "40 € TTC"],
            ["Désherbage manuel ou thermique", "35 € / heure"],
            ["Nettoyage de fin de saison", "À partir de 90 € TTC"],
          ]}
        />

        {/* Taille */}
        <Modal
          id="modalTaille"
          title="Taille des haies"
          rows={[
            ["Taille de haie basse jusqu'à 1,5 m", "6 € / mètre linéaire"],
            ["Taille de haie haute de 1,5 à 3 m", "10 € / mètre linéaire"],
            ["Enlèvement des déchets compris", "+2 € / mètre linéaire"],
          ]}
        />

        {/* Élagage */}
        <Modal
          id="modalElagage"
          title="Élagage d'arbres"
          rows={[
            ["Élagage arbre jusqu'à 6m (facile accès)", "120 € TTC / arbre"],
            ["Élagage arbre 6–10m", "180 € TTC / arbre"],
            ["Broyage des branches sur place", "30 € TTC"],
          ]}
        />

        {/* Valorisation */}
        <Modal
          id="modalValorisation"
          title="Valorisation des déchets"
          rows={[
            ["Broyage et paillage sur place", "50 € TTC / m³"],
            ["Évacuation vers centre de valorisation", "60 € TTC / m³"],
            ["Compostage intégré (avec conseil client)", "90 € TTC / intervention"],
          ]}
        />
      </div>
    </div>
  );
};

// Composant Modal réutilisable
const Modal = ({ id, title, rows }) => (
  <div className="modal fade" id={id} tabIndex="-1" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header bg-primary text-white">
          <h5 className="modal-title">{title}</h5>
          <button
            type="button"
            className="btn-close bg-warning"
            data-bs-dismiss="modal"
            aria-label="Fermer"
          ></button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Prestations</th>
              <th>Tarifs à partir de</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([prestation, prix], index) => (
              <tr key={index}>
                <td>{prestation}</td>
                <td>{prix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default Tarifs;