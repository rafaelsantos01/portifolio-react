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
        className=" py-7 px-2 rounded-full shadow-lg hover:animate-pulse"
      >
        <BsFillArrowUpCircleFill color="#dd1010" size={38} />
      </Button>
    </div>
  );
};

export default FloatingButton;
