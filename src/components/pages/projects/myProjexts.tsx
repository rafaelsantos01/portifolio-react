import { Element } from "react-scroll";
import Container from "@/components/container/container";
import teste from "../../../../public/projects/gitfind.png";
import nicetry from "../../../../public/projects/niceTry.png";
import Project from "./projects";
import Title from "@/components/title/title";

export default function MyProjects() {
  return (
    <Container>
      <div className="flex items-center justify-center" id="projects">
        <Title title={"Projects"} />
      </div>
      <Element name="Projetos">
        <div className="w-full px-[5%] xl:px-[8%] 2xl:px-[5%]">
          <div className=" w-full mt-[70px] flex flex-col items-center lg:items-start ">
            <Project
              title="Git Info"
              text="É um site que simplifica a busca e visualização de informações de usuários no GitHub, fácil de usar, onde os usuários podem simplesmente digitar o nome de usuário do GitHub que desejam pesquisar. Em segundos, o git info varre a vasta base de dados do GitHub e fornece uma visão detalhada das informações públicas disponíveis sobre o perfil do usuário pesquisado."
              srcImg={teste}
              flexReverse="lg:flex-row"
              itemsPosition="end"
              link="https://gitfinder-nine.vercel.app"
              skill={gitFinder}
            />

            <Project
              title="NiceTry"
              text="Plataforma completa para venda de rifas, permitindo criar, editar e sortear. Os clientes podem se cadastrar, comprar rifas, verificar histórico de compras e editar perfil. A validação ocorre no backend, que também envia e-mails de confirmação. Implementamos o Mercado Pago para transações, incluindo PIX funcional e boleto em desenvolvimento. A verificação periódica de pagamentos é realizada, e toda a documentação está disponível no Swagger. A segurança é assegurada pelo Spring Security, com gestão de tokens, proporcionando um ambiente seguro aos usuários."
              srcImg={nicetry}
              flexReverse="lg:flex-row-reverse"
              itemsPosition="end"
              link="https://rifei-web-xi.vercel.app"
              skill={nicetrySkills}
            />

            {/* <Project
              title=""
              text=""
              srcImg={}
              flexReverse="lg:flex-row"
              itemsPosition="end"
              link=""
              skill={}
            /> */}
          </div>
        </div>
      </Element>
    </Container>
  );
}

const gitFinder = [
  {
    id: "2",
    skill: "React",
    img: "/skills/react.svg",
  },
  {
    id: "1",
    skill: "TypeScript",
    img: "/skills/ts2.svg",
  },
  {
    id: "3",
    skill: "Tailwind",
    img: "/skills/tailwind.svg",
  },
  {
    id: "4",
    skill: "Vite",
    img: "/skills/vite.svg",
  },
];

const nicetrySkills = [
  {
    id: "2",
    skill: "React",
    img: "/skills/react.svg",
  },
  {
    id: "3",
    skill: "Tailwind",
    img: "/skills/tailwind.svg",
  },
  {
    id: "4",
    skill: "Next",
    img: "/skills/next.svg",
  },
  {
    id: "5",
    skill: "Java",
    img: "/skills/java.svg",
  },
  {
    id: "6",
    skill: "Spring",
    img: "/skills/spring.svg",
  },
  {
    id: "7",
    skill: "Postgres",
    img: "/skills/postgres.svg",
  },
];
