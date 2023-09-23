import React, { useContext } from 'react';
import google from '../../assets/images/google.png'
import github from '../../assets/images/github.png'
// import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import useTitle from '../../UseTitle/UseTitle';
import { Link,  useLocation,  useNavigate } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const SingUp = () => {
    useTitle('SingUp')

    // const { googleSingIn, githubSingIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

    const { createUser, updateUserProfile,googleSingIn, githubSingIn} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;


        createUser(email, password)
            .then(result => {
                // console.log(result.user);
                handleUpdateUserProfile(name, photoURL);
                form.reset();
            })
            .catch(error => {
                console.log(error);
               
            })

    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(result => {
               
            })
            .catch(err => {
                console.log(err);

            })
    }

    const handleGoogleSingIn = () => {
        googleSingIn(googleProvider)
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true });
            })
            .then(error => {
                console.log(error);
            })
    }

    const handleGithubSignIn = () => {
        githubSingIn(githubProvider)
            .then(result => {
                // console.log(result.user);
                navigate(from, { replace: true });
            })
            .then(error => {
                console.log(error);
            })
    }
    return (
<div className='p-5 py-6'>
    <h2 className='title pt-2 font-bold md:text-3xl text-2xl'>Register!</h2>
    <form onSubmit={handleSubmit} className="mt-4 md:w-2/3 lg:w-1/2 mx-auto">
        <div className="form_control mb-4">
            <label className='label' htmlFor="name">Name</label>
            <input type="text" name='name' placeholder='Your Name' id='name' required className="w-full py-2 px-3 border rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
        <div className="form_control mb-4">
            <label className='label' htmlFor="email">Email</label>
            <input type="email" name='email' placeholder='Your Email' id='email' required className="w-full py-2 px-3 border rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
        <div className="form_control mb-4">
            <label className='label' htmlFor="password">Password</label>
            <input type="password" name='password' placeholder='Your Password' id='password' required className="w-full py-2 px-3 border rounded-lg focus:outline-none focus:border-blue-500" />
            <span className='text-red-600 text-center'></span>
        </div>
        <div className="form_control mb-4">
            <label className='label' htmlFor="photoURL">Photo URL</label>
            <input type="text" name='photoURL' placeholder='photoURL' id='photoURL' required className="w-full py-2 px-3 border rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
        <input type="submit" value="SignUp" style={{backgroundColor: '#C60315'}}  className="border mt-4 text-1xl rounded-lg  text-white h-10 md:w-full w-full  sm:w-28 " />

        <p className='new_account mt-4'> <Link to='/login' className='text-red-600'>Already have an account?</Link></p>

        <div className='divide_container my-2'>
            <p className='divide'></p>
            <p>or</p>
            <p className='divide'></p>
        </div>

        <div className='social_login pb-4 mt-4 space-y-1'>
            <div className='flex items-center justify-center'>
                <button onClick={handleGoogleSingIn} className='text-white mb-2 flex items-center justify-center'>
                    <img className='social-img' src={google} alt="" />
                    {/* <span>SignIn Google</span> */}
                </button>
            </div>
            {/* <div className='flex items-center justify-center'>
                <button onClick={handleGithubSignIn} className='text-white flex items-center justify-center gap-3 lg:w-[300px] lg:h-[50px] bg-gradient-to-r from-[#0F3D4C] to-[#39c8efe8]'>
                    <img className='social-img' src={github} alt="" />
                    <span>SignIn Github</span>
                </button>
            </div> */}
        </div>
    </form>
</div>

    );
};

export default SingUp;