/** WORK COMPONENT **/
import React, { useEffect } from "react";
import {imgblurDataURL} from "../lib/constants";
import Image from "next/image";
import { Container, Card, Button } from "react-bootstrap" 
import Slider from "react-slick"
import { Icon } from "@iconify/react";
import WorkData from "../data/work.json";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';


function NextArrow(props) {
  const { onClick } = props;
  return (
    <motion.button
        className="slick-next"
        initial={{ y: 0 }}
        whileTap={{ scale: 0.75, opacity: 0.5 }}
        onClick={onClick}
      >
        <Icon icon="ep:arrow-right-bold" width="30" height="30" />
      </motion.button>
      
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <motion.button
        className="slick-prev"
        initial={{ y: 0}}
        whileTap={{ scale: 0.9, opacity: 0.5 }}
        onClick={onClick}
      >
        <Icon icon="ep:arrow-left-bold" width="30" height="30" />
      </motion.button>
  );
}


export default function Work () {
  const subtitle = WorkData.work[0];
  const workItems = WorkData.work[2];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3 
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const { ref, inView, entry } = useInView({threshold: .1});
  const animation = useAnimation();

  useEffect(()=>{
    console.log("use effect", inView, entry );
    if(inView){
      animation.start({
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 2, 
        }
      });
    }
      if(!inView){
        animation.start({opacity: 0})
      }
  }, [inView]);
 
  return (
    <section id="work">
      <Container fluid  ref={ref} className="section-top "> 
        <h3 className="text-center mb-5 fw-bold"> 
          {subtitle.subtitle1}
        </h3> 
        <motion.div animate={animation}>
           
        <Slider className="mx-2 " {...settings}>
          {workItems.workitems.map((item, index) => {
          return(
            <article key={index}> 
              <Card className="border-0 ms-1 p-1">
                <Image
                  className="p-1 mb-1 bg-body" 
                  src={item.img}
                  layout="intrinsic"
                  width={320}
                  height={200}
                  alt={item.title}
                  placeholder="blur"
                  blurDataURL={imgblurDataURL}
                  />
              <Card.Body className="text-center ">  
                    <h6 className="fw-bold work-type">{item.name}</h6>
                    <p>{item.desc}</p>   
                    <a href={item.url} target="_blank">
                      <Button className="btn-work">View</Button> 
                    </a> 
                </Card.Body> 
              </Card>
            </article> 
          )})}  
        </Slider>
        </motion.div>
      </Container>
    </section>
  )
}
