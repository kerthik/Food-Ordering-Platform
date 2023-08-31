
import { useState} from "react";
import Logo from "../assets/img/logo.png"
import { Link } from "react-router-dom";
import useOnline  from "../utils/useOnline";


const Title = ()=>(
    <a href="/">
      < img className="h-28 px-2"
       alt="google"
       src= {Logo}
       />
   </a>
   );

   const Header =()=>{
    const isOnline  = useOnline()
    


    const [isLoggedIn, setIsLoggedIn]= useState(true)
        return(
        <div className="flex justify-between bg-pink-50 shadow-md sm:bg-gray-50">
           <Title />
            <div className="nav-items">
                <ul  className="flex py-10">
                    <li className="px-2">< Link to = "/">Home</Link></li>
                    <li className="px-2">< Link to = "/about">About</Link></li>
                    <li className="px-2">< Link to ="/Contact">Contact Us</Link></li>
                    <li className="px-2">Card</li>
                    <li className="px-2">< Link to ="/instamart">Instamart</Link></li>
                </ul>
            </div>
            <h1 className="py-10">{isOnline? "✅":"🔴"} </h1>
            
            {(isLoggedIn?  <button onClick={()=>setIsLoggedIn(false)}>Logout</button> :<button onClick={()=>setIsLoggedIn(true)}>Login</button>  
           )} 
            
       
       </div>
       
       );
}

   export default Header;