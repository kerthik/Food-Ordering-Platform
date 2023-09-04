import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IMG_CDN_LINK from "../contants";
import Shimmer from "./shimmer";
import useRestaurant from "../utils/useRestaurant";
import useMenuItems from "../utils/useMenuItems";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestranutMenu = () => {
  const { resId } = useParams();
  const Restranuts =useRestaurant(resId)
  const CardMenu = useMenuItems(resId)
  const dispatch = useDispatch();
const addFoodItem=(item)=>{
  dispatch(addItem(item))
}

  return (!CardMenu) ?<Shimmer/>:(
    <>
      <div className="flex">
        <div>
        <h1>Restranut id: {resId}</h1>
        <h2>{Restranuts.name}</h2>
        <img src={IMG_CDN_LINK + Restranuts.cloudinaryImageId} alt="Restaurant" />
        <h3>{Restranuts.city}</h3>
        <h3>{Restranuts.avgRating}</h3>
        <h3>{Restranuts.costForTwoMessage}</h3>
      </div>
     
      <div className="p-5">
        <h1>Menu</h1>
        <ul>  
          {CardMenu.map((item,index) => (
            <>
            <li key={index}>{item.card.info.name}- <button className="px-3 py-3 my-3 bg-green-100" onClick={()=>addFoodItem(item)}>Add</button></li>
            {/* <img src={IMG_CDN_LINK + item.card.info.imageId} alt="Restaurant" />  */}
            {/* <li className="">{item.card.info.price}</li> */}
            </>
          ))}
        </ul>
      </div>
      </div>
    </>
  );
};

export default RestranutMenu;



