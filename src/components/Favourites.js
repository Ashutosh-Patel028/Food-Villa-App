import React from 'react';
import { useSelector } from 'react-redux';

const Favourites = () =>{
    const favourites = useSelector((store)=>store.favourites.items);
    return (
        <div className='flex-column items-center'>
            {
                favourites.map((item) => {
                    return <div key={item.id}>
                        <h2>{item.name}</h2>
                        <h3>{item.price}</h3>
                    </div>
                })
            }
        </div>
    )
}

export default Favourites;