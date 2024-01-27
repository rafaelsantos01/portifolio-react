import Image from "next/image";
import boy from "@/assets/boy.png";
import Container from "@/components/container/container";
import { useRouter } from "next/navigation";
import { AiFillPlayCircle } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import Typewriter from "typewriter-effect";

export default function Identifier() {
  const router = useRouter();

  return (
    <Container>
      <div
        className="flex flex-col  md:flex-row justify-between md:mt-60"
        id="home"
      >
        <div className="text-white select-none">
          <h3 className="font-medium text-2xl md:text-4xl">Olá, meu nome é</h3>
          <h1 className="font-semibold text-4xl sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            <span className="text-red-600">Ra</span>
            fael P<span className="text-red-600">. D</span>
            os <span className="text-red-600">Sant</span>
            os
          </h1>

          <h4 className="text-base md:text-sm  lg:text-sm xl:text-xl font-normal">
            <Typewriter
              options={{
                strings: [
                  `"Tudo é uma questão do quanto você deseja e do que está disposto a fazer para conseguir."`,
                  "Desenvolvedor Web",
                  "Full Stack",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </h4>
          <div className="mt-6 md:mt-9">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-7">
              <Button
                onClick={() => {
                  router.push("/#contact");
                }}
                className="border text-base md:text-lg rounded p-4 md:p-6 hover:bg-white hover:text-black"
              >
                Entre em contato
              </Button>
              <Button
                onClick={() => {
                  router.push("/#projects");
                }}
                className="border border-red-500 rounded text-base md:text-lg  md:p-6  text-red-600 hover:animate-pulse hover:underline"
              >
                <div className="flex items-center justify-center space-x-2">
                  <AiFillPlayCircle size={40} />
                  <div>Alguns projetos</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-0 w-[460] h-[460]">
          <Image className="" src={boy} alt="" priority />
        </div>
      </div>
    </Container>
  );
}
