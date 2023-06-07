import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
import { IMG_CDN_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";
import MenuCard from "./MenuCard";

const RestaurantMenu = () =>{

    const params= useParams();
    const restaurantData = useRestaurant(params.id);
    const [ratingClass,setRatingClass] = useState('rounded-md m-1 p-1 text-white font-bold inline text-sm h-8 w-10');
    const avgRating = (restaurantData?.avgRating)==undefined?"--":restaurantData?.avgRating;
    const [menu,setMenu] = useState([]);
    const ListAPI=`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.9158979&lng=70.3628516&restaurantId=${params.id}&submitAction=ENTER`
    
    useEffect(()=>{
        var color = "bg-red-600";
        if(avgRating>=4){
            color = "bg-green-600";
        }else if(avgRating>=3){
            color = "bg-orange-400";
        }else if(avgRating>=2){
            color = "bg-yellow-800";
        }else if(avgRating>=1){
            color = "bg-red-600";
        }else{
            color = "bg-gray-600";
        }
        getMenu();
        // setRatingClass(color+" "+ratingClass);
        
        // fetch(ListAPI).then(res=>res.json()).then(data=>console.log(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards));
    },[]);

    async function getMenu(){
        const res = await fetch(ListAPI);
        const data = await res.json();
        // console.log(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        if(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards!==undefined){
            setMenu(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        }
    }
    
    if(restaurantData===undefined || restaurantData.length===0) return <ShimmerUI/>;    
    return (
        <div className="flex justify-center">
            <div className="container w-2/3 px-12">
                <div className="flex justify-between  py-2 px-2">
                    <div>
                        <h1 className="font-semibold font-serif text-3xl">
                            {restaurantData?.name}
                            <span className={ratingClass}>
                            <i class="far fa-solid fa-star font-light"></i>
                                {" "+avgRating}
                            </span>
                        </h1>
                        <h3>{restaurantData.cuisines.map(item=><span>{" "+item +","}</span>)}</h3>
                        <h3><i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;{restaurantData?.locality}</h3>
                        <h3><i class="fa-solid fa-person-biking"></i>&nbsp;&nbsp;{restaurantData?.sla?.lastMileTravelString}</h3>
                        <h3>
                            <i class="fa-solid fa-coins"></i>
                            &nbsp;&nbsp;{restaurantData?.costForTwoMessage}
                        </h3>
                        <h3>
                            <i class="fa-regular fa-hourglass-half"></i>
                            &nbsp;&nbsp;{restaurantData?.sla?.slaString}
                        </h3>
                    </div>
                    <img className="w-60 rounded-md" src={IMG_CDN_URL+restaurantData.cloudinaryImageId}></img>
                </div>
                <hr></hr>
                <div className="Menu-list">
                    <h1 className="text-xl font-bold my-6">Recommended Menu</h1>
                    {menu.map((item,key)=><MenuCard item={item?.card?.info} key={key}/>)}
                </div>
            </div>
        </div>
    );
};

export default RestaurantMenu;