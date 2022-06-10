import React, { useState } from "react";
import {motion} from 'framer-motion'
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import slim from "../../Assets/slim.png";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft
         
          >
            <motion.h1
              animate={{scale:1,x:0,opacity:1}}
              initial={{scale:0,x:-50,opacity:0}} 
              transition={{duration:.4}}
            >Hi, I'm Slim Khemiri</motion.h1>
            <motion.h5 
             animate={{scale:1,x:0,opacity:1}}
             initial={{scale:0,x:-50,opacity:0}} 
             transition={{duration:.4}}
            >Fullstack Software Developer</motion.h5>
            
            <motion.p
             animate={{scale:1,x:0,opacity:1}}
             initial={{scale:0,x:-50,opacity:0}} 
             transition={{duration:.4}}
            >
              I design and code beautifully simple things, and I love what I do.
            </motion.p>
          
          </HeroLeft> 
          <motion.HeroRight 
           animate={{scale:1,y:0,opacity:1}}
           initial={{scale:0,y:-150,opacity:0}} 
           transition={{duration:.4}}
          >
            <Image src={slim} alt="man-svgrepo" />
          </motion.HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            <img
              src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
