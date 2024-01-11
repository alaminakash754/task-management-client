import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Tasks = ({ task,userTask,setUserTask }) => {
    const { title, description, deadline, priority, _id } = task;
    
    const handleDeleteTask = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://task-management-server-omega-three.vercel.app/userTask/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your task has been deleted.",
                                icon: "success"
                            });
                            const remaining = userTask.filter(Task => Task._id !== _id);
                            console.log(remaining);
                            setUserTask(remaining);
                        }

                    });
            }

        });
    }

    return (
        <div className="border-b-4 border-yellow-300 ml-5">
            <h1><span className="text-lg font-semibold">Title:</span> {title}</h1>
            <h3><span className="text-lg font-semibold">Description:</span> {description}</h3>
            <h4><span className="text-lg font-semibold">Task Deadline:</span>{deadline}</h4>
            <h4><span className="text-lg font-semibold">Priority:</span> {priority}</h4>
            <div className="text-center">
                <Link to={`/editTask/${_id}`}><button><FaEdit className="text-lg"></FaEdit></button></Link>
                <button onClick={() => handleDeleteTask(_id)} className="btn btn-ghost btn-sm"><FaTrashAlt className="text-red-600"></FaTrashAlt></button>
            </div>
        </div>
    );
};

export default Tasks;