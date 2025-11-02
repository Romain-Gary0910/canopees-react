import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/adminTheme.css";
import { API_URL } from "../config/api";

const AdminMessage = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/connexion");
    } else {
      fetch(`${API_URL}/api/messages`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/ld+json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Réponse API messages :", data);
          setMessages(data.member || []); // API Platform v3, hydra:member était pour API Platfrom v2
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Erreur lors du chargement des messages :", err);
          setMessage("❌ Erreur lors du chargement des messages.");
          setIsLoading(false);
        });
    }
  }, [navigate]);

  const handleDelete = (id) => {
    const token = localStorage.getItem("token");
    if (window.confirm("Voulez-vous vraiment supprimer ce message ?")) {
      fetch(`${API_URL}/api/messages/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (res.ok) {
            setMessages((prev) => prev.filter((msg) => msg.id !== id));
          } else {
            alert("Erreur lors de la suppression du message.");
          }
        })
        .catch(() => alert("Erreur de connexion à l’API."));
    }
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="admin-title">Administration – Messages reçus</h2>
        <button
          type="button"
          className="admin-btn"
          onClick={() => navigate("/admin")}
        >
          Retour
        </button>
      </div>

      {message && (
        <div className="alert alert-warning text-center" role="alert">
          {message}
        </div>
      )}

      {isLoading ? (
        <p className="text-center mt-4">Chargement des messages...</p>
      ) : messages.length === 0 ? (
        <p className="text-center mt-4">Aucun message reçu pour le moment.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
                <th>Téléphone</th>
                <th>Objet</th>
                <th>Message</th>
                <th>Réponse</th>
                <th>Action</th>
                <th>Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr key={msg.id}>
                  <td>{msg.nom}</td>
                  <td>{msg.prenom}</td>
                  <td>{msg.email}</td>
                  <td>{msg.telephone}</td>
                  <td>{msg.objet}</td>
                  <td>{msg.message}</td>
                  <td style={{ textAlign: "center" }}>
                    {msg.reponse ? (
                      <span className="badge bg-success p-3">Traité ✅</span>
                    ) : (
                      <span className="badge bg-danger p-3">Non traité</span>
                    )}
                  </td>
                  <td>
                    <button
                      type="button"
                      className="admin-btn admin-btn-small"
                      onClick={() => navigate(`/admin/messages/${msg.id}`)}
                    >
                      Répondre
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger ms-2"
                      onClick={() => handleDelete(msg.id)}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminMessage;
