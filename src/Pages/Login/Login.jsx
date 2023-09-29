import React, { useContext } from 'react';
import google from '../../assets/images/google.png'
// import github from '../../assets/images/github.png'
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

        // console.log(email, password);

        signInUser(email, password)
        .then(result => {
            // console.log(result.user);
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
        <div>
            <div className='form_container '>
                <h2 style={{color: '#C60315'}} className='title pt-2 font-bold md:text-3xl text-2xl'>Login!</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form_control">
                        <label className='label' htmlFor="email">Email</label>
                        <input type="email" name='email' placeholder='Your Email' id='email' required className=' focus:outline-none focus:border-red-500' />
                    </div>
                    <div className="form_control">
                        <label className='label' htmlFor="password">Password</label>
                        <input type='password' name='password' placeholder='Your Password' id='password' required className=' focus:outline-none focus:border-red-500' />
                    </div>

                    <input  type="submit" value="Login" style={{backgroundColor: '#C60315'}}  className="border mt-4 text-1xl rounded-lg  text-white h-10 w-full sm:w-28 " />
                </form>
                <p className='new_account'> <Link to='/singup' className='text-red-600'>Create a New Account</Link></p>
                <div className='divide_container my-2'>
                    <p className='divide'></p>
                    <p>or</p>
                    <p className='divide'></p>
                </div>
                <div className='social_login pb-4'>
                    <div className='flex items-center justify-center'>
                    <button onClick={handleGoogleSingIn} className='text-white mb-2 flex items-center justify-center'>
                  
                            <img className='social-img' src={google} alt="" />
                    </button>
                    </div>
                    {/* <div className='flex items-center justify-center'>
                    <button onClick={handleGithubSignIn} className='text-white flex items-center justify-center gap-3 lg:w-[300px] lg:h-[50px] bg-gradient-to-r from-[#0F3D4C] to-[#39c8efe8]'>
                        <img className='social-img' src={github} alt="" />
                        <span>SignIn Github</span>
                    </button>
                    </div> */}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;






// import React from 'react';
// import { useForm } from 'react-hook-form';
// import Swal from 'sweetalert2';
// import { AuthContext } from '../../Provider/AuthProvider';
// import { useContext } from 'react';

// const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

// const AddToy = () => {
//     const { user } = useContext(AuthContext);
//     const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
//     console.log(img_hosting_token);

//     const { handleSubmit, register, reset } = useForm();

//     const onSubmit = (data) => {
//         // send data to the server


//         const formData = new FormData();
//         formData.append('image', data.image[0])

//         fetch(img_hosting_url, {
//             method: 'POST',
//             body: formData
//         })

//         .then(res => res.json())
//         .then(imgResponse => {
//             console.log(imgResponse); 

//             if(imgResponse.success){


//                 const imgURL = imgResponse.data.display_url;
//                 // const { name, quantity, photo, salername, price, category, description, rating, phone, boyos ,details,parmanent,present} = showtoyInfo
//                 const { name, quantity, salername, price, category, description, rating, phone, boyos ,details,parmanent,present} = data;
//                 const newItem = { name, quantity, salername, price, category, description, rating, phone, boyos ,details,parmanent,present, photo:imgURL}
//                 console.log(newItem)

//                 fetch('https://sports-toy-zone.vercel.app/postToy', {
//                     method: 'POST',
//                     headers: {
//                         'content-type': 'application/json',
//                     },
//                     body: JSON.stringify(newItem),
//                 })
//                     .then((res) => res.json())
//                     .then((data) => {
//                         if (data.insertedId) {
//                             Swal.fire({
//                                 title: 'Success!',
//                                 text: ' Added Successfully',
//                                 icon: 'success',
//                                 confirmButtonText: 'Done',
//                             });
//                         }
//                     });
//                 reset(); // Reset the form after submission
//             }



//         });
//     };

//     return (
//         <div className=" p-4 md:p-24 rounded-3xl py-7 shadow-lg">
//             <h2 style={{ color: '#C60315' }} className="text-center text-4xl font-bold mb-6">
//                 রক্তদাতার তথ্য
//             </h2>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <div className="mb-8">
//                     <div className="form-control w-full">
//                         <label className="label">
//                             <span className="label-text  "> রক্তদাতার ছবি </span>
//                         </label>
//                         <label className="input-group">
//                             <input
//                                 type="file"
//                                 name="image"
//                                 placeholder="ছবি"
//                                 className=" file-input file-input-bordered w-full focus:outline-none focus:border-red-500"
//                                 {...register('image')}
//                                 required
//                             />
//                         </label>
//                     </div>
//                 </div>
//                 <div className="md:flex mb-8">
//                     <div className="form-control md:w-1/2">
//                         <label className="label">
//                             <span className="label-text ">রক্তদাতার নাম</span>
//                         </label>
//                         <label className="input-group">
//                             <input
//                                 type="text"
//                                 name="name"
//                                 placeholder="নাম"
//                                 className="input input-bordered w-full focus:outline-none focus:border-red-500"
//                                 {...register('name')}
//                             />
//                         </label>
//                     </div>
//                     <div className="form-control w-full md:w-1/2 md:ml-4 ">
//                         <label className="label">
//                             <span className="label-text">রক্তের ধরন</span>
//                         </label>
//                         <select
//                             name="category"
//                             className="select select-bordered w-full  focus:outline-none focus:border-red-500"
//                             {...register('category')}
//                         >
//                             <option value="A+">A+</option>
//                             <option value="A-">A-</option>
//                             <option value="B+">B+</option>
//                             <option value="B-">B-</option>
//                             <option value="AB+">AB+</option>
//                             <option value="AB-">AB-</option>
//                             <option value="O+">O+</option>
//                             <option value="O-">O-</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div className="md:flex mb-8">
//                     <div className="form-control md:w-1/2">
//                         <label className="label">
//                             <span className="label-text ">ইউজার নাম</span>
//                         </label>
//                         <label className="input-group">
//                             <input
//                                 type="text"
//                                 name="salername"
//                                 placeholder=" নাম"
//                                 className="input input-bordered w-full focus:outline-none focus:border-red-500"
//                                 defaultValue={user?.displayName}
//                                 {...register('salername')}
//                             />
//                         </label>
//                     </div>
//                     <div className="form-control md:w-1/2 md:ml-4">
//                         <label className="label">
//                             <span className="label-text ">ইউজার ইমেইল</span>
//                         </label>
//                         <label className="input-group">
//                             <input
//                                 type="text"
//                                 name="postedBy"
//                                 placeholder="ইমেইল"
//                                 className="input input-bordered w-full focus:outline-none focus:border-red-500"
//                                 defaultValue={user?.email}
//                                 {...register('postedBy')}
//                             />
//                         </label>
//                     </div>
//                 </div>
//                 <div className="md:flex mb-8">
//                     <div className="form-control md:w-1/2">
//                         <label className="label">
//                             <span className="label-text ">ঠিকানা, জেলা</span>
//                         </label>
//                         <label className="input-group">
//                             <input
//                                 type="text"
//                                 name="price"
//                                 placeholder="জেলা"
//                                 className="input input-bordered w-full focus:outline-none focus:border-red-500"
//                                 {...register('price')}
//                             />
//                         </label>
//                     </div>
//                     <div className="form-control sm:w-full md:w-1/2 md:ml-4">
//                         <label className="label">
//                             <span className="label-text ">বিভাগ</span>
//                         </label>
//                         <label className="input-group">
//                             <input
//                                 type="text"
//                                 name="quantity"
//                                 placeholder="বিভাগ"
//                                 className="input input-bordered w-full focus:outline-none focus:border-red-500"
//                                 {...register('quantity')}
//                             />
//                         </label>
//                     </div>
//                 </div>
//                 <div className="md:flex mb-8">
//                     <div className="form-control md:w-1/2">
//                         <label className="label">
//                             <span className="label-text ">স্থায়ী ঠিকানা</span>
//                         </label>
//                         <label className="input-group">
//                             <input
//                                 type="text"
//                                 name="parmanent"
//                                 placeholder="স্থায়ী ঠিকানা"
//                                 className="input input-bordered w-full"
//                                 {...register('parmanent')}
//                             />
//                         </label>
//                     </div>
//                     <div className="form-control sm:w-full md:w-1/2 md:ml-4">
//                         <label className="label">
//                             <span className="label-text ">বর্তমান ঠিকানা</span>
//                         </label>
//                         <label className="input-group">
//                             <input
//                                 type="text"
//                                 name="present"
//                                 placeholder="বর্তমান ঠিকানা "
//                                 className="input input-bordered w-full"
//                                 {...register('present')}
//                             />
//                         </label>
//                     </div>
//                 </div>
//                 <div className="md:flex mb-8 ">
//                     <div className="form-control md:w-1/2 ">
//                         <label className="label">
//                             <span className="label-text ">মোবাইল নাম্বার </span>
//                         </label>
//                         <label className="input-group">
//                             <input
//                                 type="number"
//                                 name="phone"
//                                 placeholder="মোবাইল নাম্বার "
//                                 className="input input-bordered w-full focus:outline-none focus:border-red-500"
//                                 required
//                                 {...register('phone')}
//                             />
//                         </label>
//                     </div>
//                     <div className="form-control md:w-1/2 md:ml-4">
//                         <label className="label">
//                             <span className="label-text ">বয়স</span>
//                         </label>
//                         <label className="input-group">
//                             <input
//                                 type="number"
//                                 name="boyos"
//                                 placeholder="বয়স"
//                                 className="input input-bordered w-full focus:outline-none focus:border-red-500"
//                                 {...register('boyos')}
//                             />
//                         </label>
//                     </div>
//                 </div>
//                 <div className="md:flex mb-8 ">
//                     <div className="form-control md:w-1/2 ">
//                         <label className="label">
//                             <span className="label-text ">কতবার রক্ত দিয়েছেন </span>
//                         </label>
//                         <label className="input-group">
//                             <input
//                                 type="number"
//                                 name="rating"
//                                 placeholder="কতবার রক্ত দিয়েছেন"
//                                 className="input input-bordered w-full focus:outline-none focus:border-red-500"
//                                 required
//                                 {...register('rating')}
//                             />
//                         </label>
//                     </div>
//                     <div className="form-control md:w-1/2 md:ml-4">
//                         <label className="label">
//                             <span className="label-text ">শেষবার রক্তদানের তারিখ</span>
//                         </label>
//                         <label className="input-group">
//                             <input
//                                 type="date"
//                                 name="lastDonationDate"
//                                 placeholder="শেষবার রক্তদানের তারিখ"
//                                 className="input input-bordered w-full focus:outline-none focus:border-red-500"
//                                 {...register('lastDonationDate')}
//                             />
//                         </label>
//                     </div>
//                 </div>
//                 <div>
//                     <div className="form-control w-full">
//                         <label className="label">
//                             <span className="label-text">কেনো আপনি স্বেচ্ছায় রক্তদানে ইচ্ছুক</span>
//                         </label>
//                         <label className="input-group">
//                             <textarea
//                                 className='w-full border border-black p-4 focus:outline-none focus:border-red-500'
//                                 name="details"
//                                 id="details"
//                                 cols="30"
//                                 rows="10"
//                                 placeholder='আপনার মতামত লিখুন'
//                                 {...register('details')}
//                             ></textarea>
//                         </label>
//                     </div>
//                 </div>
//                 {user ? (
//                     <button
//                         style={{ backgroundColor: '#C60315' }}
//                         className="border mt-4 text-1xl rounded-lg text-white h-10 w-full sm:w-28"
//                         type="submit"
//                     >
//                         SUBMIT
//                     </button>
//                 ) : (
//                     <button
//                         disabled={true}
//                         style={{ backgroundColor: 'gray' }}
//                         className="border mt-4 text-1xl rounded-lg text-white h-10 w-full sm:w-28"
//                     >
//                         Disabled
//                     </button>
//                 )}
//             </form>
//         </div>
//     );
// };

// export default AddToy;
