import React, { useContext } from 'react';
// import Select from "react-select"
import { useForm } from "react-hook-form";

import { AuthContext } from '../../Provider/AuthProvider';
import "./UpdatetoyInfo.css"
// import CreatableSelect from 'react-select/dist/declarations/src/Creatable';

const UpdatetoyInfo = (props) => {

    const { handleUpdateToyInfo } = props

    const { user } = useContext(AuthContext)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div className=''>
            <label htmlFor="my-modal-5" className="btn btn-outline btn-success">Edit</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-full ">
                    <div className="add-toy-container shadow-md rounded-md">
                        <div className="add-toy row">
                            <div className="text-center mx-auto ">

                                <form className='space-y-3' onSubmit={handleSubmit(handleUpdateToyInfo)}>

                                    {/* <input
                                        className="text-input w-1/2 mt-6"
                                        {...register("image")}
                                        placeholder="image link"
                                        type="url"
                                    /> */}
                                    <input
                                        className="text-input w-1/2"
                                        {...register("name")}
                                        defaultValue={props?.toy?.name}
                                        placeholder="Toy Name"
                                    />
                                    {/* <input
                                        className="text-input w-1/2"
                                        value={user?.displayname}
                                        {...register("salername")}
                                        placeholder="saler name"
                                    /> */}

                                    <input
                                        className="text-input w-1/2"
                                        value={user?.email}
                                        {...register("postedBy")}
                                        placeholder="your email"
                                        type="email"
                                    />

                                    <input
                                        className="text-input w-1/2"
                                        {...register("rating", { required: true })}
                                        placeholder="rating"
                                        defaultValue={props?.toy?.rating}
                                        type="number"
                                    />
                                    <input
                                        className="text-input w-1/2"
                                        {...register("price", { required: true })}
                                        placeholder="price"
                                        defaultValue={props?.toy?.price}
                                        type="number"
                                    />
                                    <input
                                        className="text-input hidden"
                                        {...register("_id")}
                                        value={props?.toy?._id}
                                    />
                                    <input
                                        className="text-input w-1/2"
                                        {...register("quantity", { required: true })}
                                        placeholder="availabel quantity"
                                        defaultValue={props?.toy?.quantity}
                                        type="number"
                                    />
                                    {/* 
                                    <CreatableSelect
                                        className="w-1/2  mx-auto"
                                        defaultValue={selectedOption}
                                        onChange={setSelectedOption}
                                        options={options}
                                        isMulti
                                    /> */}
                                    <input
                                        className="text-input w-1/2"
                                        {...register("description")}
                                        defaultValue={props?.toy?.description}
                                        placeholder="description"
                                    />
                                    <div className='w-1/2 mx-auto'>
                                        <input className="submit-btn w-1/2" value="Update Toy" type="submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatetoyInfo;