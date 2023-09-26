import React, { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Provider/AuthProvider';

const img_hosting_api = import.meta.env.VITE_image_api_token;


const AddToy = () => {

    const { user } = useContext(AuthContext)



    const handleAddtoys = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const postedBy = form.postedBy.value;
        const salername = form.salername.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const category = form.category.value;
        const description = form.description.value;
        const photo = form.image.value;
        const phone = form.phone.value;
        const boyos = form.boyos.value;
        const details = form.details.value;
        const parmanent = form.parmanent.value;
        const present = form.present.value;



        const addToy = { name, quantity, salername, price, category, description, photo, postedBy, rating, phone, boyos, details, parmanent, present }

        // console.log(addToy);

        // send data to the server
        fetch('https://sports-toy-zone.vercel.app/postToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToy)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: ' Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })
        form.reset()
    }

    console.log(img_hosting_api);
    return (
        <div className=" p-4 md:p-24 rounded-3xl py-7 shadow-lg">
            <h2 style={{ color: '#C60315' }} className="text-center text-4xl font-bold   mb-6">রক্তদাতার তথ্য </h2>
            <form onSubmit={handleAddtoys}>
                {/* form name and quantity row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text  " > রক্তদাতার ছবি </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="ছবি " className=" p-4 file-input file-input-bordered w-full focus:outline-none focus:border-red-500" required />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text ">রক্তদাতার নাম</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="নাম" className="input input-bordered w-full focus:outline-none focus:border-red-500" />
                        </label>
                    </div>
                    <div className="form-control w-full md:w-1/2 md:ml-4 ">
                        <label className="label">
                            <span className="label-text">রক্তের ধরন</span>
                        </label>
                        <select name='category' className="select select-bordered w-full  focus:outline-none focus:border-red-500">
                            <option value='A+'>A+</option>
                            <option value='A-'>A-</option>
                            <option value='B+'>B+</option>
                            <option value='B-'>B-</option>
                            <option value='AB+'>AB+</option>
                            <option value='AB-'>AB-</option>
                            <option value='O+'>O+</option>
                            <option value='O-'>O-</option>


                        </select>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text ">ইউজার নাম</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="salername" placeholder=" নাম" className="input input-bordered w-full focus:outline-none focus:border-red-500" defaultValue={user?.displayName} />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text ">ইউজার ইমেইল
                            </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="postedBy" placeholder="ইমেইল" className="input input-bordered w-full focus:outline-none focus:border-red-500" defaultValue={user?.email} />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text ">ঠিকানা, জেলা</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="জেলা" className="input input-bordered w-full focus:outline-none focus:border-red-500" />
                        </label>
                    </div>
                    <div className="form-control sm:w-full md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text ">বিভাগ</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="বিভাগ" className="input input-bordered w-full focus:outline-none focus:border-red-500" />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text ">স্থায়ী ঠিকানা</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="parmanent" placeholder="স্থায়ী ঠিকানা" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control sm:w-full md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text ">বর্তমান ঠিকানা</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="present" placeholder="বর্তমান ঠিকানা " className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8 ">

                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text ">মোবাইল নাম্বার </span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="phone" placeholder="মোবাইল নাম্বার " className="input input-bordered w-full focus:outline-none focus:border-red-500" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text ">বয়স</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="boyos" placeholder="বয়স" className="input input-bordered w-full focus:outline-none focus:border-red-500" />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8 ">

                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text ">কতবার রক্ত দিয়েছেন </span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="rating" placeholder="কতবার রক্ত দিয়েছেন" className="input input-bordered w-full focus:outline-none focus:border-red-500" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text ">শেষবার রক্তদানের তারিখ</span>
                        </label>
                        <label className="input-group">
                            <input type="date" name="description" placeholder="Details" className="input input-bordered w-full focus:outline-none focus:border-red-500" />
                        </label>
                    </div>
                </div>
                <div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">কেনো আপনি স্বেচ্ছায় রক্তদানে ইচ্ছুক</span>
                        </label>
                        <label className="input-group">
                            <textarea
                                className='w-full border border-black p-4 focus:outline-none focus:border-red-500'
                                name="details"
                                id=""
                                cols="30"
                                rows="10"
                                placeholder='আপনার মতামত লিখুন'
                            ></textarea>
                        </label>
                    </div>

                </div>
                {
                    user ? (
                        <button
                            style={{ backgroundColor: '#C60315' }}
                            className="border mt-4 text-1xl rounded-lg text-white h-10 w-full sm:w-28 "
                        >
                            SUBMIT
                        </button>
                    ) : (
                        <button
                 
                        disabled={true}
                            style={{ backgroundColor: 'gray' }}
                            className="border  mt-4 text-1xl rounded-lg text-white h-10 w-full sm:w-28"
                        >
                            Disabled
                        </button>
                    )
                }


            </form>
        </div>
    );
};

export default AddToy;