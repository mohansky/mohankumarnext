import Container from "./container";
import SectionTitle from "./section-title";
import Form from "./form";

export default function Contact() {
  return (
    <>
      <section id="contact">
        <Container className="py-20">
          <SectionTitle className="">Get in touch</SectionTitle>
          <div className="row">
            <div className="col-md-10 mx-auto">
              <Form />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
