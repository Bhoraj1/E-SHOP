import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
const menuLinks = [
  {
    id: 1,
    name: "Home",
    Link: "/#",
  },
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 5,
    name: "Blogs",
    link: "/#blogs",
  },
];
const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/trending-products",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/trending-products",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/trending-products",
  },
];

const Navbar = () => {
  return (
    <div>
      <div>
        <div className="mx-auto p-[1rem] sm:px-[3rem] flex justify-between items-center">
          {/* Logo and Links section */}
          <div className="flex items-center gap-4">
            <a
              className="text-primary font-semibold text-2xl  uppercase sm:text-3xl"
              href="#"
            >
              Eshop
            </a>

            {/* menu items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {menuLinks.map((item, index) => (
                  <li
                    className="inline-block px-4 font-semibold text-gray-600 hover:text-black duration-200"
                    key={index.id}
                  >
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
                {/* Dropdown */}
                <li className="group relative cursor-pointer group">
                  <a
                    className="flex items-center gap-4px font-semibold text-gray-600 hover:text-black py-2"
                    href=""
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>
                  {/* Dropdown Links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md p-2 ">
                    <ul className="space-y-2">
                      {DropdownLinks.map((item, index) => (
                        <li key={index}>
                          <a
                            className="text-gray-500 hover:text-black duration-200 p-2 hover:bg-primary/20 inline-block w-full rounded-md"
                            href={item.link}
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Right Navbar section */}
          <div className="flex justify-between items-center gap-4">
            {/* Search Bar */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search"
                className="search-bar"
              />
              <IoMdSearch className="group-hover:text-primary text-xl text-gray-600 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>
            {/* Order Button section */}
            <button className="relative p-3">
              <FaShoppingCart className="text-xl text-gray-600" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                4
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
