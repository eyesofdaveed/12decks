import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import Link from "next/link";
import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import RelatedProjectsSection from "@components/RelatedProjects";
import CallToActionSection from "@components/sections/CallToAction";

const Estimate = (props) => {
  return (
    <Layouts>
      <PageBanner
        pageTitle={"Project Detail"}
        pageDesc={"our values and vaulted us to the top of our industry."}
      />

      <section className="gap detail-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="pr-dat">
                <div className="heading-style-2">
                  <div className="container p-0">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="data">
                          <span>Project Overview</span>
                          <h2>123123</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToActionSection />
    </Layouts>
  );
};
export default Estimate;
/* 
export async function getStaticPaths() {}

export async function getStaticProps({ params }) {}
 */
