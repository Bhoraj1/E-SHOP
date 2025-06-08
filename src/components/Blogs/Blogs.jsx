import image1 from "../../assets/blogsimg/blog-1.jpg";
import image2 from "../../assets/blogsimg/blog-2.jpg";
import image3 from "../../assets/blogsimg/blog-3.jpg";
const BlogData = [
  {
    title: "How to chose smartwatch",
    subtitle:
      "Make sure the watch works with your phone (Android or iPhone). Choose Battery life  at least 2–3 days.",
    published: "Jan 20, 2024 by Bhoraj Malla",
    image: image1,
  },
  {
    title: "How to chose smartwatch",
    subtitle:
      "Make sure the watch works with your phone (Android or iPhone). Choose Battery life  at least 2–3 days.",
    published: "Jan 20, 2024 by Bhoraj Malla",
    image: image2,
  },
  {
    title: "How to chose smartwatch",
    subtitle:
      "Make sure the watch works with your phone (Android or iPhone). Choose Battery life  at least 2–3 days.",
    published: "Jan 20, 2024 by Bhoraj Malla",
    image: image3,
  },
];

const Blogs = () => {
  return (
    <div className="p-[3rem] my-12">
      {/* Title section */}
      <div className="flex flex-col text-center mb-5 ">
        <h1 className="text-3xl font-bold">Recent News</h1>
        <p className="text-mg text-gray-400">Explore Our Blogs</p>
      </div>

      {/* Body section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {BlogData.map((i) => (
          <div key={i.title} className="bg-white">
            {/* image */}
            <div className="overflow-hidden rounded-2xl mb-2">
              <img src={i.image} alt="" className="w-full h-[202px] object-cover rounded-2xl hover:scale-105 duration-500" />
            </div>

            {/* body section */}
            <div className="space-x-2">
              <p className="text-xs text-gray-500">{i.published}</p>
              <p className="font-bold line-clamp-1">{i.title}</p>
              <p className="line-clamp-2 text-sm text-gray-600">{i.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
