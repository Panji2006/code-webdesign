import NavCom from "./components/NavCom";
import Hero from "./components/Hero";
import Galeri from "./components/Galeri";
import Servis from "./components/Servis";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Hero />

      <NavCom />
      <Galeri />
      <Servis />
      <Faq />

      <Footer />
    </div>
  );
};

export default App;
