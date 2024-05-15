import Head from "next/head";
import Start from "./start/start";
import FloatingButton from "@/components/FloatingButton/floatingButton";
import SocialIcons from "@/components/socialIcons/SocialIcons";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rafael Santos</title>
      </Head>
      <div className="">
        <Start />
        <FloatingButton />
        <SocialIcons />
      </div>
    </div>
  );
}
