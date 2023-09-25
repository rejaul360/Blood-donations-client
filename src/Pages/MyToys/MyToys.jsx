import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
// import UpdatetoyInfo from '../UpdatetoyInfo/UpdatetoyInfo';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
// import { key } from 'localforage';

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
                            console.log(setMyToys);
                        }

                    })
            }
        })
    }

    return (
        <div className='h-full shadow py-8 p-5'>
            <h1 className='text-center text-4xl font-bold mb-6 ' ></h1>
            {/* <div className='mb-3'>
                <button onClick={handleAscending} className='mr-6 btn  btn-success' >Asn</button>
                <button onClick={handleDscending} className='btn  btn-warning'>Dsn</button>
            </div> */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-3 ">
        {mytoys?.slice(0, 19).map((toy) => (

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

                  <span>
                  <Link to={`/updateInfo/${toy._id}`}>
                                            <button style={{backgroundColor: '#087FFD'}}   className='border mt-4 text-1xl rounded-lg  text-white h-10 w-full sm:w-29'>
                                                Update
                                            </button>
                                        </Link>
                  </span>

        
                  <button onClick={() => handleToyDelete(toy._id)} style={{backgroundColor: '#C60315'}}  className='border mt-4 text-1xl rounded-lg  text-white h-10 w-full sm:w-29'>Delete</button>
 

                </div>
              </div>
            </div>
          </div>

        ))}
      </div>
        </div>
    );
};

export default MyToys;