import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IMG_CDN_LINK from "../contants";
import Shimmer from "./shimmer";

const RestranutMenu = () => {
  const { resId } = useParams();
  const [Restranuts, setRestranuts] = useState({});
  const [CardMenu, setCardMenu] = useState([]);

  useEffect(() => {
    getRestranutsInfo();
  }, []);

  async function getRestranutsInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.664325&lng=78.1460142&restaurantId=" +resId
    );
    const json = await data.json();

    setRestranuts(json.data.cards[0].card.card.info);
    setCardMenu(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
  }

  return (!Restranuts) ?<Shimmer/>:(
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



