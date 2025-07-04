import { IoMdSearch } from "react-icons/io";
import { FaBars, FaCaretDown, FaShoppingCart, FaTimes } from "react-icons/fa";
import { useState } from "react";
const menuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
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
    id: 7,
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
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
              <ul className="flex items-center gap-4 cursor-pointer">
                {menuLinks.map((item) => (
                  <li
                    className="inline-block px-4 font-semibold text-gray-600 hover:text-black duration-200"
                    key={item.id}
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

            {/* mobile size button */}
            <div className="block lg:hidden">
              <button onClick={() => setSidebarOpen(true)}>
                <FaBars className="text-2xl text-gray-700" />
              </button>
            </div>
          </div>

          {/* Mobile Sidebar */}
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-white shadow transform transition-transform duration-300 z-50 ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* mobiel sidebar Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button onClick={() => setSidebarOpen(false)}>
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Menu Items */}
            <ul className="p-4 space-y-3">
              {menuLinks.map((i) => (
                <li key={i.id}>
                  <a
                    href={i.link}
                    className="block text-gray-700 hover:text-red-500"
                  >
                    {i.name}
                  </a>
                </li>
              ))}

              {/* Divider title */}
              <h1 className="mt-4 font-semibold text-gray-600">Quick Links</h1>

              {DropdownLinks.map((i) => (
                <li key={i.id}>
                  <a
                    href={i.link}
                    className="block text-gray-600 hover:text-red-500"
                  >
                    {i.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
