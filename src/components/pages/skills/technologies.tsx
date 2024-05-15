import { cn } from "@/lib/utils";
import Image from "next/image";

interface IRequest {
  skill: any;
  srcImg: any;
  classDiv?: any;
  classImg?: any;
  classTitle?: any;
}

export default function Technologies({
  skill,
  srcImg,
  classDiv,
  classImg,
  classTitle,
}: IRequest) {
  return (
    <div
      className={cn(
        "min-w-[100px]  my-2 md:mr-1 flex flex-col justify-center items-center select-none",
        classDiv
      )}
    >
      <div
        className={cn(
          "block w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] object-contain hover:scale-125 transition-all duration-200 select-none",
          classImg
        )}
      >
        <Image src={srcImg} alt="a" priority width={40} height={40} />
      </div>
      <p
        className={cn(
          " tracking-widest font-semibold text-[.625rem] md:text-xs",
          classTitle
        )}
      >
        {skill}
      </p>
    </div>
  );
}
