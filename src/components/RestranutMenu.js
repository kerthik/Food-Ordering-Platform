import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IMG_CDN_LINK from "../contants";
import Shimmer from "./shimmer";
import useRestaurant from "../utils/useRestaurant";
import useMenuItems from "../utils/useMenuItems";

const RestranutMenu = () => {
  const { resId } = useParams();
  const Restranuts =useRestaurant(resId)
  const CardMenu = useMenuItems(resId)
  

  return (!CardMenu) ?<Shimmer/>:(
    <>
      <div className="menu">
        <div>
        <h1>Restranut id: {resId}</h1>
        <h2>{Restranuts.name}</h2>
        <img src={IMG_CDN_LINK + Restranuts.cloudinaryImageId} alt="Restaurant" />
        <h3>{Restranuts.city}</h3>
        <h3>{Restranuts.avgRating}</h3>
        <h3>{Restranuts.costForTwoMessage}</h3>
      </div>
      <div>
        <ul>
          {CardMenu.map((item) => (
            <>
          
            <li key={item.card.info.id}>{item.card.info.name}</li>
            <img src={IMG_CDN_LINK + item.card.info.imageId} alt="Restaurant" /> 
            <li>{item.card.info.price}</li>
            </>
          ))}
        </ul>
      </div>
      </div>
    </>
  );
};

export default RestranutMenu;



