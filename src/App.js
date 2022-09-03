import "./App.css";
import Header from "./Components/Header.js";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <div>
        <Header/>
        <Hero />
        <Services />
        <Testimonials />
    </div>
  );
}

export default App;
