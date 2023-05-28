import { useEffect, useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./ResturantCard";
import ShimmerUI  from "./ShimmerUI"; 
import {Link} from "react-router-dom";

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
        console.log(jsonData);
        console.log(jsonData?.data?.cards[2]?.data?.data?.cards);
        setAllRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
    }
    // console.log("render-1");
    return allRestaurants?.length===0 ? <ShimmerUI/> : (
        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="search" value={searchText}
                onChange={(e)=>{setSearchText(e.target.value)}}
                />
                <button className="search-btn" onClick={()=>{
                    const data=filterData(searchText,allRestaurants);
                    setFilteredRestaurants(data);
                }}>Search</button>
            </div>
            <div className="restraunt-list">
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
        </>
    )
};

export default Body;