import {IMG_CDN_LINK} from "../contants";
const Restranutcard =({cloudinaryImageId,area,name,cuisines})=>{

    return(
        <div className="card">
            <img src={IMG_CDN_LINK+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h4>{area  }</h4>
            <h4>{cuisines.join(" , ")} </h4>
        </div>
    )
}
export default Restranutcard;