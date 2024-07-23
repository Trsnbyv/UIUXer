import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import HomePage from "./components/HomePages/HomePages";
import Ready from "./components/Ready/Ready";
import Studies from "./components/Studies/Studies";
import Support from "./components/Support/Support";
import Utility from "./components/UtilityPage/Utility";

function App() {
  return (
    <>
      <Header />
      <main className="site__main">
      <Hero/>
      <HomePage/>
      <Studies/>
      <Support/>
      <Utility/>
      <Ready/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
