import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem, incrementQty, decrementQty } from "../utils/cartSlice.js";

const Cart = () =>{
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    };

    const handleRemoveItem = (name)=>{
        dispatch(removeItem(name));
    }

    function handleIncrement(name){
        dispatch(incrementQty(name));
    }

    function handleDecrement(name){
        dispatch(decrementQty(name));
    }

    return (
        <div className="flex border-2 border-teal-500 justify-center my-2 py-2">
            <button className="my-3 mx-8 bg-red-400 rounded-md p-2 font-bold h-1/2" onClick={()=>handleClearCart()}>Clear Cart</button>
            <div className="p-1">
                {cartItems.map((item,index)=>{
                    return (
                        <div className="flex my-2" id={index}>
                            <h1 className="p-1 font-mono">{item.name}&nbsp; &#8377;{item.price/100}&nbsp;</h1>
                            <button className="bg-red-500 w-7 h-8 font-semibold text-lg rounded-md disabled:bg-red-300" disabled={item.qty===1} onClick={()=>handleDecrement(item.name)}>-</button>
                            <span>Qty:{item.qty}</span>
                            <button className="bg-blue-400 w-7 h-8 font-semibold text-lg rounded-md" onClick={()=>handleIncrement(item.name)}>+</button>
                            <button className="mx-3 p-1 bg-amber-600 rounded-lg" onClick={()=>handleRemoveItem(item.name)}>Remove</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Cart;