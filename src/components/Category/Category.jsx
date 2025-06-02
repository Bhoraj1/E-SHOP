import image1 from "../../assets/cagegory/headphone.png";
import image2 from "../../assets/cagegory/macbook.png";
import image3 from "../../assets/cagegory/vr.png";
import Button from "../shared/Button";

const Category = () => {
  return (
    <div className="py-8">
      <div className="px-[1rem] sm:px-[3rem]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* first col */}
          <div className="py-10 pl-5 bg-gray-500 text-white rounded-3xl h-[320px] flex relative items-end">
           
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">with</p>
                <p className="text-4xl font-bold opacity-20 mb-2">Earphone</p>
                <Button 
                text="Browse"
                className="bg-red-500 text-white"
                />
              </div>
            
             <img src={image1} alt="" className="absolute w-[200px] top-[40px] -right-2" />
          </div>
          {/* second col */}
            <div className="py-10 pl-5 bg-gray-500 text-white rounded-3xl h-[320px] flex relative items-end">
           
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">with</p>
                <p className="text-4xl font-bold opacity-20 mb-2">Earphone</p>
                <Button 
                text="Browse"
                className="bg-red-500 text-white"
                />
              </div>
            
             <img src={image1} alt="" className="absolute w-[200px] top-[40px] -right-2" />
          </div>
          {/* third col */}
            <div className="py-10 col-span-2 pl-5 bg-gray-500 text-white rounded-3xl h-[320px] flex relative items-end">
           
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">with</p>
                <p className="text-4xl font-bold opacity-20 mb-2">Earphone</p>
                <Button 
                text="Browse"
                className="bg-red-500 text-white"
                />
              </div>
            
             <img src={image1} alt="" className="absolute w-[200px] top-[40px] -right-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
