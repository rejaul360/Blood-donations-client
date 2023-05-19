import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import "./AddToy.css"
import { AuthContext } from '../../Provider/AuthProvider';
import CreatableSelect from "react-select/creatable";
import useTitle from '../../UseTitle/UseTitle';
// import Select from "react-select";
const AddToy = () => {

    useTitle('AddToy')
    const { user } = useContext(AuthContext);

    const [selectedOption, setSelectedOption] = useState(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        data.sports = selectedOption;

        fetch('https://server-site-peach.vercel.app/postToy',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

        console.log(data);
    }
   

    const options = [
        { value: "Cricket", label: "Cricket" },
        { value: "Football", label: "Football" },
        { value: "Basketball", label: "Basketball" },
        { value: "Hocky", label: "Hocky" },
        { value: "Voliball", label: "Voliball" },
        { value: "Raket", label: "Raket" },
    ];


    return (
        <div className="add-toy-container shadow-md rounded-md">
            <div className="add-toy row">
                <div className="text-center mx-auto ">
                <h1 className='text-center text-4xl font-bold text-cyan-600   mb-6' >ADD Toys</h1>
                    <form className='space-y-3' onSubmit={handleSubmit(onSubmit)}>

                        <input
                            className="text-input w-1/2 mt-6"
                            {...register("image")}
                            placeholder="image link"
                            type="url"
                        />
                        <input
                            className="text-input w-1/2"
                            {...register("name")}
                            placeholder="Toy Name"
                        />
                        <input
                            className="text-input w-1/2"
                            value={user?.displayname}
                            {...register("salername")}
                            placeholder="saler name"
                        />

                        <input
                            className="text-input w-1/2"
                            // value={user?.email}
                            {...register("postedBy")}
                            placeholder="your email"
                            type="email"
                        />

                        {/* <input
                            className="text-input w-1/2"
                            {...register("category", { required: true })}
                            placeholder="category"
                        /> */}
                        <input
                            className="text-input w-1/2"
                            {...register("rating", { required: true })}
                            placeholder="rating"
                            type="number"
                        />
                        <input
                            className="text-input w-1/2"
                            {...register("price", { required: true })}
                            placeholder="price"
                            type="number"
                        />
                        <input
                            className="text-input w-1/2"
                            {...register("quantity", { required: true })}
                            placeholder="availabel quantity"
                            type="number"
                        />

                        <CreatableSelect
                            className="w-1/2  mx-auto"
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            isMulti
                        />
                        <input
                            className="text-input w-1/2"
                            {...register("description")}
                            placeholder="description"
                        />
                        <div className='w-1/2 mx-auto'>
                            <input className="submit-btn w-1/2" value="Post Job" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddToy;