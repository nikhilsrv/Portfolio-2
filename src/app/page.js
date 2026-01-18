import AboutLayout from './components/AboutComponents/AboutLayout';
import HeroSection from './components/HomeComponents/HeroSection';
import Experience from './components/ExperienceComponents';
import Footer from './components/Footer';
import Contact from './components/Contact';
import '@/app/App.css';
import Projects from './components/Project';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutLayout />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
