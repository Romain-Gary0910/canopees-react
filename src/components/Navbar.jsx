import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success shadow-sm">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/images/logo-canopees.png"
            alt="Logo de l'entreprise"
            width="140"
            height="40"
            className="me-2"
          />
        </Link>

        {/* Bouton burger */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto me-auto gap-lg-4">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/qui-sommes-nous">
                Qui sommes-nous
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/prestations">
                Nos prestations
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/tarifs">
                Tarifs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;