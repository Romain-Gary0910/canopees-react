import jardin1 from "../assets/images/jardin-1.webp";
import jardin2 from "../assets/images/jardin-2.webp";
import elagueur1 from "../assets/images/elagueur-1.webp";
import jardin3 from "../assets/images/jardin-3.webp";
import jardin4 from "../assets/images/jardin-4.webp";
import jardin5 from "../assets/images/jardin-5.webp";
import jardin6 from "../assets/images/jardin-6.webp";
import jardin7 from "../assets/images/jardin-7.webp";
import jardin8 from "../assets/images/jardin-8.webp";


function Home() {
  return (
    <>
      <div className="container">
       <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <h1 className="carousel-title text-center">Bienvenue chez Canopées</h1>
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={jardin1} className="d-block w-100" alt="Jardin 1" />
            </div>
            <div className="carousel-item">
              <img src={jardin2} className="d-block w-100" alt="Jardin 2" />
            </div>
            <div className="carousel-item">
              <img src={elagueur1} className="d-block w-100" alt="Élagueur 1" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Section Présentation de l'entreprise */}
      <div className="container my-5">
        <div className="row">
          {/* Colonne gauche */}
          <div className="col-lg-6 mb-4">
            <h2 className="mb-3 bg-primary text-white p-2 rounded">
              Présentation de l’entreprise
            </h2>
            <p style={{ textAlign: "justify" }}>
              <strong>Canopées</strong>, fondée en 2020 par Bob et Tom, deux
              passionnés de nature, est une entreprise spécialisée dans la
              création et l’entretien d’espaces verts. Basée sur des valeurs de
              respect de l’environnement et de savoir-faire artisanal, Canopées
              accompagne les particuliers, les professionnels et les
              collectivités dans l’aménagement durable et esthétique de leurs
              espaces extérieurs. De la conception à l’entretien, en passant par
              l’élagage et la valorisation des déchets verts, chaque
              intervention est pensée pour allier harmonie paysagère et
              responsabilité écologique.
            </p>
          </div>

          {/* Colonne droite */}
          <div className="col-lg-6">
            <h2 className="mb-3 bg-primary text-white p-2 rounded">
              Informations sur le public visé
            </h2>
            <p style={{ textAlign: "justify" }}>
              Canopées s’adresse à une clientèle variée :
              <br />
              <strong>🌳 Particuliers</strong>, soucieux d’avoir un jardin
              soigné, esthétique et facile à entretenir. <br />
              <strong>🌳 Professionnels</strong>, qui souhaitent valoriser leurs
              espaces extérieurs pour renforcer leur image ou le bien-être au
              travail. <br />
              <strong>🌳 Collectivités locales</strong>, pour l’aménagement, la
              gestion et la préservation des espaces verts publics. <br />
              Tous partagent un même besoin : un service fiable, respectueux de
              l’environnement, et réalisé avec passion par une équipe compétente.
            </p>
          </div>
        </div>
      </div>
      {/* Section Réalisations */}
      <div className="container my-5">
        <h2 className="mb-4 bg-primary text-white p-2 rounded">Nos dernières réalisations</h2>
        <div id="realisationCarousel" className="carousel slide mb-3" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={jardin3} className="img-fluid rounded object-fit-cover w-100" alt="Réalisation 1" />
            </div>
            <div className="carousel-item">
              <img src={jardin4} className="img-fluid rounded object-fit-cover w-100" alt="Réalisation 2" />
            </div>
            <div className="carousel-item">
              <img src={jardin5} className="img-fluid rounded object-fit-cover w-100" alt="Réalisation 3" />
            </div>
            <div className="carousel-item">
              <img src={jardin6} className="img-fluid rounded object-fit-cover w-100" alt="Réalisation 4" />
            </div>
            <div className="carousel-item">
              <img src={jardin7} className="img-fluid rounded object-fit-cover w-100" alt="Réalisation 5" />
            </div>
            <div className="carousel-item">
              <img src={jardin8} className="img-fluid rounded object-fit-cover w-100" alt="Réalisation 6" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#realisationCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#realisationCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* Miniatures (thumbnails) */}
        <div className="d-flex justify-content-center gap-2">
          <button type="button" data-bs-target="#realisationCarousel" data-bs-slide-to="0" className="border-0 bg-transparent p-0">
            <img src={jardin3} alt="Vignette 1" className="img-fluid rounded" style={{ width: "80px", height: "60px", objectFit: "cover" }} />
          </button>
          <button type="button" data-bs-target="#realisationCarousel" data-bs-slide-to="1" className="border-0 bg-transparent p-0">
            <img src={jardin4} alt="Vignette 2" className="img-fluid rounded" style={{ width: "80px", height: "60px", objectFit: "cover" }} />
          </button>
          <button type="button" data-bs-target="#realisationCarousel" data-bs-slide-to="2" className="border-0 bg-transparent p-0">
            <img src={jardin5} alt="Vignette 3" className="img-fluid rounded" style={{ width: "80px", height: "60px", objectFit: "cover" }} />
          </button>
          <button type="button" data-bs-target="#realisationCarousel" data-bs-slide-to="3" className="border-0 bg-transparent p-0">
            <img src={jardin6} alt="Vignette 4" className="img-fluid rounded" style={{ width: "80px", height: "60px", objectFit: "cover" }} />
          </button>
          <button type="button" data-bs-target="#realisationCarousel" data-bs-slide-to="4" className="border-0 bg-transparent p-0">
            <img src={jardin7} alt="Vignette 5" className="img-fluid rounded" style={{ width: "80px", height: "60px", objectFit: "cover" }} />
          </button>
          <button type="button" data-bs-target="#realisationCarousel" data-bs-slide-to="5" className="border-0 bg-transparent p-0">
            <img src={jardin8} alt="Vignette 6" className="img-fluid rounded" style={{ width: "80px", height: "60px", objectFit: "cover" }} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;