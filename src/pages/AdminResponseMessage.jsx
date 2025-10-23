import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "../assets/css/adminTheme.css";
import { API_URL } from "../config/api";


const AdminResponseMessage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [messageData, setMessageData] = useState(null);
  const [reponse, setReponse] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/connexion");
    } else {
      fetch(`${API_URL}/api/messages/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/ld+json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setMessageData(data);
          setReponse(data.reponse || "");
        })
        .catch(() => setMessage("❌ Erreur lors du chargement du message."));
    }
  }, [id, navigate]);

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="admin-title">Réponse au message</h2>
        <button className="admin-btn" onClick={() => navigate("/admin/messages")}>
          Retour
        </button>
      </div>

      {message && <div className="alert alert-warning text-center">{message}</div>}

      {messageData ? (
        <div className="card p-4 shadow-sm">
          <p><strong>De :</strong> {messageData.nom} {messageData.prenom}</p>
          <p><strong>Email :</strong> {messageData.email}</p>
          <p><strong>Objet :</strong> {messageData.objet}</p>
          <p><strong>Message :</strong> {messageData.message}</p>

          <label htmlFor="reponse" className="form-label mt-3">
            Votre réponse :
          </label>
          <textarea
            id="reponse"
            className="form-control"
            rows="4"
            value={reponse}
            onChange={(e) => setReponse(e.target.value)}
          />

          <button
            className="admin-btn mt-3"
            onClick={() => {
              const token = localStorage.getItem("token");
              fetch(`${API_URL}/api/messages/${id}`, {
                method: "PATCH",
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/merge-patch+json",
                  Accept: "application/ld+json",
                },
                body: JSON.stringify({ reponse: reponse, traite: true }),
              })
                .then((res) => res.json())
                .then(() => setMessage("✅ Réponse enregistrée avec succès."))
                .catch(() => setMessage("❌ Erreur lors de l'envoi de la réponse."));
            }}
          >
            Envoyer la réponse
          </button>

        </div>
      ) : (
        <p className="text-center mt-4">Chargement du message...</p>
      )}
    </div>
  );
};

export default AdminResponseMessage;
