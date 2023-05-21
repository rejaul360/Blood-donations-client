import React, { useEffect, useState } from 'react';
import "./ReactTabs.css"
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';
const ReactTabs = () => {
    const [toggleState, setToggleState] = useState(1);

    const [football, setFootball] = useState()
    const [cricket, setCricket] = useState()
    const [busketball, setBusketball] = useState()

    const toggleTab = (index) => {
        setToggleState(index);
    };


    useEffect(() => {
        fetch(`https://sports-toy-zone.vercel.app/category?category=Football`)
            .then(res => res.json())
            .then(data => {
                setFootball(data);
            })
    }, [])

    useEffect(() => {
        fetch(`https://sports-toy-zone.vercel.app/category?category=Cricket`)
            .then(res => res.json())
            .then(data => {
                setCricket(data);
            })
    }, [])
    useEffect(() => {
        fetch(`https://sports-toy-zone.vercel.app/category?category=Basketball`)
            .then(res => res.json())
            .then(data => {
                setBusketball(data);
            })
    }, [])

    return (
        <div>
            <div className='space-y-5'>
                <h1 className='text-center text-4xl font-bold text-cyan-600   mt-6' >Shop by category</h1>
                <p className='text-center font-bold'> if you want to shop toys
                    <br />
                    we have many items here, you can buy anything if you want
                </p>
            </div>
            <div className="container grid grid-cols-2">
                <div className="bloc-tabs">
                    <button
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                    >
                       Cricket
                    </button>
                    <button
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                    >
                        BusketBall
                    </button>
                    <button
                        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(3)}
                    >
                        Football
                    </button>
                </div>

                <div className="content-tabs">
                    <div className="" >
                        <div
                            className={toggleState === 1 ? "content  active-content" : "content"}
                        >
                            <div className='grid grid-cols-1 md:grid-cols-2 mt-7'>
                                {cricket?.slice(1, 3).map((toy) => (
                                    <div className='grid grid-cols-1' toy={toy._id}>
                                        <div className="hero ">
                                            <div className="hero-content flex lg:flex-row">

                                                <img src={toy.photo} className="max-w-sm rounded-lg shadow-2xl" data-aos="zoom-out-right" />
                                                <div className='space-y-3 ms-3'> 
                                                    <p>{toy.name}</p>
                                                    <p>{toy.price}</p>
                                                    <div className='flex'>
                                                        <p>Ratings:</p><Rating style={{ maxWidth: 150 }} value={toy.rating} readOnly />
                                                    </div>
                                                    <Link to={`/reactDetais/${toy._id}`}><button className='btn btn-info mt-3'>Details</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </div>
                    </div>


                    <div className="" >
                        <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                        >
                            <div className='grid grid-cols-1 md:grid-cols-2'>
                                {busketball?.slice(0,2).map((toy) => (
                                    <div className='grid grid-cols-1' toy={toy._id}>
                                        <div className="hero ">
                                            <div className="hero-content flex lg:flex-row">

                                                <img src={toy.photo} className="max-w-sm rounded-lg shadow-2xl" data-aos="zoom-out-right"/>
                                                <div className='space-y-3 ms-3'>
                                                    <p>{toy.name}</p>
                                                    <p>{toy.price}</p>
                                                    <div className='flex items-center'>
                                                        <p>Ratings :  </p>
                                                        <Rating style={{ maxWidth: 150 }} value={toy.rating} readOnly />
                                                    </div>
                                                    <Link to={`/reactDetais/${toy._id}`}><button className='btn btn-info mt-3'>Details</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </div>
                    </div>



                    <div className="" >
                        <div
                            className={toggleState === 3 ? "content  active-content" : "content"}
                        >
                            <div className='grid grid-cols-1 md:grid-cols-2'>
                                {football?.slice(0, 2).map((toy) => (
                                    <div className='grid grid-cols-1' toy={toy._id}>
                                        <div className="hero ">
                                            <div className="hero-content flex lg:flex-row">

                                                <img src={toy.photo} className="max-w-sm rounded-lg shadow-2xl" data-aos="zoom-out-right"/>
                                                <div className='space-y-3 ms-3'>
                                                    <p>{toy.name}</p>
                                                    <p>{toy.price}</p>
                                                    <div className='flex items-center'>
                                                        <p>Ratings :  </p>
                                                        <Rating style={{ maxWidth: 150 }} value={toy.rating} readOnly />
                                                    </div>
                                                    <Link to={`/reactDetais/${toy._id}`}><button className='btn btn-info mt-3'>Details</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ReactTabs;