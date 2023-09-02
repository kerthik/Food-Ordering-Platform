import { MENU_CDN_LINK } from "../contants";

const FoodItem=({name,description,imageId,price})=>{
    return (
        <div className=" flex flex-col  w-56 p-2 m-2 shadow-lg bg-pink-50 ">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+imageId}/>
            <h2 className="font-bold">{name}</h2>
            {/* <h3>{description}</h3> */}
            <h4 className="font-bold">Rupees: ₹{price/100}</h4>
        </div>
    )

}
export default FoodItem; 