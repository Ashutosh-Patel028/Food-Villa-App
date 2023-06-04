import { useEffect, useState } from "react";
import restaurantList from "../config";
import RestaurantCard from "./ResturantCard";
import ShimmerUI  from "./ShimmerUI"; 
import {Link} from "react-router-dom";
import useOnline from "../utils/useOnline";

function filterData(searchText,Restaurants){
    if(searchText==='') return restaurantList;
    return Restaurants.filter((restraunt)=>{
        return restraunt?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase());
    });
}


const Body = () =>{
    const [searchText,setSearchText] = useState('');
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [allRestaurants,setAllRestaurants] = useState([]);
    useEffect(()=>{
        getRestraunt();
    },[]);

    async function getRestraunt(){
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.9205207&lng=70.3777302&page_type=DESKTOP_WEB_LISTING');
        const jsonData = await data.json();
        // console.log(jsonData);
        // console.log(jsonData?.data?.cards[0]?.data?.data?.cards);
        setAllRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
    }

    const isOnline = useOnline();
    if(!isOnline){ 
        return <h1>🔴You'r OFFLINE, check your internet Connection</h1>;
    }

    // console.log("render-1");
    return allRestaurants?.length===0 ? <ShimmerUI/> : (
        <div className>
            <div className="m-2 p-2 text-center">
                <input type="text" className="border-r-0 w-80 h-30 focus:caret-pink-500  text-md rounded-md rounded-e-none border border-solid border-gray-600 p-1" placeholder="search" value={searchText}
                onChange={(e)=>{setSearchText(e.target.value)}}
                />
                <button className="border-l-0 border border-gray-600 h-30 bg-orange-300 hover:bg-orange-400 rounded-l-none rounded-md p-1 w-20 font-bold text-neutral-600" onClick={()=>{
                    const data=filterData(searchText,allRestaurants);
                    setFilteredRestaurants(data);
                }}>Search</button>
            </div>
            <div className="flex flex-wrap">
                {
                    (filteredRestaurants?.length===0)
                    ?
                        <h1>No Restaurants Found!!</h1>
                    :
                    filteredRestaurants.map((restraunt)=>{
                        // console.log(restraunt.data);
                        return (
                            <Link to={"/restaurant/"+restraunt.data.id} key={restraunt.data.id} >
                            <RestaurantCard {...restraunt.data}/>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Body;