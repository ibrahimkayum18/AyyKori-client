import { IoSearch } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa";
import { IoRadioButtonOn } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center h-auto lg:h-[521px]  w-full"
      style={{ backgroundImage: 'url("https://i.ibb.co/VpG9SRY/Rectangle-2.png")' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 lg:pb-0 lg:py-20">
        <div className="text-center">
          <h2 className="text-3xl py-5 lg:py-7 pl-4 lg:pl-24 text-white sm:text-4xl">
            Welcome to <span className="text-[#006CE4] font-bold">AirBook</span>
          </h2>
          <div className="lg:w-[1120px] text-[#09182E] mx-auto px-5 py-12 rounded-xl bg-base-100">
            <div className="flex flex-wrap justify-between px-7 mb-5">
              <div className="flex items-center gap-4">
                <h1 className="flex gap-2 items-center py-2 px-3 rounded-lg bg-sky-100">
                  <span className="text-gray-700 ">
                    <FaRegCircle />
                  </span>
                  One Way{" "}
                </h1>
                <h1 className="flex gap-2 items-center py-2 px-3 text-white rounded-lg bg-[#006CE4] font-semibold">
                  <span className="text-white text-xl">
                    <IoRadioButtonOn />
                  </span>
                  Round Trip{" "}
                </h1>
              </div>
              <div className="flex items-center mt-4 md:mt-0 gap-4">
                <h1 className="flex gap-2 items-center py-2 px-3 rounded-lg bg-sky-100">
                  1 Traveller{" "}
                  <span className="text-gray-700 ">
                    <FaChevronDown />
                  </span>
                </h1>
                <h1 className="flex gap-2 items-center py-2 px-3 rounded-lg bg-sky-100">
                  Economy{" "}
                  <span className="text-gray-700 ">
                    <FaChevronDown />
                  </span>
                </h1>
              </div>
            </div>

            <div className="lg:flex items-center justify-center gap-4">
              <div className="flex flex-wrap justify-center items-center gap-4">
                <div className="flex items-center border w-full md:w-[221px] max-h-[55px] py-2 px-2 rounded-lg">
                  <h2 className=" font-bold pr-3 border-r">DAC</h2>
                  <div className="text-left pl-3">
                    <h2 className=" font-semibold">Dhaka</h2>
                    <h2 className="text-xs">Hazrat Shahjalal Internatio</h2>
                  </div>
                </div>
                <div className="flex items-center w-full md:w-[221px] border py-2 px-2 rounded-lg">
                  <h2 className=" font-bold pr-3 border-r">CXB</h2>
                  <div className="text-left pl-3">
                    <h2 className=" font-semibold">Cox's Bazar</h2>
                    <h2 className="text-xs">Cox's Bazar Internationsl</h2>
                  </div>
                </div>
                <div className="flex items-center w-full md:w-[221px] border py-2 px-2 rounded-lg">
                  <h2 className=" font-bold pr-3 border-r">03</h2>
                  <div className="text-left pl-3">
                    <h2 className=" font-semibold">October</h2>
                    <h2 className="text-xs">Tuesday, 2023</h2>
                  </div>
                </div>
                <div className="flex items-center w-full md:w-[221px] border py-2 px-2 rounded-lg">
                  <h2 className=" font-bold pr-3 border-r">05</h2>
                  <div className="text-left pl-3">
                    <h2 className=" font-semibold">October</h2>
                    <h2 className="text-xs">Thursday, 2023</h2>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[74px] h-[57px] rounded-lg flex justify-center items-center bg-[#FFB700]">
                <IoSearch className="text-2xl w-full "/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
