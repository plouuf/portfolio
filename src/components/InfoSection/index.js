import React from 'react';
import { ButtonA } from '../ButtonElement';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Img,
  ImgWrap,
} from './InfoElements';

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  linkto
}) => {
  if (id === "resume" || id === "contact") {
    return (
      <>
        <InfoContainer lightBg={lightBg} id={id}>
          <InfoWrapper>
            <InfoRow imgStart={imgStart}>
              <Column1>
                <TextWrapper>
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={lightText}> {headLine}</Heading>
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                  <BtnWrap>
                    <ButtonA
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={45}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                      href={linkto}
                      target="_blank"
                      
                    >{buttonLabel}</ButtonA>
                  </BtnWrap>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={img} alt={alt} />
                </ImgWrap>
              </Column2>
            </InfoRow>
          </InfoWrapper>
        </InfoContainer>
      </>
    );
  } else {
    return (
      <>
        <InfoContainer lightBg={lightBg} id={id}>
          <InfoWrapper>
            <InfoRow imgStart={imgStart}>
              <Column1>
                <TextWrapper>
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={lightText}> {headLine}</Heading>
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={img} alt={alt} />
                </ImgWrap>
              </Column2>
            </InfoRow>
          </InfoWrapper>
        </InfoContainer>
      </>
    );
  }
  
};

export default InfoSection;
