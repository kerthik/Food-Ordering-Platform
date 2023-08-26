import { restrautList } from "../contants";
import Restranutcard from "../components/Restranutcard";
import { useState ,useEffect } from "react";

function filterData(searchText , RestranutsList){
  return RestranutsList.filter((restra)=> restra.card.card.info.name.includes(searchText)

);}


const Body = ()=>{
  const [RestranutsList , setRestranutsList]=useState(restrautList)
  const [searchText, setSearchText]=useState(" ");
  useEffect(()=>{
    getRestranuts();
  },[]);

  async function  getRestranuts(){
    const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    //console.log(json )
    setRestranutsList( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants );

  }
  
 
    return (
     
        <>
        
        <div className="Search-container">
          <input type="text "className="Search-Input" placeholder="search"
          value={searchText} 
          onChange={(e)=>
            
            setSearchText(e.target.value)}
          
          
          />
           
          <button className="search-btn" onClick={()=>{
          // need to filter the options 
        const data =  filterData(searchText,RestranutsList);
        setRestranutsList(data)
         }}>search


          </button>
        


        </div>
          
        <div className="Restranut-list">
          {RestranutsList.map((funt)=>{
            console.log(restrautList)
            return <Restranutcard {...funt.info}/>
          })}
        
        </div>
        </>

    )
}
export default Body;