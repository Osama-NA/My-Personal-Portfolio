import React from "react";
import HeaderStyle from "../../styles/Header.styled";
import ThemeButton from './ThemeButton'

const Header = ({ homeRef }) => {

  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <HeaderStyle>
      <h1 className="logo" onClick={scrollToHome}>
        Osama
        <span>.</span>
      </h1>

      <nav>
        <ul>
          <li>PROJECTS</li>
          <li>CONTACT</li>
        </ul>

        <ThemeButton/>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
