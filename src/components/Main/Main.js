import Hero from "../Hero/Hero";
import HomePage from "../HomePages/HomePages";
import Ready from "../Ready/Ready";
import Studies from "../Studies/Studies";
import Support from "../Support/Support";
import Utility from "../UtilityPage/Utility";

const Main = () => {
  return (
    <main className="site__main">
      <Hero />
      <HomePage />
      <Studies />
      <Support />
      <Utility />
      <Ready />
    </main>
  );
};
export default Main;
