import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements';
import { ButtonL } from '../ButtonElement';
const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg
            playsInline
            autoPlay
            loop
            muted
            src={Video}
            type="/video/mp4"
          />
        </HeroBg>
        <HeroContent>
          <HeroH1 className="text-typing-1">
            Hey 👋, my name is
            <span id="name" className="text-typing-1">
              {' '}
              Hans{' '}
            </span>
          </HeroH1>
          <HeroP className="text-typing-2">
            I am a Junior Software Developer
          </HeroP>
          <HeroBtnWrapper>
            <ButtonL
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={30}
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              Learn more {hover ? <ArrowForward /> : <ArrowRight />}
            </ButtonL>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
