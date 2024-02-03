import { Element } from "react-scroll";
import Container from "@/components/container/container";
import teste from "../../../../public/projects/gitfind.png";
import niceTry from "../../../../public/projects/niceTry.png";
import Project from "./projects";
import Title from "@/components/title/title";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import easyOrder from "../../../../public/projects/easyOrder.png";

export default function MyProjects() {
  const projectsData = [
    {
      title: "Git Info",
      text: "É um site que simplifica a busca e visualização de informações de usuários no GitHub, fácil de usar, onde os usuários podem simplesmente digitar o nome de usuário do GitHub que desejam pesquisar. Em segundos, o git info varre a vasta base de dados do GitHub e fornece uma visão detalhada das informações públicas disponíveis sobre o perfil do usuário pesquisado.",
      srcImg: teste,
      flexReverse: "lg:flex-row",
      itemsPosition: "end",
      link: "https://gitfinder-nine.vercel.app",
      skill: gitFinder,
    },
    {
      title: "NiceTry",
      text: "Plataforma completa para venda de rifas, permitindo criar, editar e sortear. Os clientes podem se cadastrar, comprar rifas, verificar histórico de compras e editar perfil. A validação ocorre no backend, que também envia e-mails de confirmação. Implementamos o Mercado Pago para transações, incluindo PIX funcional e boleto em desenvolvimento. A verificação periódica de pagamentos é realizada, e toda a documentação está disponível no Swagger. A segurança é assegurada pelo Spring Security, com gestão de tokens, proporcionando um ambiente seguro aos usuários.",
      srcImg: niceTry,
      flexReverse: "lg:flex-row-reverse",
      itemsPosition: "end",
      link: "https://rifei-web-xi.vercel.app",
      skill: niceTrySkills,
    },
    {
      title: "Em andamento",
      text: "O projeto inova na gestão de pré-vendas, destacando-se por um catálogo intuitivo, carrinho de compras dinâmico, autenticação segura e relatórios analíticos. Proporciona uma experiência do cliente otimizada, simplificando processos e aumentando a eficiência operacional.",
      srcImg: easyOrder,
      flexReverse: "lg:flex-row",
      itemsPosition: "end",
      link: "",
      skill: easyOrderSkills,
    },
  ];

  const itemsPerPage = 2;
  const pageCount = Math.ceil(projectsData.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected }: any) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProjects = projectsData.slice(startIndex, endIndex);

  return (
    <Container>
      <div className="flex items-center justify-center" id="projects">
        <Title title={"Projects"} />
      </div>
      <Element name="Projetos">
        <div className="w-full px-[5%] xl:px-[8%] 2xl:px-[5%] ">
          <div className=" w-full mt-[70px] flex flex-col items-center lg:items-start ">
            {displayedProjects.map((project, index) => (
              <Project
                key={index}
                title={project.title}
                text={project.text}
                srcImg={project.srcImg}
                flexReverse={project.flexReverse}
                itemsPosition={project.itemsPosition}
                link={project.link}
                skill={project.skill}
              />
            ))}
            {pageCount > 1 && (
              <div className="max-w-screen-md mx-auto">
                <ReactPaginate
                  breakLabel="..."
                  nextLabel="next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  previousLabel="< previous"
                  renderOnZeroPageCount={null}
                />
                {/* <ReactPaginate
                  className="flex items-center justify-center space-x-3"
                  previousLabel={<GoArrowLeft className="text-xl" />}
                  nextLabel={<GoArrowRight className="text-xl" />}
                  breakLabel={<span className="text-xl">...</span>}
                  breakClassName={"inline-block m-1"}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageClick}
                  containerClassName={
                    "list-none flex items-center justify-center"
                  }
                  activeClassName={"bg-red-600 text-white rounded-full "}
                  pageClassName={"inline-block m-1 "}
                  pageLinkClassName={
                    "block w-8 h-8 leading-8 text-center rounded-full flex items-center justify-center border border-red-600 hover:bg-red-600 focus:outline-none focus:border-red-600 focus:border-red-600 focus:ring-opacity-50"
                  }
                  previousClassName={"inline-block m-1"}
                  previousLinkClassName={
                    "block w-8 h-8 leading-8 text-center flex items-center justify-center rounded-full border border-red-600 hover:bg-red-600 focus:outline-none focus:border-red-600 focus:border-red-600 focus:ring-opacity-50"
                  }
                  nextClassName={"inline-block m-1 "}
                  nextLinkClassName={
                    "block w-8 h-8 leading-8 text-center rounded-full flex items-center justify-center border border-red-600 hover:bg-red-600 focus:outline-none focus:border-red-600  focus:border-red-600 focus:ring-opacity-50"
                  }
                /> */}
              </div>
            )}
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

const easyOrderSkills = [
  {
    id: "1",
    skill: "TypeScript",
    img: "/skills/ts2.svg",
  },
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

const niceTrySkills = [
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
