import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";


const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="mt-10">
            <h1 className="my-5 text-3xl  text-center font-medium text-yellow-500 shadow-md shadow-yellow-300">Task Management System</h1>
            <div className="flex justify-evenly shadow-lg shadow-yellow-300 items-center mt-10">
                <h2 className="text-yellow-500 font-semibold text-xl">Hello, {user.displayName} </h2> 
                <Link to='/createTask'><button className="text-yellow-500 text-lg hover:bg-blue-300 p-2 rounded-lg font-bold">Create A Task</button></Link>
                <img className="rounded-full" src={user.photoURL} alt="" />
            </div>
        </div>
    );
};

export default Dashboard;