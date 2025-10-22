import React, { useState, useEffect } from "react";
import { Carousel, Container, Row, Col, Image } from "react-bootstrap";
import { API_URL } from "../config/api";

const Home = () => {
  const [accueil, setAccueil] = useState(null);
  const [otherRealisations, setOtherRealisations] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(`${API_URL}/api/realisations`, {
        cache: "no-store",
      });
      const data = await response.json();
      const realisationsArray = data["member"] || data["hydra:member"] || [];

      const accueilImages = realisationsArray.filter(
        (item) => item.images && item.images.startsWith("accueil")
      );
      setAccueil(accueilImages);
      setOtherRealisations(
        realisationsArray.filter(
          (item) => !item.images || !item.images.startsWith("accueil")
        )
      );
    } catch (error) {
      console.error("Erreur lors de la récupération des réalisations :", error);
    }
  };

  useEffect(() => {
    fetchData();

    window.addEventListener("focus", fetchData);
    return () => window.removeEventListener("focus", fetchData);
  }, []);

  const handleSelect = (selectedIndex) => setActiveIndex(selectedIndex);
  const handleThumbnailClick = (index) => setActiveIndex(index);

  return (
    <Container className="mt-4">
      {/* === Carrousel principal === */}
      <Row className="mb-4">
        <Col>
          {accueil && accueil.length > 0 ? (
            <Carousel>
              {accueil.map((item) => (
                <Carousel.Item key={item.id}>
                  <img
                    className="d-block w-100"
                    src={`/images/${item.images}`}
                    alt={item.titre}
                    style={{ maxHeight: "400px", objectFit: "cover" }}
                  />
                  <Carousel.Caption>
                    <h1>{item.titre}</h1>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <p>Chargement...</p>
          )}
        </Col>
      </Row>

      {/* === Présentation + Public visé === */}
      <Row className="mb-5">
        <Col md={6}>
          <h2 className="bg-primary text-white p-2 rounded">
            Présentation de l’entreprise
          </h2>
          <p style={{ textAlign: "justify" }}>
            <strong>Canopées</strong> , fondée en 2020 par <strong>Bob </strong>et<strong>Tom</strong>, deux
            passionnés de nature, est une entreprise spécialisée dans la
            création et l’entretien d’espaces verts.Basée sur des valeurs de
            respect de l’environnement et de savoir-faire artisanal, Canopées
            accompagne les particuliers, les professionnels et les collectivités
            dans l’aménagement durable et esthétique de leurs espaces
            extérieurs.De la conception à l’entretien, en passant par l’élagage
            et la valorisation des déchets verts, chaque intervention est pensée
            pour allier harmonie paysagère et responsabilité écologique.
          </p>
        </Col>
        <Col md={6}>
          <h2 className="bg-primary text-white p-2 rounded">
            Informations sur le public visé
          </h2>
          <p style={{ textAlign: "justify" }}>
            <strong>Canopées</strong> s’adresse à une clientèle variée :<br />
            🌳<strong>Particuliers</strong>, soucieux d’avoir un jardin soigné, esthétique et
            facile à entretenir.<br />
            🌳<strong>Professionnels</strong>, qui souhaitent valoriser leurs
            espaces extérieurs pour renforcer leur image ou le bien-être au
            travail.<br />
            🌳<strong>Collectivités locales</strong>, pour l’aménagement, la gestion et la
            préservation des espaces verts publics. Tous partagent un même
            besoin : un service fiable, respectueux de l’environnement, et
            réalisé avec passion par une équipe compétente.
          </p>
        </Col>
      </Row>

      {/* === Slider de fin === */}
      <Row>
        <Col>
          <h2 className="mb-3 bg-primary text-white p-2 rounded">Nos dernières réalisations</h2>
          {otherRealisations.length > 1 ? (
            <>
              <Carousel
                activeIndex={activeIndex}
                onSelect={handleSelect}
                interval={null}
              >
                {otherRealisations.map((item) => (
                  <Carousel.Item key={item.id}>
                    <img
                      className="d-block w-100"
                      src={`/images/${item.images}`}
                      alt={item.titre}
                      style={{ maxHeight: "400px", objectFit: "cover" }}
                    />
                     {/* Si besoin d'ajouter un petit titre sur les photos */}
                    <Carousel.Caption>
                      <h5>{item.titre}</h5>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>

              <Row className="mt-3 justify-content-center">
                {otherRealisations.map((item, index) => (
                  <Col
                    key={item.id}
                    xs={3}
                    sm={2}
                    md={1}
                    className="px-1"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <Image
                      src={`/images/${item.images}`}
                      alt={item.titre}
                      thumbnail
                      className={index === activeIndex ? "border-primary" : ""}
                      style={{
                        objectFit: "cover",
                        height: "60px",
                        width: "100%",
                      }}
                    />
                  </Col>
                ))}
              </Row>
            </>
          ) : (
            <>
              <Carousel
                activeIndex={activeIndex}
                onSelect={handleSelect}
                interval={null}
              >
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <Carousel.Item key={i}>
                    <img
                      className="d-block w-100"
                      src={`/images/jardin${i === 0 ? "" : "-" + i}.webp`}
                      alt={`Jardin ${i}`}
                      style={{ maxHeight: "400px", objectFit: "cover" }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <Row className="mt-3 justify-content-center">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <Col
                    key={i}
                    xs={3}
                    sm={2}
                    md={1}
                    className="px-1"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleThumbnailClick(i)}
                  >
                    <Image
                      src={`/images/jardin${i === 0 ? "" : "-" + i}.webp`}
                      alt={`Jardin ${i}`}
                      thumbnail
                      className={i === activeIndex ? "border-primary" : ""}
                      style={{
                        objectFit: "cover",
                        height: "60px",
                        width: "100%",
                      }}
                    />
                  </Col>
                ))}
              </Row>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
