import Image from "next/image";
import boy from "../../assets/boy.png";
import Container from "../container/container";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function Identifier() {
  const router = useRouter();

  function onClick() {
    window.open(process.env.NEXT_PUBLIC_URL_CV, "_blank");
  }

  return (
    <Container>
      <div
        className="flex flex-col  md:flex-row justify-between md:mt-60"
        id="home"
      >
        <div className="text-white select-none">
          <h3 className="font-medium text-2xl md:text-4xl">Olá, meu nome é</h3>
          <h1 className="font-semibold text-4xl sm:text-xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl">
            <span className="text-red-600">Ra</span>
            fael P<span className="text-red-600">. D</span>
            os <span className="text-red-600">Sant</span>
            os
          </h1>
          <h4 className="text-base md:text-sm  lg:text-sm xl:text-xl font-normal">
            Tudo é uma questão do quanto você deseja e do que está disposto a
            fazer para conseguir.
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
                  onClick();
                }}
                className="border rounded text-base md:text-lg p-4 md:p-6 border-red-600 text-red-600 hover:bg-white hover:text-black"
              >
                CV Download
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-0">
          <Image className="" src={boy} alt="" width={460} height={460} />
        </div>
      </div>
    </Container>
  );
}
