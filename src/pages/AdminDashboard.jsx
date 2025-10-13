import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const email = localStorage.getItem("email");
  const userName =
    email === "tom@canopees.fr"
      ? "Tom"
      : email === "bob@canopees.fr"
      ? "Bob"
      : "Admin";

  //  Vérifie si le token est présent
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/connexion");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/connexion");
  };

  return (
    <>
      {/* Barre de navigation Admin  */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold text-warning" href="#">
            🛠️ Espace Admin - Canopées
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#adminNavbar"
            aria-controls="adminNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="adminNavbar"
          >
            <ul className="navbar-nav align-items-center">
              <li className="nav-item me-3">
                <button
                  className="btn btn-outline-warning btn-sm"
                  onClick={() => navigate("/")}
                >
                  Retour au site
                </button>
              </li>
              <li className="nav-item me-3">
                <span className="text-white small">
                  Bienvenue <strong>{userName}</strong>
                </span>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={handleLogout}
                >
                  Déconnexion
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* --- Contenu principal --- */}
      <div className="container my-5">
        <div className="bg-primary text-white p-4 rounded shadow">
          <h2 className="text-center text-warning mb-4">
            Tableau de bord administrateur
          </h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-body text-center">
                  <h5 className="card-title text-primary">Réalisations</h5>
                  <p>Modifier les textes et les photos des pages acceuil et qui sommes-nous</p>
                  <button
                    className="btn btn-warning w-100"
                    onClick={() => navigate("/admin/accueil/quisommes-nous")}
                  >
                    Gérer
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-body text-center">
                  <h5 className="card-title text-primary">Prestations</h5>
                  <p>Modifier les textes et les photos de la page prestations.</p>
                  <button
                    className="btn btn-warning w-100"
                    onClick={() => navigate("/admin/prestations")}
                  >
                    Gérer
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-body text-center">
                  <h5 className="card-title text-primary">Contact</h5>
                  <p>Mettre à jour les contacts et adresse de la société</p>
                  <button
                    className="btn btn-warning w-100"
                    onClick={() => navigate("/admin/contact")}
                  >
                    Gérer
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-body text-center">
                  <h5 className="card-title text-primary">Tarifs</h5>
                  <p>Mettre à jour les tarifs</p>
                  <button
                    className="btn btn-warning w-100"
                    onClick={() => navigate("/admin/tarifs")}
                  >
                    Gérer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
