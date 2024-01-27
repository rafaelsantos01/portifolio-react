import React from "react";
import { Button } from "../ui/button";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

const FloatingButton = () => {
  const router = useRouter();

  return (
    <div className="fixed bottom-4 right-4">
      <Button
        onClick={() => {
          router.push("/#");
        }}
        className=" py-7 px-2 rounded-full shadow-lg hover:animate-bounce "
      >
        <div className="bg-white rounded-full">
          <BsFillArrowUpCircleFill color="#dd1010" size={40} className="" />
        </div>
      </Button>
    </div>
  );
};

export default FloatingButton;
