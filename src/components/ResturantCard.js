import {IMG_CDN_URL} from '../config'

const RestaurantCard = (props) =>{
    const {name,cloudinaryImageId,cuisines,avgRating,lastMileTravel,costForTwoString}=props;
    console.log(props);
    // console.log(name,cloudinaryImageId,cuisines);
    return (
        <div className="card w-64 m-4 p-2 shadow-xl focus:shadow-2xl rounded-lg hover:scale-105">
            <img className="rounded-lg" src={IMG_CDN_URL+cloudinaryImageId} alt="restaurantImg"/>
            <h2 className='font-bold text-neutral-800 p-1'>{name}</h2>
            <h5 className='font-sans font-light text-s px-1'>{cuisines?.join(', ')}</h5>
            <span className='flex text-center'>
            <h4 className='bg-green-600 w-15 rounded-md m-1 p-1 text-white font-bold inline text-sm'>
            <i class="fa-solid fa-star font-light"></i>
            {" "+avgRating}
            </h4>
            <h4 className="p-2 font-sans font-medium text-sm flex">{lastMileTravel?.toFixed(2)} kms</h4>
            <h4 className="py-2 font-sans font-medium text-sm flex">{costForTwoString}</h4>
            </span>
        </div>
    )
}

export default RestaurantCard;