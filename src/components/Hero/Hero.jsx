import Slider from "react-slick";
import image1 from "../../assets/headphone.png";
import image2 from "../../assets/macbook.png";
import image3 from "../../assets/vr.png";
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
      <div className="overflow-hidden min-h-[550px] rounded-3xl hero-bg-color flex justify-center items-center">
      <div className="container px-[1rem] sm:px-[3rem] pb-8 sm:pb-0 ">
        <Slider {...settings}>
          {HeroData.map((i) => (
            <div key={i.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* content  */}
                <div>
                  <h1>{i.subtitle}</h1>
                  <h1>{i.title}</h1>
                  <h1>{i.title2}</h1>
                  <div>
                    <button>Shop Now</button>
                  </div>
                </div>

                {/* image */}
                <div>
                  <img
                    src={i.img}
                    alt=""
                    className="w-[300] h-[300] sm:h-[450] sm:scale-x-105 lg:scale-110 object-contain mx-auto drop-shadow-2xl"
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
