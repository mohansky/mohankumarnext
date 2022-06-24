/** WORK COMPONENT **/
import React, { useEffect } from "react";
import {imgblurDataURL} from "../lib/constants";
import Image from "next/image";
import { Container, Card, Button } from "react-bootstrap" 
import Slider from "react-slick" 
import WorkData from "../data/work.json";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';


function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <button 
      className={className} 
      onClick={onClick}/>
      
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button 
      className={className} 
      onClick={onClick}
    />
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
