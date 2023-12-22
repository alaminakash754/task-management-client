import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";


const CreateTask = () => {
    const {user} = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        if (user && user.email) {
            const taskItem = {
                title: data.title,
                description: data.description,
                deadline: data.deadline,
                priority: data.priority,
                email: user.email,
            }
            // 
            axios.post('http://localhost:5000/userTask', taskItem)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${data.title} is added to the menu!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
           
        }
    };
    return (
        <div>
            <h2 className="my-5 text-3xl  text-center font-medium text-yellow-500 shadow-md shadow-yellow-300">Add A Task</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full my-2">
                        <div className="label">
                            <span className="label-text">Task Titles</span>                    
                        </div>
                        <input type="text"  placeholder="title" {...register("title")} className="input input-bordered w-full" />                 
                    </label>
                    <label className="form-control w-full my-2">
                        <div className="label">
                            <span className="label-text">Task Description</span>                    
                        </div>
                        <input type="text"  placeholder="description" {...register("description")} className="input input-bordered w-full " />                 
                    </label>
                    <label className="form-control w-full my-2">
                        <div className="label">
                            <span className="label-text">Task Deadline</span>                    
                        </div>
                        <input type="text"  placeholder="Deadline" {...register("deadline")} className="input input-bordered w-full " />                 
                    </label>
                    <label className="form-control w-full my-2">
                        <div className="label">
                            <span className="label-text">Task Priority</span>                    
                        </div>
                        <select defaultValue='default'
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

export default CreateTask;