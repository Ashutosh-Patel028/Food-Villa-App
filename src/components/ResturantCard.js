import {IMG_CDN_URL} from '../config'
import {useState,useEffect} from "react";

const RestaurantCard = (props) =>{
    const {name,cloudinaryImageId,cuisines,avgRating,lastMileTravel,costForTwoString}=props;
    const [ratingClass,setRatingClass] = useState('w-15 rounded-md m-1 p-1 text-white font-bold inline text-sm');
    console.log(props);
    var color = "bg-red-600";
    useEffect(()=>{
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
        setRatingClass(color+" "+ratingClass);
    },[]);
    // console.log(name,cloudinaryImageId,cuisines);
    return (
        <div className="card w-64 m-4 p-2 shadow-xl focus:shadow-2xl rounded-lg hover:scale-105">
            <img className="rounded-lg" src={IMG_CDN_URL+cloudinaryImageId} alt="restaurantImg"/>
            <h2 className='font-bold text-neutral-800 p-1'>{name}</h2>
            <h5 className='font-sans font-light text-s px-1'>{cuisines?.join(', ')}</h5>
            <span className='flex text-center'>
            <h4 className={ratingClass}>
            <i class="far fa-solid fa-star font-light"></i>
                {" "+avgRating}
            </h4>
            <h4 className="p-2 font-sans font-medium text-sm flex">{lastMileTravel?.toFixed(2)} kms</h4>
            <h4 className="py-2 font-sans font-medium text-sm flex">{costForTwoString}</h4>
            </span>
        </div>
    )
}

export default RestaurantCard;