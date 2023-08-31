import { restrautList } from "../contants";
import Restranutcard from "../components/Restranutcard";
import { useState ,useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import useOnline from "../utils/useOnline";




const Body = ()=>{
  const [allRestranurts , setAllRestranurts]=useState([])
  const [filteredRestranutsList , setFilteredRestranutsList]=useState([])
  const [searchText, setSearchText]=useState("");
  useEffect(()=>{
    getRestranuts();
  },[]);
  async function  getRestranuts(){
    const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.664325&lng=78.1460142&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
   
    const json = await data.json();
   // console.log(json )
   setAllRestranurts( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
   setFilteredRestranutsList( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
  }
  //isOnline using customized react hooks 
  // const isOnline = useOnline()
  // if(!isOnline){
  //   return <h1>your are offline Please check Your internet connection    </h1>
  // }
  



//to avoid rendering error 
  if(!allRestranurts) return  null ;
//to avoid rendering in all restranuts 
//if(filteredRestranutsList.length===0) return <h1>No Restranut founds </h1>;//todo
  //conditional rendering
    return (allRestranurts.length===0)?<Shimmer/> :(    
        <>        
        <div className="p-5 bg-pink-100 my-5">
          <input type="text "className="focus:bg-pink-100 p-2 m-2" placeholder="search"
          value={searchText} 
          onChange={(e)=>            
            setSearchText(e.target.value)}
          
          
          />
           
          <button className="p-2 m-1 bg-purple-900 hover:bg-gray-500 text-white rounded-lg" onClick={()=>{
          // need to filter the options 
        const data =  filterData(searchText,allRestranurts);
        setFilteredRestranutsList(data)
         }}>search


          </button>
        


        </div>
          
        <div className=" flex flex-wrap">
           {filteredRestranutsList.map((funt)=>{
           
            return (
              <Link to={"/Restranut/" + funt.info.id} key={funt.info.id}>
            <Restranutcard {...funt.info}/>
            </Link>
          )})}
        
        </div>
        </>

    )
}
export default Body;