import React from "react";
import { review_1, review_2, review_3 } from "../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Reviews = () => {
  return (
    <section id={`reviews`} className={`section is-small`}>
      <div className={`container`}>
        <h1
          className={`title heading__text mb-5 is-size-1-desktop is-size-2-mobile`}>
          Reviews
        </h1>
      </div>
      <div className={`container`}>
        <div className={`columns`}>
          <div
            className={`column has-text-centered is-full-mobile is-7-desktop is-offset-one-fifth-desktop`}>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper">
              <SwiperSlide>
                <div className={`box`}>
                  <p>
                    <span class="font-bold has-text-primary is-size-5">“</span>
                    Modupe offers a powerful service that every business owner must key into. And if you get an issue, her support will help out.
                    <span class="font-bold has-text-primary is-size-5">”</span>
                  </p>
                  <div class="is-flex is-flex-direction-column mt-5 ml-2 is-align-content-space-between">
                    <span class="font-semibold has-text-weight-bold">
                      Abina
                    </span>
                    <span class="is-size-7 is-flex is-flex-direction-column is-align-items-center">
                      Ghana
                    </span>
                  </div>
                  <figure
                    className={`image mt-4 mb-4 is-64x64 is-inline-block`}>
                    <img alt="profil" src={review_1} className={`is-rounded`} />
                  </figure>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`box`}>
                  <p>
                    <span class="font-bold has-text-primary is-size-5">“</span>
                    Our inbound leads have grown so dramatically from our website and search optimization that we have hired a dedicated sales team that now only works on inbound leads.
                    <span class="font-bold has-text-primary is-size-5">”</span>
                  </p>
                  <div class="is-flex is-flex-direction-column mt-5 ml-2 is-align-content-space-between">
                    <span class="font-semibold has-text-weight-bold">
                      Steve
                    </span>
                    <span class="is-size-7 is-flex is-flex-direction-column is-align-items-center">
                      South Africa
                    </span>
                  </div>
                  <figure className={`image mt-5 mb-4 is-64x64 is-inline-block`}>
                    <img alt="profil" src={review_2} className={`is-rounded`} />
                  </figure>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`box`}>
                  <p>
                    <span class="font-bold has-text-primary is-size-5">“</span>
                    Our takeout just went through the roof because we could be taking five orders at one time, instead of just one order at a time.
                    <span class="font-bold has-text-primary is-size-5">”</span>
                  </p>
                  <div class="is-flex is-flex-direction-column mt-5 ml-2 is-align-content-space-between">
                    <span class="font-semibold has-text-weight-bold">
                     Chris
                    </span>
                    <span class="is-size-7 is-flex is-flex-direction-column is-align-items-center">
                      United Kingdom
                    </span>
                  </div>
                  <figure className={`image mt-5 mb-4 is-64x64 is-inline-block`}>
                    <img alt="profil" src={review_3} className={`is-rounded`} />
                  </figure>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
