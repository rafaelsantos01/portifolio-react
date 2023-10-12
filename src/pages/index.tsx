import { useEffect, useState } from "react";
import Start from "./start/start";
import FloatingButton from "@/components/FloatingButton/floatingButton";

export default function Home() {
  const [pageTitle, setPageTitle] = useState("Portifólio Web Rafael P. Santos");
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
  return (
    <div>
      <div className="">
        <Start />
        <FloatingButton />
      </div>
    </div>
  );
}
