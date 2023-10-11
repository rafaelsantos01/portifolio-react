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
            className=" rounded-full w-40 h-40 md:w-[400px] md:h-[400px] border border-red-600"
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
            Meu nome é Rafael Pereira Dos Santos, sou do PR e atualmente moro em
            Brusque-SC. No momento trabalho na área de TI com hardware, tenho
            mais de 7 anos de experiência na área. Já passei pelas seguintes
            empresas ligadas a tecnologia: PCPRIME e Brusoft, todas atuei como
            técnico e desempenhei meu papel da melhor forma possível. Sempre
            tive interesse em trabalhar com Software, o desenvolvimento em
            específico. Porem minha primeira oportunidade para entrar na área
            foi a do Hardware. Foi uma grande experiência absorvi tudo oque foi
            possível. Em 2021 decidi dar o primeiro passo na área do Software
            .Iniciei um curso Técnico em desenvolvimento de sistemas no Senai,
            esta sendo uma grande experiência ja fiz alguns bootcamps, tenho
            alguns cursos na udemy dentre outros. Estou cada vez mais gostando e
            decidido a mudar de vez de carreira, meu planejamento é ainda este
            ano 2022 conseguir uma oportunidade para começar a atuar como dev.
          </div>
        </div>
      </div>
    </Container>
  );
}
