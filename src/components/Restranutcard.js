import {IMG_CDN_LINK} from "../contants";
const Restranutcard =({cloudinaryImageId,area,name,cuisines})=>{

    return(
        <div className="card">
            <img src={IMG_CDN_LINK+cloudinaryImageId}/>
            <h2>{area}</h2>
            <h4>{name}</h4>
            <h4>{cuisines.join(", ")} </h4>
        </div>
    )
}
export default Restranutcard;