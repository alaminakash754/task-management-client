import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

    const handleToggle = e => {
        if (e.target.checked) {
            setTheme('dark');
        } else {
            setTheme('light')
        }
    }

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme]);

    const handleSignOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.error(error)
            })
    }

    const navLinks = <>
    <li className="text-yellow-600 font-semibold"><Link to='/'>Home</Link></li>
    <li className="text-yellow-600 font-semibold"><Link to='/dashboard'>Dashboard</Link></li>
   
</>
    return (
        <>
        <div className="navbar fixed z-10 w-[1200px] bg-opacity-10 bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-circle btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link><p className="text-xl text-yellow-600 italic font-bold">Task Management</p></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <label className="swap swap-rotate mr-2">

                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" onChange={handleToggle} />

                    {/* sun icon */}
                    
                    <p className="btn bg-blue-300 swap-on fill-current text-yellow-600 border-0 border-b-4 hover:bg-white">Dark</p>

                    {/* moon icon */}
                    
                    <p className="btn bg-blue-300 text-yellow-600 swap-off fill-current border-0 border-b-4 hover:bg-white">Light</p>

                </label>
                {
                    user ?
                        <>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full ">
                                        <img alt="" src={user.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-lg dropdown-content mt-2 z-[1] shadow rounded-box w-52 bg-blue-300">
                                    <li>
                                        <h3 className="">{user.displayName
                                        }</h3>
                                    </li>
                                    <li><button onClick={handleSignOut} className="btn-sm mb-2 pb-2">Sign out</button></li>

                                </ul>
                            </div>

                        </>
                        :
                        <Link to='/login'><button className="btn btn-active btn-accent p-3 border-0 border-b-4 text-yellow-600 hover:bg-white text-xl">Login</button></Link>
                }


            </div>
        </div>
    </>
    );
};

export default Navbar;