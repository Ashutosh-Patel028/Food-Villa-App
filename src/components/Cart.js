import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice.js";
import { removeItem } from "../utils/cartSlice.js";

const Cart = () =>{
    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    };

    const handleRemoveItem = (name)=>{
        dispatch(removeItem(name));
    }

    return (
        <div className="flex border-2 border-b-teal-500 justify-center my-2 py-2">
            <button className="my-3 mx-8 bg-red-400 rounded-md p-2 font-bold h-1/2" onClick={()=>handleClearCart()}>Clear Cart</button>
            <div className="p-1">
                {cartItems.map((item)=>{
                    return (
                        <div className="flex my-2">
                            <h1 className="p-1 font-mono">{item[0]}&nbsp; &#8377;{item[1]/100}</h1>
                            <button className="mx-3 p-1 bg-amber-600 rounded-lg" onClick={()=>handleRemoveItem(item[0])}>Remove</button>
                        </div>
                    )
                })}

            </div>
        </div>
    );
}

export default Cart;