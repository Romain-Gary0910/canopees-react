import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../config/api";

const Footer = () => {
  const [contact, setContact] = useState({
    adresse: "",
    telephone: "",
    email: "",
  });

  useEffect(() => {
    fetch(`${API_URL}/api/contact_infos/1`)
      .then((res) => res.json())
      .then((data) => setContact(data))
      .catch((err) =>
        console.error("Erreur de chargement des infos de contact :", err)
      );
  }, []);

  return (
    <footer className="bg-success text-white py-1 mt-5 small">
      <div className="container">
        <div className="row mb-1 d-flex flex-row flex-wrap justify-content-between">
          {/* Coordonnées */}
          <div className="col-12 col-sm-6 mb-3 mb-md-0">
            <h5 className="text-uppercase">Canopées - Menton</h5>
            <p className="mb-1">📍 {contact.adresse}</p>
            <p className="mb-1">
              📞{" "}
              <a
                href={`tel:${contact.telephone.replace(/\s+/g, "")}`}
                className="text-warning text-decoration-none"
              >
                {contact.telephone}
              </a>
            </p>
            <p className="mb-1">
              ✉️{" "}
              <a
                href={`mailto:${contact.email}`}
                className="text-warning text-decoration-none"
              >
                {contact.email}
              </a>
            </p>
          </div>

          {/* Liens légaux */}
          <div className="col-12 col-sm-6 pe-5 text-sm-end">
            <h5 className="text-uppercase">Liens légaux</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/cgu"
                  className="text-warning text-decoration-underline"
                >
                  Conditions Générales d’Utilisation
                </Link>
              </li>
              <li>
                <Link
                  to="/cgv"
                  className="text-warning text-decoration-underline"
                >
                  Conditions Générales de Vente
                </Link>
              </li>
              <li>
                <Link
                  to="/mentions-legales"
                  className="text-warning text-decoration-underline"
                >
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary" />
        <div className="text-center small mt-1">
          © 2025 Canopées — Tous droits réservés ·{" "}
          <Link
            to="/connexion"
            className="text-warning text-decoration-none opacity-75"
          >
            Espace administrateur
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
