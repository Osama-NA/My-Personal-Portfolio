import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/themeContext";
import Socials from "../UI/socials/Socials";
import SideImage from "./content-img.png";
import BlackSideImage from "./black-content-img.png";

const SideContent = () => {
    const [sideImage, setSideImage] = useState(SideImage);
  
    const { theme } = useContext(ThemeContext);
  
    useEffect(() => {
      setSideImage(theme.type === "dark" ? SideImage : BlackSideImage);
    }, [theme]);
    
  return (
    <div className='side-content'>
        <img
         src={sideImage} 
         alt='Osama Haj Ali portfolio contact page line art' 
         draggable={false}
        />
        <Socials />
    </div>
  )
}

export default SideContent