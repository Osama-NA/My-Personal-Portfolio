import React from "react";

const CallToAction = ({ projectsRef, contactRef }) => {
  const scrollToElement = (e) => {
    e.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <button
        className="bordered-btn"
        onClick={() => scrollToElement(contactRef)}
      >
        Get in touch
      </button>
      <button
        className="filled-btn"
        onClick={() => scrollToElement(projectsRef)}
      >
        Explore projects
      </button>
    </>
  );
};

export default CallToAction;
