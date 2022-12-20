import React from "react";
import LoadingPageStyle from "../../../styles/LoadingPage.styled";
import LoadingSpinner from "../loading-spinner/LoadingSpinner";

const LoadingPage = () => {
  return (
    <LoadingPageStyle>
      <h1 className="logo">
        Osama
        <span>.</span>
      </h1>

      <LoadingSpinner />
    </LoadingPageStyle>
  );
};

export default LoadingPage;
