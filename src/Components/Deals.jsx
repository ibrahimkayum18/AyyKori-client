const Deals = () => {
  return (
    <div className=" my-5 px-5 lg:px-0 lg:w-[1120px] mx-auto">
      <h2 className="text-3xl font-bold py-5">Deals and Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        <div className="bg-white shadow-2xl  rounded-xl flex items-center justify-center gap-3">
          <img
            src="https://i.ibb.co/cx3b8Dv/slider-Up-to-14-discount-on-Domestic-flights-2.png"
            className=" rounded-xl"
            alt=""
          />
          <div>
            <h2 className="pt-5 text-left font-bold">
              With bkash payment only
            </h2>
            <h2 className=" text-left text-xl text-blue-600 font-bold">
              up to 14% discount on the base fare of domestic flights
            </h2>
          </div>
        </div>
        <div className="bg-white shadow-2xl  rounded-xl flex items-center justify-center gap-3">
          <img
            src="https://i.ibb.co/gvBxWnY/slider-Up-to-14-discount-on-Domestic-flights-2-1.png"
            className=" rounded-xl"
            alt=""
          />
          <div>
            <h2 className="pt-5 text-left font-bold">
              With bkash payment only
            </h2>
            <h2 className=" text-left text-xl text-blue-600 font-bold">
              up to 14% discount on the base fare of domestic flights
            </h2>
          </div>
        </div>
        <div className="bg-white shadow-2xl  rounded-xl flex items-center justify-center gap-3">
          <img
            src="https://i.ibb.co/mC0dVfw/slider-Up-to-14-discount-on-Domestic-flights-2-2.png"
            className=" rounded-xl"
            alt=""
          />
          <div>
            <h2 className="pt-5 text-left font-bold">
              With bkash payment only
            </h2>
            <h2 className=" text-left text-xl text-blue-600 font-bold">
              up to 14% discount on the base fare of domestic flights
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
