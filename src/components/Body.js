import { restrautList } from "../contants";
import Restranutcard from "../components/Restranutcard";
import { useState } from "react";

function filterData(searchText , RestranutsList){
  return RestranutsList.filter((restra)=> restra.data.name.includes(searchText)

);}


const Body = ()=>{
  const [RestranutsList , setRestranutsList]=useState(restrautList)
  const [searchText, setSearchText]=useState(" ");
 
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
            return <Restranutcard {...funt.data }key = {funt.data.id }/>
          })}
        
        </div>
        </>

    )
}
export default Body;