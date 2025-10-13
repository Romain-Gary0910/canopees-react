const Footer = () => {
  return (
    <footer className="bg-success text-white py-1 mt-5 small">
      <div className="container">
        <div className="row mb-1 d-flex flex-row flex-wrap justify-content-between">
          {/* Coordonnées */}
          <div className="col-12 col-sm-6 mb-3 mb-md-0">
            <h5 className="text-uppercase">Canopées - Menton</h5>
            <p className="mb-1">📍 1511 Rte de Super Garavan, 06500 Menton</p>
            <p className="mb-1">📞 04 93 00 00 00</p>
            <p className="mb-1">✉️ canopees-menton@gmail.com</p>
          </div>

          {/* Liens légaux */}
          <div className="col-12 col-sm-6 pe-5 text-sm-end">
            <h5 className="text-uppercase">Liens légaux</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/cgu" className="text-warning text-decoration-underline">
                  Conditions Générales d’Utilisation
                </a>
              </li>
              <li>
                <a href="/cgv" className="text-warning text-decoration-underline">
                  Conditions Générales de Vente
                </a>
              </li>
              <li>
                <a href="/mentions-legales" className="text-warning text-decoration-underline">
                  Mentions légales
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary" />
        <div className="text-center small mt-1">
          © 2025 Canopées — Tous droits réservés ·{" "}
          <a
            href="/connexion"
            className="text-warning text-decoration-none opacity-75"
          >
            Espace administrateur
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
