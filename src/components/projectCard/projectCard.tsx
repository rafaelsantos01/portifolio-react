import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { FiExternalLink } from 'react-icons/fi';

interface IProjects {
  data:{
    title: string;
    description: string;
    urlImage: string;
    linkGit: string;
  }
}


export default function ProjectCard ({ data }:IProjects) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="" key={1} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Card className="border-red-600 rounded max-w-[450px] relative">
        <CardHeader className="">
          <div className=" justify-center items-center space-y-10">
            <div className="">
              <Image
                className="h-80"
                src={data.urlImage}
                alt=""
                width={800}
                height={800}
                priority
              />
            </div>

            <div className="">
              <CardTitle className="text-red-600 select-none text-center">
                  {data.title}
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        {isHovered && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-black from-50% to-red-600">
            <CardContent>
              <div>
                <CardDescription className="font-medium text-sm select-none text-white">
                  {data.description}
                </CardDescription>
              </div>
            </CardContent>
            <div className="flex justify-end">
              <Button
                onClick={() => {
                  window.open(`${data.linkGit}`);
                }}
                className="border rounded-full border-red-600 text-white text-sm select-none hover:bg-red-600 hover:text-white"
              >
                <FiExternalLink size={23} />
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

