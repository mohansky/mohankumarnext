"use client";
import { Icon } from "@iconify/react";
import Container from "./container";
import SectionTitle from "./section-title";
import ServicesData from "../data/service.json";

export default function Services() {
  return (
    <>
      <section id="services">
        <Container className="py-20">
          <SectionTitle className="">{ServicesData.subtitle1}</SectionTitle>
          <div className="mx-auto">
            {/* <p class="mb-3">{ServicesData.description1}</p>
            <p class="mb-3">{ServicesData.description2}</p> */}
            <p className="text-xl columns-2 gap-8 text-justify mb-10">
              Welcome to my website! I&apos;m a passionate web developer who
              thrives on pushing the boundaries of technology and design. With a
              keen eye for aesthetics and a deep understanding of the latest
              trends in web development, I specialize in crafting digital
              experiences that seamlessly blend creativity and innovation.
              <br className="mb-3" />
              In my projects, I leverage cutting-edge technologies like Next.js
              and Astro to build lightning-fast and highly interactive websites.
              These frameworks not only enhance performance but also enable me
              to create dynamic user interfaces that engage visitors and provide
              them with a truly immersive journey. My commitment to staying
              ahead of the curve in the tech world allows me to deliver websites
              that are not only visually captivating but also offer a smooth and
              responsive user experience.
              <br className="mb-3" />
              Beyond my technical prowess, I firmly believe that design is at
              the heart of exceptional web development. Every line of code I
              write is infused with a sense of aesthetics, ensuring that your
              website not only functions flawlessly but also captivates with its
              visual appeal. From sleek and modern layouts to attention-grabbing
              animations, I take pride in creating designs that leave a lasting
              impression. If you&apos;re ready to embark on a digital journey
              that combines the latest technology with striking design, I&apos;m
              here to turn your ideas into reality.
              {/* <br className="mb-3" />
              My toolset often includes static site generators like Next.js and
              Astro.js. These frameworks allow me to build websites
              efficiently, resulting in faster load times and improved
              performance. By utilizing such technologies, I ensure that your
              website remains responsive, adapting seamlessly to various devices
              and screen sizes, be it a desktop, tablet, or smartphone.
              <br className="mb-3" />
              Collaboration is key in delivering outstanding websites. Depending
              on the complexity of the project, I may work independently or
              alongside other professionals. This may involve partnering with
              copywriters to craft compelling and engaging content, graphic
              designers to create eye-catching visuals, and back-end developers
              to integrate the front-end with the server-side functionalities.
              <br className="mb-3" />
              No matter the scenario, you can be confident that the website I
              develop will meet high standards across various aspects. First and
              foremost, responsiveness is a priority. Your website will look and
              perform flawlessly on different browsers and devices, ensuring a
              consistent user experience.
              <br className="mb-3" />
              Compatibility is equally important. I ensure that the website is
              compatible with older browsers and still functions optimally,
              providing access to a broader audience. Additionally, the
              performance of the website is optimized, reducing loading times
              and minimizing any frustrating delays for users.
              <br className="mb-3" />
              Accessibility is a fundamental consideration. I follow best
              practices and adhere to web accessibility guidelines, ensuring
              that individuals with disabilities can access and navigate your
              website with ease.
              <br className="mb-3" />
              Security is always at the forefront of my mind during development.
              I implement robust security measures to protect your website and
              its users from potential threats, assuring a safe browsing
              experience.
              <br className="mb-3" />
              Finally, usability is key to the success of any website. I design
              intuitive user interfaces and implement user-friendly features,
              making it easy for visitors to find what they need and engage with
              your content effortlessly.
              <br className="mb-3" />
              In summary, as a front-end developer specializing in HTML, CSS,
              and JavaScript, I work diligently to create stunning and
              interactive websites. Whether it&apos;s a simple personal project or a
              complex business platform, I&apos;m committed to delivering top-notch
              results that prioritize responsiveness, compatibility,
              performance, accessibility, security, and usability, ensuring that
              your online presence stands out and leaves a positive impression
              on every visitor. */}
            </p>
            <p className="text-xl text-center mb-10">
             Some of the tool in my toolkit.
            </p>
            <div className="my-8 flex flex-wrap justify-center gap-8">
              {ServicesData.toolsitems.map((data) => (
                <Icon
                  key={data.name}
                  icon={data.icon}
                  width="50"
                  title={data.name}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
