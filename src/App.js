import "./App.css";
import Header from "./Components/Header.js";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
        <Header/>
        <Hero />
        <Services />
        <Testimonials />
        <Footer />
    </div>
  );
}

export default App;
