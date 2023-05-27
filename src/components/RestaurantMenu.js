import { useParams } from "react-router-dom";
const RestaurantMenu = () =>{
    const params= useParams();
    return (
        <div>
            <h1>Restaurant: {params.id}</h1>
            <h2>Manu</h2>
        </div>
    );
};

export default RestaurantMenu;