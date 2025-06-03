import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/services/Service";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
    </div>
  );
};

export default App;
