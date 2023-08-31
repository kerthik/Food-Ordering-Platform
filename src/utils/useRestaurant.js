import { useState, useEffect } from "react";
import { MENU_CDN_LINK } from "../contants";

const useRestaurant =(resId)=>{
    const [Restranuts, setRestranuts] = useState(null);
   
  
    useEffect(() => {
      getRestranutsInfo();
    }, []);
  
    async function getRestranutsInfo() {
      const data = await fetch(
        MENU_CDN_LINK +resId
      );
      const json = await data.json();
  
      setRestranuts(json.data.cards[0].card.card.info);
     
    }
    return Restranuts;
}
export default useRestaurant;