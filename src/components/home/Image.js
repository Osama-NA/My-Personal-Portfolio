import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/themeContext";
import SideImageDark from "./home-img-dark.png";
import SideImage from "./home-img.png";

const Image = () => {
  const [sideImage, setSideImage] = useState(SideImage);

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setSideImage(theme.type === "dark" ? SideImage : SideImageDark);
  }, [theme]);

  return (
    <img
      className="home-img"
      src={sideImage}
      alt="Osama Hajj Ali portfolio home section line art"
      draggable={false}
    />
  );
};

export default Image;
