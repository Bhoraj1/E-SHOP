import ProductCard from "./ProductCard";
import img1 from '../../assets/productsImg/p-1.jpg'
import img2 from '../../assets/productsImg/p-2.jpg'
import img3 from '../../assets/productsImg/p-3.jpg'
import img4 from '../../assets/productsImg/p-4.jpg'
import img5 from '../../assets/productsImg/p-5.jpg'
import img6 from '../../assets/productsImg/p-7.jpg'
import img7 from '../../assets/productsImg/p-9.jpg'
const ProductData = [
  {
    id: 1,
    image: img1,
    title: "Boat HeadPhone",
    price: "120",
    asoDelay: "0",
  },
  {
    id: 2,
    image: img2,
    title: "Boat HeadPhone",
    price: "120",
    asoDelay: "0",
  },
  {
    id: 3,
    image: img3,
    title: "Boat HeadPhone",
    price: "120",
    asoDelay: "0",
  },
  {
    id: 4,
    image: img4,
    title: "Boat HeadPhone",
    price: "120",
    asoDelay: "0",
  },
];
const ProductData2 = [
  {
    id: 1,
    image: img1,
    title: "Boat HeadPhone",
    price: "120",
    asoDelay: "0",
  },
  {
    id: 2,
    image: img5,
    title: "Boat HeadPhone",
    price: "120",
    asoDelay: "0",
  },
  {
    id: 3,
    image: img6,
    title: "Boat HeadPhone",
    price: "120",
    asoDelay: "0",
  },
  {
    id: 4,
    image: img7,
    title: "Boat HeadPhone",
    price: "120",
    asoDelay: "0",
  },
];
const Products = () => {
  return (
    <div className="my-12">

      <div className="flex flex-col text-center mb-5 ">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <p className="text-mg text-gray-400">Explore Our Products</p>
      </div>

      <div className="px-[3rem] space-y-4">
        <ProductCard data={ProductData} />
        <ProductCard data={ProductData2} />
      </div>
    </div>
  );
};

export default Products;
