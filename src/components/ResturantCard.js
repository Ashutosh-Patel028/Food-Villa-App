import {IMG_CDN_URL} from '../config'

const RestaurantCard = (props) =>{
    const {name,cloudinaryImageId,cuisines,avgRating}=props;
    // console.log("props = "+props.cloudinaryImageId);
    // console.log(name,cloudinaryImageId,cuisines);
    return (
        <div className="card w-52 m-4 p-2 shadow-xl focus:shadow-2xl rounded-lg hover:scale-105">
            <img className="rounded-lg" src={IMG_CDN_URL+cloudinaryImageId} alt="restaurantImg"/>
            <h2 className='font-bold text-neutral-800 p-1'>{name}</h2>
            <h5 className='font-sans font-light text-s px-1'>{cuisines?.join(', ')}</h5>
            <h4 className='bg-green-600 w-10 rounded-md m-1 p-1 text-white font-bold inline text-sm'>
            <i class="fa-solid fa-star font-light"></i>
            {" "+avgRating}
            </h4>
        </div>
    )
}

export default RestaurantCard;