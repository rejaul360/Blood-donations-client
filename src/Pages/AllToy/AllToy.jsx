import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useTitle from '../../UseTitle/UseTitle';
import { Link } from 'react-router-dom';

const AllToy = () => {

  useTitle('All Toys')
  const { user } = useContext(AuthContext)
  const [searchText, setSearchText] = useState("");
  const [alltoys, setAllToys] = useState([])
  // console.log(alltoys);

  useEffect(() => {
    fetch('https://sports-toy-zone.vercel.app/allToy')
      .then(res => res.json())
      .then(data => {
        setAllToys(data)
        // console.log(data);
      })
  }, [user])

  const handleSearchText = () => {
    fetch(`https://sports-toy-zone.vercel.app/serchByName/${searchText}`)
      .then(res => res.json())
      .then(data => {
        setAllToys(data)
      })
  }
  // const handleAscending = () => {
  //     fetch(`https://sports-toy-zone.vercel.app/aescending?price=${user?.email}`)
  //     .then(res=>res.json())
  //     .then(data=> {
  //         setAllToys(data)
  //         console.log(data);
  //     })

  // }
  // const handleDscending = () => {
  //     fetch(`https://sports-toy-zone.vercel.app/descending?price=${user?.email}`)
  //     .then(res=>res.json())
  //     .then(data=> {
  //         setAllToys(data)
  //         console.log(data);



  //     })
  // }
  return (
    <div className='h-full shadow p-5 bg-gray-100'>
      <h1 style={{ color: '#C60315' }} className='text-center md:text-4xl text-2xl font-bold  mb-6'>সকল রক্তদানকারী তথ্য</h1>

      <div className="search-box p-2 text-center mb-6">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className="p-1 w-full sm:w-1/2 border shadow" // Adjust the width based on screen size
        />
        <button
          onClick={handleSearchText}
          style={{ backgroundColor: '#C60315' }}
          className='border mt-4 md:ml-3 text-1xl rounded-lg text-white h-10 w-full sm:w-28' // Adjust the width based on screen size
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-3 ">
        {alltoys?.slice(0, 19).map((toy) => (

          <div className="card  bg-base-100 shadow-lg md:pl-10  py-8">
            <div className="lg:flex"> {/* Apply flex layout for large screens */}
              <figure className="">
                <img
                  src={toy.photo}
                  alt="Photo"
                  className="h-auto w-full lg:h-56 lg:w-40" // Adjust size for large screens
                />
              </figure>
              <div className="card-body ">
                <div className="bg-white  " key={toy._id}>
                  {/* <h3 className="text-xl font-semibold mb-2">ইউজার: {toy.salername}</h3> */}
                  <p className="text-sm mb-2">রক্তদাতার নাম: {toy.name}</p>
                  <p className="text-sm mb-2">রক্তের ধরন: {toy.category}</p>
                  <p className="text-sm mb-2">জেলা: {toy.price}</p>
                  <p>মোবাইল নাম্বার: {toy.phone}</p>
                  {/* <p className="text-sm mb-2">বিভাগ: {toy.quantity}</p> */}
                  <Link to={`/showdetais/${toy._id}`}>
                    <button style={{ backgroundColor: '#C60315' }} className="border mt-4 text-1xl rounded-lg  text-white h-10 w-full sm:w-28">ডিটেইল</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        ))}
      </div>
  

    </div>

  );
};

export default AllToy;