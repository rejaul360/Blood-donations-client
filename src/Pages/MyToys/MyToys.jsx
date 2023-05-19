import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const MyToys = () => {

    const {user} = useContext(AuthContext)
    const [mytoys , setMyToys] = useState([])

    useEffect(()=>{
        fetch( `http://localhost:5000/myToy/${user.email}`)
        .then(res=>res.json()
        .then(data=>{
            setMyToys(data);
        }))
    },[user])


    return (
        <div className='h-full shadow py-8'>
        <h1 className='text-center text-4xl font-bold text-cyan-600  mb-6' >All Toys Here</h1>
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Price</th>
                            <th>description</th>
                            <th>Ouantity</th>
                            <th>rating</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {mytoys?.map((toy, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{toy.salername}</td>
                                <td>{toy.name}</td>
                                <td>{toy.price}</td>
                                <td>{toy.description}</td>
                                <td>{toy.quantity}</td>
                                <td>{toy.rating}</td>
                                <td>
                                    {" "}
                                    <button>Edit</button>
                                </td>
                                <td>
                                    {" "}
                                    <button>Delete</button>
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

export default MyToys;