import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import HomePage from "./components/HomePages/HomePages";
import Studies from "./components/Studies/Studies";

function App() {
  return (
    <>
      <Header />
      <main className="site__main">
      <Hero/>
      <HomePage/>
      <Studies/>
      </main>
    </>
  );
}

export default App;
