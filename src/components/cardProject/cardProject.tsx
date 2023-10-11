import Image from "next/image";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface IRequest {
  title: string;
  description: string;
  urlImage: string;
}

export default function CardProject(data: IRequest) {
  return (
    <div className="mx-6 my-6">
      <Card className="max-w-xs  border-red-600 rounded">
        <CardHeader>
          <Image src={data.urlImage} alt={""} width={280} height={300} />
          <CardTitle className="text-red-600 select-none">
            {data.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <CardDescription className="font-medium text-sm select-none">
              {data.description}
            </CardDescription>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button className="border border-red-600 text-lg rounded select-none  hover:bg-white hover:text-black ">
            View Live
          </Button>
          <Button className="border border-red-600 text-lg rounded select-none  hover:bg-white hover:text-black ">
            GitHub Repo
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
