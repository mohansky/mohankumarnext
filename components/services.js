/** SERVICES COMPONENT **/
import React, { useEffect } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import ServicesData from "../data/service.json";
import { Icon } from '@iconify/react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function Services() {
  const subtitle1 = ServicesData.service[0];
  const desc1 = ServicesData.service[3];
  const desc2 = ServicesData.service[4];
  const serviceData = ServicesData.service[5];
  const toolsData = ServicesData.service[6];
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
    <section id="services">
      <Container fluid="md" className="section-top">
        <h3 className="text-center fw-bolder mb-3">
          {/* {ServicesData.service.subtitle1}   */}
          {subtitle1.subtitle1}
        </h3>

        <motion.div className="row" ref={ref}>
          <motion.div animate={animation} className="col-md-8 mx-auto">
            <p className="mb-3">{desc1.description1}</p>

            <Row className="mb-3">
              {toolsData.toolsitems.map((item, index) => {
                return (
                  <Col xs={4} sm={4} md={4} lg={2} key={index} className="border-0 service-icon-container">
                    <Icon className="service-icon" icon={item.icon} color="#2a485c" width="50" />
                  </Col>
                );
              })}
            </Row>

            <p className="mb-3">{desc2.description2}</p>

            <div className="row mb-3">
              {serviceData.serviceitems.map((item, index) => {
                return (
                  <Col xs={4} sm={4} md={4} lg={2} key={index} className="border-0 mb-2" >
                    <Image
                      className="mx-auto services-img"
                      src={item.img}
                      alt={item.name}
                      width={100}
                      height={100}
                    />
                    <div className="text-center">
                      <div className="serviceitem-title text-uppercase">
                        {item.name}
                      </div>
                    </div>
                  </Col>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
