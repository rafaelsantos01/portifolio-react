import Image from "next/image";
import myPhoto from "../../assets/P_20191226_185840.jpg";
import Container from "../container/container";
import Title from "../title/title";

export default function About() {
  return (
    <Container>
      <div className="justify-centers items-center md:flex my-20" id="about">
        <div className="flex items-center justify-center md:flex-none">
          <Image
            className=" rounded-full w-40 h-40 md:w-[300px] md:h-[300px] border border-red-600"
            src={myPhoto}
            alt={""}
            width={400}
            height={400}
          />
        </div>

        <div className="md:ml-48 flex-row justify-center items-center">
          <div className="mb-10 justify-center items-center flex md:flex-none md:justify-start">
            <Title title="About" />
          </div>
          <div className="select-none">
            <p className="mb-2">
              Olá, meu nome é Rafael, tenho 27 anos e sou natural do Paraná.
              Atualmente, resido em Brusque, SC. Tenho uma sólida experiência
              como técnico de informática, com foco em atendimento ao cliente e
              manutenção de computadores,servidores e redes. Trabalhei por mais
              de 7 anos nesse setor, colaborando com empresas de destaque na
              região. Sempre busquei aprimorar minhas habilidades e adquirir
              novos conhecimentos.
            </p>
            <p className="mb-2">
              Cheguei a um ponto em que a área estava se tornando relativamente
              rotineira. Foi então que decidi encarar novos desafios e me
              empenhei em estudar para me tornar um desenvolvedor Full-Stack,
              dominando tecnologias como React, Next.js, TypeScript, Java,
              Postgres e Git. Atualmente, sou parte da equipe como desenvolvedor
              Full-Stack na Quantus, desde o dia 8 de setembro de 2022.
            </p>
            <p className="mb-2">
              Além de fixar e ampliar meus conhecimentos nas tecnologias que já
              domino, meus planos futuros na área de tecnologia incluem
              aprimorar meu domínio no inglês, acreditando que isso me ajudará a
              crescer ainda mais e alcançar novas oportunidades.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
