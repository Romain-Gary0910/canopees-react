import jardinier4 from "../assets/images/jardinier-4.webp";
import jardinier5 from "../assets/images/jardinier-5.webp";

function About() {
  return (
    <div className="container my-5">
      {/* Titre principal */}
      <div className="row">
        <div className="col-xl-12 col-lg-6">
          <h1 className="text-center bg-primary text-white p-2 rounded">
            Qui sommes-nous ?
          </h1>
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
              src={jardinier5}
              className="img-fluid rounded w-100 object-fit-cover"
              alt="Bob taillant des plantes"
            />
          </div>
          <div className="col-md-6 col-sm-6">
            <h3
              className="mb-3"
              style={{
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.6)",
              }}
            >
              Bob 🍃
            </h3>
            <p>
              Co-fondateur de <strong>Canopées</strong>, Bob est un passionné
              d’horticulture. Spécialiste de la taille et de la création
              paysagère, il met tout son savoir-faire au service des jardins
              méditerranéens. Toujours le sécateur à la main, il combine rigueur
              technique et sens artistique.
            </p>
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
              Tom 🏡
            </h3>
            <p>
              Tom, co-fondateur de <strong>Canopées</strong>, est expert en
              élagage et compostage. Respectueux de la nature et toujours
              souriant, il intervient aussi bien chez les particuliers que pour
              les collectivités. Son approche durable et responsable inspire
              toute l’équipe.
            </p>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-2 order-md-2 order-1">
            <img
              src={jardinier4}
              className="img-fluid rounded w-100 object-fit-cover"
              alt="Tom souriant"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;