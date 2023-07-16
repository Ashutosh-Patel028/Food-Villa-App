import { useState, useEffect } from "react";
import {IMG_CDN_URL} from "../config";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { addFavourite, removeFavourite } from "../utils/favouritesSlice";

const MenuCard = (props) =>{
    
    const {name} = props.item;
    const [toggle,setToggle]=useState(false);
    const [iconClass,setIconClass]=useState("fa-regular fa-star");
    const dispatch = useDispatch();
    
    const cartItem= {name:props.item.name,price:props.item.price}
    const favouriteItem = {id:props.item.id,name:props.item.name,price:props.item.price}

    const handleAddItem = () => {
        dispatch(addItem(cartItem));   
    }

    const handleFavourites = ()=>{
        setToggle(!toggle);
        console.log(toggle);
        if(toggle){ 
            setIconClass("fa-solid fa-star");
            dispatch(addFavourite(favouriteItem));
        }
        else{ 
            setIconClass("fa-regular fa-star");
            dispatch(removeFavourite(favouriteItem));
        }
    }
    
    return (
        <>
            <div className="flex w-1/1 h-52  m-2 p-2 justify-between">
                <div className="details px-1">
                    <h1 className="font-normal font-serif text-xl">{name}</h1>
                    {props?.item?.price!=undefined?<h3>&#8377;&nbsp;{props?.item?.price/100}</h3>:<h3>&#8377;&nbsp;{props.item?.defaultPrice/100}</h3>}
                    {props.item?.description!=undefined?<span className="text-sm text-gray-400">{props.item?.description}</span>:<></>}
                </div>
                {props.item?.imageId!=undefined?<img className="w-40 h-40 rounded-md ml-32 mx-2" src={IMG_CDN_URL+props.item?.imageId}></img>:<></>}
                <div>
                    <button className="bg-orange-400 rounded-lg p-2 font-medium hover:text-white mx-2" onClick={()=>handleAddItem()}>Add <sup>+</sup></button>
                    <button onClick={handleFavourites}>
                        <i className={"font-medium text-2xl text-green-600 " + iconClass}></i>
                    </button>
                </div>
            </div>
            <hr/>
        </>
    );
};

export default MenuCard;