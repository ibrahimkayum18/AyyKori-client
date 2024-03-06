import Banner from "../../Components/Banner";
import Features from "../../Components/Features";
import Navbar from "../../Components/Navbar";

const Home = () => {
    return (
        <div className="bg-gray-100">
            <Navbar />
            <Banner />
            <Features />
            
        </div>
    );
};

export default Home;