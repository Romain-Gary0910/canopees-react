import c2 from "../assets/images/creation-2.webp";
import c3 from "../assets/images/creation-3.webp";
import c4 from "../assets/images/creation-4.webp";
import c5 from "../assets/images/creation-5.webp";
import c6 from "../assets/images/creation-6.webp";
import c7 from "../assets/images/creation-7.webp";

import e1 from "../assets/images/entretien-1.webp";
import e2 from "../assets/images/entretien-2.webp";
import e4 from "../assets/images/entretien-4.webp";
import e5 from "../assets/images/entretien-5.webp";
import e7 from "../assets/images/entretien-7.webp";
import e8 from "../assets/images/entretien-8.webp";

import t1 from "../assets/images/taille-haie-1.webp";
import t2 from "../assets/images/taille-haie-2.webp";
import t3 from "../assets/images/taille-haie-3.webp";
import t4 from "../assets/images/taille-haie-4.webp";
import t5 from "../assets/images/taille-haie-5.webp";
import t6 from "../assets/images/taille-haie-6.webp";

import el1 from "../assets/images/elagage-1.webp";
import el2 from "../assets/images/elagueur-2.webp";
import el3 from "../assets/images/elagage-2.webp";
import el4 from "../assets/images/elagage-3.webp";
import el5 from "../assets/images/elagage-5.webp";
import elMain from "../assets/images/elagage.webp";

import v1 from "../assets/images/valorisation-1.webp";
import v2 from "../assets/images/valorisation-2.webp";
import v3 from "../assets/images/valorisation-3.webp";
import v4 from "../assets/images/valorisation-4.webp";

import creationMain from "../assets/images/creation-espace-vert.webp";
import entretienMain from "../assets/images/entretien-3.webp";
import tailleMain from "../assets/images/taille-haie.webp";
import broyeurMain from "../assets/images/broyeur.webp";

function Prestations() {
  return (
    <div className="container my-5">
      {/* Titre */}
      <div className="row">
        <div className="col-xl-12 col-lg-6">
          <h1 className="text-center bg-primary text-white p-2 rounded">
            Nos Prestations
          </h1>
        </div>
      </div>

      <section className="border-wrapper border-top pb-5 mb-5 mt-4">
        <div className="container">
          <div className="row g-3 row-cols-1 row-cols-lg-2">

            {/* Création d'espace vert */}
            <div>
              <div className="position-relative bg-primary rounded-3 shadow overflow-hidden" style={{ height: 350 }}>
                <img src={creationMain} alt="terrasse avec un jardin fleuri" className="w-100 h-100 object-fit-cover" />
                <h2 className="section-title position-absolute top-0 start-0 m-3 text-white bg-dark bg-opacity-50 px-3 py-1 rounded">
                  Création d'espace vert
                </h2>
                <button
                  type="button"
                  className="btn btn-outline-light text-white bg-secondary bg-opacity-75 position-absolute bottom-0 start-50 translate-middle-x mb-3 border-white"
                  data-bs-toggle="modal"
                  data-bs-target="#modalCreation"
                >
                  Voir plus
                </button>
              </div>
            </div>

            {/* Entretien d'espace vert */}
            <div>
              <div className="position-relative bg-primary rounded-3 shadow overflow-hidden" style={{ height: 350 }}>
                <img src={entretienMain} alt="tracteur tondeuse" className="w-100 h-100 object-fit-cover" />
                <h2 className="section-title position-absolute top-0 start-0 m-3 text-white bg-dark bg-opacity-50 px-3 py-1 rounded">
                  Entretien d'espace vert
                </h2>
                <button
                  type="button"
                  className="btn btn-outline-light text-white bg-secondary bg-opacity-75 position-absolute bottom-0 start-50 translate-middle-x mb-3 border-white"
                  data-bs-toggle="modal"
                  data-bs-target="#modalEntretien"
                >
                  Voir plus
                </button>
              </div>
            </div>

            {/* Taille de haies */}
            <div>
              <div className="position-relative bg-primary rounded-3 shadow overflow-hidden" style={{ height: 350 }}>
                <img src={tailleMain} alt="taille de haie" className="w-100 h-100 object-fit-cover" />
                <h2 className="section-title position-absolute top-0 start-0 m-3 text-white bg-dark bg-opacity-50 px-3 py-1 rounded">
                  Taille de haies
                </h2>
                <button
                  type="button"
                  className="btn btn-outline-light text-white bg-secondary bg-opacity-75 position-absolute bottom-0 start-50 translate-middle-x mb-3 border-white"
                  data-bs-toggle="modal"
                  data-bs-target="#modalTaille"
                >
                  Voir plus
                </button>
              </div>
            </div>

            {/* Élagage d'arbres */}
            <div>
              <div className="position-relative bg-primary rounded-3 shadow overflow-hidden" style={{ height: 350 }}>
                <img src={elMain} alt="élagage d'un palmier" className="w-100 h-100 object-fit-cover" />
                <h2 className="section-title position-absolute top-0 start-0 m-3 text-white bg-dark bg-opacity-50 px-3 py-1 rounded">
                  Élagage d'arbres
                </h2>
                <button
                  type="button"
                  className="btn btn-outline-light text-white bg-secondary bg-opacity-75 position-absolute bottom-0 start-50 translate-middle-x mb-3 border-white"
                  data-bs-toggle="modal"
                  data-bs-target="#modalElagage"
                >
                  Voir plus
                </button>
              </div>
            </div>

            {/* Valorisation des déchets */}
            <div>
              <div className="position-relative bg-primary rounded-3 shadow overflow-hidden" style={{ height: 350 }}>
                <img src={broyeurMain} alt="broyeur de branche en action" className="w-100 h-100 object-fit-cover" />
                <h2 className="section-title position-absolute top-0 start-0 m-3 text-white bg-dark bg-opacity-50 px-3 py-1 rounded">
                  Valorisation des déchets
                </h2>
                <button
                  type="button"
                  className="btn btn-outline-light text-white bg-secondary bg-opacity-75 position-absolute bottom-0 start-50 translate-middle-x mb-3 border-white"
                  data-bs-toggle="modal"
                  data-bs-target="#modalValorisation"
                >
                  Voir plus
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Modale 1 — Création */}
      <div className="modal fade" id="modalCreation" tabIndex="-1" aria-labelledby="modalCreationLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title" id="modalCreationLabel">Création d’espace vert</h5>
              <button type="button" className="btn-close bg-warning" data-bs-dismiss="modal" aria-label="Fermer"></button>
            </div>
            <div className="modal-body">
              <p>Voici quelques exemples de créations paysagères réalisées par notre équipe :</p>
              <div className="row g-3">
                {[c2,c3,c4,c5,c6,c7].map((img, i) => (
                  <div className="col-6" key={i}>
                    <img src={img} className="img-fluid rounded object-fit-cover w-100" style={{ height: 200 }} alt={`Création ${i+1}`} />
                  </div>
                ))}
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modale 2 — Entretien */}
      <div className="modal fade" id="modalEntretien" tabIndex="-1" aria-labelledby="modalEntretienLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title" id="modalEntretienLabel">Entretien d’espace vert</h5>
              <button type="button" className="btn-close bg-warning" data-bs-dismiss="modal" aria-label="Fermer"></button>
            </div>
            <div className="modal-body">
              <p>Voici notre équipe au service de l'entretien d'espace vert public ou privé :</p>
              <div className="row g-3">
                {[e1,e2,e7,e4,e5,e8].map((img, i) => (
                  <div className="col-6" key={i}>
                    <img src={img} className="img-fluid rounded object-fit-cover w-100" style={{ height: 200 }} alt={`Entretien ${i+1}`} />
                  </div>
                ))}
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modale 3 — Taille */}
      <div className="modal fade" id="modalTaille" tabIndex="-1" aria-labelledby="modalTailleLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title" id="modalTailleLabel">Taille des haies</h5>
              <button type="button" className="btn-close bg-warning" data-bs-dismiss="modal" aria-label="Fermer"></button>
            </div>
            <div className="modal-body">
              <p>Notre équipe répondra toujours présente pour tailler vos haies :</p>
              <div className="row g-3">
                {[t1,t2,t3,t4,t5,t6].map((img, i) => (
                  <div className="col-6" key={i}>
                    <img src={img} className="img-fluid rounded object-fit-cover w-100" style={{ height: 200 }} alt={`Taille de haie ${i+1}`} />
                  </div>
                ))}
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modale 4 — Élagage */}
      <div className="modal fade" id="modalElagage" tabIndex="-1" aria-labelledby="modalElagageLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title" id="modalElagageLabel">Élagage d'arbres</h5>
              <button type="button" className="btn-close bg-warning" data-bs-dismiss="modal" aria-label="Fermer"></button>
            </div>
            <div className="modal-body">
              <p>Voici nos élagueurs grimpeurs en action :</p>
              <div className="row g-3">
                {[el1,el2,el4,el3,elMain,el5].map((img, i) => (
                  <div className="col-6" key={i}>
                    <img src={img} className="img-fluid rounded object-fit-cover w-100" style={{ height: 200 }} alt={`Élagage ${i+1}`} />
                  </div>
                ))}
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modale 5 — Valorisation */}
      <div className="modal fade" id="modalValorisation" tabIndex="-1" aria-labelledby="modalValorisationLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title" id="modalValorisationLabel">Valorisation des déchets</h5>
              <button type="button" className="btn-close bg-warning" data-bs-dismiss="modal" aria-label="Fermer"></button>
            </div>
            <div className="modal-body">
              <p>Nous sommes équipés d’un broyeur à branches qui nous permet d’éliminer rapidement les déchets sur place :</p>
              <div className="row g-3">
                {[v1,v2,v3,v4].map((img, i) => (
                  <div className="col-6" key={i}>
                    <img src={img} className="img-fluid rounded object-fit-cover w-100" style={{ height: 200 }} alt={`Valorisation ${i+1}`} />
                  </div>
                ))}
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prestations;