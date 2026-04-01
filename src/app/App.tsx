import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { Timeline } from './components/Timeline';
import { Brands } from './components/Brands';
import { Logistics } from './components/Logistics';
import { Values } from './components/Values';
import { Testimonials } from './components/Testimonials';
import { Careers } from './components/Careers';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="lm-page min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Timeline />
      <Brands />
      <Logistics />
      <Values />
      <Testimonials />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
}
