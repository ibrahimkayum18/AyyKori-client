
const Features = () => {
    return (
        <div className="">
      <div className=" py-14 my-5 px-5 lg:px-0 lg:w-[1120px] mx-auto">
        <h2 className="text-3xl font-bold py-5">Featured Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          
          <div className="bg-white shadow-2xl p-2 rounded-xl">
            <img
              src="https://i.ibb.co/94wCjbf/pexels-pixabay-261102.jpg"
              className=" rounded-xl"
              alt=""
            />
            <h2 className="pt-5 text-left text-xl font-bold">Stopover opportunity in İstanbul with Turkish Airlines</h2>
           <div className="text-center">
           <button className="py-2 w-2/3 mx-auto my-4 rounded-lg bg-[#FFB700] ">View More</button>
           </div>
          </div>
          <div className="bg-white shadow-2xl p-2 rounded-xl">
            <img
              src="https://i.ibb.co/94wCjbf/pexels-pixabay-261102.jpg"
              className=" rounded-xl"
              alt=""
            />
            <h2 className="pt-5 text-left text-xl font-bold">Discover the timeless city with Touristanbul of Turkish Airlines</h2>
           <div className="text-center">
           <button className="py-2 w-2/3 mx-auto my-4 rounded-lg bg-[#FFB700] ">View More</button>
           </div>
          </div>
          <div className="bg-white shadow-2xl p-2 rounded-xl">
            <img
              src="https://i.ibb.co/94wCjbf/pexels-pixabay-261102.jpg"
              className=" rounded-xl"
              alt=""
            />
            <h2 className="pt-5 text-left text-xl font-bold">the best of Abu Dhabi with exclusive Etihad Airways!</h2>
           <div className="text-center">
           <button className="py-2 w-2/3 mx-auto my-4 rounded-lg bg-[#FFB700] ">View More</button>
           </div>
          </div>
          
        </div>
      </div>
    </div>
    );
};

export default Features;