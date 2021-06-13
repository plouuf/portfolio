import React from 'react';
import { ButtonB } from '../ButtonElement';
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
  FormWrapper,
  InputName,
  InputEmail,
  TextArea,
  BtnWrap,
  Img,
  ImgWrap,
} from './ContactElements';

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
}) => {
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
                <FormWrapper
                  action="https://formsubmit.co/therandomploouf@protonmail.com"
                  method="POST"
                >
                  <InputName
                    type="text"
                    name="name"
                    placeholder="Name"
                    required="required"
                  ></InputName>
                  <InputEmail
                    type="email"
                    name="email"
                    placeholder="Email"
                    required="required"
                  ></InputEmail>
                  <TextArea
                    type="text"
                    name="message"
                    placeholder="Message"
                    required="required"
                  ></TextArea>
                  <BtnWrap>
                    <ButtonB
                      type="submit"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                    >
                      {buttonLabel}
                    </ButtonB>
                  </BtnWrap>
                </FormWrapper>
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
};

export default InfoSection;
