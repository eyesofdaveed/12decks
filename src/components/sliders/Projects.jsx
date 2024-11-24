import Data from "@data/sliders/projects.json";
import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

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

          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            576: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            992: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
            <SwiperSlide className="swiper-slide" >
              <div className="project-post">
                <figure>
                  <img src={Data.projects[0].image} alt={Data.projects[0].title} />
                </figure>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide" >
              <div className="project-post">
                <figure>
                  <img src={Data.projects[1].image} alt={Data.projects[1].title} />
                </figure>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide" >
              <div className="project-post">
                <figure>
                  <img src={Data.projects[2].image} alt={Data.projects[2].title} />
                </figure>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide" >
              <div className="project-post">
                <figure>
                  <img src={Data.projects[3].image} alt={Data.projects[3].title} />
                </figure>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide" >
              <div className="project-post">
                <figure>
                  <img src={Data.projects[4].image} alt={Data.projects[4].title} />
                </figure>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide" >
              <div className="project-post">
                <figure>
                  <img src={Data.projects[5].image} alt={Data.projects[5].title} />
                </figure>
              </div>
            </SwiperSlide>
          <div className="swiper-pagination" />
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectsSlider;
