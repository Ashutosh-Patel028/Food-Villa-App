import React from 'react';
import { useSelector } from 'react-redux';

const Favourites = () =>{
    const favourites = useSelector((store)=>store.favourites.items);
    if(favourites.length==0 || favourites===null)
        return (
            <div className='bg-red-300 item-center'>
                There is nothing here! pls. add something here
            </div>
        )
    return (
        <div className='flex flex-col mx-auto my-4 items-center align-middle justify-center border-2 w-1/2'>
            {
                favourites.map((item) => {
                    return <div key={item.id} className='bg-slate-400 m-2 w-full text-center text-lg font-lobster'>
                        <h2>{item.name}</h2>
                        <h3>{item.price}</h3>
                    </div>
                })
            }
        </div>
    )
}

export default Favourites;