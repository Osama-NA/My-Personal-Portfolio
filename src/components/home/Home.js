import React from "react";
import HomeStyle from "../../styles/Home.styled";
import Image from "./Image";
import CallToAction from "./CallToAction";
import ScrollButton from "../UI/scroll-button/ScrollButton";
import Socials from "../UI/socials/Socials";

const Home = ({ homeRef, projectsRef, contactRef }) => {
  const scrollToElement = e => {
    e.current.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <HomeStyle>
      <div className="container">
        <div ref={homeRef} className='ref'></div>
        {/* 
          Don't remove below div,
          Required to use justify-content: space-between
        */}
        <div></div>

        {/* INTRO CONTENT */}
        <main>
          <section>
            <h1>Osama Haj-Ali</h1>
            <p>
              I'm a full stack <span>web developer</span>. Experienced in building
              web applications, and UI / UX design.
            </p>
            <CallToAction projectsRef={projectsRef} contactRef={contactRef} />
          </section>

          <Image />
        </main>

        {/* BUTTONS */}
        <footer>
          <Socials />

          <ScrollButton scrollTo={() => scrollToElement(projectsRef)} />
        </footer>
      </div>
    </HomeStyle>
  );
};

export default Home;
