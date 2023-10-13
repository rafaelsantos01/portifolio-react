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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

interface IRequest {
  title: string;
  description: string;
  urlImage: string;
}

export default function CardProject(data: IRequest) {
  return (
    <section className="pt-[7rem] pb-[2rem] bg-teal-100">
      <div className="lg:mx-auto max-w-5xl mx-[1.5rem]">
        <h1 className="text-[3rem] font-bold underline mb-[2rem] text-center">
          Cover Flow
        </h1>
        <Swiper
          modules={[EffectCoverflow, Pagination]}
          effect={"coverflow"}
          loop={true}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          centeredSlides={true}
          grabCursor={true}
          coverflowEffect={{
            rotate: 0,
            slideShadows: false,
          }}
          className="coverflow"
        >
          <div>
            <div className="mx-6 my-6">
              <Card className="max-w-xs  border-red-600 rounded">
                <CardHeader>
                  <Image
                    src={data.urlImage}
                    alt={""}
                    width={280}
                    height={300}
                  />
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
          </div>
        </Swiper>
      </div>
    </section>
  );
}
