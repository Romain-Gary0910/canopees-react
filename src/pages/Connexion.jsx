import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Connexion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    // Simulation temporaire (avant la vraie API Symfony)
    setTimeout(() => {
      if (email === "admin@canopees.fr" && password === "admin123") {
        setMessage("✅ Connexion réussie !");
        localStorage.setItem("isAdminLoggedIn", "true");
        navigate("/admin");
      } else {
        setMessage("❌ Identifiants incorrects");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="container my-5 d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="col-md-6 bg-primary text-white rounded p-4 shadow">
        <h2 className="text-center text-warning mb-4">Connexion Administrateur</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Adresse e-mail</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="admin@canopees.fr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Mot de passe</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="6"
            />
          </div>

          <button
            type="submit"
            className="btn btn-warning w-100 mt-3"
            disabled={isLoading}
          >
            {isLoading ? "Connexion..." : "Se connecter"}
          </button>

          {message && (
            <p className={`mt-3 text-center fw-bold ${message.includes("✅") ? "text-success" : "text-danger"}`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Connexion;