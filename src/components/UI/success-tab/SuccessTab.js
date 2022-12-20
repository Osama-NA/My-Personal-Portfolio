import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import SuccessTabStyle from "../../../styles/SuccessTab.styled";

const SuccessTab = ({ setShowSuccessTab, message }) => {
  return (
    <SuccessTabStyle className="success-tab">
      <div
        className="close-overlay"
        onClick={() => setShowSuccessTab(false)}
      ></div>

      <div className="message-container">
        <p>{message}</p>
        <div onClick={() => setShowSuccessTab(false)} className="close-btn">
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
    </SuccessTabStyle>
  );
};

export default SuccessTab;
