import { restrautList } from "../contants";
import Restranutcard from "../components/Restranutcard";
import { useState } from "react";
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
            if(clicked==="True"){
              setClicked("False")
            }else{
              setClicked("True")
            }
 
         }}>search


          </button>
        


        </div>
          
        <div className="Restranut-list">
          {restrautList.map((funt)=>{
            return <Restranutcard {...funt.data }key = {funt.data.id }/>
          })}
        
        </div>
        </>

    )
}
export default Body;