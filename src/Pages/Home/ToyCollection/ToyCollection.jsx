import React from 'react';

const ToyCollection = () => {
    return (
        <div>
            <div>
            <h1 className='text-center text-4xl font-bold text-cyan-600 py-6 mt-6' >Sports Toy Collections</h1>
            <p className='text-center font-bold'>Here is my favourite toys to collect in my childhood from right now......
                <br />
                I love my collections and my awosome collections 
            </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-7 gap-4'>

                <img className='shadow p-6' src="https://img.freepik.com/free-vector/cardboard-box-full-sport-equipments-white_1308-41810.jpg?w=360&t=st=1684382561~exp=1684383161~hmac=bc208a0dc8a0eede5c59809103d5a88b57fcf19c778820757bda77737e6315cf" data-aos="zoom-in-right" alt="" />
                <img className='shadow p-6' src="https://img.freepik.com/free-vector/cardboard-box-full-sport-equipments-white-background_1308-39078.jpg?w=360&t=st=1684381109~exp=1684381709~hmac=9cf296102f02a28adabed17b3cb62fbf8d336a6a50adc8b3d2b67c3cfe7e8e22" data-aos="fade-up" alt="" />
                <img className='shadow p-6 mt-5' src="https://img.freepik.com/free-photo/cricket-equipments-green-grass_53876-63200.jpg?size=626&ext=jpg&uid=R30397977&ga=GA1.1.1369315933.1674136753&semt=ais" data-aos="fade-down" alt="" />
                <img className='shadow p-6' src="https://img.freepik.com/free-vector/cardboard-box-full-sport-equipments-white-background_1308-39078.jpg?w=360&t=st=1684381109~exp=1684381709~hmac=9cf296102f02a28adabed17b3cb62fbf8d336a6a50adc8b3d2b67c3cfe7e8e22" data-aos="zoom-in-left" alt="" />
            </div>
        </div>
    );
};

export default ToyCollection;