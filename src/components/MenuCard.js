import { useState, useEffect } from "react";
import {IMG_CDN_URL} from "../config";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const MenuCard = (props) =>{

    const {name} = props.item;
    const dispatch = useDispatch();
    
    const cartItem= [props.item.name,props.item.price]
    const handleAddItem = () => {
        dispatch(addItem(cartItem));   
    }
    
    return (
        <>
            <div className="flex w-1/1 h-52  m-2 p-2 justify-between">
                <div className="details px-1">
                    <h1 className="font-normal font-serif text-xl">{name}</h1>
                    {props?.item?.price!=undefined?<h3>&#8377;&nbsp;{props?.item?.price/100}</h3>:<h3>&#8377;&nbsp;{props.item?.defaultPrice/100}</h3>}
                    {props.item?.description!=undefined?<span className="text-sm text-gray-400">{props.item?.description}</span>:<></>}
                </div>
                {props.item?.imageId!=undefined?<img className="w-40 h-40 rounded-md ml-32" src={IMG_CDN_URL+props.item?.imageId}></img>:<></>}
                <div>
                    <button className="bg-orange-400 rounded-lg p-2 font-medium" onClick={()=>handleAddItem()}>Add Item</button>
                </div>
            </div>
            <hr/>
        </>
    );
};

export default MenuCard;