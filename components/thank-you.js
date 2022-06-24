/** CONTACT COMPONENT**/
import { Container, Col} from "react-bootstrap"

export default function ThankYou () {
  return (
    <section id="contact"> 
       <Container className="section-top"> 
        <h3 className="text-center fw-bolder mb-5">
          Get in touch 
        </h3>
        <Col>
          <h4 className="text-center">Thank you for your message.</h4>
        </Col> 
      </Container>  
    </section>
  )
}


