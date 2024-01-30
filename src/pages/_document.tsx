import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="PT-br">
      <Head>
        <meta
          name="description"
          content="Rafael Santos é um desenvolvedor full stack com mais de 5 
          anos de experiência. Ele é especialista em React, Node.js, Java e TS. 
          Seus projetos incluem sites e aplicativos web. 
          Ele é apaixonado por criar experiências digitais inovadoras que 
          atendam às necessidades dos usuários."
        />
        <meta
          property="og:description"
          content="Descubra a excelência em design e desenvolvimento. 
          Explore meu portfólio digital, onde cada projeto é uma prova do meu 
          comprometimento em transformar ideias em resultados extraordinários."
        />
        <meta property="og:title" content="Rafael Santos" />
        <meta property="og:image" content="/imagem-de-capa.png" />
        <link rel="icon" href="/favicon-32x32.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
