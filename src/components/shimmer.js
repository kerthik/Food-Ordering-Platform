const Shimmer=()=>{
    return(
        <div className="Restranut-list">
            {Array(19).fill("").map((e,index)=> <div key={index} className="shimmer-card"></div>)}
           
        </div>
    );
};
export default Shimmer;