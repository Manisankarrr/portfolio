import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import SpiralCursor from "./components/SpiralCursor";




const App = () => (
  <>
    <Navbar />
    <Hero />
    <ShowcaseSection />
    <LogoShowcase />
    <FeatureCards />
    <Experience />
    <Contact />
    <Footer />
       
     <SpiralCursor
        trailLength={80}
        lineWidth={3}
        color="rgba(0,255,255,0.5)"
        spiralOffset={0.15}
      />
  </>
);

export default App;
