import styled from 'styled-components';

export const ProjectContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ProjectWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  /* display: flex; */
  /* grid-template-columns: 1fr 1fr 1fr; */
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    max-width: 500px;
  }

  @media screen and (max-width: 768px) {
    /* grid-template-columns: 1fr; */
    max-width: 300px;
    padding: 0 0px;
  }
`;
export const ProjectCard = styled.a`
  background: #fff;
  display: flex;
  /* flex-direction: column; */
  /* justify-content: flex-start; */
  align-items: center;
  border-radius: 20px;
  max-height: 380px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  overflow: hidden;

  &:hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    max-height: 300px;
  }

  @media screen and (max-width: 768px) {
    max-height: 150px;
  }
`;

export const ProjectIcon = styled.img`
  height: 180px;
  width: 250px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    height: 0px;
    width: 0px;
  }

  @media screen and (max-width: 768px) {
    height: 0px;
    width: 0px;
  }
`;

export const ProjectH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #02bfbf;

  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const ProjectLink = styled.a`
  color: black;
  font-size: 24px;
  padding-top: 2px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ProjectH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const ProjectP = styled.p`
  font-size: 1rem;
  text-align: center;

  @media screen and (max-width: 1000px) {
    font-size: 0.7rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 0px;
  }
`;
