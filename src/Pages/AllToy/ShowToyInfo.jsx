import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
// import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ShowToyInfo = () => {

    const showtoyInfo = useLoaderData()

    const { name, quantity, photo, salername, price, category, description, rating, phone, boyos ,details,parmanent,present} = showtoyInfo

    return (
        <div>
            <h1 style={{color: '#C60315'}}  className="text-center  md:text-3xl text-2xl  font-bold md:py-6 mb-6">সকল রক্তদাতা ডিটেইল ইনফরমেশন</h1>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row w-full gap-6">
                    <div className=" lg:w-1/2 md:p-4 ">
                        <img src={photo} className=" lg:mx-0 rounded-lg shadow-2xl" alt="Toy" />
                    </div>
                    <div className=" p-4 md:p-8 space-y-3 w-full lg:w-1/2">
                        <h1 className="text-3xl text-red-600 font-bold">রক্তদাতার নাম: {name}</h1>
                        <p>ইউজার: {salername}</p>
                        <p>রক্তের ধরন: {category}</p>
                        <p>কতবার রক্ত দিয়েছেন: {rating}</p>
                        <p>মোবাইল নাম্বার: {phone}</p>
                        <p>বয়স: {boyos}</p>
                        <p>শেষবার রক্তদানের তারিখ: {description}</p>
                        <p>জেলা: {price}</p>
                        <p>বিভাগ: {quantity}</p>
                        <p>স্থায়ী ঠিকানা: {parmanent}</p>
                        <p>বর্তমান ঠিকানা: {present}</p>
                        <div className='w-full mt-4'>
                            <p className='font-bold text-xl'> {details}</p>
                        </div>
                        <Link to='/alltoy'>
                            <button style={{backgroundColor: '#C60315'}}  className="border mt-4 text-1xl rounded-lg  text-white h-10 w-full sm:w-28 ">সকল রক্তদাতা</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ShowToyInfo;