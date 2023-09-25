import React, { useContext } from 'react';
import {  useLoaderData, } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const UpdatetoyInfo = () => {

    const { user } = useContext(AuthContext)

    // const navigate = useNavigate()
    // const location = useLocation()

    // let from = location.state?.from?.pathname || "/alltoy";

    const updateToy = useLoaderData()
    console.log(updateToy);
    const { _id, name, quantity, photo, price, category, description, rating, phone, boyos ,details,parmanent,present } = updateToy


    // console.log(updateToy);

    const handleUpdatetoys = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const description = form.description.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;

        const phone = form.phone.value;
        const boyos = form.boyos.value;
        const quantity = form.quantity.value;
        const parmanent = form.parmanent.value;
        const present = form.present.value;
        const details = form.details.value;
        const photo = form.image.value;



        const updateToy = { name, quantity, photo, price, category, description, rating, phone, boyos ,details,parmanent,present}

        console.log(updateToy);


        // ---------------send data to the server----------->

        fetch(`https://sports-toy-zone.vercel.app/allToy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: ' Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })

            
                }

              
            })
           
              form.reset(); 
    }

    return (
        <div className=" p-4 md:px-24 rounded-3xl py-2 shadow-lg">
            <h2 style={{color: '#C60315'}} className="md:text-3xl text-2xl  font-extrabold text-center py-6">আপনার ইনফরমেশন আপডেট করুন <span className='md:ml-3'>{name}</span></h2>
            <form onSubmit={handleUpdatetoys}>
            <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text  " > রক্তদাতার ছবি </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="ছবি " className="  p-4 file-input file-input-bordered w-full" defaultValue={photo} />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text ">রক্তদাতার নাম</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="নাম" className="input input-bordered w-full" defaultValue={name} />
                        </label>
                    </div>
                    <div className="form-control w-full md:w-1/2 md:ml-4 ">
                        <label className="label">
                            <span className="label-text">রক্তের ধরন</span>
                        </label>
                        <select name='category' className="select select-bordered w-full  " defaultValue={category}>
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
                            <input type="text" name="salername" placeholder=" নাম" className="input input-bordered w-full" defaultValue={user?.displayName} />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text ">ইউজার ইমেইল
                            </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="postedBy" placeholder="ইমেইল" className="input input-bordered w-full" defaultValue={user?.email} />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text ">ঠিকানা, জেলা</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="জেলা" className="input input-bordered w-full"  defaultValue={price} />
                        </label>
                    </div>
                    <div className="form-control sm:w-full md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text ">বিভাগ</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="বিভাগ" className="input input-bordered w-full"  defaultValue={quantity} />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text ">স্থায়ী ঠিকানা</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="parmanent" placeholder="স্থায়ী ঠিকানা" className="input input-bordered w-full" defaultValue={parmanent} />
                        </label>
                    </div>
                    <div className="form-control sm:w-full md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text ">বর্তমান ঠিকানা</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="present" placeholder="বর্তমান ঠিকানা " className="input input-bordered w-full" defaultValue={present}/>
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8 ">

                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text ">মোবাইল নাম্বার </span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="phone" placeholder="মোবাইল নাম্বার " className="input input-bordered w-full" defaultValue={phone}  />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text ">বয়স</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="boyos" placeholder="বয়স" className="input input-bordered w-full"  defaultValue={boyos} />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8 ">

                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text ">কতবার রক্ত দিয়েছেন </span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="rating" placeholder="কতবার রক্ত দিয়েছেন" className="input input-bordered w-full"   defaultValue={rating} />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text ">শেষবার রক্তদানের তারিখ</span>
                        </label>
                        <label className="input-group">
                            <input type="date" name="description" placeholder="শেষবার রক্তদানের তারিখ" className="input input-bordered w-full" defaultValue={description} />
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
                                className='w-full border border-black p-4'
                                name="details"
                                defaultValue={details}
                                id=""
                                cols="30"
                                rows="10"
                                placeholder='আপনার মতামত লিখুন'
                            ></textarea>
                        </label>
                    </div>

                </div>

                <input style={{backgroundColor: '#C60315'}}  type="submit" value="আপডেট" className="border mt-4 text-1xl rounded-lg  text-white h-10 w-full sm:w-28 " />

            </form>
        </div>
    );
};

export default UpdatetoyInfo;