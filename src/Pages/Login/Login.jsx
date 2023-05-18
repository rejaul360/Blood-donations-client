import React, { useContext } from 'react';
import google from '../../assets/images/google.png'
import github from '../../assets/images/github.png'
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../Provider/AuthProvider';
import useTitle from '../../UseTitle/UseTitle';

const Login = () => {

    useTitle('Login')

    const { signInUser, googleSingIn, githubSingIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signInUser(email, password)
        .then(result => {
            console.log(result.user);
            form.reset();
            toast('Login successful')
            navigate(from, { replace: true });

        })
        .catch(err => {
            console.log(err.message);
   

        })
    }
    const handleGoogleSingIn = () => {
        googleSingIn(googleProvider)
            .then(result => {
                console.log(result.user);
            })
            .then(error => {
                console.log(error);
            })
    }

    const handleGithubSignIn = () => {
        githubSingIn(githubProvider)
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true });
            })
            .then(error => {
                console.log(error);
            })
    }
    
    return (
        <div>
            <div className='form_container drop-shadow-2xl'>
                <h2 className='title pt-2 text-cyan-600 font-bold text-3xl'>Login!</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form_control">
                        <label className='label' htmlFor="email">Email</label>
                        <input type="email" name='email' placeholder='Your Email' id='email' required />
                    </div>
                    <div className="form_control">
                        <label className='label' htmlFor="password">Password</label>
                        <input type='password' name='password' placeholder='Your Password' id='password' required />
                    </div>

                    <input  type="submit" value="Login" className='submit_btn' />
                </form>
                <p className='new_account'> <Link to='/singup' className='text-red-600'>Create a New Account</Link></p>
                <div className='divide_container my-2'>
                    <p className='divide'></p>
                    <p>or</p>
                    <p className='divide'></p>
                </div>
                <div className='social_login pb-4'>
                    <div className='flex items-center justify-center'>
                    <button onClick={handleGoogleSingIn} className='text-white mb-2 flex items-center justify-center gap-3 lg:w-[300px] lg:h-[50px] bg-gradient-to-r from-[#0F3D4C] to-[#39c8efe8]'>
                  
                            <img className='social-img' src={google} alt="" />
                
                        <span>SignIn Google</span>
                    </button>
                    </div>
                    <div className='flex items-center justify-center'>
                    <button onClick={handleGithubSignIn} className='text-white flex items-center justify-center gap-3 lg:w-[300px] lg:h-[50px] bg-gradient-to-r from-[#0F3D4C] to-[#39c8efe8]'>
                        <img className='social-img' src={github} alt="" />
                        <span>SignIn Github</span>
                    </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;