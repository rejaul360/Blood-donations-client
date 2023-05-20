import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import UpdatetoyInfo from '../UpdatetoyInfo/UpdatetoyInfo';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyToys = () => {

    const { user } = useContext(AuthContext)
    const [mytoys, setMyToys] = useState([])


    useEffect(() => {
        fetch(`https://car-doctor-server-site-eight.vercel.app/myToy/${user.email}`)
            .then(res => res.json()
                .then(data => {
                    setMyToys(data);
                }))
    }, [user])
    // console.log(mytoys);


    // const handleUpdateToyInfo = (data) => {
    //     console.log(data);

    // //    const id = data._id
    // //     delete data._id

    //     fetch(`http://localhost:5000/updateToyInfo/${id}`,{
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     .then(res => res.json())
    //     .then(result => {
    //         console.log(result)
    //     })
    //     console.log(data);
    // }


    const handleToyDelete = (_id) => {
        console.log(_id);
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


                fetch(`http://localhost:5000/allToy/${_id}`, {
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
                        }
                    })
            }
        })
    }


    return (
        <div className='h-full shadow py-8'>
            <h1 className='text-center text-4xl font-bold text-cyan-600  mb-6 ' >My Toys</h1>
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
                                        
                                        <Link to={`/updateInfo/${toy._id}`}>
                                            <button className='btn btn-outline btn-success'>
                                                Update
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                    
                                        <button onClick={() => handleToyDelete(toy._id)} className='btn btn-outline btn-error'>Delete</button>
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