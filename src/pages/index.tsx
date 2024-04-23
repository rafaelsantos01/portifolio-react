import Head from "next/head";
import Start from "./start/start";
import FloatingButton from "@/components/FloatingButton/floatingButton";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rafael Santos</title>
      </Head>
      <div className="">
        <Start />
        <FloatingButton />
      </div>
    </div>
  );
}
