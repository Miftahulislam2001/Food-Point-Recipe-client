import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SinglePageBanner from '../../components/SingleChefBanner/SinglePageBanner';

const ChefDetails = () => {
    const [chef, setChef] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        fetch(`http://localhost:5000/${id}`)
        .then(res => res.json())
        .then(data => setChef(data))
    }, [])
    



    return (
        <div className='my-container'>
            <SinglePageBanner chef = {chef}/>
            
            <h3>Chef Details pages : {id}</h3>
        </div>
    );
};

export default ChefDetails;