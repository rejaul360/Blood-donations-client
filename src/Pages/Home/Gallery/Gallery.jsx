import React from 'react';
import { Link } from 'react-router-dom';
import "./Gallery.css"
import { FaArrowRight } from 'react-icons/fa';

const Gallery = () => {
    return (
        <div className='py-5'>
            <div className='space-y-5'>
            <h1 className='text-center text-4xl font-bold mt-6 text-cyan-600'>Sports Gallery</h1>
            <p className='text-center font-bold w-1/2 mx-auto '>The SPORT Gallery draws its inspiration from the pioneering SPORT magazine, <br />  explosion of interest in the games people play in post-war North America.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-7 gap-6" >
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-8 pt-8">
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAZkmeZ1OQghMq21hz6qiVJLL7Taqel6Qu-6gKPeZbm-jQfPwObUWOs9whsZpRbFWGCXA&usqp=CAU' alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Sports Zone</h2>
                        <div className="card-actions">
                        <div className="card-actions">
                            <i className='rightArrow'><FaArrowRight></FaArrowRight></i>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-8 pt-8">
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0eT_JKJXvsblgGcIWCMxebQcVSD0F136J2-lCorgOkQSO0mG3VIxELoViCqqvnj0hy8s&usqp=CAU' alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Sports Zone</h2>
                        <div className="card-actions">
                        <div className="card-actions">
                        <i className='rightArrow'><FaArrowRight></FaArrowRight></i>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-8 pt-8">
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-z04VZXX-3z_NI-cyC8O2nC0NBIpRmtGmtTh9WmoHUTSmD4MBaZtbZYgJRdK2ixXGsZw&usqp=CAU' alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Sports Zone</h2>
                        <div className="card-actions">
                        <i className='rightArrow'><FaArrowRight></FaArrowRight></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;