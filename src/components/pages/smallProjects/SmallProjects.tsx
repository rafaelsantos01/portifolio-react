import Container from "@/components/container/container";
import CardProject from "./components/CardProject";

const projects = [
  {
    id: 1,
    title: "Express Notify",
    description:
      "Express Notify: Projeto Next.js para envio de emails via REST ou Kafka. Solução eficaz para notificações, garantindo flexibilidade e escalabilidade na entrega de mensagens.",
    link: "https://github.com/rafaelsantos01/Express-Notify",
    skill: [
      {
        id: "1",
        skill: "Kafka",
        img: "/skills/kafka.svg",
      },
      {
        id: "2",
        skill: "TypeScript",
        img: "/skills/ts2.svg",
      },
      {
        id: "3",
        skill: "TypeScript",
        img: "/skills/nest.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Installment Generator",
    description:
      "Projeto de cobranças via PIX com Mercado Pago: Simplifica o processo de cobrança, permitindo transações rápidas e seguras. Integração eficiente entre PIX e Mercado Pago para facilitar pagamentos.",
    link: "https://github.com/rafaelsantos01/Installment-generator",
    skill: [
      {
        id: "1",
        skill: "TypeScript",
        img: "/skills/ts2.svg",
      },
      {
        id: "3",
        skill: "TypeScript",
        img: "/skills/nest.svg",
      },
    ],
  },
  {
    id: 3,
    title: "LinkLite",
    description:
      "Projeto React para encurtar links: Facilita a conversão de URLs longas em curtas, simplificando o compartilhamento. Interface intuitiva e eficiente, com potencial para incluir recursos avançados, como rastreamento de cliques",
    link: "https://github.com/rafaelsantos01/linkLite-web",
    skill: [
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
    ],
  },
];

export default function SmallProjects() {
  return (
    <Container>
      <div className="flex flex-wrap justify-around ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-zinc-900 rounded-3xl p-6 mt-2 md:mt-0 shadow-lg shadow-red-600"
          >
            <CardProject
              description={project.description}
              title={project.title}
              link={project.link}
              skill={project.skill}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
