import img from "./../assets/Isolation_Mode.png";
const Subscribe = () => {
  return (
    <div className="flex justify-center items-center py-12 lg:w-[1120px] mx-auto px-5 lg:px-0  bg-gray-100">
      <div className=" w-full  rounded-lg overflow-hidden">
        <div className="md:flex items-center">
          {/* Left side with image */}
          <div className="md:w-1/2 p-4">
            <img
              className="w-full h-auto md:w-[386px] md:h-[394px] "
              src={img}
              alt="Image"
            />
          </div>
          {/* Right side with title, description, input field, and subscribe button */}
          <div className="md:w-1/2 p-4">
            <div className=" mb-4">
              <h2 className="text-4xl md:w-3/4 font-bold text-gray-800">
                Subscribe to our Newsletter!{" "}
              </h2>
              <p className="text-blue-600 md:w-3/4 text-xl">
                Subscribe to our newsletter and stay updated.{" "}
              </p>
            </div>
            <form>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 leading-tight focus:outline-none focus:shadow-outline border border-gray-300 rounded appearance-none"
                  placeholder="Your Email"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#FFB700]  w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
