import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  //  Vérifie si l'admin est connecté 
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAdminLoggedIn");
    if (!isLoggedIn) {
      navigate("/connexion");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
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

          <div className="collapse navbar-collapse justify-content-end">
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
                  Connecté en tant qu’<strong>Admin</strong>
                </span>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={handleLogout}
                >
                  🚪 Déconnexion
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
                  <h5 className="card-title text-primary">💰 Tarifs</h5>
                  <p>Modifier les tarifs affichés sur le site.</p>
                  <button className="btn btn-warning w-100">Gérer</button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-body text-center">
                  <h5 className="card-title text-primary">🖼️ Images</h5>
                  <p>Mettre à jour les photos du site.</p>
                  <button className="btn btn-warning w-100">Gérer</button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-body text-center">
                  <h5 className="card-title text-primary">📝 Textes</h5>
                  <p>Modifier les descriptions et présentations.</p>
                  <button className="btn btn-warning w-100">Gérer</button>
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