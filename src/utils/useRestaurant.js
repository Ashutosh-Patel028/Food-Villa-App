import { useState, useEffect } from "react";

const useRestaurant = (resID) =>{
    const [restaurantData,setRestaurantData] = useState([]);
    const resURL="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.9205207&lng=70.3777302&restaurantId="+resID+"&submitAction=ENTER";
    
    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        const data=await fetch(resURL);
        const jsonData=await data.json();
        // console.log(jsonData?.data?.cards[0]?.card?.card?.info);
        setRestaurantData(jsonData?.data?.cards[0]?.card?.card?.info);
    }
    // console.log(restaurantData);
    return restaurantData;
}

export default useRestaurant;