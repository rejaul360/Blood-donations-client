import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const UpdatetoyInfo = () => {

    const{user} = useContext(AuthContext)

    const updateToy = useLoaderData()
    


    const{name}= updateToy


    console.log(updateToy);
    
    const handleUpdatetoys = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        // const postedBy = form.postedBy.value;
        // const salername = form.salername.value;
        const price = form.price.value;
        const rating = form.rating.value;
        // const category = form.category.value;
        const description = form.description.value;
        // const photo = form.image.value;



        const updateToy = { name, quantity, salername, price,category,  description, photo,postedBy,rating }

        console.log(updateToy);

        // send data to the server
        
    }

    return (
        <div className="bg-[#adfedd] p-24 rounded-3xl py-7 shadow-lg">
            <h2 className="text-3xl font-extrabold text-center py-6">Update Toy Informations {name}</h2>
            <form onSubmit={handleUpdatetoys}>
                {/* form name and quantity row */}
                {/* <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div> */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="toy name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Saler name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="salername" placeholder="saler name" className="input input-bordered w-full" defaultValue={user?.displayName} />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="postedBy" placeholder="Email" className="input input-bordered w-full" defaultValue={user?.email} />
                        </label>
                    </div>
                </div> */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    {/* <div className="form-control md:w-1/2">
                    <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select name='category' className="select select-bordered w-full  ">
                            <option value='Cricket'>Cricket</option>
                            <option value='Football'>Football</option>
                            <option value='Basketball'>Basketball</option>
                        </select>
                    </div> */}
                    <div className="form-control md:w-full ">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Update Toy" className="btn btn-primary w-full" />

            </form>
        </div>
    );
};

export default UpdatetoyInfo;