import { restrautList } from "../contants";
import Restranutcard from "../components/Restranutcard";
import { useState ,useEffect } from "react";
import Shimmer from "./shimmer";

function filterData(searchText , RestranutsList){
  console.log(searchText)
  //searching the restranuts and making them low case of query and api  
  return RestranutsList.filter((restranutfilter)=> (restranutfilter?.info?.name.toLowerCase()?.includes(searchText.toLowerCase()))


);}
const Body = ()=>{
  const [allRestranurts , setAllRestranurts]=useState([])
  const [filteredRestranutsList , setFilteredRestranutsList]=useState([])
  const [searchText, setSearchText]=useState("");
  useEffect(()=>{
    getRestranuts();
  },[]);
  async function  getRestranuts(){
    const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    console.log(data)
    const json = await data.json();
   // console.log(json )
   setAllRestranurts( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
   setFilteredRestranutsList( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
  } 
//to avoid rendering error 
  if(!allRestranurts) return  null ;
//to avoid rendering in all restranuts 
if(filteredRestranutsList.length===0) return <h1>No Restranut founds </h1>;
  //conditional rendering
    return (allRestranurts.length===0)?<Shimmer/> :(    
        <>        
        <div className="Search-container">
          <input type="text "className="Search-Input" placeholder="search"
          value={searchText} 
          onChange={(e)=>            
            setSearchText(e.target.value)}
          
          
          />
           
          <button className="search-btn" onClick={()=>{
          // need to filter the options 
        const data =  filterData(searchText,allRestranurts);
        setFilteredRestranutsList(data)
         }}>search


          </button>
        


        </div>
          
        <div className="Restranut-list">
          {filteredRestranutsList.map((funt)=>{
            //console.log(RestranutsList)
            return <Restranutcard {...funt.info}key={...funt.info.id}/>
          })}
        
        </div>
        </>

    )
}
export default Body;