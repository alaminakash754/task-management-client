import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import Tasks from "./Tasks";
import { FaHome } from "react-icons/fa";



const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const userTasks = useLoaderData();
    const [userTask, setUserTask] = useState([]);

    
    return (
        <div>
            <div className="flex gap-2">
                <div className="bg-blue-300 max-h-max w-1/5">
                    <ul className="mt-[150px] mx-10">
                        <li className="mb-5 border-b-4">
                            <NavLink to='/dashboard'>
                                <div className="flex items-center gap-3">
                                    <FaHome></FaHome> <h4 className="text-lg font-semibold italic">Dashboard</h4>
                                </div>
                            </NavLink>
                        </li>
                        <li className="border-b-4">
                            <NavLink to='/'>
                                <div className="flex items-center gap-3">
                                    <FaHome></FaHome> <h4 className="text-lg font-semibold italic">Home</h4>
                                </div>

                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <h1 className="my-5 text-3xl  text-center font-medium text-yellow-500 shadow-md shadow-yellow-300 pb-2">Task Management System</h1>
                    <div className="flex justify-evenly shadow-lg shadow-yellow-300 items-center mt-5">
                        <h2 className="text-yellow-500 font-semibold text-xl">Hello, {user.displayName} </h2>
                        <Link to='/createTask'><button className="text-yellow-500 text-lg hover:bg-blue-300 p-2 rounded-lg font-bold">Create A Task</button></Link>
                        <img className="rounded-full h-20 w-20" src={user.photoURL} alt="" />
                    </div>
                    <div className="mt-6 grid sm:grid-cols-1 md:grid-cols-3">
                        <div className="bg-blue-300 ">
                            <h2 className="text-center text-lg font-semibold italic underline">To Do List : {userTasks.length}</h2>
                            {
                                userTasks.map(task => <Tasks key={task._id}
                                    task={task}
                                    userTask={userTask}
                                    setUserTask={setUserTask}>

                                </Tasks>)
                            }
                        </div>
                        <div className="bg-yellow-200">
                            <h2 className="text-center text-lg font-semibold italic underline">On Going</h2>
                        </div>
                        <div className="bg-orange-200">
                            <h2 className="text-center text-lg font-semibold italic underline">Completed</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;