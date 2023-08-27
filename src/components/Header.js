
import { useState } from "react";



const Title = ()=>(
    <a href="/">
      < img className="logo"
       alt="google"
       src= "https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4 "
       />
   </a>
   );

   const Header =()=>{
    const [isLoggedIn, setIsLoggedIn]= useState(true)
        return(
        <div className="header">
           <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Card</li>
                </ul>
            </div>
            
            {(isLoggedIn?  <button onClick={()=>setIsLoggedIn(false)}>Logout</button> :<button onClick={()=>setIsLoggedIn(true)}>Login</button>  
           )} 
            
       
       </div>
       
       );
}

   export default Header;