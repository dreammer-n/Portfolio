import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";


function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <Features />
      <About />
      <Experience />
      <Contact />
      <Footer />
    

    </main>
  );
}

export default App;
