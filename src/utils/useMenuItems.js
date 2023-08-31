import { useState, useEffect } from "react";
import { MENU_CDN_LINK } from "../contants";

const  useMenuItems =(resId)=>{
   
  const [CardMenu, setCardMenu] = useState(null);

  useEffect(() => {
    getRestranutsInfo();
  }, []);

  async function getRestranutsInfo() {
    const data = await fetch(
        MENU_CDN_LINK +resId
    );
    const json = await data.json();

    setCardMenu(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
  }



return CardMenu;
}
export default useMenuItems;