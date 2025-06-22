import Slider from "react-slick";
import image1 from "../../assets/cagegory/headphone.png";
import image2 from "../../assets/cagegory/macbook.png";
import image3 from "../../assets/cagegory/vr.png";
import Button from "../shared/Button";
const HeroData = [
  {
    id: 1,
    img: image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Head Phone",
    description: "His life will be Change dolar sit amet,consectur.",
  },
  {
    id: 2,
    img: image2,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Head Phone",
    description: "His life will be Change dolar sit amet,consectur.",
  },
  {
    id: 3,
    img: image3,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Head Phone",
    description: "His life will be Change dolar sit amet,consectur.",
  },
];
const Hero = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    slidesToScroll: 1,
  };

  return (
    <div className="px-[1rem] sm:px-[3rem]">
      <div className="overflow-hidden min-h-[550px] rounded-3xl flex justify-center items-center bg-gradient-to-r from-gray-300/80 to-gray-100 ">
        <div className="container px-[1rem] sm:px-[3rem] pb-8 sm:pb-0 relative z-10">
          <Slider {...settings}>
            {HeroData.map((i) => (
              <div key={i.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* content  */}
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-2">
                    <h1 className=" text-2xl sm:text-6xl lg:text-2xl font-bold">
                      {i.subtitle}
                    </h1>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                      {i.title}
                    </h1>
                    <h1 className="text-5xl uppercase text-white sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold whitespace-nowrap">
                      {i.title2}
                    </h1>
                    <div>
                      <Button
                        text="Show Now"
                        className="text-white bg-red-500"
                      />
                    </div>
                  </div>

                  {/* image */}
                  <div className="order-2 sm:order-2">
                    <img
                      src={i.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-x-105 lg:scale-110 object-contain mx-auto drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
