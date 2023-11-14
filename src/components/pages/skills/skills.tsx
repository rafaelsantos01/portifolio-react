
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import Container from "@/components/container/container";
import Title from "@/components/title/title";


interface ISkills {
  title:string,
  img:string
}

interface ISkillsProps {
  skills: ISkills[];
}

export default function Skills({skills}:ISkillsProps) {

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
          <div className="max-w-sm   lg:max-w-2xl xl:max-w-6xl">
            <Swiper
              modules={[EffectCoverflow, Autoplay]}
              effect={"coverflow"}
              loop={true}
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
              breakpoints={{
                0: {
                  spaceBetween: 10,
                  slidesPerView: 3,
                },
                1024: {
                  spaceBetween: 10,
                  slidesPerView: 4,
                },
                1280: {
                  spaceBetween: 20,
                  slidesPerView: 4,
                },
              }}
              className="coverflow"
            >
              {skills.map((data, index) => {
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
