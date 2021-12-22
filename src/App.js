import './App.css';
import NavbarComponent from './components/navbar/navbar';
import Hero from "./components/HeroSection/Hero";
import FooterPage from "./components/HeroSection/footer";
import CYP from "../src/components/CompleteYourProfile/CYP"
function App() {
  return (
    <div className="App">
      <NavbarComponent/>
       <Hero/>
      <FooterPage/>
    </div>
  );
}

export default App;
