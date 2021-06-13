import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaGithub } from 'react-icons/fa';
import Icon1 from '../../images/1.png';
import Icon2 from '../../images/2.png';
import Icon3 from '../../images/3.png';
import Icon4 from '../../images/4.png';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import {
  ProjectContainer,
  ProjectH1,
  ProjectWrapper,
  ProjectCard,
  ProjectIcon,
  ProjectLink,
  ProjectH2,
  ProjectP,
} from './ProjectElements';

const icons = [Icon1, Icon2, Icon3, Icon4];
const title = ['Pingou Adventure', 'Fast Migrate', 'PathFinder', 'Blokus'];
const des = [
  'A platform game of a penguin in an ice world',
  'A web app to help people with migration',
  'A pathfinding app implementing Q-learning',
  'A fun 4 player board game made virtual',
];
const gitlink = [
  '//www.github.com/plouuf/Pingou-s-Adventure',
  '//www.github.com/plouuf/Fast-Migrate/tree/master/Fast Migrate',
  '//www.github.com/plouuf/Comp3200/tree/master/Assignment 5',
  '//www.github.com/plouuf/Blokus',
];

const Projects = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '10px',
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <ProjectContainer id="projects">
      <ProjectH1>Projects</ProjectH1>
      <ProjectWrapper>
        <Slider {...settings}>
          {icons.map((img, idx) => (
            <ProjectCard
              className={idx === imageIndex ? 'slide activeSlide' : 'slide'}
            >
              <ProjectIcon src={img} />
              <ProjectH2>{title[idx]}</ProjectH2>
              <ProjectP>{des[idx]}</ProjectP>
              <ProjectLink
                href={gitlink[idx]}
                target="_blank"
                aria-label="Github"
                title="View source code on Github"
              >
                <FaGithub />
              </ProjectLink>
            </ProjectCard>
          ))}
        </Slider>
      </ProjectWrapper>
    </ProjectContainer>
  );
};

export default Projects;
