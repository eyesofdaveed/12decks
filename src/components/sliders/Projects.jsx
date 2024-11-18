import Data from "@data/sliders/projects.json";
import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const ProjectsSlider = ({ projects }) => {
  return (
    <section className="gap project-style-one light-bg-color">
      <div className="heading">
        <figure>
          <img src="/img/heading-icon.png" alt="Heading Icon" />
        </figure>
        <span>{Data.subtitle}</span>
        <h2>{Data.title}</h2>
      </div>
      <div className="container">
        <Swiper
          {...sliderProps.projectsSlider}
          className="swiper-container project-slider"
        >
          {Data.projects.slice(0, Data.numOfItems).map((item, key) => (
            <SwiperSlide key={`pjs-slide-${key}`} className="swiper-slide">
              <div className="project-post">
                <figure>
                  <img src={item.image} alt={item.title} />
                </figure>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination" />
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectsSlider;
