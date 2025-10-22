import React, { useEffect, useState } from "react";
import { API_URL } from "../config/api";

function About() {
  const [presentations, setPresentations] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/presentations`)
      .then((response) => response.json())
      .then((data) => setPresentations(data.member || data["hydra:member"]))
      .catch((error) => console.error("Erreur lors du chargement :", error));
  }, []);

  if (!presentations) {
    return <div className="container my-5 text-center">Chargement...</div>;
  }

  return (
    <div className="container my-5">
      {/* Titre principal */}
      <div className="row">
        <div className="col-xl-12 col-lg-6">
          <h1 className="text-center mb-3 bg-primary text-white p-2 rounded">Qui sommes-nous</h1>
        </div>
      </div>

      {/* Citation */}
      <blockquote className="blockquote text-center mt-4">
        <p className="mb-5 fst-italic">
          « Depuis 2020, nous mettons notre passion et notre savoir-faire au
          service des plantes et des espaces verts. »
        </p>
      </blockquote>

      {/* Présentation Bob */}
      <div className="bg-primary text-white mb-5 my-4 mx-3 rounded-3 p-3">
        <div className="row align-items-center">
          <div className="col-md-6 col-sm-6">
            <img
              src={`/images/${presentations[0].image}`}
              className="img-fluid rounded w-100 object-fit-cover"
              alt={presentations[0].titre}
            />
          </div>
          <div className="col-md-6 col-sm-6">
            <h3
              className="mb-3"
              style={{
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.6)",
              }}
            >
              {presentations[0].titre}
            </h3>
            <p>{presentations[0].description}</p>
          </div>
        </div>
      </div>

      {/* Présentation Tom */}
      <div className="bg-primary text-white my-4 mx-3 rounded-3 p-3">
        <div className="row align-items-center">
          <div className="col-md-6 col-sm-6 order-md-1 order-2">
            <h3
              className="mb-3"
              style={{
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.6)",
              }}
            >
              {presentations[1].titre}
            </h3>
            <p>{presentations[1].description}</p>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-2 order-md-2 order-1">
            <img
              src={`/images/${presentations[1].image}`}
              className="img-fluid rounded w-100 object-fit-cover"
              alt={presentations[1].titre}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;