import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
import { IMG_CDN_URL } from "../config";

const RestaurantMenu = () =>{

    const [restaurantData,setRestaurantData] = useState([]);
    useEffect(()=>{
        getRestaurantInfo();
    },[])
    const params= useParams();
    const restaurantURL="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.9205207&lng=70.3777302&restaurantId="+params.id+"&submitAction=ENTER";
    async function getRestaurantInfo(){
        const data=await fetch(restaurantURL);
        const jsonData=await data.json();
        console.log(jsonData);
        setRestaurantData(jsonData?.data?.cards);
        console.log(restaurantData[0]?.card?.card?.info);
        
    }
    
    const restInfo = restaurantData[0]?.card?.card?.info;
    if(restInfo===undefined) return <ShimmerUI/>;
    
    return (
        <div>
            <h1>{restInfo?.name}</h1>
            <img src={IMG_CDN_URL+restInfo.cloudinaryImageId}></img>
            <h3>{"costForTwo: "+restInfo?.costForTwo/100}&#x20B9;</h3>
            <h3>Cuisines: 
            {restInfo.cuisines.map(item=><span>{" "+item +","}</span>)}
            </h3>
            <h3>{"Location: "+restInfo?.locality}</h3>
            <h3>{"City: "+restInfo?.city}</h3>
        </div>
    );
};

export default RestaurantMenu;