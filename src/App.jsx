import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/services/Service";

import headphone from "./assets/cagegory/headphone.png";
import smartWatch from "./assets/cagegory/smartWatch.png";
import Products from "./components/products/Products";
import Test from "./components/Test";
import Blogs from "./components/Blogs/Blogs";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "Circuit boards, soldering, using a multimeter or oscilloscope.",
  className: "bg-red-500",
};
const BannerData2 = {
  discount: "30% OFF",
  title: "Smart Watch",
  date: "10 Jan to 28 Jan",
  image: smartWatch,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "Circuit boards, soldering, using a multimeter or oscilloscope.",
  className: "bg-green-500",
};

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
    </div>
  );
};

export default App;
