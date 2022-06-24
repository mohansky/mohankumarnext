/** PROCESS COMPONENT **/
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import ProcessData from "../data/process.json";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function Process() {
  const subtitle1 = ProcessData.process[0];
  const processData = ProcessData.process[2];
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
    <section id="process">
      <Container className="section-top">
        <h3 className="text-center fw-bolder mb-5">{subtitle1.subtitle1}</h3>
        <div ref={ref} className="process">
          {processData.processitems.map((item, index) => {
            return (
              <motion.div animate={animation} key={index} className="process-item">
                <div className="process-image-box">
                  <div className="process-weight fw-bold">
                    <h5> {item.weight} </h5>
                    {/* mobile view only */}
                    <h5 className="process-title-stack ms-3">{item.name}</h5>
                  </div>
                  <Icon
                    className="mx-auto process-icon"
                    icon={item.icon}
                    width={120}
                  />
                  <h5 className="process-title">{item.name}</h5>
                </div>
                <div className="process-text">
                  {/* mobile view only */}
                  <Icon
                    className="m-auto process-icon-stack"
                    icon={item.icon}
                    width={120}
                  />
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
