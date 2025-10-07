import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Prestations from "./pages/Prestations";
import Tarifs from "./pages/Tarifs";
import Contact from "./pages/Contact";
import Connexion from "./pages/Connexion";
import AdminDashboard from "./pages/AdminDashboard";
import Footer from "./components/Footer";
import "./assets/css/style.css";

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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
