import React from "react";
import  ReactDOM from "react-dom/client"; 
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";




    





const Applayout =()=>{
    return(
    <>    
   <Header/>
    <Body/>
    <Footer/>
    </>
    )
}
const Root = ReactDOM.createRoot(document.getElementById("root"))
Root.render(<Applayout/>) 