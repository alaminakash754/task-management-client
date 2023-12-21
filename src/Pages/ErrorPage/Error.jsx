import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="error-bg relative mx-auto items-center justify-center text-center">
            <img className="h-[550px] w-[800px] ml-[200px] p-6" src="https://i.ibb.co/bWK40q2/13315300-5203299.jpg" alt="" />
            <div className=" absolute top-[450px] right-[490px]">
                <Link to='/'><button className="bg-black p-8 text-3xl text-white hover:bg-green-300 rounded-lg"> GO HOME!</button></Link>
            </div>

        </div>
    );
};

export default Error;