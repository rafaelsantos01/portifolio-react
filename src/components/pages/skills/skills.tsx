import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Container from "@/components/container/container";
import Marquee from "react-fast-marquee";
import Technologies from "./technologies";
import { Element } from "react-scroll";
import ts from "../../../../public/skills/ts2.svg";
import react from "../../../../public/skills/react.svg";
import next from "../../../../public/skills/next.svg";
import nest from "../../../../public/skills/nestJS.svg";
import node from "../../../../public/skills/nodeJS.svg";
import java from "../../../../public/skills/java.svg";
import spring from "../../../../public/skills/spring.svg";
import postgres from "../../../../public/skills/postgres.svg";

interface ISkills {
  id: number;
  title: string;
  img: any;
}

const skills: ISkills[] = [
  {
    id: 2,
    img: ts,
    title: "TypeScript",
  },
  {
    id: 3,
    img: react,
    title: "React",
  },
  {
    id: 4,
    img: next,
    title: "Next",
  },
  {
    id: 5,
    img: nest,
    title: "Nest",
  },
  {
    id: 6,
    img: node,
    title: "Node",
  },
  {
    id: 9,
    img: java,
    title: "Java",
  },
  {
    id: 10,
    img: spring,
    title: "Spring Boot",
  },
  {
    id: 11,
    img: postgres,
    title: "Postgres",
  },
];

export default function Skills() {
  return (
    <Container>
      <Element name="Habilidades">
        <div className=" mt-6 xl:mt-0 py-2 ">
          <div className="">
            <div className="gap-2 py-2 md:flex-center-row md:gap-4 md:py-4">
              <div>
                <Marquee autoFill speed={60} className=" rounded-3xl">
                  {skills.map(({ id, title, img }) => (
                    <Technologies key={id} srcImg={img} skill={title} />
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </Container>
  );
}
