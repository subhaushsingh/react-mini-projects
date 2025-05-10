import React, { useState } from "react";
import {Outlet, useLocation} from 'react-router-dom'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function Layout(){

    const [generateCount,setGenerateCount] = useState(0);
    const location = useLocation();

    const handleGenerate=()=>{
        setGenerateCount(prev => prev+1);
    }


    return(
        <>
            <Header onGenerate={handleGenerate}/>
            <Outlet context={{generateCount}}/>
            <Footer />
        </>
    )
}


export default Layout