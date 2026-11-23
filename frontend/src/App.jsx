import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import Services from './components/Services.jsx';
import Coverage from './components/Coverage.jsx';
import ProjectCargo from './components/ProjectCargo.jsx';
import About from './components/About.jsx';
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Stats />
        <Services />
        <Coverage />
        <ProjectCargo />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
