import { Outlet } from "react-router-dom";
import Profile from "./Profile";

const About =()=>{
    return(
        <div>
            <h1>About Page</h1>
            <Outlet/>
            <Profile/> 
            </div>
    )
       
       
}
export default About;