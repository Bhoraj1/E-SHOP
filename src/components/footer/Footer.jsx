import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footerlinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 1,
    title: "About",
    link: "/",
  },
  {
    id: 1,
    title: "Contact",
    link: "/",
  },
  {
    id: 1,
    title: "Blog",
    link: "/",
  },
];
const Footer = () => {
  return (
    <div className="px-[3rem] py-7">
      <div className="grid md:grid-cols-4 pb-20 pt-5">
        {/* comapny information */}
        <div className="">
          <a
            href=""
            className="text-red-500 font-semibold text-2xl uppercase sm:text-3xl"
          >
            Eshop
          </a>
          <p className="text-gray-600 lg:pr-24 pt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
            reiciendis facere! Adipisci, impedit maxime
          </p>
          <p className="text-gray-500 mt-4">Made by 🥰 Bhoraj Malla</p>

          <a
            href="https://www.google.com"
            className="inline-block bg-red-500 text-white py-2 px-4 mt-4 text-sm rounded-full"
          >
            Visit Our Youbube Channel
          </a>
        </div>

        {/* Fotter links */}
        <div className="py-8 px-4">
          <h1 className="text-xl font-bold sm:text-left mb-3">Quick Links</h1>
          <div>
            <ul className="space-y-2">
              {Footerlinks.map((i) => (
                <li key={i.id}>
                  <a
                    href={i.link}
                    className="text-gray-600 hover:text-black duration-200"
                  >
                    {i.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Fotter links2 */}
        <div className="py-8 px-4">
          <h1 className="text-xl font-bold sm:text-left mb-3">
            Important Links
          </h1>
          <div>
            <ul className="space-y-2">
              {Footerlinks.map((i) => (
                <li key={i.id}>
                  <a
                    href={i.link}
                    className="text-gray-600 hover:text-black duration-200"
                  >
                    {i.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Comany Address */}
        <div className="py-8 col-span-2 sm:col-auto">
          <h1 className="text-xl font-bold sm:text-left">Address</h1>
          <div>
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Kohalpur-11,Banke</p>
            </div>

            <div className="flex items-center gap-3">
              <FaMobileAlt />
              <p>985742854</p>
            </div>
          </div>

          {/* social media links */}
          <div className="flex items-center gap-3 mt-6">
            <a href="">
              <FaFacebook className="text-3xl hover:text-red-500 duration-300" />{" "}
            </a>
            <a href="">
              <FaInstagram className="text-3xl hover:text-red-500 duration-300" />
            </a>
            <a href="">
              <FaLinkedin className="text-3xl hover:text-red-500 duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
