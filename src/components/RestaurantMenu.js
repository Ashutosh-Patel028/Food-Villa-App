import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
import { IMG_CDN_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () =>{

    const params= useParams();
    const restaurantData = useRestaurant(params.id);
    // console.log(restaurantData);
    
    if(restaurantData===undefined || restaurantData.length===0) return <ShimmerUI/>;    
    return (
        <div>
            <h1>{restaurantData?.name}</h1>
            <img src={IMG_CDN_URL+restaurantData.cloudinaryImageId}></img>
            <h3>{"costForTwo: "+restaurantData?.costForTwo/100}&#x20B9;</h3>
            <h3>Cuisines: 
            {restaurantData.cuisines.map(item=><span>{" "+item +","}</span>)}
            </h3>
            <h3>{"Location: "+restaurantData?.locality}</h3>
            <h3>{"City: "+restaurantData?.city}</h3>
        </div>
    );
};

export default RestaurantMenu;