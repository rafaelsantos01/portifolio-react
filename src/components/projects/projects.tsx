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
import { useRouter } from "next/navigation";

import aluraTube from "../../assets/aluratube.png";
import portifolio from "../../assets/portifolio.png";
import financeone from "../../assets/financeone.png";
import fk from "../../assets/fksystem.png";
import breve from "../../assets/breve.jpg";

const mockRep = [
  {
    title: "AluraTube",
    description:
      "Esse projeto foi feito em Next.JS, foi conduzido por uma imersao da Alura.Aonde me mostrou muitos pontos importantes e poque trabalhar com Next.Js",
    urlImage: aluraTube,
    linkGit: "https://github.com/rafaelsantos01/AluraTube-React",
    linkLive: "https://alura-tube-react-hssl.vercel.app/",
  },
  {
    title: "Portfólio",
    description:
      "Esse projeto foi desenvolvildo em HTML, JS e LAS. Tem como objetivo principal o estudo das linguagens citadas anteriormente e tambem me deixa a amostra na WEB.",
    urlImage: portifolio,
    linkGit: "https://github.com/rafaelsantos01/portifolioweb",
    linkLive: "https://rafaelsantos01.github.io/",
  },
  {
    title: "Educação Financeira",
    description:
      "Projeto foi um desafio proposto pela StartSE, que tinha como tema Como podemos ajudar os brasileiros a se organizar melhor financeiramente.",
    urlImage: financeone,
    linkGit: "https://github.com/rafaelsantos01/projeto01startse",
    linkLive: "https://financeonebrasil.netlify.app/",
  },
  {
    title: "FkSystem",
    description:
      "Esse foi um projeto feito em Java, tem como função controle de OS, clientes, fornecedores e contas a pagar e receber.Contem um banco de dados em MySQL",
    urlImage: fk,
    linkGit: "https://github.com/rafaelsantos01/br.com.prime.os",
    linkLive: "https://github.com/rafaelsantos01/br.com.prime.os",
  },
  {
    title: "Em breve",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy thpecimen text  since thpecimen book",
    urlImage: breve,
    linkGit: "https://github.com/rafaelsantos01",
    linkLive: "https://github.com/rafaelsantos01",
  },
  {
    title: "Em breve",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy thpecimen text  since thpecimen book",
    urlImage: breve,
    linkGit: "https://github.com/rafaelsantos01",
    linkLive: "https://github.com/rafaelsantos01",
  },
  {
    title: "Em breve",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy thpecimen text  since thpecimen book",
    urlImage: breve,
    linkGit: "https://github.com/rafaelsantos01",
    linkLive: "https://github.com/rafaelsantos01",
  },
];

export default function Projects() {
  const router = useRouter();
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
                        <Card className="border-red-600 rounded max-h-[400px] ">
                          <CardHeader>
                            <Image
                              className="h-32 w-96"
                              src={data.urlImage}
                              alt={""}
                              width={300}
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
                              className="border border-red-600 text-sm rounded select-none  hover:bg-white hover:text-black "
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
