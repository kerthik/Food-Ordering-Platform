
import { useState} from "react";
import Logo from "../assets/img/logo.png"
import { Link } from "react-router-dom";
import useOnline  from "../utils/useOnline";


const Title = ()=>(
    <a href="/">
      < img className="logo"
       alt="google"
       src= {Logo}
       />
   </a>
   );

   const Header =()=>{
    const isOnline  = useOnline()
    


    const [isLoggedIn, setIsLoggedIn]= useState(true)
        return(
        <div className="header">
           <Title />
            <div className="nav-items">
                <ul>
                    <li>< Link to = "/">Home</Link></li>
                    <li>< Link to = "/about">About</Link></li>
                    <li>< Link to ="/Contact">Contact Us</Link></li>
                    <li>Card</li>
                    <li>< Link to ="/instamart">Instamart</Link></li>
                </ul>
            </div>
            <h1>{isOnline? "✅":"🔴"} </h1>
            
            {(isLoggedIn?  <button onClick={()=>setIsLoggedIn(false)}>Logout</button> :<button onClick={()=>setIsLoggedIn(true)}>Login</button>  
           )} 
            
       
       </div>
       
       );
}

   export default Header;