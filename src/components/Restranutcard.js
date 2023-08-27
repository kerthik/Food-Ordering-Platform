import {IMG_CDN_LINK} from "../contants";
const Restranutcard =({cloudinaryImageId,name,areaName,cuisines})=>{

    return(
        <div className="card">
            <img src={IMG_CDN_LINK+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{areaName}</h3>
            <h4>{cuisines.join(", ")   } </h4>
        </div>
    )
}
export default Restranutcard;