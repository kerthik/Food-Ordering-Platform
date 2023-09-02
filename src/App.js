import React, { Suspense, lazy }  from "react";
import  ReactDOM from "react-dom/client"; 
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/contact";
import { createBrowserRouter ,RouterProvider,Outlet } from "react-router-dom";
import RestranutMenu from "./components/RestranutMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/shimmer";
import { Provider } from "react-redux";
import store from "./utils/store";
import CardItems from "./components/CardItems";



const Instamart =lazy(()=>import("./components/Instamart"))

const Applayout =()=>{


    return(
    <Provider store ={store}>    
   <Header/>
    <Outlet/>
    <Footer/>
    </Provider>
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
           element:<About/>, 
           children:[
            {
                path:"profile",
                element:<Profile/>
            }
        ]
            
       },
       {
        path:"/Contact",
       element:<Contact/>
        
   },
   {
    path:"/Restranut/:resId",
   element:<RestranutMenu/>
    
   },
   {
    path:"/instamart",
    element:<Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
    
   },
   {
    path:"/CardItems",
    element:<CardItems/>
   }
 
       
       ]
    },
    




])


const Root = ReactDOM.createRoot(document.getElementById("root"))
Root.render(<RouterProvider router={appRouter }/>) 