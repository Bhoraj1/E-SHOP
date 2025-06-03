import { FaCarSide } from "react-icons/fa";
const serviceData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-red-500" />,
    title: "Free Devlivery",
    description: "Free Devlivery All Over Nepal",
  },
  {
    id: 2,
    icon: <FaCarSide className="text-4xl md:text-5xl text-red-500" />,
    title: "Safe Money",
    description: "Free Devlivery All Over Nepal",
  },
  {
    id: 3,
    icon: <FaCarSide className="text-4xl md:text-5xl text-red-500" />,
    title: "Free Devlivery",
    description: "Free Devlivery All Over Nepal",
  },
  {
    id: 4,
    icon: <FaCarSide className="text-4xl md:text-5xl text-red-500" />,
    title: "Free Devlivery",
    description: "Free Devlivery All Over Nepal",
  },
];

const Services = () => {
  return (
    <div className="px-[1rem] sm:px-[3rem] my-14 sm:my-20">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 gap-y-8">
        {serviceData.map((i) => (
          <div className="flex flex-col items-start sm:flex-row gap-4">
            {i.icon}
            <div>
              <h1 className="lg:text-xl font-bold">{i.title}</h1>
              <h1 className="text-sm  text-gray-400">{i.description}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
