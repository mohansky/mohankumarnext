/** CONTACT COMPONENT**/
import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const { ref, inView, entry } = useInView({threshold: .2});
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
    <section id="contact"> 
       <Container className="section-top"> 
          <h3 className="text-center fw-bolder mb-5">
            Get in touch 
          </h3>
          <div className="row"  ref={ref}>
          <motion.div className="col-md-10 mx-auto" animate={animation}>
            <Form name="contact" method="POST" data-netlify="true" action="/thankyou#contact" netlify-honeypot="bot-field">
            <p className="hidden">
              <label>
                Dont fill this out if youre human: <input name="bot-field" type="hidden" value="contact" />
                <input name="form-name" type="hidden" value="contact" />
              </label>
            </p>
            <Row>
              <Col xs={12} md={6}>
              <Form.Group className="mb-5" controlId="formName">
                <Form.Label className="fw-bold">Name</Form.Label>
                <Form.Control type="name" name="name" required/> 
              </Form.Group>
              </Col>
              <Col xs={12} md={6}>
              <Form.Group className="mb-5" controlId="formEmail">
                <Form.Label className="fw-bold">E-mail</Form.Label>
                <Form.Control type="email" name="email" required/>
              </Form.Group>
              </Col>
            </Row> 

            
            <Form.Group className="mb-5" controlId="formCheckbox">
            <Row> 
              <Col xs={12} md={4}>
              <Form.Check
                  className="mb-3"
                  type="radio"
                  label="I know exactly what sort of website I need and how it should look."
                  name="option1"
                  id="formRadios1"
                />
                </Col> 
                <Col xs={12} md={4}> 
                <Form.Check
                  className="mb-3"
                  type="radio"
                  label="I'm not sure what is feasible and only have a vague idea of what my website could to look like. "
                  name="option1"
                  id="formRadios2"
                />
                </Col>
                <Col xs={12} md={4}>
                <Form.Check
                  className="mb-3"
                  type="radio"
                  label="I already have a website, but I'm not happy with it and would like some changes."
                  name="option1"
                  id="formRadios3"
                />
                </Col>
              </Row>   
            </Form.Group>
            
            
            <Form.Group className="mb-5" controlId="formMessage">
              <Form.Label className="fw-bold">Message</Form.Label>
              <Form.Control as="textarea" name="message" rows={5} required/>
            </Form.Group> 
              <Button className="float-end btn-form" type="submit">
                SUBMIT
              </Button>
            </Form> 
          </motion.div>          
        </div>
      </Container>   
    </section>
  )
}
