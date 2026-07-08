import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PodcastPage from './pages/PodcastPage';
import SesliKitapPage from './pages/SesliKitapPage';
import KulturSanatPage from './pages/KulturSanatPage';
import AboutPage from './pages/AboutPage';
import MissionVisionPage from './pages/MissionVisionPage';
import ProjectsPage from './pages/ProjectsPage';
import PartnersPage from './pages/PartnersPage';


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/podcast" element={<PodcastPage />} />
          <Route path="/sesli-kitap" element={<SesliKitapPage />} />
          <Route path="/kultur-sanat" element={<KulturSanatPage />} />
          <Route path="/hakkimizda" element={<AboutPage />} />
          <Route path="/misyon-vizyon" element={<MissionVisionPage />} />
          <Route path="/projeler" element={<ProjectsPage />} />
          <Route path="/is-birlikcilerimiz" element={<PartnersPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
