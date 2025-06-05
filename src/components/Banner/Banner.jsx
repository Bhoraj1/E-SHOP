import Button from "../shared/Button";

const Banner = ({ data }) => {
  return (
    <div className="px-[3rem] my-12 ">
      <div
        className={` ${data.className} grid grid-cols-1 sm:grid-cols-3 gap-6 items-center text-white rounded-3xl`}
      >
        {/* first col */}
        <div className="p-8">
          <p className="text-sm">{data.discount}</p>
          <h1 className="uppercase text-4xl lg:text-7xl font-bold">
            {data.title}
          </h1>
          <p className="text-sm">{data.date}</p>
        </div>
        {/* second col */}
        <div className="h-full flex justify-center items-center">
          <img
            src={data.image}
            alt="Banner image"
            className="w-[250px] md:w-[350px] drop-shadow-2xl object-contain"
          />
        </div>

        {/* third col */}
        <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
          <p className="font-bold text-xl">{data.title2}</p>
          <p className="text-3xl sm:text-5xl font-semibold ">{data.title3}</p>
          <p className="text-sm tracking-wide leading-5">{data.title4}</p>
          <div>
            <Button text="Show Now" className="bg-white text-red-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
