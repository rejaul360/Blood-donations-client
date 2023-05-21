import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ShowToyInfo = () => {

    const showtoyInfo = useLoaderData()

    const { name, image, quantity, photo, salername, price, category, description, rating } = showtoyInfo

    return (
        <div>
            <h1 className="text-center text-4xl font-bold text-cyan-600  mb-6">Toy Informations </h1>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <div>
                            <img src={photo} className="max-w-xl rounded-lg shadow-2xl" />
                        </div>
                        <div className=' shadow p-8 space-y-3'>
                            <h1 className="text-3xl text-red-600 font-bold">Toy : {name}</h1>
                            <p>Seller : {salername}</p>
                            <p>Price : {price} </p>
                            <p>Quantity : {quantity}  </p>
                            <p>Category : {category}  </p>
                            <div className='flex items-center'>
                            <p>Ratings :  </p>
                            <Rating style={{ maxWidth: 150 }} value={rating} readOnly/>
                            </div>
                            
                            <p>Description : {description}  </p>
                            <Link to='/alltoy'>
                                <button className="btn btn-primary mt-4">Go Toys</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowToyInfo;