import { useState, useEffect } from "react";

const useOnline = ()=>{
    const [isOnline,setIsOnline]=useState(true);

    useEffect(()=>{
        const handleOFFLINE = ()=>{
            setIsOnline(true)
        };
        const handleONLINE = ()=>{
            setIsOnline(false)
        };
        
        window.addEventListener("online",handleONLINE);
        window.addEventListener("offline",handleOFFLINE);
        
        return () => {
            window.removeEventListener("online",handleONLINE);
            window.removeEventListener("offline",handleOFFLINE);
        }
    },[]);


    return isOnline;
}

export default useOnline;