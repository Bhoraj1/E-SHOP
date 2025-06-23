import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/services/Service";
import headphone from "./assets/cagegory/headphone.png";
import smartWatch from "./assets/cagegory/smartWatch.png";
import Products from "./components/products/Products";
import Blogs from "./components/Blogs/Blogs";
import Partner from "./components/partners/Partner";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/form/LoginForm";
import TrendingProducts from "./components/Navbar/TrendingProducts";
import SignupForm from "./components/form/Signup";
import NotFound from "./components/notFound/Notfound";

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

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Partner />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/trending-products" element={<TrendingProducts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
