import './App.css';
import NavbarComponent from './components/navbar/navbar';
import Hero from "./components/HeroSection/Hero";
import FooterPage from "./components/HeroSection/footer";s
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
