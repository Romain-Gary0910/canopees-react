import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/style.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Prestations from "./pages/Prestations";
import Tarifs from "./pages/Tarifs";
import Contact from "./pages/Contact";
import Connexion from "./pages/Connexion";
import AdminDashboard from "./pages/AdminDashboard";
import Footer from "./components/Footer";
import AdminContact from "./pages/AdminContact";
import AdminPrestation from "./pages/AdminPrestation";
import AdminPresentation from "./pages/AdminPresentation";
import AdminRealisation from "./pages/AdminRealisation";
import AdminTarif from "./pages/AdminTarif";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qui-sommes-nous" element={<About />} />
        <Route path="/prestations" element={<Prestations />} />
        <Route path="/tarifs" element={<Tarifs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/contact" element={<AdminContact />} />
        <Route path="/admin/prestations" element={<AdminPrestation />} />
        <Route path="/admin/presentation" element={<AdminPresentation />} />
        <Route path="/admin/realisation" element={<AdminRealisation />} />
        <Route path="/admin/tarifs" element={<AdminTarif />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
