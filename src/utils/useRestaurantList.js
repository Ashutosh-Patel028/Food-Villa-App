import { useState, useEffect } from "react";

const useRestaurantList = () => {
    const [allRestaurants,setAllRestaurants] = useState([]);
    useEffect(()=>{
        getRestraunt();
    },[]);

    async function getRestraunt(){
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.9205207&lng=70.3777302&page_type=DESKTOP_WEB_LISTING');
        const jsonData = await data.json();
        // console.log(jsonData);
        // console.log(jsonData?.data?.cards[0]?.data?.data?.cards);
        setAllRestaurants(jsonData?.data?.cards[0]?.data?.data?.cards);
    }
    return allRestaurants;
}

export default useRestaurantList;