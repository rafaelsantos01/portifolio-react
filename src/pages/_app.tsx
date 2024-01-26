import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Toaster } from "@/components/ui/toaster";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [pageTitle] = useState("Rafael P. Santos");
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}
