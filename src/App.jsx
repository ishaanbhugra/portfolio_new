import About from "./Components/about/About";
import Contact from "./Components/contact/Contact";
import Hero from "./Components/hero/Hero";
import Navbar from "./Components/navbar/Navbar";
import Parallax from "./Components/parallax/Parallax";
import Portfolio from "./Components/portfolio/Portfolio";
import Services from "./Components/services/Services";
import "./app.scss";

const App = () => {
  return (
    <div>
      {/* <Cursor /> */}
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <About/>
      </section>
       <section id="Internships">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Projects">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>


      {/* Framer Motion Crash Course */}
       {/* <Test/>
    <Test/>  */}
    </div>
  );
};

export default App;