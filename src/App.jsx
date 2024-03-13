import "./App.css";
import Bar from "./components/Navbar/Bar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Acheivement from "./components/Acheivement/Achievement";

function App() {
  return (
    <>
      <Bar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Acheivement />
      <Footer />
    </>
  );
}

export default App;
