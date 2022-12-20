import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../context/themeContext";
import LoadingSpinnerStyle from "../../../styles/LoadingSpinner.styled";
import loaderBigWhite from "./loader1.png";
import loaderBigDark from "./dark-loader1.png";
import loaderSmall from "./loader2.png";

const LoadingSpinner = () => {
  const [loaderBig, setLoaderBig] = useState(loaderBigWhite);

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setLoaderBig(theme.type === "dark" ? loaderBigWhite : loaderBigDark);
  }, [theme]);

  return (
    <LoadingSpinnerStyle className="loading-spinner">
      <img
        src={loaderBig}
        className="loader-1"
        alt="Osama Hajj Ali portfolio loader"
      />
      <img
        src={loaderSmall}
        className="loader-2"
        alt="Osama Hajj Ali portfolio loader"
      />
    </LoadingSpinnerStyle>
  );
};

export default LoadingSpinner;
