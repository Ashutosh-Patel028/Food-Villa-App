import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice.js";

const Cart = () =>{
    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    };

    return (
        <div className="flex border border-2 border-b-teal-500 justify-center">
            <button className="my-3 mx-8 bg-red-400 rounded-md p-2 font-bold h-1/2" onClick={()=>handleClearCart()}>Clear Cart</button>
            <div className="p-1">
                <hr/>
                {cartItems.map((val)=>{
                    return <h1 className="p-1 font-mono">{val[0]}&nbsp;&nbsp;&nbsp; &#8377;{val[1]/100}<hr/></h1>
                })}

            </div>
        </div>
    );
}

export default Cart;