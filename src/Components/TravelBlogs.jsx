import { FaAngleRight } from "react-icons/fa";

const TravelBlogs = () => {
  return (
    <div className=" pt-12  pb-12 px-5 lg:px-0 lg:w-[1120px] mx-auto">
      <h2 className="text-3xl font-bold py-5">Travel Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        <div className="bg-white shadow-2xl rounded-xl">
          <img
            src="https://i.ibb.co/TtvLL8S/Rectangle-18.png"
            className="w-full rounded-t-xl"
            alt=""
          />
          <div className="p-5">
            <div className="flex items-center gap-6 font-medium">
              <p className="text-[#FFB700] ">Work and Travel</p>
              <p>16 septembar 23</p>
            </div>
            <h2 className="py-4 text-left text-xl font-bold">
              Embracing the Digital Nomad Lifestyle the Digital Nomad thr...
            </h2>
            <hr />
            <div className="flex justify-between pt-2">
              <div className="flex items-center gap-4">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://i.ibb.co/WW2ZQhX/lloyd-sikeba.jpg"
                  alt=""
                />
                <p className="font-medium">Ys Stafen</p>
              </div>
              <p className="flex items-center font-medium gap-3 text-[#FFB700]">
                Read More
                <div className="flex gap-0">
                  <FaAngleRight className="" />
                  <FaAngleRight className="-ml-2" />
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-2xl rounded-xl">
          <img
            src="https://i.ibb.co/bJBp0t1/Rectangle-18-1.png"
            className="w-full rounded-t-xl"
            alt=""
          />
          <div className="p-5">
            <div className="flex items-center gap-6 font-medium">
              <p className="text-[#FFB700] ">Historical</p>
              <p>14 septembar 23</p>
            </div>
            <h2 className="py-4 text-left text-xl font-bold">
              Historical Journeys: Stepping Back in Time Through Travel{" "}
            </h2>
            <hr />
            <div className="flex justify-between pt-2">
              <div className="flex items-center gap-4">
                <img
                  className="w-10 h-10 rounded-full"
                  src=" https://i.ibb.co/J7yWQgX/download.jpg"
                  alt=""
                />
                <p className="font-medium">Aria Montague</p>
              </div>
              <p className="flex items-center font-medium gap-3 text-[#FFB700]">
                Read More
                <div className="flex gap-0">
                  <FaAngleRight className="" />
                  <FaAngleRight className="-ml-2" />
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-2xl rounded-xl">
          <img
            src="https://i.ibb.co/8jCLgfK/Rectangle-18-2.png"
            className=" rounded-t-xl w-full"
            alt=""
          />
          <div className="p-5">
            <div className="flex items-center gap-6 font-medium">
              <p className="text-[#FFB700] ">Sustainable Tourism</p>
              <p>10 septembar 23</p>
            </div>
            <h2 className="py-4 text-left text-xl font-bold">
              Sustainable Tourism: Preserving the Planet While Seeing It All
            </h2>
            <hr />
            <div className="flex justify-between pt-2">
              <div className="flex items-center gap-4">
                <img
                  className="w-10 h-10 rounded-full"
                  src=" https://i.ibb.co/tMdhqB8/800px-Pierre-Person.jpg"
                  alt=""
                />
                <p className="font-medium">Elara Thorne</p>
              </div>
              <p className="flex items-center font-medium gap-3 text-[#FFB700]">
                Read More
                <div className="flex gap-0">
                  <FaAngleRight className="" />
                  <FaAngleRight className="-ml-2" />
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelBlogs;
