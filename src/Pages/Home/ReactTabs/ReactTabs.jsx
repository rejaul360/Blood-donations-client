import React, { useState } from 'react';
import "./ReactTabs.css"
const ReactTabs = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div>
            <div className='space-y-5'>
                <h1 className='text-center text-4xl font-bold text-cyan-600   mt-6' >Shop by category</h1>
                <p className='text-center font-bold'> if you want to shop toys
                    <br />
                    we have many items here, you can buy anything if you want
                </p>
            </div>
            <div className="container">
                <div className="bloc-tabs">
                    <button
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                    >
                        Football
                    </button>
                    <button
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                    >
                        Basketball
                    </button>
                    <button
                        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(3)}
                    >
                        Cricket
                    </button>
                </div>

                <div className="content-tabs">
                    <div className="grid grid-cols-1 md:grid-cols-2 px-6 mt-14 gap-4 " >
                        <div
                            className={toggleState === 1 ? "content  active-content" : "content"}
                        >
                            <h2>Content 1</h2>
                            <hr />
                            <div className="card w-100 bg-base-100">
                                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>Price </p>
                                    <p>Rating </p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={toggleState === 1 ? "content  active-content" : "content"}
                        >
                            <h2>Content 2</h2>
                            <hr />
                            <div className="card w-100 bg-base-100">
                                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>Price </p>
                                    <p>Rating </p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6" >
                        <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                        >
                            <h2>Content 2</h2>
                            <hr />
                            <div className="card w-100 bg-base-100">
                                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>Price </p>
                                    <p>Rating </p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                        >
                            <h2>Content 2</h2>
                            <hr />
                            <div className="card w-100 bg-base-100">
                                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>Price </p>
                                    <p>Rating </p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6" >
                        <div
                            className={toggleState === 3 ? "content  active-content" : "content"}
                        >
                            <h2>Content 2</h2>
                            <hr />
                            <div className="card w-100 bg-base-100">
                                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>Price </p>
                                    <p>Rating </p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={toggleState === 3 ? "content  active-content" : "content"}
                        >
                            <h2>Content 2</h2>
                            <hr />
                            <div className="card w-100 bg-base-100">
                                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>Price </p>
                                    <p>Rating </p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ReactTabs;