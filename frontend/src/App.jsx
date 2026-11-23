import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import Services from './components/Services.jsx';
import Modes from './components/Modes.jsx';
import Coverage from './components/Coverage.jsx';
import Domestic from './components/Domestic.jsx';
import ProjectCargo from './components/ProjectCargo.jsx';
import About from './components/About.jsx';
import Team from './components/Team.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { useI18n } from './i18n/index.jsx';

export default function App() {
  const { t } = useI18n();
  return (
    <>
      <a className="skip-link" href="#main">{t.skip}</a>
      <Header />
      <main id="main">
        <Hero />
        <Stats />
        <Services />
        <Modes />
        <Coverage />
        <Domestic />
        <ProjectCargo />
        <About />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
