import AboutLayout from "./components/AboutComponents/AboutLayout";
import HeroSection from "./components/HomeComponents/HeroSection";
import Experience from "./components/ExperienceComponents";
import Footer from "./components/Footer";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <>
      <HeroSection/>
      <AboutLayout/>
      <Experience/>
      <Contact/>
      <Footer/>
    </>
  )
}