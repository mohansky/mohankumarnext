"use client";
import ProcessData from "../data/process.json";
import Container from "./container";
import SectionTitle from "./section-title";
import { Icon } from "@iconify/react"; 

export default function Process() {
  return (
    <>
      <section id="process">
        <Container className="py-20">
          <SectionTitle className="">{ProcessData.subtitle1}</SectionTitle>
          <div className="process grid xl:grid-cols-2 gap-4">
            {ProcessData.processitems.map((item) => {
              return (
                <div
                  key={item.id}
                  className="border-2 border-mkorange overflow-hidden grid grid-cols-3"
                >
                  <div className="p-4">
                    <div >
                      <h5 className="font-bold"> {item.id} </h5>
                      <div className="flex justify-center items-center p-2">
                        <Icon
                          icon={item.icon}
                          width="150"
                          className=" text-center"
                        />
                      </div>
                      <h5 className="font-bold text-center uppercase">
                        {item.name}
                      </h5>
                    </div>
                  </div>
                  <div className="grid col-span-2 place-items-center bg-mkorange text-md dark:text-white text-left p-8">
                    <p>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
