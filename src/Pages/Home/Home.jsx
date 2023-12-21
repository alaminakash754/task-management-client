import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Service from "./Service";
import Footer from "./Footer/Footer";


const Home = () => {
    return (
        <div>
            <h1 className="transition shadow-xl shadow-yellow-300 delay-300 duration-300 ease-in-out font-bold text-center text-5xl text-yellow-500 hover:text-orange-500 absolute top-[300px] left-[400px]">Task Management system</h1>
            <img src="https://i.ibb.co/BBv1jrJ/6976404-4584.jpg" alt="" />
            <Link to='/dashboard'>
                <div className="absolute top-[400px] left-[570px]">
                    <button className="btn btn-active  p-3 bg-blue-300 border-0 border-b-4 text-red-600 hover:bg-white text-xl">Explore More <FaArrowAltCircleRight></FaArrowAltCircleRight></button>
                </div>
            </Link>
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default Home;