import React, { useState, useEffect, useCallback } from "react";
import { client } from "../client";
import HomeCarouselSlide from "./HomeCarouselSlide";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import styled, { StyleSheetManager } from "styled-components";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use({ Navigation });

export default function HomeCarousel() {
  const [isCarouselLoading, setIsCarouselLoading] = useState(false);
  const [carouselSlides, setCarouselSlides] = useState([]);

  const cleanUpCarouselSlides = useCallback((rawData) => {
    const cleanSlides = rawData.map((slide) => {
      const { sys, fields } = slide;
      const { id } = sys;
      const slideTitle = fields.title;
      const slideDescription = fields.description;
      const slideBg = fields.image.fields.file.url;
      const updatedSlide = { id, slideTitle, slideDescription, slideBg };
      return updatedSlide;
    });
    setCarouselSlides(cleanSlides);
  }, []);

  const getCarouselSlides = useCallback(async () => {
    setIsCarouselLoading(true);
    try {
      const response = await client.getEntries({ content_type: "carousel" });
      const responseData = response.items;
      if (responseData) {
        cleanUpCarouselSlides(responseData);
      } else {
        setCarouselSlides(responseData);
      }
      setIsCarouselLoading(false);
    } catch (err) {
      console.error(err);
      setIsCarouselLoading(false);
    }
  }, [cleanUpCarouselSlides]);

  useEffect(() => {
    getCarouselSlides();
  }, [getCarouselSlides]);

  //  console.log(carouselSlides)
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {carouselSlides.map((item) => {
          const { id, slideBg, slideTitle, slideDescription } = item;
          // console.log(item,"hihi")
          return (
            <SwiperSlide key={id}>
              <HomeCarouselSlide
                slideTitle={slideTitle}
                slideDescription={slideDescription}
                slideBg={slideBg}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
