import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[700px] ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src='https://i.ibb.co/Cz9ywKv/dengue-platelets.jpg' className="w-full h-auto " data-aos="zoom-in"   data-aos-duration="2000" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 max-w-7xl  mx-auto">
                        <div className='text-white space-y-7 p-6 md:pl-32 w-full'>
                            <h2 className='text-xl md:text-3xl font-bold' > রক্ত দেয়া কেন প্রয়োজন? </h2>
                            <p className='w-4/6 font-bold'>রক্তদান হল কোন প্রাপ্তবয়স্ক সুস্থ মানুষের স্বেচ্ছায় রক্ত দেবার প্রক্রিয়া। এই দান করা রক্ত পরিসঞ্চালন করা হয় অথবা অংশীকরণের মাধ্যমে ঔষধে পরিণত করা হয়। উন্নত দেশে বেশিরভাগ রক্তদাতাই হলেন স্বেচ্ছায় রক্তদাতা, যারা সামাজিক দায়বদ্ধতা থেকে রক্তদান করেন।</p>
                            <div>
                                <button className="btn btn-primary mr-5 py-2">More Toys</button>
                                <button className="btn btn-secondary mt-3">Upcoming</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-5"></a>
                        <a href="#slide2" className="btn btn-circle"></a>
                    </div>
                {/* </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src='https://img.freepik.com/free-vector/girl-about-hit-baseball-isolated_1308-37767.jpg?w=740&t=st=1684344272~exp=1684344872~hmac=78a48d4591cdc87886b89c17fd86010c2dd617d4b4cbb2a156d3a0bf37af3ac4' className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#0f483a] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-2xl md:text-5xl font-bold'> Kides Toy Zone For Affordable Price </h2>
                            <p>There are many variations of toys of  available, Our products is the best products in the market</p>
                            <div>
                            <button className="btn btn-primary mr-5">More Toys</button>
                                <button className="btn btn-outline btn-secondary">Upcoming Toys</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5"></a>
                        <a href="#slide3" className="btn btn-circle"></a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src='https://as2.ftcdn.net/v2/jpg/01/43/52/39/1000_F_143523952_VPJn3tfmANmnlB3B0ZeUcQm619VngP91.jpg' className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-2xl md:text-5xl font-bold'>Kides Toy Zone For Affordable Price </h2>
                            <p>There are many variations of toys of  available, Our products is the best products in the market</p>
                            <div>
                            <button className="btn btn-primary mr-5">More Toys</button>
                                <button className="btn btn-outline btn-secondary">Upcoming Toys</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5"></a>
                        <a href="#slide4" className="btn btn-circle"></a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src='https://t3.ftcdn.net/jpg/02/82/91/52/240_F_282915234_vUzz3XbF2JSTbOQMwLtQX2gE3hKvMBl8.jpg' className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-2xl md:text-5xl font-bold'> Kides Toy Zone For Affordable Price </h2>
                            <p>There are many variations of toys of  available, Our products is the best products in the market</p>
                            <div>
                            <button className="btn btn-primary mr-5">More Toys</button>
                                <button className="btn btn-outline btn-secondary">Upcoming Toys</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5"></a>
                        <a href="#slide1" className="btn btn-circle"></a>
                    </div>
                </div> */}
            </div>
            </div>
        </div>
    );
};

export default Banner;