import React, { useContext } from 'react';
import google from '../../assets/images/google.png'
import github from '../../assets/images/github.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const SingUp = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;


        createUser(email, password)
            .then(result => {
                console.log(result.user);
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
    return (
        <div className='form_container drop-shadow-2xl py-6'>
            <h2 className='title pt-2 text-cyan-600 font-bold text-3xl'>Register!</h2>
            <form onSubmit={handleSubmit}>
                <div className="form_control">
                    <label className='label' htmlFor="name">Name</label>
                    <input type="text" name='name' placeholder='Your Name' id='name' required />
                </div>
                <div className="form_control">
                    <label className='label' htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Your Email' id='email' required />
                </div>
                <div className="form_control">
                    <label className='label' htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Your Password' id='password' required />
                    <span className='text-red-600 text-center'></span>
                </div>
                <div className="form_control">
                    <label className='label' htmlFor="photoURL">Photo URL</label>
                    <input type="text" name='photoURL' placeholder='photoURL' id='photoURL' required />
                </div>
                <input type="submit" value="SignUp" className='submit_btn' />
            </form>
            <p className='new_account'> <Link to='/login' className='text-red-600'>Already have an account?</Link></p>
            {/* <div className='divide_container'>
                <p className='divide'></p>
                <p>or</p>
                <p className='divide'></p>
            </div> */}
          
        </div>
    );
};

export default SingUp;