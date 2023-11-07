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
              Meu nome é Rafael, um desenvolvedor Full-Stack com mais de um ano
               de experiência, atualmente residindo em Brusque, SC.
            </p>
            <p className="mb-2">
            Iniciei minha carreira como técnico de informática, acumulando mais de sete anos de experiência em manutenção de computadores, 
            servidores e redes, colaborando com empresas de destaque na região. Essa sólida base preparou o terreno para minha transição para a programação, onde 
            encontrei minha verdadeira paixão.
            Como desenvolvedor Full-Stack, faço parte da equipe da Quantus há mais de um ano. Nessa jornada, contribuí para projetos desafiadores,
            incluindo a implementação de tecnologias como Kafka e Keycloak, além do desenvolvimento de uma arquitetura de microsserviços.
            </p>
            <p className="mb-2">
            Minha abordagem à programação é impulsionada pela curiosidade e pela vontade de enfrentar desafios complexos. Ao longo do tempo, 
            desenvolvi uma série de projetos pessoais, cada um adicionando um novo nível de complexidade à minha habilidade como desenvolvedor. Atualmente, 
            busco a evolução constante e a transição para a posição de desenvolvedor Pleno.
            
            </p>
            <p className="mb-2">
            Estou ansioso para o que o futuro reserva em minha carreira na tecnologia e estou sempre em busca de novas oportunidades de crescimento e aprendizado.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
