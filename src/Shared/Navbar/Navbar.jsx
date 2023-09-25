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

        <li className='mr-1 md:mr-6 font-bold'> <Link to="/alltoy">সকল রক্তদাতা</Link></li>
 
          

                <li className='font-bold mr-1 md:mr-6'><Link to="/addtoy">নতুন যোগদান</Link></li>
                <li className='font-bold mr-1 md:mr-6'><Link to="/mytoy">ইউজার কালেকশন</Link></li>
    
  
        
    </>



    return (
        <div style={{backgroundColor:'#F6F6F6'}} className='py-4 flex items-center content-center  '>
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
                    <Link to="/" className="logo flex items-center gap-2 h-auto sm:mt-3 w-auto">
                        <img style={{borderRadius: "50%" }} src="https://www.nicepng.com/png/detail/117-1179838_blood-donation-camp-blood-donation-logo-png.png"
                        className='w-8 md:w-9'
                        alt="" />
                        <h1 style={{color: '#C60315'}} className='text-center md:text-3xl  mt-7 font-bold  mb-6'>রক্তদান</h1>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal mt-3 px-1 mr-5">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end" >
                    {user ?
                        <>
                            <button onClick={handleLogout} className='btn btn-ghost capitalize md:text-xl'>Logout</button>
                        </> :
                        <>
                            <button className='mx-4 capitalize'><Link to='/singup'>Register</Link></button>
                            <button className='capitalize'><Link to='/login'>Login</Link></button>


                        </>
                    }
                    <span>{user?.photoURL?
                        <div className="tooltip tooltip-left tooltip-warning" data-tip={user?.displayName || user?.email}>
                            <img style={{ width: "45px", borderRadius: "50%" }} src={user?.photoURL} alt='' />

                        </div>
                        :
                        <FaUserCircle className='text-[25px] ml-2'>O</FaUserCircle>}</span>
                </div>

            </div>

        </div>
    );
};

export default Navbar;