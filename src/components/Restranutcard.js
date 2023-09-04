import {IMG_CDN_LINK} from "../contants";
const Restranutcard =({cloudinaryImageId,name,areaName,cuisines})=>{

    return(
        <div className="w-52 p-2 m-2 shadow-lg bg-purple-100">
            <img src={IMG_CDN_LINK+cloudinaryImageId}/>
            <h2 className="font-bold text-xl ">{name}</h2>
            <h3>{areaName}</h3>
            <h4>{cuisines.join(", ")   } </h4>
        </div>
    )
}
export default Restranutcard;