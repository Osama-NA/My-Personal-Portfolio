import React from "react";
import HomeStyle from "../../styles/Home.styled";
import Image from './Image'
import CallToAction from './CallToAction'
import ScrollButton from "../UI/scroll-button/ScrollButton";
import Socials from "../UI/socials/Socials";

const Home = ({ homeRef }) => {
  return (
    <HomeStyle>
      <div ref={homeRef} className="ref"></div>

      <main>
        <section>
          <h1>Osama Haj-Ali</h1>
          
          <p>
            I'm a full stack <span>web developer</span>. Experienced in building
            web applications, and UI / UX design.
          </p>

          <CallToAction />
        </section>

        <Image />
      </main>

      <footer>
        <Socials />
        <ScrollButton />
      </footer>
    </HomeStyle>
  );
};

export default Home;
