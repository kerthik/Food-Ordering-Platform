import React from "react";
import  ReactDOM from "react-dom/client"; 
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/contact";
import { createBrowserRouter ,RouterProvider,Outlet } from "react-router-dom";
import RestranutMenu from "./components/RestranutMenu";



const Applayout =()=>{


    return(
    <>    
   <Header/>
    <Outlet/>
    <Footer/>
    </>
    )
}


const appRouter =createBrowserRouter([
    {  
       path:"/",
       element:<Applayout/>,
       errorElement:<Error/>,
       children:[
        {
             path:"/",
            element:<Body/>
             
        },
        {
            path:"/about",
           element:<About/>
            
       },
       {
        path:"/Contact",
       element:<Contact/>
        
   },
   {
    path:"/Restranut/:resId",
   element:<RestranutMenu/>
    
   },
       
       ]
    },
    




])


const Root = ReactDOM.createRoot(document.getElementById("root"))
Root.render(<RouterProvider router={appRouter }/>) 