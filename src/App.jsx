import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Location from './components/Location'
import Features from './components/Features'
import Services from './components/services'
import "./App.css";

function App() {
  return (
    <>
      {" "}
      <Navbar /> 
      <Hero />
      <Services />
      <Features />
      <Location />
      {" "}
    </>
  );
}

export default App;
