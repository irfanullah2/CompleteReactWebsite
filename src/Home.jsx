import React from "react";
import web from "../src/images/1.jpeg"
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home =()=>{

    return(
        <>

   
<Common name="Grow Bussiness With" 
    imgsrc={web} 
    visit="/services"
    btnname="Get Started"
      />
        </>
    )
}
export default Home;
