import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.log(error))
    }
    console.log(user);

    const menuItems = <>
        <li className='mr-1 font-bold'> <Link to="/">Home</Link></li>
        <li className='mr-1 font-bold'> <Link to="/alltoy">All-Toy</Link></li>
        <li className='font-bold'><Link to="/blog">Blog</Link></li>
        {user ?
            <>

                <li className='font-bold'><Link to="/addtoy">Add_Toys</Link></li>
                <li className='font-bold'><Link to="/mytoy">My_Toy</Link></li>
            </> :
            <>

            </>
        }
    </>



    return (
        <div className='py-4'>
            <div className="navbar lg:w-[1280px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content  mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/" className="logo flex items-center gap-2 h-auto w-auto">
                        <h1 className='text-center text-4xl font-bold text-cyan-600   mb-6'>ToyZone</h1>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 mr-5">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end" >
                    {user ?
                        <>
                            <button onClick={handleLogout} className='btn btn-ghost capitalize'>Logout</button>
                        </> :
                        <>
                            <button className='mx-4 capitalize'><Link to='/singup'>Register</Link></button>
                            <button className='capitalize'><Link to='/login'>Login</Link></button>


                        </>
                    }
                    <span>{user?.photoURL ?
                        <div className="tooltip tooltip-left tooltip-warning" data-tip={user?.displayName || user?.email}>
                            <img style={{ width: "45px", borderRadius: "50%" }} src={user.photoURL} alt='' />

                        </div>
                        :
                        <FaUserCircle className='text-[25px] ml-2'>O</FaUserCircle>}</span>
                </div>

            </div>

        </div>
    );
};

export default Navbar;