import SectionTitle from "./section-title";
import WorkData from "../data/work.json";
import MySwiper from "./swiper";

export default function Work() {
  return (
    <>
      <section id="work">
        <div className="py-20">
          <SectionTitle className="">{WorkData.subtitle1}</SectionTitle>
          <div>
            <MySwiper />
          </div>
        </div>
      </section>
    </>
  );
}
