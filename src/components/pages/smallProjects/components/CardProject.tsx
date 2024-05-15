import { FaRegShareFromSquare } from "react-icons/fa6";
import { RiFilePaper2Line } from "react-icons/ri";
import Technologies from "../../skills/technologies";

interface CardProjectProps {
  title: string;
  description: string;
  link: string;
  skill: {
    id: string;
    skill: string;
    img: string;
  }[];
}

export default function CardProject({
  title,
  description,
  link,
  skill,
}: CardProjectProps) {
  return (
    <div className="">
      <div className="space-y-4 md:max-w-96">
        <div className="flex justify-between">
          <div className="text-red-600">
            <RiFilePaper2Line size={28} />
          </div>
          <a
            className=" p-0"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaRegShareFromSquare size={22} />
          </a>
        </div>

        <div className="flex items-center ">
          <h2 className="text-[30px] text-white-100 whitespace-nowrap">
            {title}
          </h2>
        </div>

        <div className="w-full">
          <p>{description}</p>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-start min-w-6">
          {skill.map(({ id, skill, img }) => (
            <Technologies
              key={id}
              srcImg={img}
              skill={skill}
              classDiv={"min-w-20 "}
              classImg={"lg:w-6 lg:h-6 "}
              classTitle={"font-light "}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
