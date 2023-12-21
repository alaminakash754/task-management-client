import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Login = () => {
    const [logInError, setLogInError] = useState('');
    const [successLogin, setSuccessLogin] = useState('')

    const { signInUser, signWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        setLogInError('');
        setSuccessLogin('');

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                setSuccessLogin(Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Logged in successfully',
                    showConfirmButton: false,
                    timer: 1500
                }))
                navigate('/dashboard');
            })
            .catch(error => {
                console.error(error);
                setLogInError(Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: '"email or password are wrong"',
                }));
            })
    }

    const handleGoogleSignIn = () => {
        signWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate('/');
            })

            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold text-gray-500 mb-3">Login Here now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" required className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' required placeholder="password" className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <p>New User? Please <Link to='/signup'><button className="btn btn-link">SignUp</button></Link></p>
                            <p><button onClick={handleGoogleSignIn} className="btn btn-ghost" >Google</button></p>
                        </div>
                        {
                            logInError && <p className="text-red-700">{logInError}</p>
                        }
                        {
                            successLogin && <p className="text-green-600">{successLogin}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;