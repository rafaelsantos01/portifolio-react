import { Carousel } from "react-responsive-carousel";
import CardProject from "../cardProject/cardProject";
import Container from "../container/container";
import Title from "../title/title";

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
];

export default function Projects() {
  const first4Projects = mockRep.slice(0, 4);
  return (
    <Container>
      <div id="projects">
        <div className="flex justify-center items-center my-14">
          <Title title="Projects" />
        </div>

        <div className=" md:flex items-center justify-center ">
          {first4Projects.map((data, index) => (
            <CardProject key={index} {...data} />
          ))}
        </div>
      </div>
    </Container>
  );
}
