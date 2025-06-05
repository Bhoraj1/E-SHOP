import Button from "../shared/Button";

const ProductCard = ({ data }) => {
  return (
    <div className="">
      {/* card section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 items-center mx-auto ">
        {data.map((i) => (
          <div className="">
            {/* image section  */}
            <div className="relative group">
              <img
                src={i.image}
                alt=""
                className="h-[180px] w-[260px] object-cover rounded-md"
              />

              {/* Hover button */}
              <div className="absolute top-30 translate-x-1/3 hidden group-hover:flex duration-200 justify-center ">
                <Button text="Add to Card" className="bg-red-500 text-white " />
              </div>
            </div>

            {/* last section */}
            <div>
              <h2 className="font-semibold">{i.title}</h2>
              <h2 className="font-bold">${i.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
