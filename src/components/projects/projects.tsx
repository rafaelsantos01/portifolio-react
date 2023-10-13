import { Carousel } from "react-responsive-carousel";
import CardProject from "../cardProject/cardProject";
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
  EffectCoverflow,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const mockRep = [
  {
    title: "Status Movie",
    description:
      "cripProjeto feito para fins de estudo com a tecnologia Angular.Foi feito durante uma aula do balta.io, foi uma grande experiência foi meu primeiro contato com o framework.tion",
    urlImage: `https://rafaelsantos01.github.io/assets/icons/statusmovie.png`,
  },
  {
    title: "PORTFÓLIO",
    description:
      "Esse projeto foi desenvolvildo em HTML, JS e LAS. Tem como objetivo principal o estudo das linguagens citadas anteriormente e tambem me deixa a amostra na WEB.",
    urlImage: `https://rafaelsantos01.github.io/assets/icons/statusmovie.png`,
  },
  {
    title: "Status Movie",
    description:
      "Esse projeto foi desenvolvildo em HTML, JS e LAS. Tem como objetivo principal o estudo das linguagens citadas anteriormente e tambem me deixa a amostra na WEB.",
    urlImage: `https://rafaelsantos01.github.io/assets/icons/statusmovie.png`,
  },
  {
    title: "Status Movie",
    description:
      "Esse projeto foi desenvolvildo em HTML, JS e LAS. Tem como objetivo principal o estudo das linguagens citadas anteriormente e tambem me deixa a amostra na WEB.",
    urlImage: `https://rafaelsantos01.github.io/assets/icons/statusmovie.png`,
  },
  {
    title: "Status Movie",
    description:
      "Esse projeto foi desenvolvildo em HTML, JS e LAS. Tem como objetivo principal o estudo das linguagens citadas anteriormente e tambem me deixa a amostra na WEB.",
    urlImage: `https://rafaelsantos01.github.io/assets/icons/statusmovie.png`,
  },
  {
    title: "Status Movie",
    description:
      "Esse projeto foi desenvolvildo em HTML, JS e LAS. Tem como objetivo principal o estudo das linguagens citadas anteriormente e tambem me deixa a amostra na WEB.",
    urlImage: `https://rafaelsantos01.github.io/assets/icons/statusmovie.png`,
  },
  {
    title: "Status Movie",
    description:
      "Esse projeto foi desenvolvildo em HTML, JS e LAS. Tem como objetivo principal o estudo das linguagens citadas anteriormente e tambem me deixa a amostra na WEB.",
    urlImage: `https://rafaelsantos01.github.io/assets/icons/statusmovie.png`,
  },
  {
    title: "Status Movie",
    description:
      "Esse projeto foi desenvolvildo em HTML, JS e LAS. Tem como objetivo principal o estudo das linguagens citadas anteriormente e tambem me deixa a amostra na WEB.",
    urlImage: `https://rafaelsantos01.github.io/assets/icons/statusmovie.png`,
  },
  {
    title: "Status Movie",
    description:
      "Esse projeto foi desenvolvildo em HTML, JS e LAS. Tem como objetivo principal o estudo das linguagens citadas anteriormente e tambem me deixa a amostra na WEB.",
    urlImage: `https://rafaelsantos01.github.io/assets/icons/statusmovie.png`,
  },
  {
    title: "Status Movie",
    description:
      "Esse projeto foi desenvolvildo em HTML, JS e LAS. Tem como objetivo principal o estudo das linguagens citadas anteriormente e tambem me deixa a amostra na WEB.",
    urlImage: `https://rafaelsantos01.github.io/assets/icons/statusmovie.png`,
  },
  {
    title: "Status Movie",
    description:
      "Esse projeto foi desenvolvildo em HTML, JS e LAS. Tem como objetivo principal o estudo das linguagens citadas anteriormente e tambem me deixa a amostra na WEB.",
    urlImage: `https://rafaelsantos01.github.io/assets/icons/statusmovie.png`,
  },
  {
    title: "Status Movie",
    description:
      "Esse projeto foi desenvolvildo em HTML, JS e LAS. Tem como objetivo principal o estudo das linguagens citadas anteriormente e tambem me deixa a amostra na WEB.",
    urlImage: `https://rafaelsantos01.github.io/assets/icons/statusmovie.png`,
  },
  {
    title: "Status Movie",
    description:
      "Esse projeto foi desenvolvildo em HTML, JS e LAS. Tem como objetivo principal o estudo das linguagens citadas anteriormente e tambem me deixa a amostra na WEB.",
    urlImage: `https://rafaelsantos01.github.io/assets/icons/statusmovie.png`,
  },
  {
    title: "Status Movie",
    description:
      "Esse projeto foi desenvolvildo em HTML, JS e LAS. Tem como objetivo principal o estudo das linguagens citadas anteriormente e tambem me deixa a amostra na WEB.",
    urlImage: `https://rafaelsantos01.github.io/assets/icons/statusmovie.png`,
  },
  {
    title: "Status Movie",
    description:
      "Esse projeto foi desenvolvildo em HTML, JS e LAS. Tem como objetivo principal o estudo das linguagens citadas anteriormente e tambem me deixa a amostra na WEB.",
    urlImage: `https://rafaelsantos01.github.io/assets/icons/statusmovie.png`,
  },
  {
    title: "Status Movie",
    description:
      "Esse projeto foi desenvolvildo em HTML, JS e LAS. Tem como objetivo principal o estudo das linguagens citadas anteriormente e tambem me deixa a amostra na WEB.",
    urlImage: `https://rafaelsantos01.github.io/assets/icons/statusmovie.png`,
  },
];

export default function Projects() {
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
                {mockRep.map((data, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div>
                        <Card className="border-red-600 rounded">
                          <CardHeader>
                            <Image
                              src={data.urlImage}
                              alt={""}
                              width={280}
                              height={300}
                            />
                            <CardTitle className="text-red-600 select-none">
                              {data.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div>
                              <CardDescription className="font-medium text-sm select-none">
                                {data.description}
                              </CardDescription>
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between">
                            <Button className="border border-red-600 text-sm rounded select-none  hover:bg-white hover:text-black ">
                              View Live
                            </Button>
                            <Button className="border border-red-600 text-sm rounded select-none  hover:bg-white hover:text-black ">
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
