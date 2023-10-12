import Container from "../container/container";
import Title from "../title/title";
import Image from "next/image";
import java from "../../assets/java.png";
import spring from "../../assets/spring.png";
import react from "../../assets/react.png";
import postgres from "../../assets/postgre.png";
import git from "../../assets/git2.png";
import js from "../../assets/js.png";
import ts from "../../assets/ts.png";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

const items = [
  {
    title: "Java",
    description: "",
    img: java,
  },
  {
    title: "Spring",
    description: "",
    img: spring,
  },
  {
    title: "ReactJS",
    description: "",
    img: react,
  },
  {
    title: "Postgres",
    description: "",
    img: postgres,
  },
  {
    title: "Git",
    description: "",
    img: git,
  },
  {
    title: "TS",
    description: "",
    img: ts,
  },
  {
    title: "JS",
    description: "",
    img: js,
  },
];

export default function Skills() {
  return (
    <Container>
      <div
        className="flex flex-col items-center justify-center mb-10"
        id="skills"
      >
        <Title title="Skills" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <section className="pb-[2rem] bg-black">
          <div className="lg:mx-auto max-w-sm md:max-w-7xl">
            <Swiper
              modules={[EffectCoverflow, Pagination, Autoplay]}
              effect={"coverflow"}
              loop={true}
              spaceBetween={10}
              slidesPerView={3}
              pagination={{
                clickable: true,
              }}
              centeredSlides={true}
              grabCursor={true}
              coverflowEffect={{
                rotate: 0,
                slideShadows: false,
              }}
              autoplay={{
                delay: 2000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
              }}
              className="coverflow"
            >
              {items.map((data, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Card className="border max-w-sm border-red-600 rounded hover:animate-pulse">
                      <CardHeader>
                        <CardTitle className="flex justify-center">
                          {data.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex justify-center">
                        <Image src={data.img} width={150} height={150} alt="" />
                      </CardContent>
                    </Card>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>
      </div>
    </Container>
  );
}

{
  /* <div>
<Carrosel />
</div> */
}
// {items.map((data, index) => (
//   <div key={index} className="flex md:w-44 ">

//       <Card className="border border-red-600 rounded hover:animate-pulse">
//        <CardHeader>
//          <CardTitle>{data.title}</CardTitle>
//          <CardDescription>{data.description}</CardDescription>
//        </CardHeader>
//        <CardContent>
//          <Image src={data.img} width={100} height={100} alt="" />
//       </CardContent>
//      </Card>
//    </div>
//  ))}
