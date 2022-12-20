import React, { useState, useEffect, useRef, useContext } from "react";
import HeaderStyle from "../../styles/Header.styled";
import ThemeButton from "./ThemeButton";
import { ThemeContext } from "../../context/themeContext";

const Header = ({ homeRef, projectsRef, contactRef }) => {
  const { theme } = useContext(ThemeContext);

  const [scroll, setScroll] = useState(0);
  const [headerRefresh, setHeaderRefresh] = useState(false);

  const headerRef = useRef();
  const titleRef = useRef();
  const navItemOne = useRef();
  const navItemTwo = useRef();
  const themeButtonRef = useRef();

  const scrollToElement = (e) => {
    e.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const elementsFadeIn = (type) => {
    headerRef.current.style.animation = `${type}BackgroundFadeIn .125s ease-in forwards`;
    titleRef.current.style.animation = `${type}TitleColorFadeIn .125s ease-in forwards`;
    navItemOne.current.style.animation = `${type}NavItemColorFadeIn .125s ease-in forwards`;
    navItemTwo.current.style.animation = `${type}NavItemColorFadeIn .125s ease-in forwards`;
    themeButtonRef.current.style.animation = `${type}ButtonBorderFadeIn .125s ease-in forwards`;
  };

  const elementsFadeOut = (type) => {
    headerRef.current.style.animation = `${type}BackgroundFadeOut .125s ease-in forwards`;
    titleRef.current.style.animation = `${type}TitleColorFadeOut .125s ease-in forwards`;
    navItemOne.current.style.animation = `${type}NavItemColorFadeOut .125s ease-in forwards`;
    navItemTwo.current.style.animation = `${type}NavItemColorFadeOut .125s ease-in forwards`;
    themeButtonRef.current.style.animation = `${type}ButtonBorderFadeOut .125s ease-in forwards`;
  };

  // Handling header animations on scroll
  useEffect(() => {
    if (scroll > 100) {
      elementsFadeIn(theme.type === "dark" ? "dark" : "light");
    } else {
      elementsFadeOut(theme.type === "dark" ? "dark" : "light");
    }
  }, [scroll, headerRefresh, theme.type]);

  // Adding on scroll event used to add animations to the header on scroll
  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  return (
    <HeaderStyle ref={headerRef}>
      <div className="container">
        <h1 className="logo" onClick={() => scrollToElement(homeRef)}>
          <span ref={titleRef}>Osama</span>
          <span className="dot">.</span>
        </h1>

        <nav>
          <ul>
            <li ref={navItemOne} onClick={() => scrollToElement(projectsRef)}>
              PROJECTS
            </li>
            <li ref={navItemTwo} onClick={() => scrollToElement(contactRef)}>
              CONTACT
            </li>
          </ul>

          <ThemeButton
            themeButtonRef={themeButtonRef}
            setHeaderRefresh={setHeaderRefresh}
            headerRefresh={headerRefresh}
          />
        </nav>
      </div>
    </HeaderStyle>
  );
};

export default Header;
