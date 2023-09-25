import React, { useContext, useEffect, useState } from 'react';
import "./ReactTabs.css"
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../../../Provider/AuthProvider';
import { toast } from 'react-toastify';
const ReactTabs = () => {
    // const [toggleState, setToggleState] = useState(1);

    const{user}= useContext(AuthContext)

    const [football, setFootball] = useState()
    const [cricket, setCricket] = useState()
    const [busketball, setBusketball] = useState()

    const toggleTab = (index) => {
        setToggleState(index);
    };
    useEffect(() => {
        fetch(`https://sports-toy-zone.vercel.app/category?category=Football`)
            .then(res => res.json())
            .then(data => {
                setFootball(data);
            })
    }, [])

    useEffect(() => {
        fetch(`https://sports-toy-zone.vercel.app/category?category=Cricket`)
            .then(res => res.json())
            .then(data => {
                setCricket(data);
            })
    }, [])
    useEffect(() => {
        fetch(`https://sports-toy-zone.vercel.app/category?category=Basketball`)
            .then(res => res.json())
            .then(data => {
                setBusketball(data);
            })
    }, [])

    const handleToast = () =>{
        if(user){
            toast('user login SuccessFully')
        }else{
            toast.error('user not Found')

        }
    }

    return (
        
        <div className='py-10'>
            <Tabs>
                <TabList>
                    <Tab>Cricket</Tab>
                    <Tab>BusketBall</Tab>
                    <Tab>Football</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {
                            cricket?.slice(1, 3).map((toy) => (
                                <div className="card lg:card-side bg-base-100 shadow p-4 ">
                                    <figure><img className='w-80 h-4/5 rounded-xl' src={toy.photo} alt="Album"data-aos="fade-right" /></figure>
                                    <div className="card-body">
                                    <div className='space-y-1 ms-3'>
                                                    <h4>Name {toy.name}</h4>
                                                    <p>Price {toy.price}</p>
                                                    <div className='flex'>
                                                        <p>Ratings:</p><Rating style={{ maxWidth: 150 }} value={toy.rating} readOnly />
                                                    </div>
                                                   
                                                </div>
                                        <div onClick={handleToast} className="card-actions ">

                                        <Link to={`/reactDetais/${toy._id}`}><button className='btn btn-info mt-3'>Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                                
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {
                            busketball?.slice(0, 2).map((toy) => (
                                <div className="card lg:card-side bg-base-100 shadow p-4 ">
                                    <figure><img className='w-80 h-4/5 rounded-xl' src={toy.photo} alt="Album" data-aos="fade-right" /></figure>
                                    <div className="card-body">
                                    <div className='space-y-1 ms-3'>
                                    <h4>Name {toy.name}</h4>
                                                    <p>Price {toy.price}</p>
                                                    <div className='flex'>
                                                        <p>Ratings:</p><Rating style={{ maxWidth: 150 }} value={toy.rating} readOnly />
                                                    </div>
                                                   
                                                </div>
                                        <div className="card-actions ">
                                        <Link to={`/reactDetais/${toy._id}`}><button className='btn btn-info mt-3'>Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                                
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {
                            football?.slice(1, 3).map((toy) => (
                                <div className="card lg:card-side bg-base-100 shadow p-4 ">
                                    <figure><img className='w-80 h-4/5 rounded-xl' src={toy.photo} alt="Album" ddata-aos="fade-right" /></figure>
                                    <div className="card-body">
                                    <div className='space-y-1 ms-3'>
                                    <h4>Name {toy.name}</h4>
                                                    <p>Price {toy.price}</p>
                                                    <div className='flex'>
                                                        <p>Ratings:</p><Rating style={{ maxWidth: 150 }} value={toy.rating} readOnly />
                                                    </div>
                                                   
                                                </div>
                                        <div className="card-actions ">
                                        <Link to={`/reactDetais/${toy._id}`}><button className='btn btn-info mt-3'>Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                                
                            ))
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>

    );
};

export default ReactTabs;