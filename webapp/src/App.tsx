import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowWeHelp } from './components/HowWeHelp';
import { CompanySolutions } from './components/CompanySolutions';
import { HighlightedServices } from './components/HighlightedServices';
import { Professionals } from './components/Professionals';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowWeHelp />
        <CompanySolutions />
        <HighlightedServices />
        <Professionals />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default App;
