
import Container from "../container/container";
import Title from "../title/title";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Mousewheel,
  Navigation,
  Scrollbar,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

interface IProjects {
  title: string;
  description: string;
  urlImage: string;
  linkGit: string;
  linkLive: string;
}

interface IProjectsProps {
  projects: IProjects[];
}

export default function Projects({ projects }: IProjectsProps) {
  return (
    <Container>
      <div id="projects">
        <div className="flex justify-center items-center">
          <Title title="Projects" />
        </div>

        <div className=" md:flex items-center justify-center ">
          <section className="pt-[7rem] pb-[2rem]">
            <div className="xl:mx-auto max-w-7xl mx-[1.5rem]">
              <Swiper
                modules={[Scrollbar, Mousewheel, Autoplay, Navigation]}
                loop={true}
                pagination={{ clickable: true }}
                centeredSlides={true}
                grabCursor={true}
                navigation={true}
                scrollbar={{ draggable: true }}
                mousewheel={{
                  invert: false,
                }}
                autoplay={{
                  delay: 4000,
                  stopOnLastSlide: false,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  0: {
                    spaceBetween: 10,
                    slidesPerView: 1,
                  },
                  468: {
                    spaceBetween: 10,
                    slidesPerView: 2,
                  },
                  768: {
                    spaceBetween: 15,
                    slidesPerView: 3,
                  },
                  1024: {
                    spaceBetween: 20,
                    slidesPerView: 4,
                  },
                  1280: {
                    spaceBetween: 25,
                    slidesPerView: 4,
                  },
                }}
                className="breakpoint"
              >
                {projects.map((data, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div>
                        <Card className="border-red-600 rounded max-h-[400px]">
                          <CardHeader>
                            <Image
                              className="h-32 w-96"
                              src={data.urlImage}
                              alt={""}
                              width={300}
                              height={300}
                              priority
                            />

                            <CardTitle className="text-red-600 select-none ">
                              {data.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="min-h-[120px]">
                            <div>
                              <CardDescription className="font-medium text-sm select-none text-white">
                                {data.description}
                              </CardDescription>
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between">
                            <Button
                              onClick={() => {
                                window.open(`${data.linkLive}`);
                              }}
                              className="border border-red-600 text-sm rounded select-none  hover:bg-white hover:text-black "
                            >
                              View Live
                            </Button>
                            <Button
                              onClick={() => {
                                window.open(`${data.linkGit}`);
                              }}
                              className="border border-red-600  text-white text-sm rounded select-none  hover:bg-white hover:text-black "
                            >
                              GitHub Repo
                            </Button>
                          </CardFooter>
                        </Card>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
}
