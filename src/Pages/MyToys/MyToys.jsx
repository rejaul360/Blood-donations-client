import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import UpdatetoyInfo from '../UpdatetoyInfo/UpdatetoyInfo';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { key } from 'localforage';

const MyToys = () => {

    const { user } = useContext(AuthContext)
    const [mytoys, setMyToys] = useState([])


    useEffect(() => {
        if (user) {
            console.log(user.email)
            fetch(`https://sports-toy-zone.vercel.app/myToy/${user.email}`)
                .then(res => res.json()
                    .then(data => {
                        setMyToys(data);
                    }))
        }
    }, [user])
    const handleToyDelete = (_id) => {
        // console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://sports-toy-zone.vercel.app/allToy/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = mytoys.filter(toy => toy._id !==_id)
                            setMyToys(remaining);
                            console.log(remaining);
                            // console.log(setMyToys);
                        }

                    })
            }
        })
    }


    const handleAscending = () => {
        fetch(`https://sports-toy-zone.vercel.app/aescending?price=${user?.email}`)
        .then(res=>res.json())
        .then(data=> {
            setMyToys(data)
            console.log(data);
        })
        
    }
    const handleDscending = () => {
        fetch(`https://sports-toy-zone.vercel.app/descending?price=${user?.email}`)
        .then(res=>res.json())
        .then(data=> {
            setMyToys(data)
            console.log(data);


            
        })
    }

    return (
        <div className='h-full shadow py-8 p-5'>
            <h1 className='text-center text-4xl font-bold text-cyan-600  mb-6 ' >My Toys</h1>
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
                                <th>ইউজার</th>
                                <th>রক্তদাতার নাম</th>
                                <th>জেলা</th>
                                {/* <th>description</th> */}
                                <th>বিভাগ</th>
                                <th>কতবার রক্ত দিয়েছেন</th>
                                <th>আপডেট</th>
                                <th>ডিলিট</th>
                            </tr>
                        </thead>
                        <tbody>

                            {mytoys?.map((toy, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{toy.salername}</td>
                                    <td>{toy.name}</td>
                                    <td>{toy.price}</td>
                                    {/* <td>{toy.description}</td> */}
                                    <td>{toy.quantity}</td>
                                    <td>{toy.rating}</td>
                                    <td>

                                        <Link to={`/updateInfo/${toy._id}`}>
                                            <button className='btn  btn-success'>
                                                Update
                                            </button>
                                        </Link>
                                    </td>
                                    <td>

                                        <button onClick={() => handleToyDelete(toy._id)} className='btn btn-error'>Delete</button>
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