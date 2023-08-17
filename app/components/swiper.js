"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Workdata from "../data/work.json";
import Button from "./button";

export default function MySwiper() {
  return (
    <Swiper
      className="mySwiper w-[95%] "
      modules={[Autoplay, Keyboard, Navigation, A11y]}
      spaceBetween={1}
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      loop={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      keyboard={{
        enabled: true,
      }}
      navigation={{
        prevEl: ".prev",
        nextEl: ".next",
      }}
      // onSlideChange={() => console.log("slide change")}
    >
      {Workdata.workitems.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <div className="border-0 mx-auto ">
              <Image
                className="p-1 mb-4 mx-auto"
                src={item.img}
                width={480}
                height={360}
                alt={item.name}
              />
              <div className="text-center ">
                <h6 className="font-bold uppercase work-type">{item.name}</h6>
                <p className="mb-4">{item.desc}</p>
                <a href={item.url} target="_blank">
                  <Button className="py-2 px-8"> View </Button>
                </a>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
      <div className="prev text-mkorange absolute top-1/3 right-0 z-30">
        <Icon icon="ic:round-navigate-next" width="50" />
      </div>
      <div className="next text-mkorange absolute top-1/3 left-0 z-30">
        <Icon icon="ic:round-navigate-before" width="50" />
      </div>
    </Swiper>
  );
}
