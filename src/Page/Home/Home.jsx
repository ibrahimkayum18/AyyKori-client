import Banner from "../../Components/Banner";
import Deals from "../../Components/Deals";
import Features from "../../Components/Features";
import Navbar from "../../Components/Navbar";
import PopularAirlines from "../../Components/PopularAirlines";
import Testimonial from "../../Components/Testimonial";
import TravelBlogs from "../../Components/TravelBlogs";

const Home = () => {
    return (
        <div className="bg-gray-100">
            <Navbar />
            <Banner />
            <Features />
            <Deals />
            <PopularAirlines />
            <Testimonial />
            <TravelBlogs />
            
        </div>
    );
};

export default Home;