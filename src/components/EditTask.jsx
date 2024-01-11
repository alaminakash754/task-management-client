import axios from "axios";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EditTask = () => {
    const task = useLoaderData();
    const { title, description, deadline, priority, _id } = task;
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
            const taskItem = {
                title: data.title,
                description: data.description,
                deadline: data.deadline,
                priority: data.priority
            }
            axios.put(`https://task-management-server-omega-three.vercel.app/userTask/${_id}`, taskItem)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${data.title} task updated successfully!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                navigate('/dashboard');
            })
           
        
    };

    return (
        <div>
            <h2 className="my-5 text-3xl  text-center font-medium text-yellow-500 shadow-md shadow-yellow-300">Update Task</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full my-2">
                        <div className="label">
                            <span className="label-text">Task Titles</span>                    
                        </div>
                        <input type="text" defaultValue={title} placeholder="title" {...register("title")} className="input input-bordered w-full" />                 
                    </label>
                    <label className="form-control w-full my-2">
                        <div className="label">
                            <span className="label-text">Task Description</span>                    
                        </div>
                        <input type="text" defaultValue={description} placeholder="description" {...register("description")} className="input input-bordered w-full " />                 
                    </label>
                    <label className="form-control w-full my-2">
                        <div className="label">
                            <span className="label-text">Task Deadline</span>                    
                        </div>
                        <input type="text" defaultValue={deadline} placeholder="Deadline" {...register("deadline")} className="input input-bordered w-full " />                 
                    </label>
                    <label className="form-control w-full my-2">
                        <div className="label">
                            <span className="label-text">Task Priority</span>                    
                        </div>
                        <select defaultValue={priority}
                        {...register("priority")}
                        className="select select-bordered w-full my-6">
                        <option disabled value='default'>Task Priority</option>
                        <option>Low</option>
                        <option>Moderate</option>
                        <option>High</option>
                    </select>                 
                    </label>
                  
                    <input className="btn btn-block bg-blue-300 border-0 border-b-2" type="submit" />
                </form>
            </div>


        </div>
    );
};

export default EditTask;