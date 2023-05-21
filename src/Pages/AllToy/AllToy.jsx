import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useTitle from '../../UseTitle/UseTitle';
import { Link } from 'react-router-dom';

const AllToy = () => {

    useTitle('All Toys')
    const { user } = useContext(AuthContext)
    const [searchText, setSearchText] = useState("");
    const [alltoys, setAllToys] = useState([])

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
    const handleAscending = () => {
        fetch(`https://sports-toy-zone.vercel.app/aescending?price=${user?.price}`)
        .then(res=>res.json())
        .then(data=> {
            // setAllToys(data)
            console.log(data);
        })
        
    }
    const handleDscending = () => {
        fetch(`https://sports-toy-zone.vercel.app/descending?price=${user?.price}`)
        .then(res=>res.json())
        .then(data=> {
            // setAllToys(data)
            console.log(data);


            
        })
    }
    return (
        <div className='h-full shadow p-5'>
            <h1 className='text-center text-4xl font-bold text-cyan-600  mb-6' >All Toys Here</h1>

            <div className="search-box p-2 text-center mb-6">
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text" className="p-1 w-1/2 border shadow" />
                <button onClick={handleSearchText} className='border ml-3 text-1xl rounded-lg bg-cyan-700 text-white h-10 w-28'>Search</button>
            </div>
            <div className='mb-3'>
                <button onClick={handleAscending} className='mr-6 btn  btn-success' >Asn</button>
                <button onClick={handleDscending} className='btn  btn-warning'>Dsn</button>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full ">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Seller</th>
                                <th>Toy Name</th>
                                {/* <th>Sub Category</th> */}
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>View Details</th>
                            </tr>
                        </thead>
                        <tbody>

                            {alltoys?.map((toy, index) => (
                                <tr toy={toy._id}>

                                    <td>{index + 1}</td>
                                    <td>{toy.salername}</td>
                                    <td>{toy.name}</td>
                                    {/* <td>{toy.sports}</td> */}
                                    <td>{toy.price}</td>
                                    <td>{toy.quantity}</td>
                                    <td>

                                        <Link to={`/showdetais/${toy._id}`}>
                                            <button className='btn btn-outline btn-success font-bold'>Details</button>
                                        </Link>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToy;