import React from 'react';
import UpdatetoyInfo from '../UpdatetoyInfo/UpdatetoyInfo';

const ModatToy = ({toy, index,handleUpdateToyInfo}) => {
    return (
        <tr>
        <td>{index + 1}</td>
        <td>{toy.salername}</td>
        <td>{toy.name}</td>
        <td>{toy.price}</td>
        <td>{toy.description}</td>
        <td>{toy.quantity}</td>
        <td>{toy.rating}</td>
        <td>
         
            <button>
            <UpdatetoyInfo
            toy={toy}
            key={toy._id}
            handleUpdateToyInfo={handleUpdateToyInfo}
            ></UpdatetoyInfo>
            </button>
        </td>
        <td>
            
            <button className='btn btn-outline btn-error'>Delete</button>
        </td>
    </tr>
    );
};

export default ModatToy;