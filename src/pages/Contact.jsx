import { useState } from "react";
import "../App.css";
import { sendContactForm } from "../services/contactService";

function Contact() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [objet, setObjet] = useState("");
  const [message, setMessage] = useState("");
  const [formSent, setFormSent] = useState(false);

  const isNomValide = /^[A-Za-zÀ-ÿ\s'-]+$/.test(nom);
  const isPrenomValide = /^[A-Za-zÀ-ÿ\s'-]+$/.test(prenom);
  const isEmailValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isTelephoneValide = /^[0-9]{10}$/.test(telephone);

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Vérifie les champs localement
  if (!isNomValide || !isPrenomValide || !isEmailValide || !isTelephoneValide) {
    alert("Merci de vérifier les informations saisies avant d’envoyer.");
    return;
  }

  const data = {
    nom,
    prenom,
    email,
    telephone,
    objet,
    message,
  };

  try {
    console.log("Données envoyées :", data);
    await sendContactForm(data);
    setFormSent(true);

    // Réinitialise les champs
    setNom("");
    setPrenom("");
    setEmail("");
    setTelephone("");
    setObjet("");
    setMessage("");
  } catch (error) {
    console.error("Erreur lors de l’envoi :", error);
    alert("Une erreur est survenue. Veuillez réessayer plus tard.");
  }
};



  return (
    <div className="contact-page">
      <div className="container my-4">
        <div className="row">
          <div className="col-xl-12 col-lg-6">
            <h1 className="text-center bg-primary text-white p-2 rounded">
              Contact
            </h1>
          </div>
        </div>
      </div>

      <blockquote className="blockquote text-center mt-4">
        <p className="mb-5 fst-italic">
          Pour une question, un renseignement ou un devis, c'est par ici 👇
        </p>
      </blockquote>

      <div className="container bg-primary text-white rounded my-5 p-4">
        <h2 className="contact-sub-title mb-3 text-warning">
          Contactez-nous :
        </h2>
        <ul className="list-group">
          <li
            className="list-group-item"
            style={{ cursor: "pointer" }}
            onClick={() => (window.location.href = "tel:0493000000")}
          >
            Téléphone : 📞 04 93 00 00 00
          </li>

          <li
            className="list-group-item mt-3"
            style={{ cursor: "pointer" }}
            onClick={() =>
              (window.location.href = "mailto:canopees-menton@gmail.com")
            }
          >
            E-mail : ✉️ canopees-menton@gmail.com
          </li>
        </ul>

        {/* Formulaire de contact */}
        <section className="border-top pt-1 pb-5 mt-4 mb-5 container bg-primary text-white rounded">
          <h2 className="form-title text-center my-4 text-warning">
            Pour un devis, remplissez le formulaire :
          </h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nom" className="form-label">
                Nom
              </label>
              <input
                type="text"
                id="nom"
                className={`form-control ${
                  nom ? (isNomValide ? "is-valid" : "is-invalid") : ""
                }`}
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                required
                title="Le nom ne doit contenir que des lettres."
              />
            </div>

            <div className="mb-3">
              <label htmlFor="prenom" className="form-label">
                Prénom
              </label>
              <input
                type="text"
                id="prenom"
                className={`form-control ${
                  prenom ? (isPrenomValide ? "is-valid" : "is-invalid") : ""
                }`}
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                required
                title="Le prénom ne doit contenir que des lettres."
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Adresse e-mail
              </label>
              <input
                type="email"
                id="email"
                className={`form-control ${
                  email ? (isEmailValide ? "is-valid" : "is-invalid") : ""
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                title="Veuillez entrer une adresse e-mail valide."
              />
            </div>

            <div className="mb-3">
              <label htmlFor="telephone" className="form-label">
                Téléphone
              </label>
              <input
                type="tel"
                id="telephone"
                className={`form-control ${
                  telephone
                    ? isTelephoneValide
                      ? "is-valid"
                      : "is-invalid"
                    : ""
                }`}
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                required
                title="Veuillez entrer un numéro de téléphone à 10 chiffres (sans espaces)."
              />
            </div>

            <div className="mb-3">
              <label htmlFor="objet" className="form-label">
                Objet
              </label>
              <input
                type="text"
                id="objet"
                className="form-control"
                value={objet}
                onChange={(e) => setObjet(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                className="form-control"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-secondary border-white">
              Envoyer
            </button>
            {formSent && (
              <p className="alert alert-success mt-3">
                Merci, votre message a bien été envoyé !
              </p>
            )}
          </form>
        </section>

        {/* Section Plan d'accès */}
        <section className="container my-5">
          <div className="text-center mb-4">
            <h2 className="text-warning bg-primary rounded py-2 shadow-sm">
              Plan d'accès
            </h2>
          </div>

          <div className="map-container ratio ratio-16x9 shadow-lg rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.214978130978!2d7.522027775786842!3d43.789152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdebf57effa4b7%3A0x49b51646f6cbbac7!2s1511%20Rte%20de%20Super%20Garavan%2C%2006500%20Menton!5e0!3m2!1sfr!2sfr!4v1753437292947!5m2!1sfr!2sfr"
              title="Plan d'accès"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded map-frame"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
