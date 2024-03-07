import Banner from "../../Components/Banner";
import Deals from "../../Components/Deals";
import Features from "../../Components/Features";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import PopularAirlines from "../../Components/PopularAirlines";
import Subscribe from "../../Components/Subscribe";
import Testimonial from "../../Components/Testimonial";
import TravelBlogs from "../../Components/TravelBlogs";

const Home = () => {
    return (
        <div className="bg-gray-100 relative">
            <Navbar />
            <Banner />
            <Features />
            <Deals />
            <PopularAirlines />
            <Testimonial />
            <TravelBlogs />
            <Subscribe />
            <Footer />
            
        </div>
    );
};

export default Home;