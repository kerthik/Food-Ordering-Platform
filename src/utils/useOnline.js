import { useEffect, useState } from "react";

const useOnline =()=>{

    const [isOnline , setIsOnline ]=useState(true)

   useEffect(()=>{
        const handOnline =()=>{
                setIsOnline(true)
        }
        const handOffline =()=>{
                setIsOnline(false)
        }
            window.addEventListener("online",handOnline)
    window.addEventListener("offline",handOffline)
    return ()=>{
        window.removeEventListener("online",handOnline)
        window.removeEventListener("offline",handOffline)
    }
    
   },[])


    return isOnline;// true or false
}
export default useOnline;