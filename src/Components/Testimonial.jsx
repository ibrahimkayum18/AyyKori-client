import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

const Testimonial = () => {
  return (
    <div className=" my-5 ">
      <h2 className="text-3xl px-5 lg:px-0 font-bold py-8 lg:w-[1120px] mx-auto">
        Testimonials
      </h2>
      <div className=" mx-auto bg-[#006CE4]">
        <div className="w-full lg:w-[1120px] mx-auto py-8 md:py-20 grid md:grid-cols-6 px-5 lg:px-0 gap-4">
          <div className=" col-span-1">
            <img
              className="w-full md:h-[283px] hidden md:block opacity-40"
              src="https://i.ibb.co/grZF36B/Rectangle-30.png"
              alt=""
            />
          </div>
          <div className="relative bg-white rounded-3xl md:rounded-2xl col-span-4 md:flex items-center">
            <img
              className="w-full md:w-auto mx-auto"
              src="https://i.ibb.co/bKycrTx/Rectangle-32.png"
              alt=""
            />
            <div className="p-5 lg:p-12">
              <div>
                <p>
                  "Unforgettable journeys with John and Sarah! Their travel
                  expertise turned our dreams into reality. Can't wait to
                  explore with them again!"
                </p>
                <div className="pt-5  flex justify-between items-center">
                  <div>
                    <h2 className=" text-2xl font-semibold">Emily</h2>
                    <p>Adventure Enthusiast</p>
                    <div className="rating rating-sm">
                      <input
                        type="radio"
                        name="rating-6"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-6"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-6"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-6"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-6"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </div>
                  <img className="" src="https://i.ibb.co/PhfpKhb/Capture.png" alt="" />
                </div>
              </div>
            </div>
            <HiArrowLongLeft className="absolute top-64 -left-0 md:-left-16  md:top-[125px]  lg:-left-32 text-5xl text-white" />
            <HiArrowLongRight className="absolute top-64 -right-0 md:-right-16  md:top-[125px]  lg:-right-32 text-5xl text-white" />
          </div>
          <div className="col-span-1 ">
            <img
              className="w-full md:h-[283px]  hidden md:block opacity-40"
              src="https://i.ibb.co/kBPwL31/Rectangle-33.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
